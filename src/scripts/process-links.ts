/**
 * Get all the anchor elements on a given page and return an array
 * of the href values. If no anchor elements, returns an empty array.
 */
export function gatherHrefs() {
  const linkElements = Array.from(document.querySelectorAll('a'))
  return linkElements.map((element) => element.href)
}
