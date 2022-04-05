import { Center, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {
  domain: string
}

const Favicon = ({ domain }: Props) => (
  <Center height="24px" width="24px" borderRadius="md" bg="gray.100">
    <Image alt={faviconUrl(domain)} src={faviconUrl(domain)} boxSize="16px" />
  </Center>
)

function faviconUrl(domain: string) {
  const url = 'https://s2.googleusercontent.com/s2/favicons?domain='
  return url + domain
}

export default Favicon
