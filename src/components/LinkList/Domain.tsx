import React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Checkbox,
  List,
  Tooltip,
} from '@chakra-ui/react'
import Link from '../../scripts/Link'
import LinkItem from './LinkItem'
import Tag from '../Tag'
import { useCheckedItems } from '../../providers/CheckedItems'

type Props = {
  domain: string
  links: Link[]
}

const Domain = ({ domain, links }: Props) => {
  const { checkedItems, setCheckedItems } = useCheckedItems()

  const handleChange = () => {
    const hrefs = links.map((link) => link.href)

    if (allChecked)
      return setCheckedItems((prevChecked) =>
        prevChecked.filter((item) => !hrefs.includes(item)),
      )

    setCheckedItems((prevChecked) => [...prevChecked, ...hrefs])
  }

  const allChecked = links.every((link) => checkedItems.includes(link.href))
  const isIndeterminate =
    links.some((link) => checkedItems.includes(link.href)) && !allChecked
  const containsHttp = links.some((link) => link.protocol === 'http:')

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Checkbox
            mr={3}
            onChange={handleChange}
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
          />
          <AccordionIcon mr={2} />
          <Box flex="1" textAlign="left">
            {domain}
            <Badge ml={1}>{links.length}</Badge>
          </Box>
          {containsHttp && (
            <Tooltip
              label="Links within this domain may be broken or not secure"
              shouldWrapChildren
            >
              <Tag status="warning">Warning</Tag>
            </Tooltip>
          )}
        </AccordionButton>
      </h2>

      <AccordionPanel pb={4}>
        <List spacing={3}>
          {links.map((link) => (
            <LinkItem link={link} key={link.href} />
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default Domain
