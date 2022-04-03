import React from 'react'
import { useCheckedItems } from '../providers/CheckedItems'
import {
  Box,
  Button,
  Flex,
  IconButton,
  SlideFade,
  Stack,
} from '@chakra-ui/react'
import { ExternalLinkIcon, NewTabIcon } from './icons'
import c from '../scripts/Chrome'

const Footer = () => {
  const { checkedItems } = useCheckedItems()

  const checkedItemsQty = checkedItems.length
  const showFooter = checkedItemsQty > 0

  async function createTabGroup() {
    const tabIds = await Promise.all(
      checkedItems.map(async (href) => {
        const tab = await c.createBackgroundTab(href)
        return tab.id as number
      }),
    )

    const groupId = await c.createTabGroup(tabIds)
    await c.updateTabGroup(groupId)
  }

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
            <IconButton
              size="sm"
              aria-label="More actions"
              icon={<NewTabIcon />}
              variant="outline"
            />
            <IconButton
              size="sm"
              aria-label="More actions"
              icon={<NewTabIcon />}
              variant="outline"
            />
          </Stack>
          <Stack spacing="3" direction="row">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<ExternalLinkIcon />}
              onClick={createNewWindowTabs}
            >
              Create new window
            </Button>
            <Button
              variant="solid"
              colorScheme="purple"
              size="sm"
              leftIcon={<NewTabIcon />}
              onClick={createTabGroup}
            >
              Create tab group
            </Button>
          </Stack>
        </Flex>
      </SlideFade>
    </Box>
  )
}

export default Footer
