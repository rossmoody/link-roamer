import { Response } from 'node-fetch'

class LinkStatus {
  /**
   * The Headers object associated with the response.
   */
  readonly headers: Record<string, string>

  /**
   * A boolean indicating whether the response was successful (status in the range 200–299) or not.
   */
  readonly ok: boolean

  /**
   * Indicates whether or not the response is the result of a redirect (that is, its URL list has more than one entry).
   */
  readonly redirected: boolean

  /**
   *  The status code of the response. (This will be 200 for a success).
   */
  readonly status: number

  /**
   * The status message corresponding to the status code. (e.g., OK for 200).
   */
  readonly statusText: string

  /**
   * The type of the response (e.g., basic, cors).
   * */
  readonly type: ResponseType

  /**
   * The URL of the response.
   * */
  readonly url: string

  constructor(response: Response) {
    this.ok = response.ok
    this.redirected = response.redirected
    this.status = response.status
    this.statusText = response.statusText
    this.type = response.type
    this.url = response.url
    this.headers = this.setHeaders(response)
  }

  setHeaders(response: Response) {
    const entries = Array.from(response.headers.entries())
    return entries.reduce((accumulator, [key, value]) => {
      accumulator[key] = value
      return accumulator
    }, {} as Record<string, string>)
  }
}

export default LinkStatus
