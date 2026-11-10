import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export function Navigation() {
  return (
    <>
      {/* Running Architectural Meta Ticker */}
      <aside className="w-full border-b border-[var(--color-brand-border)] bg-[var(--color-brand-paper)] py-2.5 px-6 sm:px-10 text-[11px] font-mono uppercase tracking-widest text-[var(--color-brand-muted)] flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span className="text-[var(--color-brand-charcoal)] font-medium">{siteConfig.location}</span>
          <span className="text-[var(--color-brand-border)] mx-1" aria-hidden="true">|</span>
          <span>{siteConfig.availabilityNotice}</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-brand-orange)] transition-colors"
          >
            GitHub: @Kudakwashe24
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-[var(--color-brand-orange)] transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </aside>

      {/* Editorial Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-brand-paper)]/90 border-b border-[var(--color-brand-border)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          
          {/* Brand Monogram */}
          <Link href="#top" className="group flex items-center gap-3">
            <span className="w-9 h-9 rounded-sm bg-[var(--color-brand-charcoal)] text-[var(--color-brand-paper)] flex items-center justify-center font-display font-bold text-lg group-hover:bg-[var(--color-brand-orange)] transition-colors duration-300">
              K
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight leading-none text-[var(--color-brand-charcoal)]">
                KUDAKWASHE
              </span>
              <span className="font-mono text-[10px] text-[var(--color-brand-muted)] uppercase tracking-widest leading-none mt-1">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[var(--color-brand-charcoal)]">
            <a href="#work" className="hover:text-[var(--color-brand-orange)] transition-colors flex items-center gap-1.5 group">
              <span className="text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-orange)] text-[10px]">01</span>
              <span>Selected Work</span>
            </a>
            <a href="#about" className="hover:text-[var(--color-brand-orange)] transition-colors flex items-center gap-1.5 group">
              <span className="text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-orange)] text-[10px]">02</span>
              <span>About</span>
            </a>
            <a href="#capabilities" className="hover:text-[var(--color-brand-orange)] transition-colors flex items-center gap-1.5 group">
              <span className="text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-orange)] text-[10px]">03</span>
              <span>Capabilities</span>
            </a>
            <a href="#contact" className="hover:text-[var(--color-brand-orange)] transition-colors flex items-center gap-1.5 group">
              <span className="text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-orange)] text-[10px]">04</span>
              <span>Contact</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-[var(--color-brand-charcoal)] text-[var(--color-brand-charcoal)] font-mono text-xs uppercase tracking-wider hover:bg-[var(--color-brand-charcoal)] hover:text-white transition-all"
            >
              Get in Touch
            </a>
            <a
              href={siteConfig.cvPath}
              download="Kudakwashe_Mukombachoto_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-orange)] text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)]"
            >
              <span>CV (PDF)</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

        </div>
      </header>
    </>
  );
}
