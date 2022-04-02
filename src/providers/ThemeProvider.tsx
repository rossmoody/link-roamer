import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const ThemeProvider: React.FC = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
)

export default ThemeProvider
