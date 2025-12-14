import React from 'react'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: number
  height?: number
}

export default function TextInput({
  width = 350,
  height = 60,
  className = '',
  ...rest
}: TextInputProps) {
  return (
    <input
      {...rest}
      className={`
        rounded-[15px] bg-white px-4
        text-body placeholder:text-placeholder
        outline-none
        transition-all duration-200
        focus:shadow-glow-small-blue
        focus:border-important
        hover:shadow-glow-blue
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:bg-gray-100
        disabled:shadow-none
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  )
}
