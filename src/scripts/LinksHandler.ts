import { CategorizedLinks } from '../types'
import Link from './Link'

class LinksHandler {
  public links: Link[]

  constructor(links: Link[]) {
    this.links = links.sort((linkA, linkB) =>
      linkA.href.length > linkB.href.length ? 0 : -1
    )
  }

  /**
   * Creates a Record of Links categorized by available domain names. Returns
   * a Record of Links with keys as domains.
   */
  static categorizeByDomain(links: Link[]) {
    return links.reduce((accum, link: Link) => {
      const { domain } = link
      if (!accum[domain]) accum[domain] = []
      accum[domain].push(link)
      return accum
    }, {} as CategorizedLinks)
  }

  /**
   * Creates a Record of class instance's hrefs categorized by available domain names.
   */
  get categorizedByDomain() {
    return LinksHandler.categorizeByDomain(this.links)
  }

  /**
   * Filter links to include only those with fragments as a Link[]
   */
  get fragmentLinks() {
    return this.links.filter((link) => Boolean(link.href.includes('#')))
  }

  /**
   * Return all the links that aren't status ok as a Link[]
   */
  get notOkLinks() {
    return this.links.filter(
      (link) => !link.status.ok && link.status.status !== 999
    )
  }

  /**
   * Return all the links that aren't redirected as a Link[]
   */
  get redirectedLinks() {
    return this.links.filter((link) => link.status.redirected)
  }

  /**
   * Return all the links that aren't redirected as a Link[]
   */
  get httpLinks() {
    return this.links.filter((link) => link.protocol === 'http:')
  }

  /**
   * Return all the links that aren't redirected as a Link[]
   */
  get fourOhFourLinks() {
    return this.links.filter((link) => link.status.status === 404)
  }
}

export default LinksHandler
