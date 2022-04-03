import {
  Checkbox,
  Flex,
  Link as ChakraLink,
  ListItem,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import Link from '../../scripts/Link'
import Tag from '../Tag'
import { useCheckedItems } from '../../providers/CheckedItems'

type Props = {
  link: Link
}

const LinkItem = ({ link }: Props) => {
  const { checkedItems, setCheckedItems } = useCheckedItems()
  const isHttp = link.protocol === 'http:'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const value = event.target.value

    checked
      ? setCheckedItems((prevChecked) => [...prevChecked, value])
      : setCheckedItems((prevChecked) =>
          prevChecked.filter((href) => href !== value),
        )
  }

  return (
    <ListItem pl={8}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flex={1}>
          <Checkbox
            mr={3}
            value={link.href}
            isChecked={checkedItems.includes(link.href)}
            onChange={handleChange}
          />
          <ChakraLink
            href={link.href}
            target="_blank"
            rel="noreferrer"
            wordBreak="break-word"
          >
            <Text as="span" fontSize="14px">
              {link.href}
            </Text>
          </ChakraLink>
        </Flex>
        {isHttp && (
          <Tooltip
            label="This link is HTTP and does not provide an encrypted connection."
            shouldWrapChildren
          >
            <Tag status="critical">Not secure</Tag>
          </Tooltip>
        )}
      </Flex>
    </ListItem>
  )
}

export default LinkItem
