import React from 'react'

export interface PolaroidCardProps {
  imageSrc: string
  imageAlt: string
  captionTitle: string
  captionMeta?: string
  children?: React.ReactNode
  className?: string
}

export function PolaroidCard({
  imageSrc,
  imageAlt,
  captionTitle,
  captionMeta,
  children,
  className = '',
}: PolaroidCardProps) {
  return (
    <div
      className={`relative bg-surface-polaroid p-4 pb-7 rounded-xl shadow-2xl transition-transform duration-300 hover:rotate-0 ${className}`}
      data-testid="polaroid-card"
    >
      {/* 2:1 Nested Radius Proportional Geometry Rule: outer rounded-xl (12px-16px) -> inner rounded-lg (6px-8px) */}
      <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-surface-container-high">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-canvas/60 via-transparent to-transparent pointer-events-none" />
        {children}
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-xs text-inverse-on-surface">
        <div className="flex items-center gap-1.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-tag-emerald" />
          <span>{captionTitle}</span>
        </div>
        {captionMeta && <span className="text-outline font-normal">{captionMeta}</span>}
      </div>
    </div>
  )
}
