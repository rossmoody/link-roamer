import { http } from '@google-cloud/functions-framework'
import blc from 'broken-link-checker'
import { LinkStatus } from '../types'

http('fetchStatuses', async (request, response) => {
  const processed: LinkStatus[] = []
  const links: string[] = JSON.parse(request.body)
  const urlChecker = new blc.UrlChecker(
    {},
    {
      link: (result) => processed.push(result),
      end: () => response.send(JSON.stringify(processed)),
    },
  )

  links.forEach((link) => urlChecker.enqueue(link, null, null))
})
