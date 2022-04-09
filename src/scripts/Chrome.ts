import CreateData = chrome.windows.CreateData
import GroupOptions = chrome.tabs.GroupOptions
import { LinkStatus, Message } from '../types'
import Link from './Link'

class Chrome {
  /**
   * Inject scripts into a given tabId.
   * The function returns the result of whatever function is passed in.
   */
  async executeScript<Type>(tabId: number, func: () => Type) {
    if ('isV3Manifest') {
      return (
        await chrome.scripting.executeScript({
          target: { tabId },
          func,
        })
      )[0].result as Type
    }

    return (
      await browser.tabs.executeScript(tabId, {
        code: `(${func})()`,
      })
    )[0] as Type
  }

  async getActiveTab() {
    const config: chrome.tabs.QueryInfo = { active: true, currentWindow: true }

    if ('isV3Manifest') {
      return (await chrome.tabs.query(config))[0]
    }

    return (await browser.tabs.query(config))[0]
  }

  async createBackgroundTab(url: string) {
    const config: chrome.tabs.CreateProperties = { active: false, url }
    return await chrome.tabs.create(config)
  }

  async createTabsInNewWindow(url: string[]) {
    const config: CreateData = { url }
    return await chrome.windows.create(config)
  }

  /**
   * Creates a tab group from the list of given tabIds.
   * If no windowId, the tab group opens in currently active window.
   * Returns the id of the newly created tab group.
   */
  async createTabGroup(tabIds: number[], windowId?: number) {
    const config: GroupOptions = {
      tabIds,
      createProperties: { windowId },
    }
    return await chrome.tabs.group(config)
  }

  /**
   * Collapses a newly created tab group and sets the given title.
   */
  async updateTabGroup(groupId: number, title: string) {
    const updateProperties: chrome.tabGroups.UpdateProperties = {
      collapsed: true,
      title,
    }
    return await chrome.tabGroups.update(groupId, updateProperties)
  }

  async createBookmarkFolder(title: string) {
    const config: chrome.bookmarks.BookmarkCreateArg = {
      title,
    }

    if ('isV3Manifest') return await chrome.bookmarks.create(config)
    return browser.bookmarks.create(config)
  }

  /**
   * Creates a bookmark and puts it inside the given folder using the parentId.
   */
  async createBookmark(title: string, parentId: string, url: string) {
    const config: chrome.bookmarks.BookmarkCreateArg = {
      parentId,
      title,
      url,
    }
    if ('isV3Manifest') return await chrome.bookmarks.create(config)
    return browser.bookmarks.create(config)
  }

  /**
   * Sends a message to the background script to process all the given hrefs
   * to set request statuses on each.
   */
  async fetchLinks(links: Link[]): Promise<LinkStatus[]> {
    const data = JSON.stringify(links.map((link) => link.href))

    const message: Message = {
      action: 'fetchLinks',
      data,
    }

    return new Promise((resolve) => {
      chrome.runtime.sendMessage(message, resolve)
    })
  }

  async getStorage(key: string) {
    return await chrome.storage.sync.get(key)
  }

  async setStorage(key: string, value: string) {
    return await chrome.storage.sync.set({ items: { key: value } })
  }
}

export default new Chrome()
