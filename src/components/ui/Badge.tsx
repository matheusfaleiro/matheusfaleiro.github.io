import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'cyan' | 'blue' | 'purple' | 'crimson' | 'muted' | 'outline'
  children: React.ReactNode
  pulse?: boolean
  className?: string
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  emerald: 'bg-tag-emerald/20 text-tag-emerald border border-tag-emerald/30',
  cyan: 'bg-tag-cyan/20 text-tag-cyan border border-tag-cyan/30',
  blue: 'bg-tag-blue-accessible text-surface-polaroid border border-tag-blue-accessible',
  purple: 'bg-tag-purple-accessible text-surface-polaroid border border-tag-purple-accessible',
  crimson: 'bg-tag-crimson/20 text-tag-crimson border border-tag-crimson/30',
  muted: 'bg-surface-container-high text-on-surface border border-outline-variant/30',
  outline: 'bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant',
}

export function Badge({
  variant = 'muted',
  children,
  pulse = false,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-xs tracking-wider uppercase transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-tag-emerald animate-pulse" />}
      {children}
    </span>
  )
}

export interface CursorTagProps {
  label: string
  color: 'cyan' | 'purple' | 'emerald' | 'blue'
  className?: string
}

const cursorColorStyles = {
  cyan: {
    arrow: 'text-tag-cyan',
    tag: 'bg-tag-cyan text-on-primary-container',
  },
  purple: {
    arrow: 'text-tag-purple',
    tag: 'bg-tag-purple-accessible text-surface-polaroid',
  },
  emerald: {
    arrow: 'text-tag-emerald',
    tag: 'bg-tag-emerald text-on-secondary-fixed',
  },
  blue: {
    arrow: 'text-tag-blue',
    tag: 'bg-tag-blue-accessible text-surface-polaroid',
  },
}

export function CursorTag({ label, color, className = '' }: CursorTagProps) {
  const styles = cursorColorStyles[color]
  return (
    <div
      className={`flex items-start gap-1 select-none pointer-events-none drop-shadow-md ${className}`}
      data-testid="cursor-tag"
    >
      <svg
        className={`w-4 h-4 ${styles.arrow} fill-current filter drop-shadow`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M0 0l7 20 4-7 8-3z" />
      </svg>
      <span
        className={`${styles.tag} font-code-block text-xs font-bold px-2 py-0.5 rounded shadow`}
      >
        {label}
      </span>
    </div>
  )
}
