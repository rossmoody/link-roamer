import { Box, FormLabel, Input, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const SearchFilter = ({ setFilter }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  return (
    <Box px={4}>
      <VisuallyHidden>
        <FormLabel htmlFor="filter-input">
          Filter links by typing in a keyword
        </FormLabel>
      </VisuallyHidden>
      <Input
        onChange={handleChange}
        size="sm"
        my={3}
        type="text"
        variant="filled"
        placeholder="Filter by keyword"
        id="filter-input"
      />
    </Box>
  )
}

export default SearchFilter
