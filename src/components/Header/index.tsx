import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useData } from '../../providers/DataProvider'
import c from '../../scripts/Chrome'
import { getDomain } from '../../scripts/execute-scripts'
import lp from '../../scripts/LinksHandler'
import Favicon from '../Favicon'
import FetchLoader from './FetchLoader'
import ThemeToggle from './ThemeToggle'

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

    fetchData().catch(() => setDomain('Website'))
  }, [data])

  return (
    <Box as="header" pt={6} px={4} pb={2} pos="relative">
      <Flex justifyContent="space-between">
        <Box>
          <Flex alignItems="center" gap={2}>
            <Favicon size={24} domain={domain} />
            <Heading size="lg" fontWeight="bold">
              {domain}
            </Heading>
          </Flex>
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
