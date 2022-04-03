import { Badge, Flex, Link as ChakraLink, ListItem } from '@chakra-ui/react'
import React from 'react'
import Link from '../../scripts/Link'

type Props = {
  link: Link
}

const LinkItem = ({ link }: Props) => {
  const isHttp = link.protocol === 'http:'

  return (
    <ListItem key={link.href}>
      <Flex justifyContent="space-between">
        <ChakraLink href={link.href} target="_blank" rel="noreferrer">
          {link.displayHref}
        </ChakraLink>
        {isHttp && <Badge colorScheme="red">HTTP: Not secure</Badge>}
      </Flex>
    </ListItem>
  )
}

export default LinkItem
