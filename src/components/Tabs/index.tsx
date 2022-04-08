import React, { useEffect, useState } from 'react'
import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useData } from '../../providers/DataProvider'
import LinkList from '../LinkList'
import lp from '../../scripts/LinkProcessor'
import { BrokenLinkIcon, HashIcon } from '../icons'
import Tab from './Tab'
import Link from '../../scripts/Link'
import SearchFilter from './SearchFilter'

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
  const broken = lp.filterBrokenLinks(links)

  return (
    <React.Fragment>
      <SearchFilter setFilter={setFilter} />
      <Tabs isLazy>
        <TabList px={3}>
          <Tab linksQty={lp.getCategorizedLinksQty(categorized)} title="All" />
          <Tab
            linksQty={lp.getCategorizedLinksQty(fragments)}
            title="Fragments"
            icon={<HashIcon />}
          />
          <Tab
            linksQty={lp.getCategorizedLinksQty(broken)}
            title="404"
            icon={<BrokenLinkIcon />}
          />
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
