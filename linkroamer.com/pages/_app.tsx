import GoogleAnalytics from 'components/GoogleAnalytics'
import type { AppProps } from 'next/app'
import ThemeProvider from 'providers/ThemeProvider'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GoogleAnalytics />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
