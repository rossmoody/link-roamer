import { ChakraProvider, ColorMode, extendTheme } from '@chakra-ui/react'
import React from 'react'
import c from '../scripts/Chrome'
import { Children } from '../types'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: '100%',
      },
    },
  },
  config: {
    initialColorMode: async () => await c.getStorage<ColorMode>('mode'),
  },
  semanticTokens: {
    colors: {
      textMuted: {
        default: 'gray.500',
        _dark: 'gray.400',
      },
    },
  },
  colors: {
    blurple: {
      '50': '#E9E8FC',
      '100': '#C2C0F7',
      '200': '#9C97F2',
      '300': '#756EEC',
      '400': '#4E46E7',
      '500': '#271DE2',
      '600': '#1F17B5',
      '700': '#171188',
      '800': '#0F0C5A',
      '900': '#08062D',
    },
  },
  shadows: {
    outline: '0 0 0 2px var(--chakra-colors-blurple-200)',
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'outline',
        size: 'sm',
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'blurple.200',
      },
    },
    Tabs: {
      defaultProps: {
        colorScheme: 'blurple',
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: 'blurple',
      },
    },
  },
})

const ThemeProvider = ({ children }: Children) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export default ThemeProvider
