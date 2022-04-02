import React, { useEffect, useState } from 'react'
import Link from '../scripts/Link'
import { Layout, LinkList } from '../components'
import { ChakraProvider } from '@chakra-ui/react'
import chrome from '../scripts/Chrome'
import lp from '../scripts/LinkProcessor'
import gatherHrefs from '../scripts/gather-hrefs'

const App = () => {
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    (async () => {
      const { id } = await chrome.getActiveTab()

      if (id) {
        const links = (await chrome.executeScript<string[]>(id, gatherHrefs))
          .map(lp.createLinks)
          .filter(lp.filterFalse)
          .filter(lp.filterAllExceptHttp)

        setLinks(links)
      }
    })()
  }, [])

  console.log(links, 'link')

  return (
    <ChakraProvider>
      <Layout>
        <LinkList links={links} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
