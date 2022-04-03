import React from 'react'
import { useCheckedItems } from '../../providers/CheckedItems'
import { Button, Flex, SlideFade } from '@chakra-ui/react'

const Footer = () => {
  const { checkedItems } = useCheckedItems()

  const checkedItemsQty = checkedItems.length

  return (
    <SlideFade in={checkedItemsQty > 0} offsetY="30px" unmountOnExit>
      <Flex
        p={4}
        position="absolute"
        alignItems="center"
        bottom={4}
        left={4}
        right={6}
        bg="gray.100"
        boxShadow="lg"
        borderRadius="lg"
      >
        <Button variant="solid" colorScheme="purple" size="sm">
          Open {checkedItemsQty} new tabs
        </Button>
      </Flex>
    </SlideFade>
  )
}

export default Footer
