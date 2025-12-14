import React from 'react'

type ColorVariant = 'red' | 'orange' | 'yellow' | 'green' | 'blue'

interface ColorSelectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ColorVariant
  selected?: boolean
}

const shadowColors: Record<ColorVariant, string> = {
  red: 'shadow-[0_0_18px_#FF0000]',
  orange: 'shadow-[0_0_18px_#FF9D00]',
  yellow: 'shadow-[0_0_18px_#FFD700]',
  green: 'shadow-[0_0_18px_#3BBC57]',
  blue: 'shadow-[0_0_18px_#3E7C9E]',
}

export default function ColorSelectButton({
  variant,
  selected = false,
  ...rest
}: ColorSelectButtonProps) {
  return (
    <button
      {...rest}
      className={`
        w-12 h-12 rounded-full bg-white
        flex items-center justify-center
        transition-all
        ${shadowColors[variant]}
        hover:bg-secondary
        active:bg-secondary

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-important
        focus-visible:ring-offset-2
      `}
    >
      {selected && <div className="w-4 h-4 rounded-full bg-secondary" />}
    </button>
  )
}
