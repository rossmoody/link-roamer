import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { urls } from '../constants'
import image from '../public/link-roamer-example.png'
import ChromeIcon from './icons/Chrome'
import FirefoxIcon from './icons/Firefox'
import OperaIcon from './icons/Opera'
import StarIcon from './icons/Star'

const Main = () => {
  return (
    <Flex
      as="main"
      gap={6}
      direction={['column', 'column', 'column', 'row']}
      maxWidth="1260px"
      mx="auto"
    >
      <Flex flex={1} justifyContent="center" alignItems="center">
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
            inspecting, bookmarking, grouping, and exporting all the links from
            a page.
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
              leftIcon={<ChromeIcon size={20} />}
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
                icon={<FirefoxIcon size={24} />}
              />
              <IconButton
                as="a"
                href={urls.operaMarketplace}
                variant="ghost"
                aria-label="Navigate to Opera extension"
                icon={<OperaIcon size={24} />}
              />
            </ButtonGroup>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            mt={10}
            height="20px"
            display={['none', 'flex']}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
              <StarIcon size={16} />
            </Stack>
            <Divider orientation="vertical" />
            <Text fontSize="xs" color="gray.300">
              Rated 5 stars by a bunch of awesome folks
            </Text>
          </Stack>
        </Box>
      </Flex>
      <Center flex={1}>
        <Image
          src={image}
          alt="Link Roamer Example"
          layout="intrinsic"
          width="602"
          height="750"
        />
      </Center>
    </Flex>
  )
}

export default Main