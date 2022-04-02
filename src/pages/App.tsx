import React from 'react'
import ThemeProvider from '../providers/ThemeProvider'
import { Header, Layout, LinkList } from '../components'
import { LinksProvider } from '../providers/LinksProvider'

const App = () => {
  return (
    <LinksProvider>
      <ThemeProvider>
        <Layout>
          <Header />
          <LinkList />
        </Layout>
      </ThemeProvider>
    </LinksProvider>
  )
}

export default App
