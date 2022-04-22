import { Box, Input } from '@chakra-ui/react'
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
      <Input
        onChange={handleChange}
        size="sm"
        my={3}
        type="text"
        variant="filled"
        placeholder="Filter by keyword"
      />
    </Box>
  )
}

export default SearchFilter
