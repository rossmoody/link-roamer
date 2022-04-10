import { http } from '@google-cloud/functions-framework'
import fetch from 'node-fetch'

http('fetchStatuses', (request, response) => {
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
    response.send(JSON.stringify(result))
  })
})
