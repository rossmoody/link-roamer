import { CategorizedLinks } from '../types'
import Link from './Link'

const FILTER_URL = 'https://www.filterthisurlout-1-2-3-4-5.com'

export class LinkProcessor {
  /**
   * Creates a Link object which extends the URL class.
   * If it fails, it returns a fake url with the key 'filtermeout' for
   * targeting later. URL creation fails pretty often.
   */
  createLink(href: string) {
    try {
      return new Link(href)
    } catch (e) {
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
  filter404Links(links?: Link[]) {
    if (!links) return {}

    const filtered = links.filter(
      (link) => link.status.status === 404,
    )

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

  getHttpLinkQty(links: Link[]) {
    let counter = 0
    links.forEach((link) => (link.protocol === 'http:' ? counter++ : null))
    return counter
  }

  get404Qty(links: Link[]) {
    let counter = 0
    links.forEach((link) =>
      link.status.status === 404 ? counter++ : null,
    )
    return counter
  }

  /**
   * Returns a single string of hrefs separated by commas
   */
  hrefsToCsvString(links: string[]) {
    return links.reduce((prevValue, currValue) => {
      return prevValue + currValue + ','
    }, '')
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
    const csv = 'data:text/csv;charset=utf-8,' + this.hrefsToCsvString(links)
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

  async copyCsv(links: string[]) {
    const value = this.hrefsToCsvString(links)
    await navigator.clipboard.writeText(value).catch(console.error)
  }
}

export default new LinkProcessor()
