import { Code2, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/Icons'
import { projects } from '@/data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-slate-900">
      <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2">
        <Code2 className="w-4 h-4" />
        <span>Work</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="group flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5"
          >
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                {proj.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{proj.description}</p>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 text-indigo-300 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800/60">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                )}
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
