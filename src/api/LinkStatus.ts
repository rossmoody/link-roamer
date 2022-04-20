import { Response } from 'node-fetch'
import Link from '../scripts/Link'

class LinkStatus {
  /**
   * A boolean indicating whether the response was successful (status in the range 200–299) or not. Defaults to true in case links are timed out.
   */
  readonly ok: boolean

  /**
   * When an instance is created without a response, this defaults to false to check if the instance is valid.
   */
  readonly validResponse: boolean

  /**
   * The original url used to fetch. Important when links are redirected as the url returned from response is final destination.
   */
  readonly originUrl: Link['href']

  /**
   * Indicates whether or not the response is the result of a redirect (that is, its URL list has more than one entry).
   */
  readonly redirected: boolean

  /**
   * The Headers object associated with the response.
   */
  readonly headers?: Record<string, string>

  /**
   *  The status code of the response. (This will be 200 for a success).
   */
  readonly status?: number

  /**
   * The status message corresponding to the status code. (e.g., OK for 200).
   */
  readonly statusText?: string

  /**
   * The type of the response (e.g., basic, cors).
   * */
  readonly type?: ResponseType

  /**
   * The final URL of the response after redirects.
   * */
  readonly url?: string

  constructor(originUrl: string, response?: Response) {
    this.originUrl = originUrl
    this.ok = true
    this.validResponse = false
    this.redirected = false

    if (response) {
      this.validResponse = true
      this.ok = response.ok
      this.redirected = response.redirected
      this.status = response.status
      this.statusText = response.statusText
      this.type = response.type
      this.url = response.url
      this.headers = this.setHeaders(response)
    }
  }

  private setHeaders(response: Response) {
    const entries = Array.from(response.headers.entries())
    return entries.reduce((accumulator, [key, value]) => {
      accumulator[key] = JSON.stringify(value)
      return accumulator
    }, {} as Record<string, string>)
  }
}

export default LinkStatus
