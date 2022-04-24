import {
  Fade,
  HStack,
  IconButton,
  Tag,
  TagLeftIcon,
  Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import c from '../../scripts/Chrome'
import Link from '../../scripts/Link'
import statusCodes from '../../status-codes'
import { ExternalLinkIcon, InfoIcon } from '../icons'

type Props = {
  link: Link
  hover: boolean
}

const LinkSuffix = ({ link, hover }: Props) => {
  const isHttp = link.protocol === 'http:'
  const isNotOk = !link.status.ok
  const statusCode = link.status.status as keyof typeof statusCodes

  return (
    <HStack spacing={1}>
      <Fade in={hover}>
        <Tooltip
          hasArrow
          fontSize="12px"
          placement="left"
          borderRadius="lg"
          textAlign="center"
          label="Open the link in a background tab without leaving the window"
          maxWidth="200px"
          p={2}
        >
          <IconButton
            aria-label="Open Tab in background"
            size="xs"
            icon={<ExternalLinkIcon height="12px" />}
            onClick={() => c.createBackgroundTab(link.href)}
          />
        </Tooltip>
      </Fade>
      {isHttp && (
        <Tag size="sm" colorScheme="yellow">
          HTTP
        </Tag>
      )}
      {isNotOk && (
        <Tooltip
          hasArrow
          fontSize="12px"
          placement="left"
          label={statusCodes[statusCode]?.description}
        >
          <Tag size="sm">
            <TagLeftIcon boxSize="12px" marginRight="4px" as={InfoIcon} />
            {statusCode}
          </Tag>
        </Tooltip>
      )}
    </HStack>
  )
}

export default LinkSuffix
