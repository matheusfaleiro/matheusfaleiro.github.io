import { Terminal, Cloud, ShieldCheck } from 'lucide-react'
import { topDisciplines, skillGroups, spokenLanguages } from '@/data/portfolioData'
import { StickyNote } from '@/components/ui/StickyNote'

const skillIconMap = {
  Code: Terminal,
  Cloud: Cloud,
  ShieldCheck: ShieldCheck,
}

const languageDotColorMap = {
  emerald: 'bg-tag-emerald',
  blue: 'bg-tag-blue',
  purple: 'bg-tag-purple',
  crimson: 'bg-tag-crimson',
}

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-5 lg:px-20 py-20 bg-surface-container-lowest border-y border-outline-variant/20"
    >
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-mono text-xs text-tag-emerald">&gt; cat /sys/capabilities.json</span>
        <h2 className="font-mono text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
          Top Skills, Stack &amp; Tooling Matrix
        </h2>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
          Comprehensive view of core technical strengths, multi-paradigm languages, and distributed
          cloud services.
        </p>
      </div>

      {/* Top Skills Sticker Badges */}
      <div className="mb-12">
        <span className="font-mono text-xs text-outline uppercase tracking-wider block mb-4 font-bold">
          Core Disciplines
        </span>
        <div className="flex flex-wrap gap-4">
          {topDisciplines.map((item, idx) => (
            <StickyNote
              key={idx}
              color={item.color as 'yellow' | 'cyan' | 'pink'}
              rotation={item.rotation}
              className="px-5 py-2.5 text-sm sm:text-base font-bold shadow-md hover:rotate-0"
            >
              {item.label}
            </StickyNote>
          ))}
        </div>
      </div>

      {/* Bento Grid for Detailed Technical Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const Icon = skillIconMap[group.iconName as keyof typeof skillIconMap] || Terminal
          return (
            <div
              key={group.id}
              className="bg-surface-container p-6 rounded-xl shadow-md flex flex-col justify-between border border-outline-variant/30"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Icon className={`w-5 h-5 ${group.accentColorClass}`} />
                  <h3 className="font-sans text-lg font-bold text-on-surface">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 bg-surface-container-highest font-mono text-xs rounded-md border border-outline-variant/20 ${group.accentColorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-outline-variant/10 font-mono text-xs text-outline">
                {group.footerComment}
              </div>
            </div>
          )
        })}
      </div>

      {/* Spoken Languages Monospace Pill Bar */}
      <div className="mt-12 bg-surface-container p-6 rounded-xl shadow-sm border border-outline-variant/30">
        <span className="font-mono text-xs text-outline uppercase tracking-wider block mb-3 font-bold">
          Spoken Languages &amp; International Fluency
        </span>
        <div className="flex flex-wrap gap-3 items-center">
          {spokenLanguages.map((lang, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-surface-container-highest px-3.5 py-1.5 rounded-lg border border-outline-variant/20"
            >
              <span className={`w-2 h-2 rounded-full ${languageDotColorMap[lang.color]}`} />
              <span className="font-mono text-xs text-on-surface font-bold">{lang.name}</span>
              <span className="font-mono text-xs text-outline">{lang.fluency}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
