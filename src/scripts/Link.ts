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
   * Returns whether or not the protocol is http since links can be phone or address too.
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

  /**
   * The URL class this is extending has a custom toJSON method that only returns the href of the object. This is a hack to clone the object for serializing it.
   */
  clone() {
    return {
      ...this,
      hash: this.hash,
      host: this.host,
      hostname: this.hostname,
      href: this.href,
      origin: this.origin,
      password: this.password,
      pathname: this.pathname,
      port: this.port,
      protocol: this.protocol,
      search: this.search,
      searchParams: this.searchParams,
      username: this.username,
      displayHref: this.displayHref,
      domain: this.domain,
      isHttp: this.isHttp,
    }
  }
}

export default Link
