import LinkStatus from '../api/LinkStatus'

class Link extends URL {
  /**
   * The response status of a link's fetch result. Defaults to success scenario until proven otherwise.
   */
  status = new LinkStatus(this.href)

  constructor(href: string) {
    super(href)
  }

  /**
   * Filters a list of givens links to only include ones with HTTP.
   */
  get isHttp() {
    return this.protocol.includes('http')
  }

  /**
   * Returns hostname without 'www.'
   */
  get domain() {
    return this.hostname.replace('www.', '')
  }

  /**
   * Create a pretty version of the domain + pathname of a URL
   */
  get displayHref() {
    const href = this.domain + this.pathname + this.hash
    const lastCharacter = href.charAt(href.length - 1)
    return lastCharacter === '/' ? href.slice(0, -1) : href
  }
}

export default Link
