interface SectionHeadingProps {
  children: string;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-3 font-mono text-2xs tracking-[0.14em] uppercase text-ink-faint mb-6 pb-2.5 border-b border-rule">
      <span className="w-5 h-px bg-accent flex-shrink-0" aria-hidden />
      {children}
    </h2>
  );
}
