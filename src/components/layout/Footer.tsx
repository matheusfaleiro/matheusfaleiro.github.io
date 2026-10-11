import { profile, navItems } from '@/data/portfolioData'

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-20 mt-20 border-t border-outline-variant/20">
      <div className="w-full px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Node Operational Status */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-tag-emerald rounded-full" />
              <span className="font-mono text-sm text-on-surface font-bold">
                {profile.nodeStatus}
              </span>
            </div>
            <p className="font-mono text-xs text-on-surface-variant max-w-md leading-relaxed">
              AI Engineer &amp; Systems Architect focusing on distributed orchestration,
              high-throughput inference runtimes, and multi-agent coordination.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2 py-0.5 rounded font-mono text-xs bg-surface-container-high text-tag-cyan">
                {profile.geoCoordinates}
              </span>
              <span className="px-2 py-0.5 rounded font-mono text-xs bg-surface-container-high text-tag-emerald">
                Copenhagen, Capital Region of Denmark
              </span>
            </div>
          </div>

          {/* Quick Dispatch Nav */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-outline mb-1 font-bold">
              Quick Dispatch
            </span>
            <nav className="flex flex-col gap-1.5" aria-label="Footer Navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="font-mono text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors w-fit px-1.5 py-0.5 rounded"
                >
                  # {item.label.toLowerCase()}
                </a>
              ))}
            </nav>
          </div>

          {/* Network Handshakes */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-outline mb-1 font-bold">
              Network Handshakes
            </span>
            <div className="flex flex-col gap-1.5 font-mono text-xs text-on-surface-variant">
              <a
                href={`mailto:${profile.email}`}
                className="text-primary hover:underline transition-colors"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-on-surface transition-colors"
              >
                linkedin.com/in/matheusfaleiro
              </a>
              <span className="text-outline text-xs mt-3">
                PGP Fingerprint: {profile.pgpFingerprint}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar Notice */}
        <div className="pt-6 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-outline">
          <div className="flex items-center gap-2">
            <span>© 2024 Matheus Faleiro. Distributed Workshop Brutalism.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>UTC+01:00 CET / CEST</span>
            <span>TLS 1.3 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
