import React from 'react'
import { IconButton, Input, Stack } from '@chakra-ui/react'
import { CodeIcon } from '../icons'

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const SearchFilter = ({ setFilter }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const expandAll = () => {
    const accordionButton = document.querySelectorAll('[data-accordion-button]')
    console.log(accordionButton)
  }

  return (
    <Stack px={4} direction="row" spacing={3}>
      <Input
        onChange={handleChange}
        size="sm"
        mb={3}
        type="text"
        variant="filled"
        placeholder="Filter by keyword"
      />
      <IconButton
        aria-label="Expand all"
        variant="filled"
        icon={<CodeIcon />}
      />
      <IconButton
        aria-label="Collapse all"
        variant="filled"
        icon={<CodeIcon />}
      />
    </Stack>
  )
}

export default SearchFilter
