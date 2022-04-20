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

export type LinkStatus =  {
  ok: boolean
  redirected: boolean
  status: number
  statusText: string
  type: ResponseType
  url: string
  headers: Record<string, string>
}
