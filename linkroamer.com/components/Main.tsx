import { Center, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import image from '../public/link-roamer-example.png'
import MainContent from './MainContent'

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
        <MainContent />
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
