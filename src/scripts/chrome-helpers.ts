/**
 * Query the current active tab and return it for use in executing scripts.
 */
export async function getActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  return tabs[0]
}

/**
 * Helper function to inject scripts into a given tabId.
 * The function returns the result of whatever function is passed in.
 */
export async function executeScript(tabId: number, func: () => any) {
  const results = await chrome.scripting.executeScript({
    target: { tabId },
    func,
  })

  return results[0].result
}
