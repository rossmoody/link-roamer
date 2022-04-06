import { Message } from './types'

const API_URL = 'https://fetch-fav-h57lsidp3a-uc.a.run.app'

chrome.runtime.onMessage.addListener(
  (message: Message, sender, sendResponse) => {
    if (message.action === 'fetchLinks') {
      const init: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: message.data,
      }

      fetch(API_URL, init).then(async (result) => {
        const json = await result.json()
        sendResponse(json)
      })
    }

    return true
  },
)
