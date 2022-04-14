import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'
import { theme } from '../providers/ThemeProvider'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
