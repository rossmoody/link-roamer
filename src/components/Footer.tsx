import React from 'react'
import { useCheckedItems } from '../providers/CheckedItems'
import {
  Box,
  Button,
  Flex,
  IconButton,
  SlideFade,
  Stack,
} from '@chakra-ui/react'
import { ExternalLinkIcon, NewTabIcon } from './icons'

const Footer = () => {
  const { checkedItems } = useCheckedItems()

  const checkedItemsQty = checkedItems.length
  const showFooter = checkedItemsQty > 0

  return (
    <Box as="footer" position="fixed" bottom={4} left={4} right={4}>
      <SlideFade in={showFooter} offsetY="20px" unmountOnExit>
        <Flex
          p={4}
          alignItems="center"
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          justifyContent="space-between"
          outline="1px solid"
          outlineColor="gray.100"
        >
          <Stack spacing={3} direction="row">
            <IconButton
              size="sm"
              aria-label="More actions"
              icon={<NewTabIcon />}
              variant="outline"
            />
            <IconButton
              size="sm"
              aria-label="More actions"
              icon={<NewTabIcon />}
              variant="outline"
            />
          </Stack>
          <Stack spacing="3" direction="row">
            <Button variant="outline" size="sm" leftIcon={<ExternalLinkIcon />}>
              Open {checkedItemsQty} in new window
            </Button>
            <Button
              variant="solid"
              colorScheme="purple"
              size="sm"
              leftIcon={<NewTabIcon />}
            >
              Open {checkedItemsQty} new tabs
            </Button>
          </Stack>
        </Flex>
      </SlideFade>
    </Box>
  )
}

export default Footer
