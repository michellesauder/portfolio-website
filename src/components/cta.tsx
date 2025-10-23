import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CTAProps {
  href?: string
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showArrow?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export function CTA({
  href,
  children,
  variant = 'default',
  size = 'md',
  className,
  showArrow = false,
  type,
  disabled = false,
  onClick,
}: CTAProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
      'border border-input hover:bg-accent hover:text-accent-foreground': variant === 'outline',
      'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
    },
    {
      'h-9 px-3 text-sm': size === 'sm',
      'h-10 px-4 py-2': size === 'md',
      'h-11 px-8 text-lg': size === 'lg',
    },
    className
  )

  if (type === 'submit' || type === 'button') {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={baseClasses}
      >
        {children}
        {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </button>
    )
  }

  if (!href) {
    throw new Error('href is required when type is not specified')
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Link>
  )
}
