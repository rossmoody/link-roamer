import { Center, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {
  domain: string
  size?: number
  faviconSize?: number
}

const Favicon = ({ domain, size = 24, faviconSize = 16 }: Props) => {
  const bg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Center height={`${size}px`} width={`${size}px`} borderRadius="md" bg={bg}>
      <Image
        aria-hidden
        src={domain && faviconUrl(domain)}
        boxSize={`${faviconSize}px`}
      />
    </Center>
  )
}

function faviconUrl(domain: string) {
  const url = 'https://s2.googleusercontent.com/s2/favicons?domain='
  return url + domain
}

export default Favicon
