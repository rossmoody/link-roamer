import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useData } from '../../providers/DataProvider'
import Link from '../../scripts/Link'
import LinkHandler from '../../scripts/LinkHandler'
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

  const lp = new LinkHandler(links)

  const all = {
    links: LinkHandler.categorizeByDomain(links),
    quantity: links.length,
  }

  const fragments = {
    links: LinkHandler.categorizeByDomain(lp.fragmentLinks),
    quantity: lp.fragmentLinks.length,
  }

  const notOk = {
    links: LinkHandler.categorizeByDomain(lp.notOkLinks),
    quantity: lp.notOkLinks.length,
  }

  const redirected = {
    links: LinkHandler.categorizeByDomain(lp.redirectedLinks),
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
