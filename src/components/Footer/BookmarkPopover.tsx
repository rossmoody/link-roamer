import React from 'react'
import {
  Box,
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
  Tooltip,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react'
import c from '../../scripts/Chrome'
import { useCheckedItems } from '../../providers/CheckedItems'
import Link from '../../scripts/Link'
import ReactFocusLock from 'react-focus-lock'

const BookmarkPopover: React.FC = ({ children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { checkedItems } = useCheckedItems()
  const inputRef = React.useRef<HTMLInputElement>(null)

  async function createBookmark() {
    const { id } = await c.createBookmarkFolder(
      inputRef.current?.value ?? 'Link Roamer',
    )

    checkedItems.forEach((url) => {
      const prettyUrl = new Link(url).displayHref
      c.createBookmark(prettyUrl, id, url)
    })
  }

  return (
    <Popover
      placement="top"
      initialFocusRef={inputRef}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <Tooltip aria-label="tooltip" label="Bookmark selected links">
        <Box>
          <PopoverTrigger>
            <PopoverTrigger>{children}</PopoverTrigger>
          </PopoverTrigger>
        </Box>
      </Tooltip>

      <PopoverContent>
        <ReactFocusLock>
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            <Heading size="sm">Set a folder title</Heading>
            <Text fontWeight="normal" color="gray.600" fontSize="sm" mt={1}>
              This folder will be initially created inside the &quot;Other
              Bookmarks&quot; directory.
            </Text>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <VisuallyHidden>
              <FormLabel htmlFor="bookmark-input">
                Set a bookmark folder title
              </FormLabel>
            </VisuallyHidden>
            <Input type="text" ref={inputRef} id="bookmark-input" />
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
                colorScheme="blurple"
                onClick={createBookmark}
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

export default BookmarkPopover
