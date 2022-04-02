import { Link as ChakraLink, ListItem } from '@chakra-ui/react'
import React from 'react'
import Link from '../../scripts/Link'

type Props = {
  link: Link
}

const LinkItem = ({ link }: Props) => (
  <ListItem key={link.href}>
    <ChakraLink href={link.href} target="_blank" rel="noreferrer">
      {link.displayHref}
    </ChakraLink>
  </ListItem>
)

export default LinkItem
