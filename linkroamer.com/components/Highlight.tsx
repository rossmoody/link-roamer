import { Center, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { HighlightData } from './types'

const Highlight = (props: HighlightData) => {
  return (
    <Stack spacing={3} minWidth="300px" flex={1}>
      <Center bg={props.color} height={16} width={16} borderRadius="2xl" mb={4}>
        {props.logo}
      </Center>
      <Text
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wider"
        color={props.color}
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
