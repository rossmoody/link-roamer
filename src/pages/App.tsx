import React from 'react'
import { CategoryTabs, Header, Layout } from '../components'
import ActionsBar from '../components/ActionsBar'
import { CheckedItemsProvider } from '../providers/CheckedItems'
import { DataProvider } from '../providers/DataProvider'
import ThemeProvider from '../providers/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <CheckedItemsProvider>
          <Layout>
            <Header />
            <CategoryTabs />
            <ActionsBar />
          </Layout>
        </CheckedItemsProvider>
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
