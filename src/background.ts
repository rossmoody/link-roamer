import { Message } from './types'

const { declarativeContent, action, runtime } = chrome

/**
 * Listens for a message from the extension to fetch HEAD information
 * about each given link to check if it returns a 404 or not.
 */
runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
  if (message.action === 'fetchLinks') {
    const init: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: message.data,
    }

    fetch('https://fetch-fav-h57lsidp3a-uc.a.run.app', init).then(
      async (result) => {
        const json = await result.json()
        sendResponse(json)
      },
    )
  }

  return true
})

/**
 * Sets the extension to disabled by default and makes it possible
 * to invoke only on http schemed pages.
 */
runtime.onInstalled.addListener(async () => {
  await declarativeContent.onPageChanged.removeRules()
  await action.disable()
  await declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new declarativeContent.PageStateMatcher({
          pageUrl: { schemes: ['https', 'http'] },
        }),
      ],
      actions: [new declarativeContent.ShowAction()],
    },
  ])
})
