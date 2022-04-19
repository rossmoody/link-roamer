import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useData } from '../../providers/DataProvider'
import Link from '../../scripts/Link'
import lp from '../../scripts/LinkProcessor'
import LinkList from '../LinkList'
import SearchFilter from './SearchFilter'
import Tab from './Tab'

const CategoryTabs = () => {
  const [links, setLinks] = useState<Link[]>([])
  const [filter, setFilter] = useState('')
  const { data } = useData()

  useEffect(() => {
    setLinks(data.links)
  }, [data.links.length])

  useEffect(() => {
    const filteredLinks = data.links.filter((link) =>
      link.href.includes(filter),
    )
    setLinks(filteredLinks)
  }, [filter])

  const categorized = lp.categorizeByDomain(links)
  const fragments = lp.filterFragmentLinks(links)
  const broken = lp.filter404Links(links)

  return (
    <React.Fragment>
      <SearchFilter setFilter={setFilter} />
      <Tabs isLazy>
        <TabList px={3}>
          <Tab linksQty={lp.getCategorizedLinksQty(categorized)} title="All" />
          <Tab
            linksQty={lp.getCategorizedLinksQty(fragments)}
            title="Fragments"
          />
          <Tab linksQty={lp.getCategorizedLinksQty(broken)} title="404" />
        </TabList>

        <TabPanels pb={20}>
          <TabPanel p={0}>
            <LinkList categorizedLinks={categorized} />
          </TabPanel>
          <TabPanel p={0}>
            <LinkList categorizedLinks={fragments} />
          </TabPanel>
          <TabPanel p={0}>
            <LinkList categorizedLinks={broken} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </React.Fragment>
  )
}

export default CategoryTabs
