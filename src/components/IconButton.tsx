import { useState } from 'react'
import infoWhiteSvg from '../assets/informatie.svg'
import infoMagentaSvg from '../assets/informatie-mag.svg'

interface IconButtonProps {
  onClick: () => void
  ariaLabel?: string
  size?: number
  disabled?: boolean
}

export default function IconButton({
  onClick,
  ariaLabel = 'Info',
  size = 50,
  disabled = false,
}: IconButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const iconSize = size * 0.45

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: size }}
      className={`
        rounded-full
        flex items-center justify-center
        transition-all duration-200 ease-in-out

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-important
        focus-visible:ring-offset-2

        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:shadow-none

        ${
          isHovered
            ? 'bg-white shadow-glow-pink'
            : 'bg-important shadow-default'
        }
      `}
    >
      <img
        src={isHovered ? infoMagentaSvg : infoWhiteSvg}
        alt=""
        aria-hidden="true"
        style={{ width: iconSize, height: iconSize }}
      />
    </button>
  )
}
