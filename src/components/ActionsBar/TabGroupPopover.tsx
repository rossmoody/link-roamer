import {
  Button,
  ButtonGroup,
  FormLabel,
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
  Text,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react'
import React from 'react'
import ReactFocusLock from 'react-focus-lock'
import { useCheckedItems } from '../../providers/CheckedItems'
import c from '../../scripts/Chrome'
import { NewTabIcon } from '../icons'

const TabGroupPopover = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { checkedItems } = useCheckedItems()
  const inputRef = React.useRef<HTMLInputElement>(null)

  async function createTabGroup() {
    const tabIds = await Promise.all(
      checkedItems.map(async (href) => {
        const tab = await c.createBackgroundTab(href)
        return tab.id as number
      })
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
      {/*// @ts-ignore*/}
      <PopoverTrigger>
        <Button leftIcon={<NewTabIcon />} variant="solid">
          Open in tab group
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ReactFocusLock>
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            <Heading size="sm">Set a tab group title</Heading>
            <Text fontWeight="normal" color="textMuted" fontSize="sm" mt={1}>
              The title or tab group color can be changed later.
            </Text>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <VisuallyHidden>
              <FormLabel htmlFor="tab-group-input">
                Set a tab group title
              </FormLabel>
            </VisuallyHidden>
            <Input type="text" ref={inputRef} id="tab-group-input" />
          </PopoverBody>
          <PopoverFooter
            border="0"
            d="flex"
            alignItems="center"
            justifyContent="flex-end"
            pb={4}
          >
            <ButtonGroup>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                variant="solid"
                colorScheme="blurple"
                onClick={createTabGroup}
              >
                Create
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </ReactFocusLock>
      </PopoverContent>
    </Popover>
  )
}

export default TabGroupPopover
