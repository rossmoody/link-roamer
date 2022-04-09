import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import c from '../../scripts/Chrome'
import { useData } from '../../providers/DataProvider'
import lp from '../../scripts/LinkProcessor'
import FetchLoader from './FetchLoader'
import ThemeToggle from './ThemeToggle'
import getDomain from '../../scripts/execute-scripts'

const Header = () => {
  const [domain, setDomain] = useState('')
  const { data } = useData()

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await c.getActiveTab()

      if (id) {
        const domainName = await c.executeScript<string>(id, getDomain)
        setDomain(domainName)
      }
    }

    fetchData().catch(console.error)
  }, [data])

  return (
    <Box as="header" p={6} pos="relative">
      <Flex justifyContent="space-between">
        <Box>
          <Heading size="lg" fontWeight="bold">
            {domain}
          </Heading>
          <Text color="textMuted" fontSize="sm">
            Found {data.links.length} links across{' '}
            {Object.keys(lp.categorizeByDomain(data.links)).length} different
            domains
          </Text>
        </Box>
        <Stack direction="row" spacing={3} alignItems="center">
          <FetchLoader />
          <ThemeToggle />
        </Stack>
      </Flex>
    </Box>
  )
}

export default Header
