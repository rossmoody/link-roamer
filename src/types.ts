import lp from './scripts/LinkProcessor'
import Link from './scripts/Link'

export type CategorizedLinks = ReturnType<typeof lp['categorizeByDomain']>

export type LinkData = {
  links: Link[]
  categorizedLinks: CategorizedLinks
}
