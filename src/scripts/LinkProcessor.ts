import Link from './Link'
import { CategorizedLinks } from '../types'

const FILTER_URL = 'https://www.filterthisurlout-1-2-3-4-5.com'

export class LinkProcessor {
  /**
   * Creates a Link object which extends the URL class.
   * If it fails, it returns a fake url with the key 'filtermeout' for
   * targeting later. URL creation fails pretty often.
   */
  createLinks(href: string) {
    try {
      return new Link(href)
    } catch (e) {
      console.error(e)
      return new Link(FILTER_URL)
    }
  }

  /**
   * Filters a list of givens links to only include ones with HTTP.
   */
  filterHttp(link: Link) {
    return link.protocol.includes('http')
  }

  /**
   * Filter the links with 'filtermeout' key
   */
  filterKeyString(link: Link) {
    return !link.href.includes(FILTER_URL)
  }

  /**
   * Creates a Record of Links categorized by available domain names
   */
  categorizeByDomain(links: Link[]) {
    return links.reduce((accum, link: Link) => {
      const { domain } = link
      if (!accum[domain]) accum[domain] = []
      accum[domain].push(link)
      return accum
    }, {} as Record<string, Link[]>)
  }

  /**
   * Filter links to include only those with fragments
   */
  filterFragmentLinks(links: Link[]) {
    const filtered = links.filter((link) => Boolean(link.href.includes('#')))
    return this.categorizeByDomain(filtered)
  }

  /**
   * Filter links to include only those with a status code of 404
   */
  filterBrokenLinks(links: Link[]) {
    const filtered = links.filter((link) => link.requestStatus === 404)
    return this.categorizeByDomain(filtered)
  }

  /**
   * Sorts a given set of links by length starting with the shortest first.
   */
  sortByHrefLength(linkA: Link, linkB: Link) {
    return linkA.href.length > linkB.href.length ? 0 : -1
  }

  /**
   * Returns the amount of links in a given Record of categorized Links.
   */
  getCategorizedLinksQty(categorizedLinks: CategorizedLinks) {
    let counter = 0
    for (const links of Object.values(categorizedLinks)) {
      counter += links.length
    }
    return counter
  }

  containsHttp(links: Link[]) {
    return links.some((link) => link.protocol === 'http:')
  }

  containsBroken(links: Link[]) {
    return links.some((link) => link.requestStatus === 404)
  }
}

export default new LinkProcessor()
