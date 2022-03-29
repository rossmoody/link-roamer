/**
 * Query the current active tab and return it for use in executing scripts.
 */
export async function getActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  return tabs[0]
}
