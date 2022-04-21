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
   * Copy to clipboard helper function
   */
  private async copyToClipBoard(value: string) {
    await navigator.clipboard.writeText(value).catch(console.error)
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
    return this.links.filter((link) => !link.status.ok)
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

  /**
   * Transforms all link hrefs into a comma separated string
   */
  get hrefsCsvString() {
    return this.links.reduce((prevValue, currValue) => {
      return prevValue + currValue + ','
    }, '')
  }

  /**
   * Returns a single string of hrefs separated by commas
   */
  get hrefsToJsonString() {
    const jsonified = this.links.reduce((prevValue, currValue) => {
      return `${prevValue}"${currValue}",`
    }, '')
    return `[${jsonified}]`
  }

  saveHrefsToCsvFile() {
    const csv = 'data:text/csv;charset=utf-8,' + this.hrefsCsvString
    const encodedUri = encodeURI(csv)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'link-roamer-data.csv')
    document.body.appendChild(link)
    link.click()
  }

  saveHrefsToJsonFile() {
    const json = 'data:application/json;charset=utf-8,' + this.hrefsToJsonString
    const encodedUri = encodeURI(json)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'link-roamer-data.json')
    document.body.appendChild(link)
    link.click()
  }

  async copyJsonClipboard() {
    const value = this.hrefsToJsonString
    this.copyToClipBoard(value)
  }

  async copyCsvClipboard() {
    const value = this.hrefsCsvString
    this.copyToClipBoard(value)
  }
}

export default LinksHandler
