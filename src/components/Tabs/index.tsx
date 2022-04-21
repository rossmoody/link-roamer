import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useData } from '../../providers/DataProvider'
import Link from '../../scripts/Link'
import LinkProcessor from '../../scripts/LinkHandler'
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
      link.href.includes(filter)
    )
    setLinks(filteredLinks)
  }, [filter])

  const lp = new LinkProcessor(links)

  const all = {
    links: LinkProcessor.categorizeByDomain(links),
    quantity: links.length,
  }

  const fragments = {
    links: LinkProcessor.categorizeByDomain(lp.fragmentLinks),
    quantity: lp.fragmentLinks.length,
  }

  const notOk = {
    links: LinkProcessor.categorizeByDomain(lp.notOkLinks),
    quantity: lp.notOkLinks.length,
  }

  const redirected = {
    links: LinkProcessor.categorizeByDomain(lp.redirectedLinks),
    quantity: lp.redirectedLinks.length,
  }

  return (
    <React.Fragment>
      <SearchFilter setFilter={setFilter} />
      <Tabs isLazy>
        <TabList px={3}>
          <Tab linksQty={all.quantity} title="All" />
          <Tab linksQty={fragments.quantity} title="Fragments" />
          <Tab linksQty={notOk.quantity} title="Problems" />
          <Tab linksQty={redirected.quantity} title="Redirects" />
        </TabList>

        <TabPanels pb={20}>
          <TabPanel p={0}>
            <LinkList categorizedLinks={all.links} />
          </TabPanel>
          {fragments.quantity && (
            <TabPanel p={0}>
              <LinkList categorizedLinks={fragments.links} />
            </TabPanel>
          )}
          {notOk.quantity && (
            <TabPanel p={0}>
              <LinkList categorizedLinks={notOk.links} />
            </TabPanel>
          )}
          {redirected.quantity && (
            <TabPanel p={0}>
              <LinkList categorizedLinks={redirected.links} />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </React.Fragment>
  )
}

export default CategoryTabs
