import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react'
import React from 'react'

const Tooltip = (props: TooltipProps) => (
  <ChakraTooltip {...props}>{props.children}</ChakraTooltip>
)

Tooltip.defaultProps = {
  hasArrow: true,
  fontSize: '12px',
  placement: 'left',
  borderRadius: 'lg',
  textAlign: 'center',
  p: 2,
}

export default Tooltip
