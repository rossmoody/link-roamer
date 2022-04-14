import Script from 'next/script'
import React from 'react'

const GA_ID = 'G-DMHE4EK4PR'

const GoogleAnalytics = () => (
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
  </React.Fragment>
)

export default GoogleAnalytics
