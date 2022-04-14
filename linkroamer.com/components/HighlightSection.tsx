import { Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Highlight, { HighlightData } from './Highlight'
import FirefoxIcon from './icons/Firefox'

const data: HighlightData[] = [
  {
    logo: <FirefoxIcon size={24} />,
    title: 'Find broken or non-secure links',
    description:
      'Highlight links that return a 404 status or have a non-secure HTTP protocol.',
    subtitle: 'Security',
  },
  {
    logo: <FirefoxIcon size={24} />,
    title: 'Save as bookmarks or tab groups',
    description:
      'Create tab groups (Chrome only) from selected links or save them as a folder of bookmarks.',
    subtitle: 'Bookmark',
  },
  {
    logo: <FirefoxIcon size={24} />,
    title: 'Export or copy links as data ',
    description:
      'Export links found on a webpage in JSON, Text, or CSV formats. They can also be copied to the clipboard.',
    subtitle: 'Export',
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
