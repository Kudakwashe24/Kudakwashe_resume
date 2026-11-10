export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 sm:px-10 py-8 border-t border-[var(--color-brand-border)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[var(--color-brand-muted)]">
      <div>
        &copy; {new Date().getFullYear()} Kudakwashe Mukombachoto. All rights reserved.
      </div>
      <div className="flex items-center gap-4">
        <span>Frontend Developer</span>
        <span className="text-[var(--color-brand-orange)]" aria-hidden="true">•</span>
        <span>Cape Town (UTC+2)</span>
      </div>
    </footer>
  );
}
