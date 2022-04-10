import { http } from '@google-cloud/functions-framework'
import fetch, { Response } from 'node-fetch'

const fetchWithHeadMethod = (link: string) => fetch(link, { method: 'HEAD' })

/**
 * Sometimes servers don't like HEAD method requests.
 * If GET is accepted, this function will try that.
 */
const retryRequestWithGetMethod = (response: Response) => {
  if (response.status === 405) {
    const allowedMethods = response.headers.get('allow') ?? ''
    if (allowedMethods.includes('GET')) return fetch(response.url)
  }
  return response
}

const returnRelevantProperties = (response: Response) => ({
  redirected: response.redirected,
  ok: response.ok,
  status: response.status,
  url: response.url,
  statusText: response.statusText,
  type: response.type,
})

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)
  const initialResponses = await Promise.all(
    links.map(fetchWithHeadMethod),
  ).catch(() => [{}] as Response[])

  const responses = (
    await Promise.all(initialResponses.map(retryRequestWithGetMethod)).catch(
      () => [{}] as Response[],
    )
  ).map(returnRelevantProperties)

  response.send(JSON.stringify(responses))
})
