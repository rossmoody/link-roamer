import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import { useData } from '../../providers/DataProvider'

const SelectAll = () => {
  const { data } = useData()
  const { checkedItems, setCheckedItems } = useCheckedItems()

  const allChecked = data.links.every((link) =>
    checkedItems.includes(link.href)
  )

  const isIndeterminate =
    data.links.some((link) => checkedItems.includes(link.href)) && !allChecked

  const handleChange = () => {
    const hrefs = data.links.map((link) => link.href)

    allChecked
      ? setCheckedItems((prev) => prev.filter((item) => !hrefs.includes(item)))
      : setCheckedItems((prev) => [...prev, ...hrefs])
  }

  return (
    <Checkbox
      mr={3}
      isChecked={allChecked}
      isIndeterminate={isIndeterminate}
      onChange={handleChange}
    />
  )
}

export default SelectAll
