import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  SlideFade,
} from '@chakra-ui/react'
import { BookmarkIcon, ExternalLinkIcon, NewTabIcon } from '../icons'
import c from '../../scripts/Chrome'
import TabGroupPopover from './TabGroupPopover'
import BookmarkPopover from './BookmarkPopover'
import SelectedQuantity from './SelectedQuantity'

const Index = () => {
  const { checkedItems } = useCheckedItems()

  const checkedItemsQty = checkedItems.length
  const showFooter = checkedItemsQty > 0

  async function createNewWindowTabs() {
    await c.createTabsInNewWindow(checkedItems)
  }

  return (
    <Flex as="footer" position="fixed" bottom={2} left={2} right={2}>
      <SlideFade in={showFooter} offsetY="20px" style={{ flex: 1 }}>
        <Flex
          flex={1}
          py={3}
          px={5}
          alignItems="center"
          justifyContent="space-between"
          bg="white"
          boxShadow="xl"
          borderRadius="lg"
          outline="1px solid"
          outlineColor="gray.200"
        >
          <SelectedQuantity linkQty={checkedItemsQty} />
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
