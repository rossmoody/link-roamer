import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export type HighlightData = {
  logo: React.ReactNode
  subtitle: string
  title: string
  description: string
}

const Highlight = (props: HighlightData) => {
  return (
    <Stack spacing={3} minWidth="300px" flex={1}>
      <Box bg="blurple.400" height={16} width={16} borderRadius="2xl">
        {props.logo}
      </Box>
      <Text
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wider"
        color="blurple.200"
      >
        {props.subtitle}
      </Text>
      <Heading fontWeight="bold" fontSize={['2xl', '4xl']} lineHeight={1.1}>
        {props.title}
      </Heading>
      <Text mt={6} fontSize={['md', 'lg']}>
        {props.description}
      </Text>
    </Stack>
  )
}

export default Highlight
