import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for new projects & collaborations</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Software Engineer crafting clean, impactful digital products.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed">
          Hi, I'm <span className="text-white font-medium">Matheus Faleiro</span>. I specialize in
          building robust, performant applications across modern frontend architectures and scalable
          backends.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/20"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium transition-all"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="mt-12 flex items-center gap-5 text-slate-400">
          <a
            href="https://github.com/matheusfaleiro"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@matheusfaleiro.dev"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
