/**
 * Fetch all the anchor links on a given tabId.
 * Send them as a message to the extension.
 */
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        func: () => {
          const linkElements = Array.from(document.querySelectorAll('a'))
          const linkValues = linkElements.map((element) => element.href)
          chrome.runtime.sendMessage({ data: linkValues })
        },
      })
      .then()
  }
})

/**
 * Listen for a message with the property `data`.
 * Create a popup with the links inside.
 */
chrome.runtime.onMessage.addListener(async (message) => {
  const data = message.data ?? []
  await chrome.action.setPopup({ popup: 'pages/popup/index.html' })
})
