import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import ChromeIcon from './icons/Chrome'
import FirefoxIcon from './icons/Firefox'
import SafariIcon from './icons/Safari'
import StarIcon from './icons/Star'
import { Links } from './types'

const gradientText = {
  backgroundClip: 'text',
  textColor: 'transparent',
  bgGradient: 'linear-gradient(275.82deg, #6FBBFC 0%, #6D48FF 100%);',
}

const MainContent = () => (
  <Box maxWidth="500px">
    <Heading fontWeight="bold" fontSize={['5xl', '6xl']} lineHeight={1.1}>
      Quickly{' '}
      <Text as="span" {...gradientText}>
        handle all the links
      </Text>{' '}
      on a web page
    </Heading>
    <Text mt={6} fontSize={['md', 'lg']}>
      A free and{' '}
      <Link color="blurple.300" href={Links.githubRepo}>
        open-source
      </Link>{' '}
      browser extension for finding, organizing, inspecting, bookmarking,
      grouping, and exporting all the links from a page.
    </Text>
    <Stack
      mt={12}
      spacing={4}
      direction={['column', 'row']}
      alignItems={['center', 'start']}
    >
      <Button
        as="a"
        href={Links.chromeWebstore}
        leftIcon={<ChromeIcon />}
        variant="solid"
        colorScheme="blurple"
      >
        Add to Chrome - it&apos;s free
      </Button>
      <ButtonGroup>
        <IconButton
          as="a"
          href={Links.firefoxMarketplace}
          variant="ghost"
          aria-label="Navigate to Firefox extension"
          icon={<FirefoxIcon />}
        />
        <IconButton
          as="a"
          href={Links.safariAppStore}
          variant="ghost"
          aria-label="Navigate to Safari extension"
          icon={<SafariIcon />}
        />
      </ButtonGroup>
    </Stack>
    <HStack spacing={2} mt={10} height="20px" display={['none', 'flex']}>
      <HStack alignItems="center" spacing={1}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </HStack>
      <Divider orientation="vertical" />
      <Text fontSize="xs" color="gray.300">
        Rated 5 stars by a bunch of awesome folks
      </Text>
    </HStack>
  </Box>
)

export default MainContent
