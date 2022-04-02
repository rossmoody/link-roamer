import React from 'react'
import ThemeProvider from '../providers/ThemeProvider'
import { CategoryTabs, Header, Layout } from '../components'
import { LinksProvider } from '../providers/LinksProvider'

const App = () => {
  return (
    <LinksProvider>
      <ThemeProvider>
        <Layout>
          <Header />
          <CategoryTabs />
        </Layout>
      </ThemeProvider>
    </LinksProvider>
  )
}

export default App
