import Link from './Link'
import LinksHandler from './LinksHandler'

function dataDebugger(links: Link[]) {
  const lp = new LinksHandler(links)
  const invalid = links.filter((link) => !link.status.validResponse)

  console.log(
    'Redirected links:',
    lp.redirectedLinks,
    lp.redirectedLinks.length
  )
  console.log('Links with reponse status info:', links, links.length)
  console.log('Links that are not OK:', lp.notOkLinks, lp.notOkLinks.length)
  console.log('Empty link status:', invalid, invalid.length)
}

export default dataDebugger
