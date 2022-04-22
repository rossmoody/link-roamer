import { Badge, Tab, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type CustomTabProps = {
  linksQty: number
  title: string
  alwaysShow?: boolean
}

const CustomTab = React.forwardRef<HTMLButtonElement, CustomTabProps>(
  (props, ref) => {
    const border = useColorModeValue('blurple.500', 'blurple.400')

    if (props.linksQty < 1 && !props.alwaysShow) return null

    return (
      <Tab
        ref={ref}
        gap={1}
        _selected={{
          fontWeight: 'medium',
          borderBottom: '3px solid',
          borderColor: border,
        }}
      >
        {props.title} <Badge>{props.linksQty}</Badge>
      </Tab>
    )
  }
)

export default CustomTab
