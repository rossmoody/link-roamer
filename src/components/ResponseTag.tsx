import { Box, Tag, TagProps, Text } from '@chakra-ui/react'
import React from 'react'

type Props = TagProps & {
  quantity: number
}

const QuantityTag = (props: Props) => {
  const { quantity, children, colorScheme, ...rest } = props

  return (
    <Tag colorScheme={colorScheme} {...rest}>
      {quantity > 1 && (
        <React.Fragment>
          <Text size="sm">{quantity}</Text>
          <Box as="span" px="0.5">
            x
          </Box>
        </React.Fragment>
      )}
      {children}
    </Tag>
  )
}

export default QuantityTag
