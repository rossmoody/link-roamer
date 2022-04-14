import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import ChromeIcon from './icons/Chrome'
import FirefoxIcon from './icons/Firefox'
import OperaIcon from './icons/Opera'
import SafariIcon from './icons/Safari'
import StarIcon from './icons/Star'

const urls = {
  chromeWebstore:
    'https://chrome.google.com/webstore/detail/link-roamer/lgcgflalbmeodapiohjepkjlgipmhofe',
  firefoxMarketplace:
    'https://addons.mozilla.org/en-US/firefox/addon/link-roamer/',
  operaMarketplace: '',
}

const MainContent = () => (
  <Box maxWidth="500px">
    <Heading fontWeight="bold" fontSize={['5xl', '6xl']} lineHeight={1.1}>
      Quickly{' '}
      <Text as="span" color="blurple.300">
        handle all the links
      </Text>{' '}
      on a web page
    </Heading>
    <Text mt={6} fontSize={['md', 'lg']}>
      A free and open-source browser extension for finding, organizing,
      inspecting, bookmarking, grouping, and exporting all the links from a
      page.
    </Text>
    <Stack
      mt={12}
      spacing={4}
      direction={['column', 'row']}
      alignItems={['center', 'start']}
    >
      <Button
        as="a"
        href={urls.chromeWebstore}
        leftIcon={<ChromeIcon />}
        variant="solid"
        colorScheme="blurple"
      >
        Add to Chrome - it&apos;s free
      </Button>
      <ButtonGroup>
        <IconButton
          as="a"
          href={urls.firefoxMarketplace}
          variant="ghost"
          aria-label="Navigate to Firefox extension"
          icon={<FirefoxIcon />}
        />
        <IconButton
          as="a"
          href={urls.operaMarketplace}
          variant="ghost"
          aria-label="Navigate to Opera extension"
          icon={<OperaIcon />}
        />
        <IconButton
          as="a"
          href={urls.operaMarketplace}
          variant="ghost"
          aria-label="Navigate to Opera extension"
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
