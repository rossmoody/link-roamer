import { http } from '@google-cloud/functions-framework'
import fetch, { Response } from 'node-fetch'
import { LinkStatus } from '../types'

const fetchWithHeadMethod = (link: string) => fetch(link, { method: 'HEAD' })

/**
 * Sometimes servers don't like HEAD method requests.
 * If GET is accepted, this function will try that.
 */
const retryRequestWithGetMethod = (response: Response) => {
  if (response.status === 405) {
    logHeaders(response)
    const allowedMethods = response.headers.get('allow') ?? ''
    if (allowedMethods.includes('GET')) return fetch(response.url)
  }

  return response
}

const linkStatus = (response: Response): LinkStatus => ({
  redirected: response.redirected,
  ok: response.ok,
  status: response.status,
  url: response.url,
  statusText: response.statusText,
  type: response.type,
})

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)

  const responses = await Promise.all(
    links.map(async (href) => {
      const headResponse = await fetchWithHeadMethod(href)
      const getResponse = await retryRequestWithGetMethod(headResponse)
      return linkStatus(getResponse)
    }),
  ).catch(() => [{}] as Response[])

  response.send(JSON.stringify(responses))
})

/**
 * Development helper function to log failed request
 * headers to the console to understand why
 */
function logHeaders(response: Response) {
  const headers = []
  for (const pair of response.headers.entries()) headers.push(pair)
  console.log(headers)
}
