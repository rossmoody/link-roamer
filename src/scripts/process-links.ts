/**
 * Get all the anchor elements on a given page and return an array
 * of unique href values. If no anchor elements, returns an empty array.
 */
export function gatherHrefs() {
  const linkElements = Array.from(document.querySelectorAll('a'))
  const hrefs = linkElements.map((element) => element.href)
  return [...new Set(hrefs)]
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
