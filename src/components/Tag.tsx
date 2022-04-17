import { Tag as ChakraTag, TagLabel, TagProps } from '@chakra-ui/react'
import React from 'react'

const status = {
  critical: {
    colorScheme: 'red',
  },
  warning: {
    colorScheme: 'yellow',
  },
}

type Props = TagProps & {
  status: keyof typeof status
}

const Tag = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <ChakraTag
        ref={ref}
        size={props.size ?? 'sm'}
        colorScheme={status[props.status].colorScheme}
      >
        <TagLabel>{props.children}</TagLabel>
      </ChakraTag>
    )
  },
)

export default Tag
