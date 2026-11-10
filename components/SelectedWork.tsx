import { projectsData } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 sm:px-10 py-20 border-b border-[var(--color-brand-border)]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[var(--color-brand-border)] gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-brand-orange)] block mb-2">
            01 / Commercial & Client Practice
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[var(--color-brand-charcoal)]">
            Selected Live Projects
          </h2>
        </div>
        <div className="font-mono text-xs text-[var(--color-brand-muted)]">
          Six verified commercial productions • Direct live site links
        </div>
      </div>

      {/* 3-Column Responsive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}
