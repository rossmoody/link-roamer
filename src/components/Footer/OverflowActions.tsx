import React from 'react'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { MoreIcon } from '../icons/MoreIcon'
import BookmarkModal from './BookmarkModal'
import { useCheckedItems } from '../../providers/CheckedItems'
import lp from '../../scripts/LinkProcessor'

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
            onClick={() => lp.saveHrefsToJsonFile(checkedItems)}
          >
            Export as JSON
          </MenuItem>
          <MenuItem
            fontSize="md"
            onClick={() => lp.saveHrefsToCsvFile(checkedItems)}
          >
            Export as CSV
          </MenuItem>
          <MenuDivider />
          <MenuItem fontSize="md" onClick={() => lp.copyJson(checkedItems)}>
            Copy as JSON
          </MenuItem>
          <MenuItem fontSize="md" onClick={() => lp.copyCsv(checkedItems)}>
            Copy as CSV
          </MenuItem>
        </MenuList>
      </Menu>
      <BookmarkModal state={showBookmark} setState={setShowBookmark} />
    </React.Fragment>
  )
}

export default OverflowActions
