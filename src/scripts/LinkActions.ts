import Link from './Link'

class LinkActions {
  /**
   * Transforms all link hrefs into a comma separated string
   */
  static linksToCsvString(links: string[]) {
    return links.reduce((prevValue, currValue) => {
      return prevValue.concat(currValue, ',')
    }, '')
  }

  /**
   * Returns a single string of hrefs separated by commas
   */
  static linksToJsonString(links: string[]) {
    const jsonified = links.reduce((prevValue, currValue) => {
      return prevValue.concat('"', currValue, '"', ',')
    }, '')

    return '[' + jsonified + ']'
  }

  static exportAllData(data: Link[], checkedItems: string[]) {
    const links = JSON.stringify(
      data
        .filter((item) => checkedItems.some((href) => href === item.href))
        .map((item) => item.clone())
    )

    const json =
      'data:application/json;charset=utf-8,' + encodeURIComponent(links)

    const link = document.createElement('a')
    link.setAttribute('href', json)
    link.setAttribute('download', 'detailed-roamer-data.json')
    document.body.appendChild(link)
    link.click()
  }

  /**
   * Save given links to a csv file
   */
  static csvToFile(links: string[]) {
    const csv = 'data:text/csv;charset=utf-8,' + this.linksToCsvString(links)
    const encodedUri = encodeURI(csv)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'link-roamer-data.csv')
    document.body.appendChild(link)
    link.click()
  }

  static jsonToFile(links: string[]) {
    const string = this.linksToJsonString(links)
    const json =
      'data:application/json;charset=utf-8,' + encodeURIComponent(string)
    const link = document.createElement('a')
    link.setAttribute('href', json)
    link.setAttribute('download', 'link-roamer-data.json')
    document.body.appendChild(link)
    link.click()
  }

  static async jsonToClipboard(links: string[]) {
    const value = this.linksToJsonString(links)
    await this.copyToClipBoard(value)
  }

  static async csvToClipboard(links: string[]) {
    const value = this.linksToCsvString(links)
    await this.copyToClipBoard(value)
  }

  private static async copyToClipBoard(value: string) {
    await navigator.clipboard.writeText(value).catch(console.error)
  }
}

export default LinkActions
