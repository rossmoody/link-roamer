import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Checkbox,
  Heading,
  HStack,
  List,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import Link from '../../scripts/Link'
import LinksHandler from '../../scripts/LinksHandler'
import Favicon from '../Favicon'
import QuantityTag from '../ResponseTag'
import LinkItem from './LinkItem'

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
      ? setCheckedItems((prev) => prev.filter((item) => !hrefs.includes(item)))
      : setCheckedItems((prev) => [...prev, ...hrefs])
  }

  const lp = new LinksHandler(links)
  const httpQty = lp.httpLinks.length
  const brokenQty = lp.fourOhFourLinks.length

  return (
    <AccordionItem>
      <h2>
        <AccordionButton py={3}>
          <Stack direction="row" spacing={2} alignItems="center" mr="auto">
            <Checkbox
              aria-label={`Select all the links that belong to ${domain}`}
              id={domain}
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
          <HStack spacing={1}>
            {httpQty && (
              <QuantityTag quantity={httpQty} colorScheme="yellow" size="sm">
                HTTP
              </QuantityTag>
            )}
            {brokenQty && (
              <QuantityTag quantity={brokenQty} colorScheme="red" size="sm">
                404
              </QuantityTag>
            )}
          </HStack>
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
