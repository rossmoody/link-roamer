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
import LinkActions from '../../scripts/LinkActions'
import { MoreIcon } from '../icons/MoreIcon'
import BookmarkModal from './BookmarkModal'

const OverflowActions = () => {
  const [showBookmark, setShowBookmark] = React.useState(false)
  const { checkedItems } = useCheckedItems()

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
            onClick={() => LinkActions.jsonToFile(checkedItems)}
            value="export-json"
            fontSize="md"
          >
            Export as JSON
          </MenuItem>
          <MenuItem
            onClick={() => LinkActions.csvToFile(checkedItems)}
            value="export-csv"
            fontSize="md"
          >
            Export as CSV
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => LinkActions.jsonToClipboard(checkedItems)}
            value="copy-json"
            fontSize="md"
          >
            Copy JSON
          </MenuItem>
          <MenuItem
            onClick={() => LinkActions.csvToClipboard(checkedItems)}
            value="copy-csv"
            fontSize="md"
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
