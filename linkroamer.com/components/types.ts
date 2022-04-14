import { ReactNode } from 'react'

export type Children = {
  children: ReactNode
}

export type IconProps = {
  size?: number
}

export type HighlightData = {
  color: string
  logo: React.ReactNode
  subtitle: string
  title: string
  description: string | ReactNode
}
