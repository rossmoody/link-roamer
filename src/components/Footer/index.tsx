import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  SlideFade,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import { BookmarkIcon, ExternalLinkIcon, NewTabIcon } from '../icons'
import c from '../../scripts/Chrome'
import TabGroupPopover from './TabGroupPopover'
import BookmarkPopover from './BookmarkPopover'

const Index = () => {
  const { checkedItems } = useCheckedItems()
  const bg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.600')
  const checkedItemsQty = checkedItems.length
  const showFooter = checkedItemsQty > 0

  async function createNewWindowTabs() {
    await c.createTabsInNewWindow(checkedItems)
  }

  return (
    <Flex as="footer" position="fixed" bottom={4} left={4} right={4}>
      <SlideFade in={showFooter} offsetY="20px" style={{ flex: 1 }}>
        <Flex
          flex={1}
          py={3}
          px={5}
          alignItems="center"
          justifyContent="space-between"
          bg={bg}
          boxShadow="xl"
          borderRadius="lg"
          outline="1px solid"
          outlineColor={border}
        >
          <Tag size="sm" colorScheme="blurple">
            {checkedItemsQty} selected
          </Tag>
          <ButtonGroup>
            <BookmarkPopover>
              <IconButton
                aria-label="Bookmark the checked links"
                icon={<BookmarkIcon />}
              />
            </BookmarkPopover>
            <Button
              leftIcon={<ExternalLinkIcon />}
              onClick={createNewWindowTabs}
            >
              Open in new window
            </Button>
            <TabGroupPopover>
              <Button
                leftIcon={<NewTabIcon />}
                variant="solid"
                colorScheme="blurple"
              >
                Open in tab group
              </Button>
            </TabGroupPopover>
          </ButtonGroup>
        </Flex>
      </SlideFade>
    </Flex>
  )
}

export default Index
