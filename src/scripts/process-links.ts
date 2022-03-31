import { Link } from './Link'

/**
 * Get all the anchor elements on a given page and return an array
 * of unique href values. If no anchor elements, returns an empty array.
 */
export function gatherHrefs() {
  const anchorElements = Array.from(document.querySelectorAll('a'))
  const anchorHrefs = anchorElements.map((element) => element.href)
  return [...new Set(anchorHrefs)]
}

/**
 * Creates a Link object which extends the URL class.
 * If it fails, it returns false. This needs to be filtered out later.
 * TODO: Improve the error handling of this function
 */
export function createLinks(href: string) {
  try {
    return new Link(href)
  } catch (e) {
    console.error(e)
    return false
  }
}

/**
 * Filter function helper for removing items that are falsy
 */
export function filterFalse(item: unknown) {
  return Boolean(item)
}

/**
 * Filter function helper for removing items that don't contain http
 */
export function filterAllExceptHttp(link: Link) {
  return link.protocol.includes('http')
}
