import { SectionHeading } from "@/components/layout/SectionHeading";
import { service, mentors } from "@/data/profile";
import type { ServiceBlock, ServiceEntry, Mentor } from "@/types";

function ServiceEntryRow({ entry }: { entry: ServiceEntry }) {
  return (
    <li className="relative pl-4 text-[0.83rem] text-ink-muted leading-snug before:absolute before:left-0 before:content-['–'] before:text-ink-faint">
      {entry.href ? (
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:text-accent transition-colors duration-150"
        >
          {entry.label}
        </a>
      ) : (
        entry.label
      )}
      {entry.note && (
        <span className="text-ink-faint"> — {entry.note}</span>
      )}
      {entry.forthcoming && (
        <span className="inline-block ml-1.5 px-1 py-px border border-accent-light rounded-sm bg-accent-light font-mono text-2xs text-accent uppercase tracking-[0.04em] align-middle">
          Forthcoming
        </span>
      )}
    </li>
  );
}

function ServiceBlockCard({ block }: { block: ServiceBlock }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="font-mono text-xs tracking-[0.06em] uppercase text-ink-muted font-medium mb-2.5">
        {block.heading}
      </h3>
      <ul className="flex flex-col gap-1.5">
        {block.entries.map((entry, i) => (
          <ServiceEntryRow key={i} entry={entry} />
        ))}
      </ul>
    </div>
  );
}

function MentorEntry({ mentor }: { mentor: Mentor }) {
  return (
    <div className="relative pl-4 text-[0.83rem] text-ink-muted leading-snug before:absolute before:left-0 before:content-['–'] before:text-ink-faint">
      {mentor.href ? (
        <a
          href={mentor.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:text-accent transition-colors duration-150"
        >
          {mentor.name}
        </a>
      ) : (
        <span>{mentor.name}</span>
      )}
      <span className="text-ink-faint"> ({mentor.affiliation})</span>
    </div>
  );
}

export function Service() {
  return (
    <section id="service" aria-labelledby="service-heading">
      <SectionHeading>Service</SectionHeading>

      {service.map((block) => (
        <ServiceBlockCard key={block.id} block={block} />
      ))}

      <div className="mb-7">
        <h3 className="font-mono text-xs tracking-[0.06em] uppercase text-ink-muted font-medium mb-2.5">
          Mentor
        </h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {mentors.map((mentor) => (
            <MentorEntry key={mentor.name} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}
