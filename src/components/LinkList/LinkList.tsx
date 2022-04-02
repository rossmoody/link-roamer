import React, { useEffect, useState } from 'react'
import lp from '../../scripts/LinkProcessor'
import { CategorizedLinks } from '../../types'
import { Accordion } from '@chakra-ui/react'
import { useLinks } from '../../providers/LinksProvider'
import Domain from './Domain'

const LinkList = () => {
  const [data, setData] = useState<CategorizedLinks>({})
  const { links } = useLinks()

  useEffect(() => {
    const categorized = lp.categorizeByDomain(links)
    setData(categorized)
  }, [links])

  return (
    <Accordion allowMultiple>
      {Object.entries(data).map(([domain, links]) => (
        <Domain domain={domain} links={links} key={domain} />
      ))}
    </Accordion>
  )
}

export default LinkList
