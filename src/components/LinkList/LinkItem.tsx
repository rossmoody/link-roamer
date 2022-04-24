import {
  Checkbox,
  Flex,
  Link as ChakraLink,
  ListItem,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import Link from '../../scripts/Link'
import LinkSuffix from './LinkSuffix'
import RedirectedLink from './RedirectedLink'

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
            <RedirectedLink link={link} />
          </Flex>
        </Flex>
        <LinkSuffix link={link} hover={hover} />
      </Flex>
    </ListItem>
  )
}

export default LinkItem
