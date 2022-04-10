import React from 'react'
import { Box } from '@chakra-ui/react'
import { Children } from '../types'

const Layout = ({ children }: Children) => (
  <Box w={600} h={600} position="relative" overflowX="hidden">
    {children}
  </Box>
)

export default Layout
