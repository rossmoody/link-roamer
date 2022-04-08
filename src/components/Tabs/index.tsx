import React from 'react'
import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useData } from '../../providers/DataProvider'
import LinkList from '../LinkList'
import lp from '../../scripts/LinkProcessor'
import { BrokenLinkIcon, HashIcon } from '../icons'
import Tab from './Tab'
import Link from '../../scripts/Link'

const CategoryTabs = () => {
  const [links, setLinks] = React.useState<Link[]>([])
  const { data } = useData()

  React.useEffect(() => {
    setLinks(data.links)
  }, [data.links.length])

  const categorized = lp.categorizeByDomain(links)
  const fragments = lp.filterFragmentLinks(links)
  const broken = lp.filterBrokenLinks(links)

  return (
    <Tabs isLazy>
      <TabList px={4}>
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
  )
}

export default CategoryTabs
