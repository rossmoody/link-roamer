import { Flex, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import Highlight from './Highlight'
import BookmarkIcon from './icons/Bookmark'
import ExportIcon from './icons/Export'
import LockIcon from './icons/Lock'
import { HighlightData, Links } from './types'

const data: HighlightData[] = [
  {
    logo: <LockIcon size={32} />,
    title: 'Find broken or non-secure links',
    description: (
      <React.Fragment>
        Highlight links that return a{' '}
        <Link color="blurple.300" href={Links.fourOhFour}>
          324
        </Link>{' '}
        status or have a{' '}
        <Link color="blurple.300" href={Links.httpDangers}>
          non-secure HTTP
        </Link>{' '}
        protocol.
      </React.Fragment>
    ),
    subtitle: 'Security',
    color: 'blurple.300',
  },
  {
    logo: <BookmarkIcon size={32} />,
    title: 'Save as bookmarks or tab groups',
    description:
      'Create tab groups (Chrome only) from selected links or save them as a folder of bookmarks.',
    subtitle: 'Bookmark',
    color: 'teal.300',
  },
  {
    logo: <ExportIcon size={32} />,
    title: 'Export or copy links as data ',
    description:
      'Export links found on a webpage in JSON, Text, or CSV formats. They can also be copied to the clipboard.',
    subtitle: 'Export',
    color: 'green.300',
  },
]

const HighlightSection = () => (
  <React.Fragment>
    <Spacer height={[12, 20, 48]} />
    <Flex as="section" gap={20} wrap="wrap" direction="row">
      {data.map((highlight) => (
        <Highlight key={highlight.title} {...highlight} />
      ))}
    </Flex>
  </React.Fragment>
)

export default HighlightSection
