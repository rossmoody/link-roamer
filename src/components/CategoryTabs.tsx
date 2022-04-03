import React from 'react'
import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { useData } from '../providers/DataProvider'
import Index from './LinkList'
import lp from '../scripts/LinkProcessor'

const CategoryTabs = () => {
  const { data } = useData()
  const fragmentQty = lp.getCategorizedLinksQty(data.fragmentLinks)

  return (
    <Tabs isLazy size="sm">
      <TabList px={4}>
        <Tab gap={1}>
          All <Badge>{data.links.length}</Badge>
        </Tab>
        {fragmentQty > 0 && (
          <Tab gap={1}>
            Fragments <Badge>{fragmentQty}</Badge>
          </Tab>
        )}
      </TabList>

      <TabPanels pb={28}>
        <TabPanel p={0}>
          <Index categorizedLinks={data.categorizedLinks} />
        </TabPanel>
        <TabPanel p={0}>
          <Index categorizedLinks={data.fragmentLinks} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default CategoryTabs
