import React from 'react'
import { createIcon } from '@chakra-ui/react'

export const BrokenLinkIcon = createIcon({
  defaultProps: {
    width: '16px',
    height: '16px',
    stroke: 'currentColor',
    strokeWidth: '2px',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none',
  },
  viewBox: '0 0 24 24',
  path: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
})
