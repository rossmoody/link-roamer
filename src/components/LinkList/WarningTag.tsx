import { Tooltip } from '@chakra-ui/react'
import Tag from '../Tag'
import React from 'react'
import Link from '../../scripts/Link'
import lp from '../../scripts/LinkProcessor'

type Props = {
  links: Link[]
}

const WarningTag = ({ links }: Props) => {
  const containsHttp = lp.containsHttp(links)
  const containsBroken = lp.containsBroken(links)

  if (containsHttp || containsBroken) {
    return (
      <Tooltip
        shouldWrapChildren
        label="Links within this domain may be broken or unsecure"
        placement="auto-start"
        borderRadius="md"
        fontSize="sm"
        px={4}
        py={2}
      >
        <Tag status="warning">Warning</Tag>
      </Tooltip>
    )
  }

  return null
}

export default WarningTag
