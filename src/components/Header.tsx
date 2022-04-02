import React, { useEffect, useState } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import chrome from '../scripts/Chrome'
import getDomain from '../scripts/execute-scripts'
import lp from '../scripts/LinkProcessor'
import { useLinks } from '../providers/LinksProvider'

const initialState = {
  domainName: '',
  hrefQty: 0,
  domainQty: 0,
}

const Header = () => {
  const [data, setData] = useState(initialState)
  const { links } = useLinks()

  useEffect(() => {
    (async () => {
      const { id } = await chrome.getActiveTab()

      if (id) {
        const domainName = await chrome.executeScript<string>(id, getDomain)

        setData({
          domainName,
          domainQty: Object.keys(lp.categorizeByDomain(links)).length,
          hrefQty: links.length,
        })
      }
    })()
  }, [links])

  return (
    <Box as="header" px={6} py={4}>
      <Heading size="lg">{data.domainName}</Heading>
      <Text>
        Found {data.hrefQty} links from {data.domainQty} different domains
      </Text>
    </Box>
  )
}

export default Header
