import React from 'react'

const App = (): JSX.Element => {
  const handleClick = () => {
    console.log('working')
  }

  console.log('is this working?')

  return (
    <div>
      <h1>Link Grabber</h1>
      <p>If you are seeing this, React is working!</p>
      <button onClick={handleClick}>Find links</button>
    </div>
  )
}

export default App
