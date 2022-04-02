import Link from './Link'

export class LinkProcessor {
  /**
   * Creates a Link object which extends the URL class.
   * If it fails, it returns false. This needs to be filtered out later.
   * TODO: Improve the error handling of this function
   */
  createLinks(href: string) {
    try {
      return new Link(href)
    } catch (e) {
      console.error(e)
      return false
    }
  }

  /**
   * Filter function helper for removing items that are falsy
   */
  filterFalse(item: unknown) {
    return Boolean(item)
  }

  /**
   * Filter function helper for removing items that don't contain http
   */
  filterAllExceptHttp(link: Link) {
    return link.protocol.includes('http')
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
}

export default new LinkProcessor()
