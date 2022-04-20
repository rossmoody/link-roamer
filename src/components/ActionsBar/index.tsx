import {
  Button,
  ButtonGroup,
  Flex,
  SlideFade,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import c from '../../scripts/Chrome'
import { ExternalLinkIcon } from '../icons'
import OverflowActions from './OverflowActions'
import TabGroupPopover from './TabGroupPopover'

const ActionsBar = () => {
  const { checkedItems } = useCheckedItems()
  const checkedItemsQty = checkedItems.length
  const showFooter = checkedItemsQty > 0

  const bg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.600')

  async function createNewWindowTabs() {
    await c.createTabsInNewWindow(checkedItems)
  }

  return (
    <Flex as="aside" position="fixed" bottom={4} left={4} right={4}>
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
            <OverflowActions />
            <Button
              variant="solid"
              leftIcon={<ExternalLinkIcon />}
              onClick={createNewWindowTabs}
            >
              Open in new window
            </Button>
            {'isV3Manifest' && <TabGroupPopover />}
          </ButtonGroup>
        </Flex>
      </SlideFade>
    </Flex>
  )
}

export default ActionsBar
