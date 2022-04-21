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
import {
  BookmarkIcon,
  CsvCopyIcon,
  CsvFileIcon,
  JsonCopyIcon,
  JsonFileIcon,
  MoreIcon,
} from '../icons'
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
          <MenuItem
            onClick={() => setShowBookmark(true)}
            icon={<BookmarkIcon />}
          >
            Bookmark links
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => LinkActions.jsonToFile(checkedItems)}
            icon={<JsonFileIcon />}
          >
            Export as JSON
          </MenuItem>
          <MenuItem
            onClick={() => LinkActions.csvToFile(checkedItems)}
            icon={<CsvFileIcon />}
          >
            Export as CSV
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => LinkActions.jsonToClipboard(checkedItems)}
            icon={<JsonCopyIcon />}
          >
            Copy JSON
          </MenuItem>
          <MenuItem
            onClick={() => LinkActions.csvToClipboard(checkedItems)}
            icon={<CsvCopyIcon />}
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
