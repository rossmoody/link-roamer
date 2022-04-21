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
} from '../icons'
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
          <MenuItem
            onClick={() => setShowBookmark(true)}
            icon={<BookmarkIcon />}
          >
            Bookmark links
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => LinkActions.jsonToFile(checkedItems)}
            value="export-json"
            icon={<JsonFileIcon />}
          >
            Export as JSON
          </MenuItem>
          <MenuItem
            onClick={() => LinkActions.csvToFile(checkedItems)}
            value="export-csv"
            icon={<CsvFileIcon />}
          >
            Export as CSV
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => LinkActions.jsonToClipboard(checkedItems)}
            value="copy-json"
            icon={<JsonCopyIcon />}
          >
            Copy JSON
          </MenuItem>
          <MenuItem
            onClick={() => LinkActions.csvToClipboard(checkedItems)}
            value="copy-csv"
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
