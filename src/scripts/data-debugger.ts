import Link from './Link'
import LinksHandler from './LinksHandler'

function dataDebugger(links: Link[]) {
  const lp = new LinksHandler(links)
  const invalid = links.filter((link) => !link.status.validResponse)

  console.log('Redirected:', lp.redirectedLinks, lp.redirectedLinks.length)
  console.log('After status fetch:', links, links.length)
  console.log('Not ok:', lp.notOkLinks, lp.notOkLinks.length)
  console.log('Empty link status:', invalid, invalid.length)
}

export default dataDebugger
