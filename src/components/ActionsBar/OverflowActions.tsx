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
import { MoreIcon } from '../icons/MoreIcon'
import BookmarkModal from './BookmarkModal'

const OverflowActions = () => {
  const { checkedItems } = useCheckedItems()
  const [showBookmark, setShowBookmark] = React.useState(false)

  console.log(checkedItems)
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
            onClick={(event) => {
              console.log(event)
            }}
          >
            Export as JSON
          </MenuItem>
          <MenuItem fontSize="md">Export as CSV</MenuItem>
          <MenuDivider />
          <MenuItem fontSize="md">Copy JSON</MenuItem>
          <MenuItem fontSize="md">Copy CSV</MenuItem>
        </MenuList>
      </Menu>
      <BookmarkModal state={showBookmark} setState={setShowBookmark} />
    </React.Fragment>
  )
}

export default OverflowActions
