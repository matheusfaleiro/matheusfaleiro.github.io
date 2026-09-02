import { useState } from 'react'
import {
  Mail,
  ExternalLink,
  Code2,
  Layers,
  Terminal,
  Cpu,
  ArrowRight,
  Menu,
  X,
  Sparkles,
} from 'lucide-react'

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0-.01-3.38 1.69 1.69 0 0 0 .01 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  )
}

interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'Modern Web Application',
    description:
      'A high-performance full-stack web application designed with modern architectural patterns and responsive UI.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/matheusfaleiro',
    liveUrl: 'https://matheusfaleiro.dev',
  },
  {
    title: 'Developer Tooling & CLI',
    description:
      'Streamlined command-line interfaces and developer utilities built for developer experience and productivity.',
    tags: ['TypeScript', 'Node.js', 'Automation'],
    githubUrl: 'https://github.com/matheusfaleiro',
  },
  {
    title: 'Cloud & API Integration Platform',
    description:
      'Resilient microservices and RESTful API integrations with automated testing and continuous deployment.',
    tags: ['REST APIs', 'Docker', 'CI/CD', 'PostgreSQL'],
    githubUrl: 'https://github.com/matheusfaleiro',
  },
]

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5 / CSS3', 'Vite'],
  },
  {
    title: 'Backend & Systems',
    icon: Terminal,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Python', 'C# / .NET'],
  },
  {
    title: 'Architecture & DevOps',
    icon: Layers,
    skills: ['Git & GitHub', 'Docker', 'CI/CD Pipelines', 'PostgreSQL', 'Cloud Deployments'],
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:text-indigo-400 transition-colors">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-mono text-sm shadow-md shadow-indigo-500/20">
              MF
            </span>
            <span>Matheus Faleiro</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="https://github.com/matheusfaleiro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all text-xs font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-300 hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-300 hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-300 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-300 hover:text-white"
            >
              Contact
            </a>
            <a
              href="https://github.com/matheusfaleiro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2 text-indigo-400"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
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
              Hi, I'm <span className="text-white font-medium">Matheus Faleiro</span>. I specialize in building robust, performant applications across modern frontend architectures and scalable backends.
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

        {/* Skills Section */}
        <section id="skills" className="py-16 border-t border-slate-900">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2">
            <Cpu className="w-4 h-4" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
            Skills & Technologies
          </h2>

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

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-slate-900">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2">
            <Code2 className="w-4 h-4" />
            <span>Work</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
            Featured Projects
          </h2>

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
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {proj.description}
                  </p>
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

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-900 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you have an upcoming project, an engineering inquiry, or simply want to connect, feel free to reach out.
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
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Matheus Faleiro. Hosted on{' '}
          <a
            href="https://matheusfaleiro.dev"
            className="text-slate-400 hover:underline"
          >
            matheusfaleiro.dev
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

export default App

