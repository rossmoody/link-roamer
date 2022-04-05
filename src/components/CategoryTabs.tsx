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
import { CategorizedLinks } from '../types'

const CategoryTabs = () => {
  const { data } = useData()

  return (
    <Tabs isLazy>
      <TabList px={4}>
        <CustomTab links={data.categorizedLinks} title="All" />
        <CustomTab links={data.fragmentLinks} title="Fragments" />
      </TabList>

      <TabPanels pb={20}>
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

type CustomTabProps = {
  links: CategorizedLinks
  title: string
}

function CustomTab({ links, title }: CustomTabProps) {
  const linksQty = lp.getCategorizedLinksQty(links)
  if (linksQty < 1) return null

  return (
    <Tab gap={1}>
      {title} <Badge>{linksQty}</Badge>
    </Tab>
  )
}

export default CategoryTabs
