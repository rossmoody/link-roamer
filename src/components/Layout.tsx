import React from 'react'
import { Box } from '@chakra-ui/react'

const Layout: React.FC = ({ children }) => (
  <Box w={600} h={800}>
    {children}
  </Box>
)

export default Layout
