import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter/100.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import React from 'react'
import { Children } from '../types'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    blurple: {
      '50': '#E9ECFB',
      '100': '#C2CAF4',
      '200': '#9BA9EE',
      '300': '#7487E7',
      '400': '#4D65E0',
      '500': '#2643D9',
      '600': '#1E36AE',
      '700': '#172882',
      '800': '#0F1B57',
      '900': '#080D2B',
    },
  },
})

const ThemeProvider = ({ children }: Children) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export default ThemeProvider
