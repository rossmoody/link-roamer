import React from 'react'
import { Input, Stack } from '@chakra-ui/react'

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const SearchFilter = ({ setFilter }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
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
    </Stack>
  )
}

export default SearchFilter
