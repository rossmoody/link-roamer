import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  SlideFade,
  Tooltip,
} from '@chakra-ui/react'
import { BookmarkIcon, ExternalLinkIcon, NewTabIcon } from '../icons'
import c from '../../scripts/Chrome'
import TabGroupPopover from './TabGroupPopover'
import BookmarkPopover from './BookmarkPopover'

const Index = () => {
  const { checkedItems } = useCheckedItems()

  const checkedItemsQty = checkedItems.length
  const showFooter = checkedItemsQty > 0

  async function createNewWindowTabs() {
    await c.createTabsInNewWindow(checkedItems)
  }

  return (
    <Flex
      as="footer"
      position="fixed"
      bottom={4}
      left={4}
      right={4}
      alignItems="center"
      justifyContent="center"
    >
      <SlideFade in={showFooter} offsetY="20px" unmountOnExit>
        <Flex
          py={4}
          px={6}
          alignItems="center"
          justifyContent="center"
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          outline="1px solid"
          outlineColor="gray.100"
        >
          <ButtonGroup>
            <Tooltip label="Bookmark selected links" shouldWrapChildren>
              <BookmarkPopover>
                <IconButton
                  aria-label="Bookmark the checked links"
                  icon={<BookmarkIcon />}
                />
              </BookmarkPopover>
            </Tooltip>
            <Button
              leftIcon={<ExternalLinkIcon />}
              onClick={createNewWindowTabs}
              isFullWidth
            >
              Create new window
            </Button>
            <TabGroupPopover>
              <Button isFullWidth leftIcon={<NewTabIcon />}>
                Create tab group
              </Button>
            </TabGroupPopover>
          </ButtonGroup>
        </Flex>
      </SlideFade>
    </Flex>
  )
}

export default Index
