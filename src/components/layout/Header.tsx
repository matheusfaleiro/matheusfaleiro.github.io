import { useState } from 'react'
import { ArrowRight, Copy, Check, Menu, X } from 'lucide-react'
import { navItems, profile } from '@/data/portfolioData'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useClipboard } from '@/hooks/useClipboard'
import { Toast } from '@/components/ui/Toast'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(navItems.map((item) => item.id))
  const { copied, copy } = useClipboard()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-canvas/90 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
        <div className="h-20 w-full px-5 lg:px-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <img
                src="/assets/monogram.png"
                alt="MF Monogram"
                className="h-7 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-mono font-bold text-sm tracking-tight text-on-surface leading-none group-hover:text-primary transition-colors">
                  {profile.name}
                </span>
                <span className="font-mono text-[10px] text-primary/80 tracking-wider uppercase leading-none mt-1">
                  {profile.role}
                </span>
              </div>
            </a>

            {/* Availability Indicator */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-lowest border border-outline-variant/30">
              <span className="w-1.5 h-1.5 rounded-full bg-tag-emerald animate-pulse" />
              <span className="font-mono text-xs text-on-surface-variant">Available</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-surface-container-lowest/80 px-2 py-1 rounded-lg border border-outline-variant/30"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    isActive
                      ? 'bg-surface-container text-primary font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Actions & Avatar */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => copy(profile.email)}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-mono text-xs bg-surface-container text-primary hover:bg-surface-container-high hover:text-on-surface transition-colors border border-outline-variant/30 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-tag-emerald" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>&gt; copy_email</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-bold bg-tag-blue-accessible text-surface-polaroid hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="flex items-center p-0.5 rounded-full ring-1 ring-outline-variant hover:ring-primary transition-all"
              aria-label="Profile avatar link to contact"
            >
              <img
                src="/assets/portrait.png"
                alt="Matheus Faleiro"
                className="w-7 h-7 rounded-full object-cover"
              />
            </a>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              className="md:hidden p-1.5 text-on-surface-variant hover:text-on-surface bg-surface-container rounded-lg border border-outline-variant/30 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-outline-variant/20 bg-surface-canvas/98 px-5 py-4 flex flex-col gap-2"
            data-testid="mobile-nav-drawer"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-outline-variant/20 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  copy(profile.email)
                  setMobileMenuOpen(false)
                }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-mono text-xs bg-surface-container text-primary border border-outline-variant/30"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-tag-emerald" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>&gt; copy_email ({profile.email})</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <Toast show={copied} message={`Email copied: ${profile.email}`} />
    </>
  )
}
