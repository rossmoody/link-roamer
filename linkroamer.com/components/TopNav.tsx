import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Logotype from './Logotype'

const TopNav = () => (
  <React.Fragment>
    <Flex as="nav" alignItems="center" py={6}>
      <Box w="200px">
        <Logotype />
      </Box>
      <Spacer />
    </Flex>
    <Spacer height={[8]} />
  </React.Fragment>
)

export default TopNav
