/**
 * Get all the anchor elements on a given page and return an array
 * of unique href values. If no anchor elements, returns an empty array.
 * Must be an isolated function declaration because of v3 manifest's strict policies
 * on script injection using executeScript.
 */
export function gatherHrefs() {
  const anchorElements = Array.from(document.querySelectorAll('a'))
  const anchorHrefs = anchorElements.map((element) => element.href)
  return [...new Set(anchorHrefs)]
}

/**
 * Gets the target tabs domain name
 */
export default function getDomain() {
  return document.location.host
}
