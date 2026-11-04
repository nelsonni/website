import { SectionHeading } from "@/components/layout/SectionHeading";
import { publications } from "@/data/profile";
import type { Publication } from "@/types";

/**
 * Renders author strings where **Name** becomes bold.
 * The double-asterisk convention mirrors Markdown bold.
 */
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

function PublicationRow({ pub }: { pub: Publication }) {
  const { year, month, title, href, authors, venue, links, awards } = pub;

  return (
    <div className="grid grid-cols-[7rem_1fr] gap-x-5 py-5 border-b border-paper-subtle last:border-b-0">
      {/* Date column */}
      <div className="font-mono text-xs text-ink-faint text-right pt-0.5 leading-snug">
        <span className="block text-[0.82rem] font-medium text-ink-muted">
          {year}
        </span>
        {month}
      </div>

      {/* Content column */}
      <div>
        <h3 className="font-serif font-semibold text-[0.93rem] leading-snug mb-1">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-brand transition-colors duration-150"
          >
            {title}
          </a>
        </h3>

        <p className="text-[0.8rem] text-ink-muted mb-1">
          <AuthorString raw={authors} />
        </p>

        <p className="text-[0.8rem] text-ink-muted italic mb-2">{venue}</p>

        <div className="flex flex-wrap gap-1.5 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-2 py-0.5 border border-rule rounded-xs font-mono text-2xs text-ink-muted tracking-[0.03em] hover:border-brand hover:text-brand transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
          {awards?.map((award) => (
            <span
              key={award}
              className="inline-flex items-center px-2 py-0.5 border border-accent-light rounded-xs bg-accent-light font-mono text-2xs text-accent tracking-[0.04em] uppercase"
            >
              {award}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Publications() {
  return (
    <section id="publications" aria-labelledby="publications-heading">
      <SectionHeading>Publications</SectionHeading>
      <div>
        {publications.map((pub) => (
          <PublicationRow key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  );
}
