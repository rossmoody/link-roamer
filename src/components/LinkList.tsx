import React, { useMemo, useState } from 'react'
import Link from '../scripts/Link'
import lp from '../scripts/LinkProcessor'
import { CategorizedLinks } from '../types'

type Props = {
  links: Link[]
}

const LinkList: React.FC<Props> = ({ links }) => {
  const [data, setData] = useState<CategorizedLinks>({})

  useMemo(() => {
    const categorized = lp.categorizeByDomain(links)
    setData(categorized)
  }, [links])

  return (
    <ul>
      {Object.entries(data).map(([category, links]) => (
        <li key={category}>
          {category}
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.displayHref}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default LinkList
