import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/layout/Badge";
import { experience } from "@/data/profile";
import type { ExperienceItem } from "@/types";

function ExperienceRow({ item }: { item: ExperienceItem }) {
  const {
    year,
    dateLabel,
    role,
    org,
    orgUrl,
    location,
    description,
    badges,
  } = item;

  return (
    <div className="grid grid-cols-[7rem_1fr] gap-x-5 py-5 border-b border-paper-subtle last:border-b-0">
      {/* Date column */}
      <div className="font-mono text-xs text-ink-faint text-right pt-0.5 leading-snug">
        <span className="block text-[0.82rem] text-ink-muted">{year}</span>
        {dateLabel}
      </div>

      {/* Content column */}
      <div>
        <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
          <span className="font-serif font-semibold text-[0.97rem] leading-snug">
            {role}
          </span>
          {badges?.map((b) => (
            <Badge key={b.variant} label={b.label} variant={b.variant} />
          ))}
        </div>

        <p className="text-[0.83rem] text-ink-muted mb-1.5">
          {orgUrl ? (
            <a
              href={orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors duration-150"
            >
              {org}
            </a>
          ) : (
            org
          )}{" "}
          · {location}
        </p>

        <p className="text-[0.83rem] text-ink-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <SectionHeading>Experience</SectionHeading>
      <div>
        {experience.map((item) => (
          <ExperienceRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
