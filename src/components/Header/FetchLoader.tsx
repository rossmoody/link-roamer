import { Fade, Spinner, Tag, TagLabel } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useData } from '../../providers/DataProvider'
import LinksHandler from '../../scripts/LinksHandler'

const initialConfig = {
  label: 'Checking links',
  colorScheme: 'gray',
}

const FetchLoader = () => {
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState(initialConfig)
  const { data } = useData()

  useEffect(() => {
    if (!data.loading) {
      const brokenQty = new LinksHandler(data.links).fourOhFourLinks.length

      brokenQty
        ? setState({
            label: `404${brokenQty < 2 ? '' : 's'} found`,
            colorScheme: 'red',
          })
        : setState({
            label: 'No 404s',
            colorScheme: 'green',
          })

      setTimeout(setLoading, 2400, false)
    }
  }, [data.loading])

  return (
    <Fade in={loading} unmountOnExit>
      <Tag size="md" colorScheme={state.colorScheme}>
        <TagLabel>{state.label}</TagLabel>
        {data.loading && (
          <Spinner
            ml={2}
            thickness="1px"
            speed="0.5s"
            emptyColor="gray.200"
            color="blurple.400"
            size="xs"
          />
        )}
      </Tag>
    </Fade>
  )
}

export default FetchLoader
