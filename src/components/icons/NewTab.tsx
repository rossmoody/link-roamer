import { createIcon } from '@chakra-ui/react'
import React from 'react'

export const NewTabIcon = createIcon({
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
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" />
      <path d="M3 9H21" />
      <path d="M10 9L10 3" />
    </>
  ),
})
