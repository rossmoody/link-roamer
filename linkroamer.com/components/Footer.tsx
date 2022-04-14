import { Box, Flex, HStack, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import Logotype from './Logotype'

const Footer = () => (
  <Flex mt={60} mb={12}>
    <Box w="150px">
      <Logotype />
    </Box>
    <Spacer />
    <HStack spacing={4}>
      <Link href="https://www.twitter.com/_rossmoody">Twitter</Link>
      <Link href="https://www.github.com/rossmoody/link-roamer">GitHub</Link>
      <Link href="https://github.com/rossmoody/link-roamer/issues">
        Report a bug
      </Link>
      <Link href="https://www.intentionallybrokenurlexample.com">
        Broken Link
      </Link>
    </HStack>
  </Flex>
)

export default Footer
