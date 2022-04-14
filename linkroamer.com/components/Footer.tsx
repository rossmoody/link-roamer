import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import Logotype from './Logotype'

const Footer = () => {
  return (
    <Flex mt={60} mb={12}>
      <Box w="150px">
        <Logotype />
      </Box>
      <Spacer />
      <HStack spacing={4}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </HStack>
    </Flex>
  )
}

export default Footer
