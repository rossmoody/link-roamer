import React from 'react'
import {
  Tag as ChakraTag,
  TagLabel,
  TagLeftIcon,
  TagProps,
} from '@chakra-ui/react'
import { AlertIcon, WarningIcon } from './icons'

const status = {
  critical: {
    colorScheme: 'red',
    icon: AlertIcon,
  },
  warning: {
    colorScheme: 'yellow',
    icon: WarningIcon,
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
        <TagLeftIcon boxSize="12px" as={status[props.status].icon} />
        <TagLabel>{props.children}</TagLabel>
      </ChakraTag>
    )
  },
)

export default Tag
