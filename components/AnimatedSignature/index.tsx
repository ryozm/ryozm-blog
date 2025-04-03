import './index.css'
import type { FC } from 'react'

interface AnimatedSignatureProps {
  width?: number
  height?: number | 'auto'
}

const AnimatedSignature: FC<AnimatedSignatureProps> = ({ width = 167, height = 110 }) => {
  return (
    <svg
      className="animated-signature"
      width={width}
      height={height}
      viewBox="0 0 167 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M1.5 72.5C4.66667 73.5 12.7 74.4 19.5 70C26.3 65.6 32.3333 55.1667 34.5 50.5C34.5 50.5 41.5 37.5 49 15C56.5 -7.5 69 3.99999 72 11C74.4 16.6 72 24.6666 70.5 28C69.6667 30 66.4759 37.5 58 37.5C49 37.5 40.1974 31.5993 49 34C60 37 63.5 45 62 50.5C60.5 56 54 66 58 70C62 74 69 73 75.5 64.5C80.7 57.7 96.5 34 96.5 34C96.5 34 82.1 57.6 88.5 62C96.5 67.5 118.5 45 123.5 28C128.5 11 89 117 72 108C58.4 100.8 90.3333 78 108 67.5C116.5 61.6667 135.4 46.8 143 34C152.5 18 122.5 54 131 62C137.8 68.4 147 62 147 62C147 62 152.667 57.6667 155 52.5C157.333 47.3333 161.1 36.1 157.5 32.5C153.9 28.9 151.333 31 150.5 32.5C149 35.6667 146.9 43.2 150.5 48C154.1 52.8 156.23 52.8208 160.5 52.5C164.983 52.1632 166 50 166 50"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  )
}

export default AnimatedSignature
