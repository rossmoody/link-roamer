import { http } from '@google-cloud/functions-framework'
import fetch, { Response } from 'node-fetch'
import { LinkStatus } from '../types'

const getHeaders = (response: Response) => {
  const entries = Array.from(response.headers.entries())
  return entries.reduce((accumulator, [key, value]) => {
    accumulator[key] = value
    return accumulator
  }, {} as Record<string, string>)
}

const linkStatus = (response: Response): LinkStatus => ({
  headers: getHeaders(response),
  ok: response.ok,
  redirected: response.redirected,
  status: response.status,
  statusText: response.statusText,
  type: response.type,
  url: response.url,
})

const getStatus = async (url: string, retries: number) => {
  const controller = new globalThis.AbortController()
  const timeout = setTimeout(() => {
    controller.abort()
  }, 4000)

  controller.signal.addEventListener('abort', () =>
    console.log('Failed: ', '\n', url, '\n', 'Retries: ', '\n', retries, '\n'),
  )

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (response.status === 404 && retries >= 0) {
      getStatus(url, retries - 1)
    }

    return linkStatus(response)
  } catch (error) {
    if (retries >= 0) {
      getStatus(url, retries - 1)
    }

    return {} as LinkStatus
  }
}

const resolveSettledPromises = (promise: PromiseSettledResult<LinkStatus>) => {
  switch (promise.status) {
    case 'fulfilled':
      return promise.value

    case 'rejected':
      return {}
  }
}

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)

  const results = (
    await Promise.allSettled(links.map((link) => getStatus(link, 3)))
  ).map(resolveSettledPromises)

  response.send(JSON.stringify(results))
})
