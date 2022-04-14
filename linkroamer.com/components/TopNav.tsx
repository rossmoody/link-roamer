import { Flex, IconButton, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AppIcon from './AppIcon'
import Logotype from './Logotype'
import SquiggleArrow from './SquiggleArrow'

const TopNav = () => (
  <React.Fragment>
    <Flex as="nav" alignItems="center" py={6}>
      <Logotype />
      <Spacer />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        display={['none', 'none', 'flex']}
      >
        <Text fontWeight="bold" fontSize="sm">
          Click to try on this page
        </Text>
        <SquiggleArrow />
        <IconButton
          variant="ghost"
          aria-label="Launch demo on this webpage"
          icon={<AppIcon />}
        />
      </Stack>
    </Flex>
    <Spacer height={[8, 12, 16]} />
  </React.Fragment>
)

export default TopNav
