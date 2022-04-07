import React from 'react'
import {
  Button,
  ButtonGroup,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import c from '../../scripts/Chrome'
import { useCheckedItems } from '../../providers/CheckedItems'
import Link from '../../scripts/Link'
import ReactFocusLock from 'react-focus-lock'

type Props = {
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const BookmarkModal = ({ state, setState }: Props) => {
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
    <Modal
      isOpen={state}
      onClose={() => setState(false)}
      size="sm"
      initialFocusRef={inputRef}
    >
      <ModalOverlay />
      <ReactFocusLock>
        <ModalContent>
          <ModalHeader>Set a folder title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="normal" color="textMuted" fontSize="sm" mb={4}>
              The folder will be created initially inside the &quot;Other
              Bookmarks&quot; directory.
            </Text>
            <VisuallyHidden>
              <FormLabel htmlFor="bookmark-input">
                Set a bookmark folder title
              </FormLabel>
            </VisuallyHidden>
            <Input type="text" ref={inputRef} id="bookmark-input" />
          </ModalBody>
          <ModalFooter>
            <ButtonGroup size="sm">
              <Button onClick={() => setState(false)}>Cancel</Button>
              <Button
                variant="solid"
                colorScheme="blurple"
                onClick={createBookmark}
              >
                Create
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </ReactFocusLock>
    </Modal>
  )
}

export default BookmarkModal
