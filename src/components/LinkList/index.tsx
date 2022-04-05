import React from 'react'
import { Accordion } from '@chakra-ui/react'
import Domain from './Domain'
import { CategorizedLinks } from '../../types'

type Props = {
  categorizedLinks: CategorizedLinks
}

const LinkList = ({ categorizedLinks }: Props) => (
  <Accordion allowMultiple>
    {Object.entries(categorizedLinks).map(([domain, links]) => (
      <Domain domain={domain} links={links} key={domain} />
    ))}
  </Accordion>
)

export default LinkList
