import { careerMilestones } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-10 py-20 border-b border-[var(--color-brand-border)]">
      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Column Header */}
        <div className="col-span-12 lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-brand-orange)] block mb-2">
            02 / About & Background
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-brand-charcoal)] tracking-tight mb-6">
            Frontend development with deep WordPress and systems expertise.
          </h2>
          <div className="font-mono text-xs text-[var(--color-brand-muted)] space-y-2">
            <p>• Cape Town, South Africa (UTC+2)</p>
            <p>• Remote, Hybrid & Contract Available</p>
            <p>• B.Sc. Computer Science (UCT)</p>
          </div>
        </div>

        {/* Right Content Columns */}
        <div className="col-span-12 lg:col-span-8 space-y-6 text-[var(--color-brand-charcoal)] font-sans text-base sm:text-lg leading-relaxed">
          <p>
            I am a Frontend Developer with commercial experience building and maintaining high-performance websites, enterprise WordPress platforms, and interactive web applications. My focus is combining visual design precision with robust engineering and reliable CMS architectures.
          </p>

          <p className="text-[var(--color-brand-muted)] text-base">
            Currently at <strong className="text-[var(--color-brand-charcoal)] font-semibold">Hello Infantry</strong>, I develop and refine customer-facing platforms using JavaScript, Vue.js, WordPress, PHP, and SCSS. My work includes implementing key user journeys for telecommunications products, creating WordPress knowledge-base layouts with Elementor, and building JetEngine-based dynamic content structures.
          </p>

          <p className="text-[var(--color-brand-muted)] text-base">
            Previously at <strong className="text-[var(--color-brand-charcoal)] font-semibold">Xpand IT</strong>, I developed and maintained WordPress and WooCommerce websites, building custom child themes, managing Ubuntu/Linux server environments, MySQL databases, SSL configurations, automated Python product workflows, and performance optimization.
          </p>

          <p className="text-[var(--color-brand-muted)] text-base">
            Combined with earlier software QA and Python/Django engineering at <strong className="text-[var(--color-brand-charcoal)] font-semibold">Enlabeler</strong>, data operations leadership at <strong className="text-[var(--color-brand-charcoal)] font-semibold">Aerobotics</strong>, and a Computer Science degree from the <strong className="text-[var(--color-brand-charcoal)] font-semibold">University of Cape Town</strong>, I bring an end-to-end perspective to every build—from Figma handoff and frontend components to backend CMS pipelines and production hosting.
          </p>

          {/* Career Timeline */}
          <div className="pt-8 border-t border-[var(--color-brand-border)] mt-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-brand-charcoal)] font-bold mb-6">
              Career Timeline
            </h3>

            <div className="space-y-6">
              {careerMilestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[var(--color-brand-border)]/40 pb-4 last:border-b-0"
                >
                  <div>
                    <span className="font-display font-bold text-lg text-[var(--color-brand-charcoal)]">
                      {milestone.role}
                    </span>
                    <span className="text-[var(--color-brand-muted)] text-sm sm:ml-2 block sm:inline">
                      {milestone.company} • {milestone.type}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs mt-1 sm:mt-0 ${
                      milestone.isCurrent
                        ? "text-[var(--color-brand-orange)] font-semibold"
                        : "text-[var(--color-brand-muted)]"
                    }`}
                  >
                    {milestone.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
