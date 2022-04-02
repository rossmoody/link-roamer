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
    )[0].result
  }

  /**
   * Query the current active tab and return its id.
   */
  async getActiveTab() {
    return (await chrome.tabs.query({ active: true, currentWindow: true }))[0]
  }
}

export default new Chrome()
