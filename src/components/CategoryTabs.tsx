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
import LinkList from './LinkList/LinkList'
import lp from '../scripts/LinkProcessor'
import { CategorizedLinks } from '../types'

const CategoryTabs = () => {
  const { data } = useData()
  const fragmentQty = lp.getCategorizedLinksQty(data.fragmentLinks)

  return (
    <Tabs isLazy>
      <TabList>
        <Tab gap={1}>
          All <Badge>{data.links.length}</Badge>
        </Tab>
        {fragmentQty > 0 && (
          <Tab gap={1}>
            Fragments <Badge>{fragmentQty}</Badge>
          </Tab>
        )}
      </TabList>

      <TabPanels>
        <TabPanel p={0}>
          <LinkList categorizedLinks={data.categorizedLinks} />
        </TabPanel>
        <TabPanel p={0}>
          <LinkList categorizedLinks={data.fragmentLinks} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
}

export default CategoryTabs
