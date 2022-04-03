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

  async updateTabGroup(groupId: number, title: string) {
    const updateProperties: chrome.tabGroups.UpdateProperties = {
      collapsed: true,
      title,
    }

    return await chrome.tabGroups.update(groupId, updateProperties)
  }
}

export default new Chrome()
