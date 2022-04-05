import { Tooltip } from '@chakra-ui/react'
import Tag from '../Tag'
import React from 'react'
import Link from '../../scripts/Link'

type Props = {
  links: Link[]
}

const WarningTag = ({ links }: Props) => {
  const containsHttp = links.some((link) => link.protocol === 'http:')

  if (!containsHttp) return null
  
  return (
    <Tooltip
      label="Links within this domain may be broken or not secure"
      shouldWrapChildren
      placement="auto-end"
      hasArrow
      textAlign="center"
      borderRadius="lg"
    >
      <Tag status="warning">Warning</Tag>
    </Tooltip>
  )
}

export default WarningTag
