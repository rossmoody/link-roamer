class Link extends URL {
  constructor(href: string) {
    super(href)
  }

  /**
   * Returns hostname without 'www.'
   */
  get domain() {
    return this.hostname.replace('www.', '')
  }
}

export default Link
