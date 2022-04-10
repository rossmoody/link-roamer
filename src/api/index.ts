import { http } from '@google-cloud/functions-framework'
import fetch from 'node-fetch'

http('fetchStatuses', async (request, response) => {
  const links: string[] = JSON.parse(request.body)

  const responses = await Promise.all(
    links.map(async (link: string) => fetch(link, { method: 'HEAD' })),
  ).catch(() => [{}] as Response[])

  const result = responses.map((response) => ({
    status: response.status,
    url: response.url,
    statusText: response.statusText,
  }))

  response.send(JSON.stringify(result))
})
