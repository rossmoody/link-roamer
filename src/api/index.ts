import { http } from '@google-cloud/functions-framework'
import fetch from 'node-fetch'

http('fetchStatuses', (request: any, res: any) => {
  const links = JSON.parse(request.body)

  console.log(links, request)

  Promise.all(
    links.map(async (link: any) => {
      const response = await fetch(link, { method: 'HEAD' })

      return {
        status: response.status,
        url: response.url,
        statusText: response.statusText,
      }
    }),
  ).then((result) => {
    res.send(JSON.stringify(result))
  })
})
