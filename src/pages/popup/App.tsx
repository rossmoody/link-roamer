import React from 'react'

const App = () => {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting
        .executeScript({
          target: { tabId: tabs[0].id ?? 0 },
          func: () => {
            const linkElements = Array.from(document.querySelectorAll('a'))
            const data = linkElements.map((element) => element.href)
            console.log(data)
          },
        })
        .then()
    })
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
