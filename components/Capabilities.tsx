import { capabilitiesPillars } from "@/data/portfolio";

export function Capabilities() {
  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-6 sm:px-10 py-20 border-b border-[var(--color-brand-border)]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--color-brand-border)] gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-brand-orange)] block mb-2">
            03 / Technical Domain
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[var(--color-brand-charcoal)]">
            Technical Capabilities
          </h2>
        </div>
        <div className="font-mono text-xs text-[var(--color-brand-muted)]">
          Grouped by commercial domain & practical application
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {capabilitiesPillars.map((pillar) => (
          <div
            key={pillar.index}
            className="p-6 bg-[var(--color-brand-paper-card)] border border-[var(--color-brand-border)] rounded-sm hover:border-[var(--color-brand-charcoal)] transition-all duration-300"
          >
            <div className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm mb-6 ${
              pillar.index === "01" || pillar.index === "03"
                ? "bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)]"
                : "bg-[var(--color-brand-charcoal)] text-white"
            }`}>
              {pillar.index}
            </div>

            <h3 className="font-display font-bold text-xl text-[var(--color-brand-charcoal)] mb-3">
              {pillar.title}
            </h3>

            <p className="text-xs text-[var(--color-brand-muted)] mb-6 leading-relaxed">
              {pillar.description}
            </p>

            <ul className="space-y-2.5 font-mono text-xs text-[var(--color-brand-charcoal)]">
              {pillar.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      pillar.index === "01" || pillar.index === "03"
                        ? "bg-[var(--color-brand-orange)]"
                        : "bg-[var(--color-brand-charcoal)]"
                    }`}
                    aria-hidden="true"
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
