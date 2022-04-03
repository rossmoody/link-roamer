import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  SlideFade,
  Stack,
  Tooltip,
} from '@chakra-ui/react'
import { BookmarkIcon, ExternalLinkIcon, NewTabIcon } from '../icons'
import c from '../../scripts/Chrome'
import TitlePopover from './TitlePopover'

const Index = () => {
  const { checkedItems } = useCheckedItems()

  const checkedItemsQty = checkedItems.length
  const showFooter = checkedItemsQty > 0

  async function createNewWindowTabs() {
    await c.createTabsInNewWindow(checkedItems)
  }

  return (
    <Box as="footer" position="fixed" bottom={4} left={4} right={4}>
      <SlideFade in={showFooter} offsetY="20px" unmountOnExit>
        <Flex
          p={4}
          alignItems="center"
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          justifyContent="space-between"
          outline="1px solid"
          outlineColor="gray.100"
        >
          <Stack spacing={3} direction="row">
            <Tooltip label="Bookmark selected links" placement="right-end">
              <IconButton
                size="sm"
                aria-label="Bookmark the checked links"
                icon={<BookmarkIcon />}
                variant="outline"
              />
            </Tooltip>
          </Stack>
          <ButtonGroup size="sm">
            <Button
              variant="outline"
              leftIcon={<ExternalLinkIcon />}
              onClick={createNewWindowTabs}
            >
              Create new window
            </Button>
            <TitlePopover>
              <Button
                variant="solid"
                colorScheme="purple"
                leftIcon={<NewTabIcon />}
              >
                Create tab group
              </Button>
            </TitlePopover>
          </ButtonGroup>
        </Flex>
      </SlideFade>
    </Box>
  )
}

export default Index
