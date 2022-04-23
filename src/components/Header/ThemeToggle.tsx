import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import c from '../../scripts/Chrome'
import { MoonIcon, SunIcon } from '../icons'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleClick = () => {
    toggleColorMode()
    c.setStorage('mode', colorMode)
  }
  return (
    <IconButton
      aria-label="Change color mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={handleClick}
    />
  )
}

export default ThemeToggle
