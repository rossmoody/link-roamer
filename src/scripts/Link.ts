import { LinkStatus } from '../types'

class Link extends URL {
  private _status = {} as LinkStatus

  constructor(href: string) {
    super(href)
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
   * Sets the response status specs
   */
  set status(status: LinkStatus) {
    this._status = status
  }

  get status() {
    return this._status
  }
}

export default Link
