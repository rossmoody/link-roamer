import { Spinner, Tooltip } from '@chakra-ui/react'
import React from 'react'

type Result = 'problem' | 'loading' | 'done'

const FetchLoader = () => {
  const [state, setState] = React.useState<Result>('loading')

  return (
    <Tooltip aria-label="tooltip" label="Looking for broken links">
      <Spinner
        pos="absolute"
        top={4}
        right={4}
        thickness="2px"
        speed="0.5s"
        emptyColor="gray.200"
        color="blurple.500"
        size="sm"
      />
    </Tooltip>
  )
}

export default FetchLoader
