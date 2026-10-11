import { Copy, Check, ExternalLink } from 'lucide-react'
import { profile } from '@/data/portfolioData'
import { useClipboard } from '@/hooks/useClipboard'
import { Toast } from '@/components/ui/Toast'

export function Contact() {
  const { copied, copy } = useClipboard()

  return (
    <>
      <section
        id="contact"
        className="w-full px-5 lg:px-20 py-20 bg-surface-container-lowest border-t border-outline-variant/20"
      >
        <div className="relative bg-surface-container rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden border border-outline-variant/30">
          {/* Top Neon Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tag-cyan via-tag-emerald to-tag-purple" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Prompt Status */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="font-mono text-xs text-tag-emerald font-bold">
                &gt; CONNECTION // OPEN_FOR_COLLABORATION
              </span>
              <h2 className="font-mono text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
                Let's Architect Something Exceptional.
              </h2>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
                Available for high-impact AI, distributed backend systems, and architectural
                initiatives in Copenhagen and remote international teams.
              </p>

              {/* Interactive Terminal Prompt Status */}
              <div className="mt-3 bg-surface-container-lowest p-3 rounded-lg font-mono text-xs text-on-surface flex items-center gap-2 border border-outline-variant/20">
                <span className="text-tag-cyan font-bold">&gt;</span>
                <span>{profile.statusPrompt}</span>
                <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
              </div>
            </div>

            {/* Right Quick Interaction Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Email 1-Click Card */}
              <div className="bg-surface-container-high p-4 rounded-xl flex items-center justify-between gap-3 shadow-sm border border-outline-variant/30">
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-xs text-outline uppercase tracking-wider font-bold">
                    Direct Channel
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-sans text-base text-primary hover:underline truncate transition-colors font-bold"
                  >
                    {profile.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copy(profile.email)}
                  title="Copy email to clipboard"
                  className="shrink-0 p-2.5 bg-tag-blue-accessible hover:bg-primary-container text-surface-polaroid hover:text-on-primary-container rounded-lg shadow transition-all hover:scale-105 cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-tag-emerald" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* LinkedIn Banner Card */}
              <div className="bg-surface-container-high p-4 rounded-xl flex items-center justify-between gap-3 shadow-sm border border-outline-variant/30">
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-xs text-outline uppercase tracking-wider font-bold">
                    Professional Network
                  </span>
                  <span className="font-sans text-base text-on-surface truncate font-bold">
                    linkedin.com/in/matheusfaleiro
                  </span>
                </div>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Open LinkedIn"
                  className="shrink-0 p-2.5 bg-surface-container-lowest hover:bg-surface-variant text-tag-cyan rounded-lg shadow border border-outline-variant/30 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toast show={copied} message={`Email address copied: ${profile.email}`} />
    </>
  )
}
