import { IconProps } from '../types'

const ExportIcon = ({ size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66663 20V33.3333C6.66663 34.2174 7.01782 35.0652 7.64294 35.6904C8.26806 36.3155 9.1159 36.6667 9.99996 36.6667H30C30.884 36.6667 31.7319 36.3155 32.357 35.6904C32.9821 35.0652 33.3333 34.2174 33.3333 33.3333V20"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.6667 10L20 3.33334L13.3334 10"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 3.33334V25"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ExportIcon
