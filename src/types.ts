import Link from './scripts/Link'

export type CategorizedLinks = Record<string, Link[]>

export type LinkData = {
  links: Link[]
  fragmentLinks: CategorizedLinks
  categorizedLinks: CategorizedLinks
}
