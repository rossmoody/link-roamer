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
   * Filter function helper for removing items that don't contain http
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
   * Filter links to include only those with fragments
   */
  filterOnlyFragments(link: Link) {
    return Boolean(link.hash)
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
   * Sorts a given set of links by length starting with the shortest first.
   */
  sortByHrefLength(linkA: Link, linkB: Link) {
    return linkA.displayHref.length > linkB.displayHref.length ? 0 : -1
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
}

export default new LinkProcessor()
