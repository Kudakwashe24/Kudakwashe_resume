import Image from "next/image";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[var(--color-brand-paper-card)] border border-[var(--color-brand-border)] rounded-sm overflow-hidden hover:border-[var(--color-brand-charcoal)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:ring-offset-2"
      aria-label={`Visit live website for ${project.name} (opens in new tab)`}
    >
      {/* 16:10 Aspect Ratio Image Container */}
      <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-[var(--color-brand-border)]">
        <Image
          src={project.image}
          alt={`Live website screenshot of ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Hover overlay with clear CTA */}
        <div className="absolute inset-0 bg-[var(--color-brand-charcoal)]/75 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-brand-orange)] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>Visit Live Site</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2 py-0.5 bg-[var(--color-brand-charcoal)]/90 text-white font-mono text-[10px] tracking-wider uppercase rounded-sm">
          {project.category}
        </span>
      </div>

      {/* Card Content Information */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-display font-bold text-xl text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-orange)] transition-colors">
              {project.name}
            </h3>
            <svg
              className="w-4 h-4 text-[var(--color-brand-muted)] group-hover:text-[var(--color-brand-orange)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>

          <p className="font-mono text-xs text-[var(--color-brand-orange)] mb-3 font-medium">
            {project.role} ({project.attribution})
          </p>

          <p className="text-xs text-[var(--color-brand-muted)] leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Card Footer Meta */}
        <div className="mt-6 pt-4 border-t border-[var(--color-brand-border)]/60 flex items-center justify-between text-[11px] font-mono text-[var(--color-brand-muted)]">
          <span>{project.technologies.slice(0, 3).join(" • ")}</span>
          <span className="text-[var(--color-brand-charcoal)] font-medium">
            {project.displayUrl}
          </span>
        </div>
      </div>
    </a>
  );
}
