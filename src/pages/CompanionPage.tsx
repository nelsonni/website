import { CompanionLayout } from "@/components/layout/CompanionLayout";
import type { CompanionMeta } from "@/types";

/** Renders **Name** markers as bold spans, identical to Publications.tsx */
function AuthorString({ raw }: { raw: string }) {
  const parts = raw.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\*\*(.+)\*\*$/);
        return match ? (
          <strong key={i} className="font-medium text-ink">
            {match[1]}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

interface CompanionPageProps {
  meta: CompanionMeta;
}

export function CompanionPage({ meta }: CompanionPageProps) {
  const shortTitle = meta.route.replace("/", "").toUpperCase();

  return (
    <CompanionLayout title={shortTitle}>
      {/* Title & authors */}
      <div className="mb-10">
        <h1 className="font-serif text-2xl font-semibold leading-snug text-ink mb-3">
          {meta.title}
        </h1>
        <p className="text-[0.9rem] text-ink-muted italic">
          <AuthorString raw={meta.authors} />
        </p>
      </div>

      {/* Abstract */}
      <section className="mb-10">
        <h2 className="font-mono text-2xs tracking-[0.14em] uppercase text-ink-faint mb-4 pb-2 border-b border-rule flex items-center gap-3">
          <span className="w-5 h-px bg-accent flex-shrink-0" aria-hidden />
          Abstract
        </h2>
        <div className="flex flex-col gap-3">
          {meta.abstract.map((para, i) => (
            <p key={i} className="text-[0.93rem] leading-relaxed text-ink">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Two-column: artifacts + publication info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Artifacts */}
        <section>
          <h2 className="font-mono text-2xs tracking-[0.14em] uppercase text-ink-faint mb-4 pb-2 border-b border-rule flex items-center gap-3">
            <span className="w-5 h-px bg-accent flex-shrink-0" aria-hidden />
            Artifacts
          </h2>
          <ul className="flex flex-col gap-2">
            {meta.artifacts.map((artifact) => (
              <li key={artifact.label}>
                <a
                  href={artifact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.85rem] text-brand hover:text-accent transition-colors duration-150 underline underline-offset-2"
                >
                  {artifact.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Publication + contacts */}
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="font-mono text-2xs tracking-[0.14em] uppercase text-ink-faint mb-4 pb-2 border-b border-rule flex items-center gap-3">
              <span className="w-5 h-px bg-accent flex-shrink-0" aria-hidden />
              Published In
            </h2>
            <a
              href={meta.venueHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] text-brand hover:text-accent transition-colors duration-150 underline underline-offset-2"
            >
              {meta.venueLabel}
            </a>
          </section>

          <section>
            <h2 className="font-mono text-2xs tracking-[0.14em] uppercase text-ink-faint mb-4 pb-2 border-b border-rule flex items-center gap-3">
              <span className="w-5 h-px bg-accent flex-shrink-0" aria-hidden />
              Contacts
            </h2>
            <ul className="flex flex-col gap-1">
              {meta.contacts.map((c) => (
                <li
                  key={c}
                  className="font-mono text-[0.78rem] text-ink-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </CompanionLayout>
  );
}
