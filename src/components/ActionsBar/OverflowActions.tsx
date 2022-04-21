import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import LinkProcessor from '../../scripts/LinkHandler'
import { MoreIcon } from '../icons/MoreIcon'
import BookmarkModal from './BookmarkModal'

const OverflowActions = () => {
  const { checkedItems } = useCheckedItems()
  const [showBookmark, setShowBookmark] = React.useState(false)

  return (
    <React.Fragment>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="solid"
          icon={<MoreIcon />}
        />
        <MenuList>
          <MenuItem fontSize="md" onClick={() => setShowBookmark(true)}>
            Bookmark links
          </MenuItem>
          <MenuDivider />
          <MenuItem
            fontSize="md"
            onClick={() => {
              LinkProcessor.copyToClipBoard('')
            }}
          >
            Export as JSON
          </MenuItem>
          <MenuItem
            fontSize="md"
            onClick={() => {
              LinkProcessor.copyToClipBoard('')
            }}
          >
            Export as CSV
          </MenuItem>
          <MenuDivider />
          <MenuItem
            fontSize="md"
            onClick={() => {
              LinkProcessor.copyToClipBoard('')
            }}
          >
            Copy JSON
          </MenuItem>
          <MenuItem
            fontSize="md"
            onClick={() => {
              LinkProcessor.copyToClipBoard('')
            }}
          >
            Copy CSV
          </MenuItem>
        </MenuList>
      </Menu>
      <BookmarkModal state={showBookmark} setState={setShowBookmark} />
    </React.Fragment>
  )
}

export default OverflowActions
