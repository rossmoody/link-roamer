import { Message } from './types'

// const url = 'https://fetch-fav-h57lsidp3a-uc.a.run.app'

/**
 * Listens for a message from the extension to fetch HEAD information
 * about each given link to check if it returns a 404 or not.
 */
chrome.runtime.onMessage.addListener(
  (message: Message, sender, sendResponse) => {
    if (message.action === 'fetchLinks') {
      const init: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: message.data,
      }

      fetch('http://localhost:8080', init).then(async (result) => {
        const json = await result.json()
        sendResponse(json)
      })
    }

    return true
  },
)

/**
 * Sets the extension to disabled by default and makes it possible
 * to invoke only on http schemed pages.
 */
if ('isV3Manifest') {
  chrome.runtime.onInstalled.addListener(async () => {
    await chrome.declarativeContent.onPageChanged.removeRules()
    await chrome.action.disable()
    await chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { schemes: ['https', 'http'] },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      },
    ])
  })
}
