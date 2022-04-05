import CreateData = chrome.windows.CreateData
import GroupOptions = chrome.tabs.GroupOptions

class Chrome {
  /**
   * Inject scripts into a given tabId.
   * The function returns the result of whatever function is passed in.
   */
  async executeScript<Type>(tabId: number, func: () => Type) {
    return (
      await chrome.scripting.executeScript({
        target: { tabId },
        func,
      })
    )[0].result as Type
  }

  async getActiveTab() {
    const config: chrome.tabs.QueryInfo = { active: true, currentWindow: true }
    return (await chrome.tabs.query(config))[0]
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

  /**
   * Chrome bookmarks are confusing. To create a folder, don't supply a URL.
   * The title will create the folder name if no URL is supplied. If a URL is supplied
   * it will be used for the title of the bookmark.
   */
  async createBookmarkFolder(title: string) {
    const config: chrome.bookmarks.BookmarkCreateArg = {
      title,
    }
    return await chrome.bookmarks.create(config)
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
    return await chrome.bookmarks.create(config)
  }
}

export default new Chrome()
