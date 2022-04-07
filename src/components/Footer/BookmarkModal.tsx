import React, { ReactNode } from 'react'
import {
  Button,
  ButtonGroup,
  FormLabel,
  Heading,
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
  children: ReactNode
}

const BookmarkModal = ({ children, state, setState }: Props) => {
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
    <Modal isOpen={state} onClose={() => setState(false)}>
      <ModalOverlay />
      <ReactFocusLock>
        <ModalContent>
          <ModalHeader>
            <Heading size="sm">Set a folder title</Heading>
            <Text fontWeight="normal" color="textMuted" fontSize="sm" mt={1}>
              The folder will be created initially inside the &quot;Other
              Bookmarks&quot; directory.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
