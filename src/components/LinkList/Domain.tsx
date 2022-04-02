import React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  UnorderedList,
} from '@chakra-ui/react'
import Link from '../../scripts/Link'
import LinkItem from './LinkItem'

type Props = {
  domain: string
  links: Link[]
}

const Domain = ({ domain, links }: Props) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <AccordionIcon />
          <Box flex="1" textAlign="left">
            {domain} <Badge>{links.length}</Badge>
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <UnorderedList>
          {links.map((link) => (
            <LinkItem link={link} key={link.href} />
          ))}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default Domain
