import React from 'react'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { MoreIcon } from '../icons/MoreIcon'
import { BookmarkIcon } from '../icons'
import BookmarkModal from './BookmarkModal'

const OverflowActions = () => {
  const [showBookmark, setShowBookmark] = React.useState(false)

  return (
    <React.Fragment>
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<MoreIcon />} />
        <MenuList>
          <MenuItem
            icon={<BookmarkIcon />}
            onClick={() => setShowBookmark(true)}
          >
            Bookmark links
          </MenuItem>
        </MenuList>
      </Menu>
      <BookmarkModal state={showBookmark} setState={setShowBookmark} />
    </React.Fragment>
  )
}

export default OverflowActions
