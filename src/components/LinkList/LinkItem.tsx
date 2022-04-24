import {
  Checkbox,
  Fade,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  ListItem,
  Tag,
  TagLeftIcon,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import c from '../../scripts/Chrome'
import Link from '../../scripts/Link'
import statusCodes from '../../status-codes'
import { ExternalLinkIcon, InfoIcon } from '../icons'

type Props = {
  link: Link
}

const LinkItem = ({ link }: Props) => {
  const [hover, setHover] = useState(false)
  const { checkedItems, setCheckedItems } = useCheckedItems()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const value = event.target.value

    checked
      ? setCheckedItems((prevChecked) => [...prevChecked, value])
      : setCheckedItems((prevChecked) =>
          prevChecked.filter((href) => href !== value)
        )
  }

  const isRedirected = link.status.redirected
  const isHttp = link.protocol === 'http:'
  const isNotOk = !link.status.ok
  const statusCode = link.status.status as keyof typeof statusCodes

  return (
    <ListItem
      pl={7}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flex={1}>
          <Checkbox
            aria-label={`Select the link check for ${link.href}`}
            mr={3}
            id={link.href}
            value={link.href}
            isChecked={checkedItems.includes(link.href)}
            onChange={handleChange}
          />
          <Flex direction="column" gap={2}>
            <ChakraLink
              href={link.href}
              wordBreak="break-word"
              target="_blank"
              lineHeight={1}
            >
              <Text as="span" fontSize="14px">
                {link.href}
              </Text>
            </ChakraLink>
            {isRedirected && (
              <Flex alignItems="center">
                <Tag size="sm" mr={1} minWidth="max-content">
                  Redirects
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
            )}
          </Flex>
        </Flex>
        <HStack spacing={1}>
          <Fade in={hover}>
            <Tooltip
              hasArrow
              fontSize="12px"
              placement="left"
              label="Open the link in a background tab without leaving the window"
            >
              <IconButton
                aria-label="Open Tab in background"
                size="xs"
                icon={<ExternalLinkIcon height="12px" />}
                onClick={() => c.createBackgroundTab(link.href)}
              />
            </Tooltip>
          </Fade>
          {isHttp && (
            <Tag size="sm" colorScheme="yellow">
              HTTP
            </Tag>
          )}
          {isNotOk && (
            <Tooltip
              shouldWrapChildren
              hasArrow
              fontSize="12px"
              placement="left"
              label={statusCodes[statusCode]?.description}
            >
              <Tag size="sm">
                <TagLeftIcon boxSize="12px" marginRight="4px" as={InfoIcon} />
                {statusCode}
              </Tag>
            </Tooltip>
          )}
        </HStack>
      </Flex>
    </ListItem>
  )
}

export default LinkItem
