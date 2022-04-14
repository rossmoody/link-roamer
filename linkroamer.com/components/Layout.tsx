import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import TopNav from './TopNav'
import { Children } from './types'

const Layout = ({ children }: Children) => (
  <Box px={[4, 12, 16]} maxWidth="1560px" mx="auto">
    <TopNav />
    {children}
    <Footer />
  </Box>
)

export default Layout
