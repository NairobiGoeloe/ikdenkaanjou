import React from 'react'

// Mogelijke varianten van de button
type Variant = 'primary' | 'secondary'

// Props interface met optionele variant, afmetingen en extra classes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  width?: number
  height?: number
  className?: string
}

// Tailwind classes per variant
const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-important',
  secondary: 'bg-secondary text-body hover:bg-accent',
}

export default function Button({
  variant = 'primary',
  width = 390,
  height = 60,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  // Basis styling voor alle buttons
  const baseClasses = `
    flex items-center justify-center
    font-semibold rounded-[25px]
    transition-all
    active:scale-[0.99]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-important focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  // Button renderen met variant, basisclasses en inline style voor afmetingen
  return (
    <button
      {...rest}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </button>
  )
}
