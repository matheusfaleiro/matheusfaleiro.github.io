import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-900 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Whether you have an upcoming project, an engineering inquiry, or simply want to connect,
          feel free to reach out.
        </p>
        <a
          href="mailto:contact@matheusfaleiro.dev"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/20"
        >
          <Mail className="w-4 h-4" />
          <span>Say Hello</span>
        </a>
      </div>
    </section>
  )
}
