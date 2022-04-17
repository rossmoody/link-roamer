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

const getStatus = async (url: string) => {
  try {
    const response = await fetch(url)
    return linkStatus(response)
  } catch (error) {
    console.log('Error => ', error)
    return {} as LinkStatus
  }
}

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)
  const responses = await Promise.all(links.map(getStatus))
  response.send(JSON.stringify(responses))
})
