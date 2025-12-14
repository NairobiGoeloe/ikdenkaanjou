import React from 'react'

interface SelectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number
  height?: number
  icon?: string // pad naar het icoon
}

export default function SelectButton({
  width = 60,
  height = 60,
  icon,
  ...rest
}: SelectButtonProps) {
  return (
    <button
      {...rest}
      className={`
        bg-white rounded-[10px]
        flex items-center justify-center
        shadow-soft
        hover:bg-secondary
        active:bg-secondary
        transition-all
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-important
        focus-visible:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:shadow-none
      `}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {icon && <img src={icon} alt="icon" className="w-6 h-6" />}
    </button>
  )
}
