import React from 'react'
import { getActiveTab } from '../../scripts'

const App = () => {
  const handleClick = async () => {
    const { id: tabId } = await getActiveTab()

    if (tabId) {
      await chrome.scripting.executeScript({
        target: { tabId },
        func: () => {
          const linkElements = Array.from(document.querySelectorAll('a'))
          const data = linkElements.map((element) => element.href)
          console.log(data)
        },
      })
    }
  }

  return (
    <div>
      <h1>Link Grabber</h1>
      <p>If you are seeing this, React is working!</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
