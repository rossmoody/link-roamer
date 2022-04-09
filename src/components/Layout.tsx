import React from 'react'
import { Box } from '@chakra-ui/react'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <Box w={600} h={600} position="relative" overflowX="hidden">
    {children}
  </Box>
)

export default Layout
