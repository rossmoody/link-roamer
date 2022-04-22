import { createIcon } from '@chakra-ui/react'
import React from 'react'

export const ArrowRight = createIcon({
  defaultProps: {
    width: '16px',
    height: '16px',
    stroke: 'currentColor',
    strokeWidth: '2px',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none',
    'aria-hidden': true,
  },
  viewBox: '0 0 24 24',
  path: (
    <>
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </>
  ),
})
