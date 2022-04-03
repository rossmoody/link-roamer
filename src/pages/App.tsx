import React from 'react'
import ThemeProvider from '../providers/ThemeProvider'
import { CategoryTabs, Header, Layout } from '../components'
import { DataProvider } from '../providers/DataProvider'
import { CheckedItemsProvider } from '../providers/CheckedItems'
import Index from '../components/Footer'

const App = () => {
  return (
    <DataProvider>
      <ThemeProvider>
        <CheckedItemsProvider>
          <Layout>
            <Header />
            <CategoryTabs />
            <Index />
          </Layout>
        </CheckedItemsProvider>
      </ThemeProvider>
    </DataProvider>
  )
}

export default App
