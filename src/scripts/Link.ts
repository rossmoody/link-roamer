export class Link extends URL {
  constructor(href: string) {
    super(href)
  }

  get domain() {
    return this.hostname.replace('www.', '')
  }

  get displayHref() {
    const href = this.domain + this.pathname + this.hash
    const lastCharacter = href.charAt(href.length - 1)
    return lastCharacter === '/' ? href.slice(0, -1) : href
  }
}
