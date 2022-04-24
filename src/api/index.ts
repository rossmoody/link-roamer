import { http } from '@google-cloud/functions-framework'
import fetch, { AbortError, RequestInit } from 'node-fetch'
import UserAgent from 'user-agents'
import LinkStatus from './LinkStatus'

const getStatus = (link: string) => {
  async function fetchStatus(retries: number, method = 'HEAD') {
    const userAgent = new UserAgent()
    const controller = new globalThis.AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 12000)

    const options: RequestInit = {
      headers: { 'User-Agent': userAgent.toString() },
      method,
      signal: controller.signal,
      size: 0,
    }

    try {
      const response = await fetch(link, options)

      clearTimeout(timeout)

      if (response.status === 405 && retries >= 0) {
        fetchStatus(retries - 1, 'GET')
      }

      if (response.status === 404 && retries >= 0) {
        fetchStatus(retries - 1, method)
      }

      return new LinkStatus(link, response)
    } catch (error) {
      if (error instanceof AbortError) {
        return new LinkStatus(link)
      }

      if (retries >= 0) {
        fetchStatus(retries - 1, method)
      }

      return new LinkStatus(link)
    }
  }

  return fetchStatus(5)
}

const resolveSettledPromises = (promise: PromiseSettledResult<LinkStatus>) => {
  switch (promise.status) {
    case 'fulfilled':
      return promise.value

    case 'rejected':
      return new LinkStatus('')
  }
}

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)
  const results = (await Promise.allSettled(links.map(getStatus))).map(
    resolveSettledPromises
  )
  response.send(JSON.stringify(results))
})
