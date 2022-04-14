import { Box } from '@chakra-ui/react'

const BackgroundBursts = () => (
  <Box pos="fixed" top={0} left={0} right={0} pointerEvents="none" zIndex={-1}>
    <Box pos="relative" minHeight="100vh" overflowX="clip">
      <Box
        pos="absolute"
        width="800px"
        height="800px"
        right="-90px"
        top="-150px"
        background="#73E0D9"
        opacity={['0', '0', '0', '0.3']}
        filter="blur(200px)"
      />
      <Box
        pos="absolute"
        width="800px"
        height="800px"
        right="150px"
        top="200px"
        background="#596AFF"
        opacity={['0.1', '0.1', '0.1', '0.3']}
        filter="blur(150px)"
      />
    </Box>
  </Box>
)

export default BackgroundBursts
