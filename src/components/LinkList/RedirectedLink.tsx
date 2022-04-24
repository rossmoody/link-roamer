import { Flex, Link as ChakraLink, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import Link from '../../scripts/Link'

type Props = {
  link: Link
}

const RedirectedLink = ({ link }: Props) => {
  if (!link.status.redirected) return null

  return (
    <Flex alignItems="center">
      <Tag size="sm" mr={1} minWidth="max-content">
        Redirect
      </Tag>
      <ChakraLink
        lineHeight={1}
        href={link.status.url}
        wordBreak="break-word"
        target="_blank"
      >
        <Text as="span" fontSize="14px">
          {link.status.url}
        </Text>
      </ChakraLink>
    </Flex>
  )
}

export default RedirectedLink
