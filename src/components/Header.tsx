import React, { useEffect, useState } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import c from '../scripts/Chrome'
import getDomain from '../scripts/execute-scripts'
import { useData } from '../providers/DataProvider'
import lp from '../scripts/LinkProcessor'
import FetchLoader from './FetchLoader'

const Header = () => {
  const [domain, setDomain] = useState('')
  const { data } = useData()

  useEffect(() => {
    (async () => {
      const { id } = await c.getActiveTab()

      if (id) {
        const domainName = await c.executeScript<string>(id, getDomain)
        setDomain(domainName)
      }
    })()
  }, [data])

  return (
    <Box as="header" p={6} pos="relative">
      <Heading size="lg" fontWeight="bold">
        {domain}
      </Heading>
      <Text color="gray.500" fontSize="sm">
        Found {data.length} links across{' '}
        {Object.keys(lp.categorizeByDomain(data)).length} different domains
      </Text>
      <FetchLoader />
    </Box>
  )
}

export default Header
