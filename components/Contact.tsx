import { siteConfig } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
      <div className="bg-[var(--color-brand-charcoal)] text-white p-8 sm:p-16 lg:p-20 rounded-sm relative overflow-hidden">
        
        {/* Signal Orange Top Accent Rule */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--color-brand-orange)]" aria-hidden="true" />

        <div className="grid grid-cols-12 gap-8 items-end">
          
          <div className="col-span-12 lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-brand-orange)] block mb-4">
              04 / Contact & Opportunities
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-[1.05] mb-6">
              Let&rsquo;s talk about your team or project.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed">
              {siteConfig.availabilityNotice} Based in Cape Town (UTC+2) with extensive remote collaboration experience.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white font-mono text-sm uppercase tracking-wider font-semibold transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-brand-orange)]"
            >
              <span>{siteConfig.email}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 font-mono text-xs uppercase tracking-wider transition-all"
            >
              <span>{siteConfig.phone}</span>
            </a>
          </div>

        </div>

        {/* Professional Links Strip */}
        <div className="mt-16 pt-10 border-t border-neutral-800 flex flex-wrap justify-between items-center gap-6 font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.cvPath}
              download="Kudakwashe_Mukombachoto_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Download CV
            </a>
          </div>

          <div>
            <span>Cape Town, South Africa • 2027</span>
          </div>
        </div>

      </div>
    </section>
  );
}
