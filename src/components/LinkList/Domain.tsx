import React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Checkbox,
  UnorderedList,
} from '@chakra-ui/react'
import Link from '../../scripts/Link'
import LinkItem from './LinkItem'

type Props = {
  domain: string
  links: Link[]
}

const Domain = ({ domain, links }: Props) => {
  const containsHttp = links.some((link) => link.protocol === 'http:')

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Checkbox />
          <AccordionIcon />
          <Box flex="1" textAlign="left">
            {domain} <Badge>{links.length}</Badge>
          </Box>
          {containsHttp && (
            <Badge colorScheme="red" size="sm">
              Contains HTTP
            </Badge>
          )}
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
