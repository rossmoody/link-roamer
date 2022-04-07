import React, { ReactElement } from 'react'
import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react'
import { useData } from '../providers/DataProvider'
import LinkList from './LinkList'
import lp from '../scripts/LinkProcessor'
import { CategorizedLinks } from '../types'
import { BrokenLinkIcon, HashIcon } from './icons'

const CategoryTabs = () => {
  const { data } = useData()

  const categorized = lp.categorizeByDomain(data.links)
  const fragments = lp.filterFragmentLinks(data.links)
  const broken = lp.filterBrokenLinks(data.links)

  return (
    <Tabs isLazy>
      <TabList px={4}>
        <CustomTab links={categorized} title="All" />
        <CustomTab links={fragments} title="Fragments" icon={<HashIcon />} />
        <CustomTab links={broken} title="404" icon={<BrokenLinkIcon />} />
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

type CustomTabProps = {
  links: CategorizedLinks
  title: string
  icon?: ReactElement
}

const CustomTab = React.forwardRef<HTMLButtonElement, CustomTabProps>(
  (props, ref) => {
    const linksQty = lp.getCategorizedLinksQty(props.links)
    const border = useColorModeValue('blurple.500', 'blurple.400')
    if (linksQty < 1) return null
    
    return (
      <Tab
        ref={ref}
        gap={1}
        _selected={{
          fontWeight: 'medium',
          borderBottom: '3px solid',
          borderColor: border,
        }}
      >
        {props.icon && props.icon}
        {props.title} <Badge>{linksQty}</Badge>
      </Tab>
    )
  },
)

export default CategoryTabs
