import { Box, Flex, Spacer, Stack, Text } from '@chakra-ui/react'
import Logotype from './Logotype'

const Footer = () => {
  return (
    <Flex mt={60} mb={12}>
      <Box w="150px">
        <Logotype />
      </Box>
      <Spacer />
      <Stack direction="row" spacing={4}>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </Stack>
    </Flex>
  )
}

export default Footer
