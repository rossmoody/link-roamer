import { Message } from './types'

const url =
  process.env.NODE_ENV === 'production'
    ? 'https://fetch-fav-h57lsidp3a-uc.a.run.app'
    : 'http://localhost:8080'

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

      try {
        fetch(url, init).then((result) => {
          result.json().then(sendResponse)
        })
      } catch (error) {
        sendResponse([{}])
      }
    }

    return true
  }
)

/**
 * Sets the extension to disabled by default and makes it possible
 * to invoke only on http schemed pages.
 */
if ('isV3Manifest') {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable()

    const ruleOne = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { schemes: ['https', 'http'] },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowAction()],
    }

    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([ruleOne])
    })
  })
}

/**
 * Set a different colored icon in the toolbar when in development environment.
 */
chrome.management.getSelf((result) => {
  if (result.installType === 'development') {
    chrome.action.setIcon({
      path: {
        16: './public/icons/dev/16.png',
        24: './public/icons/dev/24.png',
        32: './public/icons/dev/32.png',
        48: './public/icons/dev/48.png',
        64: './public/icons/dev/64.png',
        128: './public/icons/dev/128.png',
        256: './public/icons/dev/256.png',
      },
    })
  }
})
