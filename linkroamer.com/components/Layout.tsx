import { Box } from '@chakra-ui/react'
import React from 'react'
import { Children } from 'types'
import Footer from './Footer'
import TopNav from './TopNav'

const Layout = ({ children }: Children) => (
  <Box px={[4, 8]} maxWidth="1560px" mx="auto">
    <TopNav />
    {children}
    <Footer />
  </Box>
)

export default Layout
