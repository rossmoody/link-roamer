/**
 * Get all the hrefs on a given page and return an array of unique values. If no hrefs, returns an empty array. Must be an isolated function declaration because of v3 manifest's strict policies on script injection using executeScript.
 */
export function gatherHrefs() {
  const links = Array.from(document.links)
  const hrefs = links.map((link) => link.href)
  return [...new Set(hrefs)]
}

/**
 * Gets the target tabs domain name
 */
export function getDomain() {
  return document.location.host
}
