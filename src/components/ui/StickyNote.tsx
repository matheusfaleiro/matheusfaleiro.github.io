import React from 'react'

export interface StickyNoteProps {
  color?: 'yellow' | 'cyan' | 'peach' | 'lime' | 'pink' | 'violet' | 'amber'
  rotation?: string
  tag?: string
  subtext?: string
  children: React.ReactNode
  className?: string
}

const colorMap = {
  yellow: 'bg-postit-yellow text-inverse-on-surface',
  cyan: 'bg-postit-cyan text-inverse-on-surface',
  peach: 'bg-postit-peach text-inverse-on-surface',
  lime: 'bg-postit-lime text-inverse-on-surface',
  pink: 'bg-postit-pink text-inverse-on-surface',
  violet: 'bg-postit-violet text-inverse-on-surface',
  amber: 'bg-postit-amber text-inverse-on-surface',
}

export function StickyNote({
  color = 'yellow',
  rotation = 'rotate-0',
  tag,
  subtext,
  children,
  className = '',
}: StickyNoteProps) {
  return (
    <div
      className={`relative p-3 rounded shadow-md select-none transition-transform duration-200 hover:rotate-0 hover:scale-105 ${colorMap[color]} ${rotation} ${className}`}
      data-testid="sticky-note"
    >
      {(tag || subtext) && (
        <div className="flex items-center justify-between font-label-sm text-xs opacity-70 mb-1">
          {tag && <span className="uppercase tracking-wider font-bold">{tag}</span>}
          {subtext && <span className="font-mono">{subtext}</span>}
        </div>
      )}
      <div className="font-sans font-bold leading-tight">{children}</div>
    </div>
  )
}
