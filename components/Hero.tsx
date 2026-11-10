export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-20 border-b border-[var(--color-brand-border)]">
      
      {/* Top Meta Line */}
      <div className="grid grid-cols-12 gap-6 mb-8 font-mono text-[11px] uppercase tracking-wider text-[var(--color-brand-muted)]">
        <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--color-brand-orange)] rounded-full" aria-hidden="true" />
          <span>Frontend Architecture & UI Development</span>
        </div>
        <div className="col-span-12 sm:col-span-4 hidden sm:block">
          <span>Currently: Hello Infantry • Cape Town</span>
        </div>
        <div className="col-span-12 sm:col-span-4 text-left sm:text-right">
          <span>Previously: Xpand IT • Enlabeler</span>
        </div>
      </div>

      {/* Hero Statement */}
      <div className="grid grid-cols-12 gap-y-10 sm:gap-x-12 items-end">
        <div className="col-span-12 lg:col-span-9">
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[var(--color-brand-charcoal)] leading-[1.05]">
            Building responsive, resilient web experiences with precision and care.
          </h1>
        </div>

        <div className="col-span-12 lg:col-span-3 pb-2">
          <p className="text-[var(--color-brand-muted)] text-sm sm:text-base leading-relaxed font-sans">
            Commercial Frontend Developer shipping responsive web platforms, custom CMS themes, and interactive interfaces. Experienced in modern JavaScript, Vue.js, React, and WordPress architectures.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-orange)] group"
            >
              <span>View Selected Work</span>
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Key Foundation Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[var(--color-brand-border)]/60">
        <div>
          <span className="font-mono text-xs text-[var(--color-brand-muted)] uppercase tracking-wider block">Commercial Focus</span>
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-brand-charcoal)] mt-1 block">5+ Years</span>
          <span className="text-xs text-[var(--color-brand-muted)] mt-1 block font-sans">Agency & commercial delivery</span>
        </div>
        <div>
          <span className="font-mono text-xs text-[var(--color-brand-muted)] uppercase tracking-wider block">Core Frontend</span>
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-brand-charcoal)] mt-1 block">JS & Vue / React</span>
          <span className="text-xs text-[var(--color-brand-muted)] mt-1 block font-sans">TypeScript, SCSS & Tailwind</span>
        </div>
        <div>
          <span className="font-mono text-xs text-[var(--color-brand-muted)] uppercase tracking-wider block">CMS & Commerce</span>
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-brand-orange)] mt-1 block">Custom Themes</span>
          <span className="text-xs text-[var(--color-brand-muted)] mt-1 block font-sans">WordPress, WooCommerce, PHP</span>
        </div>
        <div>
          <span className="font-mono text-xs text-[var(--color-brand-muted)] uppercase tracking-wider block">Academic Foundation</span>
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-brand-charcoal)] mt-1 block">UCT CS</span>
          <span className="text-xs text-[var(--color-brand-muted)] mt-1 block font-sans">Computer Science Degree</span>
        </div>
      </div>

    </section>
  );
}
