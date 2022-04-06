import Link from './scripts/Link'

export type CategorizedLinks = Record<string, Link[]>

export type Message = {
  action: 'fetchLinks'
  data: string
}

export type LinkStatus = {
  status: number
  url: string
  statusText: string
}
