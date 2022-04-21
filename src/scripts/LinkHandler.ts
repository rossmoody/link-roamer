import { CategorizedLinks } from '../types'
import Link from './Link'

class LinkHandler {
  constructor(public links: Link[]) {}
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
   * Sorts a given set of links by length starting with the shortest first.
   */
  static sortByHrefLength(linkA: Link, linkB: Link) {
    return linkA.href.length > linkB.href.length ? 0 : -1
  }

  /**
   * Returns the amount of links in a given Record of categorized Links.
   */
  static categorizedLinksQty(categorizedLinks: CategorizedLinks) {
    let counter = 0
    for (const links of Object.values(categorizedLinks)) {
      counter += links.length
    }
    return counter
  }

  /**
   * Filter links to include only those with fragments
   */
  get fragmentLinks() {
    return this.links.filter((link) => Boolean(link.href.includes('#')))
  }

  /**
   * Return all the links that aren't status ok as a categorized list
   */
  get notOkLinks() {
    return this.links.filter((link) => !link.status.ok)
  }

  /**
   * Return all the links that aren't redirected as a categorized list
   */
  get redirectedLinks() {
    return this.links.filter((link) => link.status.redirected)
  }

  /**
   * Return all number of links that contain the unsafe http protocol
   */
  get httpLinkQty() {
    let counter = 0
    this.links.forEach((link) => (link.protocol === 'http:' ? counter++ : null))
    return counter
  }

  /**
   * Return the number of broken 404 links
   */
  get fourOhFourQty() {
    let counter = 0
    this.links.forEach((link) =>
      link.status.status === 404 ? counter++ : null
    )
    return counter
  }

  /**
   * Return the number of links that didn't resolve to 200-299
   */
  get notOkQty() {
    let counter = 0
    this.links.forEach((link) => (link.status.ok ? null : counter++))
    return counter
  }

  /**
   * Returns a single string of hrefs separated by commas
   */
  static hrefsToCsvString(links: string[]) {
    return links.reduce((prevValue, currValue) => {
      return prevValue + currValue + ','
    }, '')
  }

  /**
   * Copy to clipboard helper function
   */
  static async copyToClipBoard(value: string) {
    await navigator.clipboard.writeText(value).catch(console.error)
  }

  /**
   * Returns a single string of hrefs separated by commas
   */
  hrefsToJsonString(links: string[]) {
    const jsonified = links.reduce((prevValue, currValue) => {
      return `${prevValue}"${currValue}",`
    }, '')
    return `[${jsonified}]`
  }

  saveHrefsToCsvFile(links: string[]) {
    const csv =
      'data:text/csv;charset=utf-8,' + LinkHandler.hrefsToCsvString(links)
    const encodedUri = encodeURI(csv)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'link-roamer-data.csv')
    document.body.appendChild(link)
    link.click()
  }

  saveHrefsToJsonFile(links: string[]) {
    const json =
      'data:application/json;charset=utf-8,' + this.hrefsToJsonString(links)
    const encodedUri = encodeURI(json)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'link-roamer-data.json')
    document.body.appendChild(link)
    link.click()
  }

  async copyJson(links: string[]) {
    const value = this.hrefsToJsonString(links)
    await navigator.clipboard.writeText(value).catch(console.error)
  }
}

export default LinkHandler
