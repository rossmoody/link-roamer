import {
  Box,
  Center,
  Code,
  Flex,
  Heading,
  Kbd,
  Link,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import ReactDOMClient from 'react-dom/client'
import LinkRoamerLogo from '../components/LinkRoamerLogo'
import ThemeProvider from '../providers/ThemeProvider'

const Onboarding = () => (
  <ThemeProvider>
    <Flex as="main" height="100vh" alignItems="center">
      <Box
        maxW="3xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
      >
        <Center flex={1} mb={12}>
          <LinkRoamerLogo size={72} />
        </Center>
        <Heading
          my="4"
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
          textAlign="center"
        >
          Welcome to{' '}
          <Box as="mark" bg="unset" whiteSpace="nowrap" color="blurple.400">
            Link Roamer
          </Box>
        </Heading>
        <Text fontSize="x-large" maxW="xl" mx="auto" textAlign="center" mb={8}>
          A few things to know before you get to roamin&apos;.
        </Text>
        <OrderedList>
          <ListItem pb={4}>
            Link Roamer only works on <Code>http</Code> and <Code>https</Code>{' '}
            pages.
          </ListItem>
          <ListItem pb={4}>
            The default keyboard shortcut to open Link Roamer is{' '}
            <Kbd>Cmd + U</Kbd>. Sometimes that shortcut is taken by another
            extension and you will need to pick a new one on the{' '}
            <Kbd>chrome://extensions/shortcuts</Kbd> settings page.
          </ListItem>
          <ListItem>
            This extension is open-source. If you encounter an issue, please{' '}
            <Link
              href="https://github.com/rossmoody/link-roamer"
              target="_blank"
              color="blurple.400"
            >
              submit an issue on GitHub
            </Link>{' '}
            or{' '}
            <Link
              href="https://www.twitter.com/_rossmoody"
              target="_blank"
              color="blurple.400"
            >
              send me a message on Twitter
            </Link>
            .
          </ListItem>
        </OrderedList>
      </Box>
    </Flex>
  </ThemeProvider>
)

const root = document.getElementById('root')!
ReactDOMClient.createRoot(root).render(<Onboarding />)
