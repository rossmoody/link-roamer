import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '../icons'
import c from '../../scripts/Chrome'
import React from 'react'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleClick = () => {
    toggleColorMode()
    c.setStorage('mode', colorMode).catch(console.error)
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
