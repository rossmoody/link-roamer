import React from 'react'
import Link from './scripts/Link'

export type CategorizedLinks = Record<string, Link[]>

export type Message = {
  action: 'fetchLinks'
  data: string
}

export type LinkData = {
  loading: boolean
  links: Link[]
}

export type Children = {
  children: React.ReactNode
}

export type LinkStatus = {
  url: {
    original: string
    resolved: string
    redirected: null
  }
  base: {
    original: null | string
    resolved: null | string
  }
  html: {
    index: null | string
    offsetIndex: null | string
    location: null | string
    selector: null | string
    tagName: null | string
    attrName: null | string
    attrs: null | string
    text: null | string
    tag: null | string
  }
  http: {
    cached: boolean
    response: {
      headers: Record<string, string>
      httpVersion: string
      redirects: any[]
      statusCode: number
      statusMessage: string
      url: string
    }
    internal: null | string
    samePage: null | string
  }
  broken: boolean
  brokenReason: null | string
  internal: null
  samePage: null
  excluded: null
  excludedReason: null
}
