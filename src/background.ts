// This file must be in the root of the src directory
// Popup action takes precedence over this listener.
// To make this function work, set "action" property to {} in manifest

import { init } from './scripts/content-script'

chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: init,
    })
  }
})
