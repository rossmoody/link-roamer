import React, { ReactElement } from 'react'
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
import { HashIcon } from './icons'

const CategoryTabs = () => {
  const { data } = useData()

  return (
    <Tabs isLazy>
      <TabList px={4}>
        <CustomTab links={data.categorizedLinks} title="All" />
        <CustomTab
          links={data.fragmentLinks}
          title="Fragments"
          icon={<HashIcon color="gray.500" />}
        />
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
  icon?: ReactElement
}

function CustomTab({ links, title, icon }: CustomTabProps) {
  const linksQty = lp.getCategorizedLinksQty(links)
  if (linksQty < 1) return null

  return (
    <Tab
      gap={1}
      _selected={{
        fontWeight: 'medium',
        borderBottom: '3px solid',
        borderColor: 'blurple.500',
      }}
    >
      {icon && icon}
      {title} <Badge>{linksQty}</Badge>
    </Tab>
  )
}

export default CategoryTabs
