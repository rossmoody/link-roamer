import { Checkbox, FormLabel, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import Link from '../../scripts/Link'

type Props = {
  filteredLinks: Link[]
}

const SelectAll = ({ filteredLinks }: Props) => {
  const { checkedItems, setCheckedItems } = useCheckedItems()

  const allChecked =
    filteredLinks.every((link) => checkedItems.includes(link.href)) &&
    filteredLinks.length > 0

  const isIndeterminate =
    filteredLinks.some((link) => checkedItems.includes(link.href)) &&
    !allChecked

  const handleChange = () => {
    const hrefs = filteredLinks.map((link) => link.href)

    allChecked
      ? setCheckedItems((prev) => prev.filter((item) => !hrefs.includes(item)))
      : setCheckedItems((prev) => [...prev, ...hrefs])
  }

  return (
    <React.Fragment>
      <VisuallyHidden>
        <FormLabel htmlFor="select-all">
          Select all the available links
        </FormLabel>
      </VisuallyHidden>
      <Checkbox
        id="select-all"
        ml={1}
        mr={2}
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={handleChange}
      />
    </React.Fragment>
  )
}

export default SelectAll
