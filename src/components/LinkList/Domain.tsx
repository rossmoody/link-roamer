import React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Checkbox,
  Heading,
  List,
  Stack,
} from '@chakra-ui/react'
import Link from '../../scripts/Link'
import LinkItem from './LinkItem'
import { useCheckedItems } from '../../providers/CheckedItems'
import Favicon from './Favicon'
import WarningTag from './WarningTag'

type Props = {
  domain: string
  links: Link[]
}

const Domain = ({ domain, links }: Props) => {
  const { checkedItems, setCheckedItems } = useCheckedItems()
  const allChecked = links.every((link) => checkedItems.includes(link.href))
  const isIndeterminate =
    links.some((link) => checkedItems.includes(link.href)) && !allChecked

  const handleChange = () => {
    const hrefs = links.map((link) => link.href)

    allChecked
      ? setCheckedItems((prevChecked) =>
          prevChecked.filter((item) => !hrefs.includes(item)),
        )
      : setCheckedItems((prevChecked) => [...prevChecked, ...hrefs])
  }
  return (
    <AccordionItem>
      <h2>
        <AccordionButton py={3} data-accordion-button>
          <Stack direction="row" spacing={2} alignItems="center" mr="auto">
            <Checkbox
              onChange={handleChange}
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
            />
            <Favicon domain={domain} />
            <Heading fontSize="md" fontWeight="semibold">
              {domain}
            </Heading>
            <Badge>{links.length}</Badge>
          </Stack>
          <WarningTag links={links} />
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List spacing={3}>
          {links.map((link, index) => (
            <LinkItem link={link} key={link.href + index} />
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default Domain
