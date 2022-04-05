import React from 'react'
import { Tag } from '@chakra-ui/react'

type Props = {
  linkQty: number
}

const SelectedQuantity = ({ linkQty }: Props) => {
  const string = `${linkQty} selected`
  return (
    <Tag size="sm" colorScheme="blurple">
      {string}
    </Tag>
  )
}

export default SelectedQuantity
