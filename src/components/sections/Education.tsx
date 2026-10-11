import { educationNodes } from '@/data/portfolioData'

export function Education() {
  return (
    <section id="education" className="w-full px-5 lg:px-20 py-20">
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-mono text-xs text-tag-cyan">&gt; credentials.verify()</span>
        <h2 className="font-mono text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
          Education &amp; Academic Background
        </h2>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
          Global academic grounding across cybersecurity, software systems, and computer engineering
          foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationNodes.map((node) => (
          <div
            key={node.id}
            className="relative bg-surface-container rounded-xl p-6 shadow-md flex flex-col justify-between border border-outline-variant/30"
          >
            <div>
              <div className={`w-full h-1 rounded-full mb-4 ${node.accentColorClass}`} />
              <span className="font-mono text-xs text-tag-cyan">{node.years}</span>
              <h3 className="font-sans text-lg font-bold text-on-surface mt-2">
                {node.institution}
              </h3>
              <p className="font-mono text-xs text-primary font-bold mt-1">{node.degree}</p>
              <p className="font-sans text-xs text-on-surface-variant mt-3 leading-relaxed">
                {node.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-outline-variant/10 font-mono text-xs text-outline">
              {node.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
