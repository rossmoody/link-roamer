import { ReactNode } from 'react'

export type Children = {
  children: ReactNode
}

export type IconProps = {
  size?: number
}

export type HighlightData = {
  color: string
  logo: React.ReactNode
  subtitle: string
  title: string
  description: string | ReactNode
}

export enum Links {
  chromeWebstore = 'https://chrome.google.com/webstore/detail/link-roamer/lgcgflalbmeodapiohjepkjlgipmhofe',
  firefoxMarketplace = 'https://addons.mozilla.org/en-US/firefox/addon/link-roamer/',
  operaMarketplace = 'https://addons.opera.com/en/extensions/details/link-roamer/',
  safariAppStore = '',
  svgGobbler = 'https://www.svggobbler.com',
  twitter = 'https://www.twitter.com/_rossmoody',
  githubRepo = 'https://www.github.com/rossmoody/link-roamer',
  githubIssues = 'https://github.com/rossmoody/link-roamer/issues',
  fourOhFour = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404',
  httpDangers = 'https://www.deptagency.com/en-us/insight/the-dangers-of-non-secure-http/',
}
