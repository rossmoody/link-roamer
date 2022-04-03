import React from 'react'
import ThemeProvider from '../providers/ThemeProvider'
import { CategoryTabs, Header, Layout } from '../components'
import { DataProvider } from '../providers/DataProvider'

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider>
        <Layout>
          <Header />
          <CategoryTabs />
        </Layout>
      </ThemeProvider>
    </DataProvider>
  )
}

export default App
