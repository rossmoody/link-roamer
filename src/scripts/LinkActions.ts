class LinkActions {
  /**
   * Transforms all link hrefs into a comma separated string
   */
  static linksToCsvString(links: string[]) {
    return links.reduce((prevValue, currValue) => {
      return prevValue + currValue + ','
    }, '')
  }

  /**
   * Returns a single string of hrefs separated by commas
   */
  static linksToJsonString(links: string[]) {
    const jsonified = links.reduce((prevValue, currValue) => {
      return `${prevValue}"${currValue}", `
    }, '')
    return `[${jsonified}]`
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
    const json =
      'data:application/json;charset=utf-8,' + this.linksToJsonString(links)
    const encodedUri = encodeURI(json)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
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
