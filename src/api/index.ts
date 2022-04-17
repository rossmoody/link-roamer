import { http } from '@google-cloud/functions-framework'
import fetch, { Response } from 'node-fetch'
import { LinkStatus } from '../types'

const getHeaders = (response: Response) => {
  const headers = {} as Record<string, string>
  for (const [key, value] of response.headers.entries()) {
    headers[key] = value
  }
  return headers
}

const linkStatus = (response: Response): LinkStatus => ({
  redirected: response.redirected,
  ok: response.ok,
  status: response.status,
  url: response.url,
  statusText: response.statusText,
  type: response.type,
  headers: getHeaders(response),
})

const getStatus = async (url: string, retries = 5) => {
  // const { signal, abort } = new AbortController()
  // setTimeout(() => abort(), 5000)

  try {
    const response = await fetch(url)

    if (response.ok) {
      return linkStatus(response)
    }

    if (response.status === 404 && retries > 0) {
      getStatus(url, retries - 1)
    }

    return response
  } catch (error: any) {
    return {} as LinkStatus
  }
}

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)

  const responses = await Promise.all(
    links.map((href) => getStatus(href)),
  ).catch(() => [{}] as Response[])

  response.send(JSON.stringify(responses))
})
