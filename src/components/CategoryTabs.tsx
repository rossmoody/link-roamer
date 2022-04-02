import React, { useEffect, useState } from 'react'
import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { useLinks } from '../providers/LinksProvider'
import lp from '../scripts/LinkProcessor'
import { LinkData } from '../types'
import LinkList from './LinkList/LinkList'

const CategoryTabs = () => {
  const [data, setData] = useState<LinkData>({
    links: [],
    categorizedLinks: {},
  })

  const { links } = useLinks()

  useEffect(() => {
    const categorizedLinks = lp.categorizeByDomain(links)
    setData({ links, categorizedLinks })
  }, [links])

  return (
    <Tabs>
      <TabList>
        <Tab>
          All <Badge>{data.links.length}</Badge>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <LinkList categorizedLinks={data.categorizedLinks} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default CategoryTabs
