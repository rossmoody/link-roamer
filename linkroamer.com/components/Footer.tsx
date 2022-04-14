import { Box, Divider, Flex, HStack, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import Logotype from './Logotype'
import { Links } from './types'

const Footer = () => (
  <Flex mt={60} mb={12} direction={['column', 'column', 'row']} gap={2}>
    <Box w="150px">
      <Logotype />
    </Box>
    <Spacer />
    <HStack spacing={4} fontSize="sm">
      <Link href={Links.svgGobbler}>SVG Gobbler Extension</Link>
      <Divider orientation="vertical" height="20px" />
      <Link href={Links.twitter}>Twitter</Link>
      <Link href={Links.githubRepo}>GitHub</Link>
      <Link href={Links.githubIssues}>Report a bug</Link>
    </HStack>
  </Flex>
)

export default Footer
