import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import { Flex, SlideFade } from '@chakra-ui/react'

const Footer = () => {
  const { checkedItems } = useCheckedItems()

  return (
    <SlideFade in={checkedItems.length > 0} offsetY="20px">
      <Flex
        position="absolute"
        bottom={4}
        left={4}
        right={4}
        h={28}
        bg="blue"
        borderRadius="lg"
      >
        footer
      </Flex>
    </SlideFade>
  )
}

export default Footer
