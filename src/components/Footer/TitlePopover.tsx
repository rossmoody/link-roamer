import React from 'react'
import {
  Button,
  ButtonGroup,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react'
import c from '../../scripts/Chrome'
import { useCheckedItems } from '../../providers/CheckedItems'

const TitlePopover: React.FC = ({ children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { checkedItems } = useCheckedItems()
  const inputRef = React.useRef<HTMLInputElement>(null)

  async function createTabGroup() {
    const tabIds = await Promise.all(
      checkedItems.map(async (href) => {
        const tab = await c.createBackgroundTab(href)
        return tab.id as number
      }),
    )

    const title = inputRef.current?.value ?? ''
    const groupId = await c.createTabGroup(tabIds)
    await c.updateTabGroup(groupId, title)
    onClose()
  }

  return (
    <Popover
      placement="top"
      initialFocusRef={inputRef}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          <Heading size="sm">Title</Heading>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Input type="text" ref={inputRef} />
        </PopoverBody>
        <PopoverFooter
          border="0"
          d="flex"
          alignItems="center"
          justifyContent="flex-end"
          pb={4}
        >
          <ButtonGroup size="sm">
            <Button onClick={onClose}>Cancel</Button>
            <Button
              variant="solid"
              colorScheme="purple"
              onClick={createTabGroup}
            >
              Create
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default TitlePopover
