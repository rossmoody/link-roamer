import { Fade, Spinner, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { useData } from '../providers/DataProvider'

const FetchLoader = () => {
  const { data } = useData()

  return (
    <Fade in={data.loading}>
      <Tooltip aria-label="tooltip" label="Checking for broken links">
        <Spinner
          pos="absolute"
          top={6}
          right={6}
          thickness="2px"
          speed="0.5s"
          emptyColor="gray.200"
          color="blurple.500"
          size="sm"
        />
      </Tooltip>
    </Fade>
  )
}

export default FetchLoader
