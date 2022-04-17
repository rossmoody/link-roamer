import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Logotype from './Logotype'

const TopNav = () => (
  <React.Fragment>
    <Flex as="nav" alignItems="center" py={8}>
      <Box w="180px">
        <Logotype />
      </Box>
      <Spacer />
    </Flex>
    <Spacer height={[8]} />
  </React.Fragment>
)

export default TopNav
