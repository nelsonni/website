import { SectionHeading } from "@/components/layout/SectionHeading";
import { teaching } from "@/data/profile";
import type { TeachingBlock, Course } from "@/types";

function CourseRow({ course }: { course: Course }) {
  return (
    <li className="grid grid-cols-[5.5rem_1fr] gap-x-3 items-baseline">
      <span className="font-mono text-xs+ text-brand">{course.code}</span>
      <div>
        <span className="text-[0.83rem] text-ink">{course.name}</span>
        <div className="font-mono text-2xs text-ink-faint mt-0.5">
          {course.terms}
        </div>
      </div>
    </li>
  );
}

function TeachingBlockCard({ block }: { block: TeachingBlock }) {
  return (
    <div className="mb-9 last:mb-0">
      <h3 className="font-serif font-semibold text-[0.95rem] mb-0.5">
        {block.role}
      </h3>
      <p className="font-mono text-2xs text-ink-faint uppercase tracking-[0.04em] mb-3.5">
        {block.institution} · {block.department} · {block.period}
      </p>
      <ul className="flex flex-col gap-2">
        {block.courses.map((course) => (
          <CourseRow key={course.code} course={course} />
        ))}
      </ul>
    </div>
  );
}

export function Teaching() {
  return (
    <section id="teaching" aria-labelledby="teaching-heading">
      <SectionHeading>Teaching</SectionHeading>
      {teaching.map((block) => (
        <TeachingBlockCard key={block.id} block={block} />
      ))}
    </section>
  );
}
