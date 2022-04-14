import type { AppProps } from 'next/app'
import Script from 'next/script'
import ThemeProvider from 'providers/ThemeProvider'
import React from 'react'

export const GA_ID = 'G-DMHE4EK4PR'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
      </Script>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
