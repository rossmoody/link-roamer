import { Fade, Spinner, Tag, TagLabel } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useData } from '../../providers/DataProvider'
import linkProcessor from '../../scripts/LinkProcessor'

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
      const brokenLinksQty = Object.keys(
        linkProcessor.filter404Links(data.links),
      ).length

      brokenLinksQty
        ? setState({
            label: `Found ${brokenLinksQty} 404 link${
              brokenLinksQty < 2 ? '' : 's'
            }`,
            colorScheme: 'red',
          })
        : setState({
            label: 'All good',
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
