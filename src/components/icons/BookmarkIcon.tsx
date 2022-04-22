import { createIcon } from '@chakra-ui/react'
import React from 'react'

export const BookmarkIcon = createIcon({
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
    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" />
  ),
})
