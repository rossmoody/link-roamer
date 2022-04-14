import type { AppProps } from 'next/app'
import React from 'react'
import GoogleAnalytics from '../components/GoogleAnalytics'
import ThemeProvider from '../providers/ThemeProvider'

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
