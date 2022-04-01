import React, { useMemo, useState } from 'react'
import { categorizeByDomain, CategorizedLinks, Link } from '../scripts'

type Props = {
  links: Link[]
}

const LinkList: React.FC<Props> = ({ links }) => {
  const [data, setData] = useState<CategorizedLinks>({})

  useMemo(() => {
    const categorized = categorizeByDomain(links)
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
