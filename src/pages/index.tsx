import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')!
ReactDOMClient.createRoot(root).render(<App />)
