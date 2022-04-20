import {
  Checkbox,
  Fade,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  ListItem,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import c from '../../scripts/Chrome'
import Link from '../../scripts/Link'
import statusCodes from '../../status-codes'
import { ExternalLinkIcon } from '../icons'

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
          prevChecked.filter((href) => href !== value),
        )
  }

  const isHttp = link.protocol === 'http:'
  const isBroken = link.status.broken
  const statusCode = link.status?.http?.response
    ?.statusCode as keyof typeof statusCodes

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
            mr={3}
            value={link.href}
            isChecked={checkedItems.includes(link.href)}
            onChange={handleChange}
          />
          <ChakraLink href={link.href} wordBreak="break-word" target="_blank">
            <Text as="span" fontSize="14px">
              {link.href}
            </Text>
          </ChakraLink>
        </Flex>
        <HStack spacing={1}>
          <Fade in={hover}>
            <IconButton
              aria-label="Open Tab in background"
              size="xs"
              icon={<ExternalLinkIcon height="12px" />}
              onClick={() => c.createBackgroundTab(link.href)}
            />
          </Fade>
          {isHttp && (
            <Tag size="sm" colorScheme="yellow">
              HTTP
            </Tag>
          )}
          {isBroken && (
            <Tooltip
              shouldWrapChildren
              hasArrow
              fontSize="12px"
              placement="left"
              label={statusCodes[statusCode]?.description}
            >
              <Tag size="sm" colorScheme="red">
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
