import { Network, Server, RefreshCw, Cpu } from 'lucide-react'
import { pillars } from '@/data/portfolioData'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { StickyNote } from '@/components/ui/StickyNote'

const iconMap = {
  Network,
  Server,
  RefreshCw,
  Cpu,
}

export function Principles() {
  return (
    <section
      id="principles"
      className="w-full px-5 lg:px-20 py-20 bg-surface-container-lowest border-y border-outline-variant/20"
    >
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-tag-emerald">
            &gt; section.load("core_pillars")
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
              Architectural Principles &amp; Core Pillars
            </h2>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl mt-1">
              Resilient engineering forged across regulated GxP pharmaceutical clouds and
              high-throughput real-time mobile platforms.
            </p>
          </div>
          <span className="font-mono text-xs text-outline uppercase tracking-wider">
            4 PILLARS // DDD / SOLID / GxP / AGENTS
          </span>
        </div>
      </div>

      {/* 4 Interactive Architectural Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const Icon = iconMap[pillar.iconName as keyof typeof iconMap] || Network

          return (
            <div
              key={pillar.id}
              className="relative bg-surface-container rounded-xl p-5 flex flex-col justify-between shadow-md transition-all hover:-translate-y-1 hover:shadow-xl border border-outline-variant/30"
            >
              <div>
                {/* Accent top stripe */}
                <div
                  className={`w-full h-1 rounded-full mb-4 ${
                    pillar.id === 'system-design'
                      ? 'bg-tag-blue'
                      : pillar.id === 'backend-readiness'
                        ? 'bg-tag-emerald'
                        : pillar.id === 'devops-mindset'
                          ? 'bg-tag-purple'
                          : 'bg-tag-cyan'
                  }`}
                />

                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-tag-cyan">{pillar.number}</span>
                  <Icon className="w-5 h-5 text-on-surface-variant" />
                </div>

                <h3 className="font-sans text-lg font-bold text-on-surface mb-2">{pillar.title}</h3>
                <p className="font-sans text-xs text-on-surface-variant mb-4 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Code snippet representation */}
              <div>
                <CodeBlock
                  comment={pillar.codeSnippet.comment}
                  lines={pillar.codeSnippet.content}
                  className="mb-4 text-[11px]"
                />

                {/* Sticky accent tag */}
                <StickyNote
                  color={pillar.tag.color}
                  rotation={pillar.tag.rotation}
                  className="w-fit text-xs py-1 px-2.5 font-sans font-bold"
                >
                  {pillar.tag.label}
                </StickyNote>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
