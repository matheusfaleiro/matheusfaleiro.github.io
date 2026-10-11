import { milestones } from '@/data/portfolioData'

const markerColorMap = {
  emerald: 'bg-tag-emerald',
  blue: 'bg-tag-blue',
  variant: 'bg-surface-variant',
}

export function Experience() {
  return (
    <section id="experience" className="w-full px-5 lg:px-20 py-20">
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-mono text-xs text-tag-cyan">&gt; git.log(--graph, --all)</span>
        <h2 className="font-mono text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
          Experience &amp; Career Milestones
        </h2>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
          Verbatim engineering history detailing scaled mobile architectures, enterprise pipelines,
          and cutting-edge AI systems across Denmark and international hubs.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 flex flex-col gap-6">
        {/* Continuous Monospace Track Line */}
        <div className="absolute left-2.5 sm:left-3 top-4 bottom-4 w-0.5 bg-surface-variant" />

        {milestones.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col gap-2 bg-surface-container p-5 rounded-xl shadow-md border border-outline-variant/30"
          >
            {/* Timeline Marker Dot */}
            <span
              className={`absolute -left-7 sm:-left-8 top-6 w-3.5 h-3.5 rounded-full ${
                markerColorMap[item.markerColor]
              } ring-4 ring-surface-canvas`}
            />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-sans text-lg font-bold text-on-surface">{item.company}</span>
                {item.isCurrent && (
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-tag-emerald/20 text-tag-emerald font-bold border border-tag-emerald/30">
                    CURRENT
                  </span>
                )}
              </div>
              <span className="font-mono text-xs text-tag-cyan">{item.period}</span>
            </div>

            <div className="font-mono text-sm text-primary font-bold">{item.role}</div>

            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>

            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded font-mono text-xs bg-surface-container-high border border-outline-variant/20 ${
                      tag.colorClass || 'text-on-surface'
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
