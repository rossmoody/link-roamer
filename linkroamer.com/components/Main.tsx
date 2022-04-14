import { Center, Flex } from '@chakra-ui/react'
import ExtensionGraphic from './ExtensionGraphic'
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
        <Center width="500px">
          <ExtensionGraphic />
        </Center>
      </Center>
    </Flex>
  )
}

export default Main
