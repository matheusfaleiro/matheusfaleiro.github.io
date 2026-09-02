import { Cpu } from 'lucide-react'
import { skillCategories } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-900">
      <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2">
        <Cpu className="w-4 h-4" />
        <span>Tech Stack</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Skills & Technologies</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const Icon = cat.icon
          return (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
