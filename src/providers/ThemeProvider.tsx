import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
    outline: '0 0 0 2px var(--chakra-colors-blurple-100)',
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
        focusBorderColor: 'blurple.100',
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

const ThemeProvider: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export default ThemeProvider
