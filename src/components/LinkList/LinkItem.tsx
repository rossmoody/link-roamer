import {
  Button,
  Center,
  Checkbox,
  Fade,
  Flex,
  Link as ChakraLink,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Link from '../../scripts/Link'
import Tag from '../Tag'
import { useCheckedItems } from '../../providers/CheckedItems'
import { ExternalLinkIcon } from '../icons'
import c from '../../scripts/Chrome'

type Props = {
  link: Link
}

const LinkItem = ({ link }: Props) => {
  const [hover, setHover] = useState(false)
  const { checkedItems, setCheckedItems } = useCheckedItems()
  const bg = useColorModeValue('white', 'gray.800')

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
  const isBroken = link.requestStatus === 404

  return (
    <ListItem
      pl={7}
      position="relative"
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
        {isHttp && <Tag status="critical">Not secure</Tag>}
        {isBroken && <Tag status="critical">404</Tag>}
      </Flex>
      {!isHttp && !isBroken && (
        <Fade in={hover}>
          <Center
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            margin="auto"
            bg={bg}
          >
            <Button
              size="xs"
              leftIcon={<ExternalLinkIcon height="12px" />}
              onClick={() => c.createBackgroundTab(link.href)}
            >
              Open in background
            </Button>
          </Center>
        </Fade>
      )}
    </ListItem>
  )
}

export default LinkItem
