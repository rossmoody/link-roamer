import { Center, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {
  domain: string
}

const Favicon = ({ domain }: Props) => {
  const bg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Center height="24px" width="24px" borderRadius="md" bg={bg}>
      <Image alt={faviconUrl(domain)} src={faviconUrl(domain)} boxSize="16px" />
    </Center>
  )
}

function faviconUrl(domain: string) {
  const url = 'https://s2.googleusercontent.com/s2/favicons?domain='
  return url + domain
}

export default Favicon
