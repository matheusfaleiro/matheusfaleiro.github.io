import { Mail, Link, MapPin, Terminal } from 'lucide-react'
import { profile } from '@/data/portfolioData'
import { StickyNote } from '@/components/ui/StickyNote'
import { PolaroidCard } from '@/components/ui/PolaroidCard'
import { CursorTag } from '@/components/ui/CursorTag'

export function Hero() {
  return (
    <section id="hero" className="relative w-full px-5 lg:px-20 py-16 lg:py-24 overflow-hidden">
      {/* Ambient Workbench Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#424754" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Typographic Anchor & Context */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          {/* System Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full shadow-sm border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-tag-emerald animate-ping" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase font-bold">
              {profile.availabilityBadge}
            </span>
          </div>

          {/* Primary Display Title */}
          <div className="flex flex-col">
            <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold text-on-surface tracking-tighter leading-tight">
              {profile.name}
            </h1>
            <p className="font-sans text-xl sm:text-2xl text-primary mt-2 font-bold leading-snug">
              {profile.headline}
            </p>
          </div>

          {/* Location Monospace Callout */}
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-tag-cyan bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-outline-variant/30">
            <MapPin className="w-4 h-4 text-tag-cyan shrink-0" />
            <span>{profile.location}</span>
          </div>

          {/* Summary Statement */}
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {profile.summary}
          </p>

          {/* CTA & Action Cluster */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-tag-blue-accessible hover:bg-primary-container text-surface-polaroid hover:text-on-primary-container px-5 py-3 rounded-lg font-sans text-sm font-bold shadow-md transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-highest text-on-surface px-5 py-3 rounded-lg font-sans text-sm font-bold shadow-sm border border-outline-variant/30 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <Link className="w-4 h-4 text-tag-cyan" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="#principles"
              className="inline-flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant hover:text-primary px-4 py-3 rounded-lg font-mono text-xs border border-outline-variant/20 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>&gt; explore_architecture_stack()</span>
            </a>
          </div>
        </div>

        {/* Right Column: Physical Workbench Frame */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-6">
          <div className="absolute w-72 h-72 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Sticky Note Top-Left */}
            <StickyNote
              tag="#MEMO"
              subtext="2024"
              color="yellow"
              rotation="-rotate-6"
              className="absolute -top-6 -left-6 z-20 w-36 sm:w-44"
            >
              Designing Something Robust.
            </StickyNote>

            {/* Sticky Note Bottom-Left */}
            <StickyNote
              tag="Archival Node"
              color="cyan"
              rotation="rotate-3"
              className="absolute -bottom-8 -left-4 z-20 w-32 sm:w-36 font-mono text-xs"
            >
              Duoc uc - 2006
            </StickyNote>

            {/* Sticky Note Top-Right */}
            <StickyNote
              tag="TEAM GOT // PROD"
              color="peach"
              rotation="rotate-6"
              className="absolute -top-4 -right-4 z-20 py-1.5 px-3 text-xs"
            >
              {''}
            </StickyNote>

            {/* The Polaroid Card */}
            <PolaroidCard
              imageSrc="/assets/portrait.png"
              imageAlt="Matheus Faleiro Portrait"
              captionTitle="cph_workstation_2026.raw"
              captionMeta="ISO 400 // 55.67°N"
              className="z-10 rotate-1"
            >
              {/* Inner Polaroid Cursors */}
              <CursorTag
                label="Matheus (AI Lead)"
                color="cyan"
                className="absolute top-5 left-5 z-30"
              />
              <CursorTag
                label="Distributed Systems"
                color="purple"
                className="absolute bottom-8 right-4 z-30"
              />
            </PolaroidCard>

            {/* Outer Cursor Badges */}
            <CursorTag
              label="Clean Architecture"
              color="emerald"
              className="absolute -bottom-6 right-2 z-20"
            />
            <CursorTag
              label="Design Systems"
              color="blue"
              className="absolute top-1/2 -right-8 z-20 hidden sm:flex"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
