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
