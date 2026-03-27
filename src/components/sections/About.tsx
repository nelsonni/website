import { SectionHeading } from "@/components/layout/SectionHeading";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand underline underline-offset-2 hover:text-accent transition-colors duration-150"
    >
      {children}
    </a>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <SectionHeading>About</SectionHeading>

      <div className="flex flex-col gap-3.5 text-[0.96rem] leading-relaxed text-ink">
        <p>
          I am a software engineer, researcher, and educator. In February 2024,
          I defended my PhD in Computer Science at{" "}
          <ExternalLink href="https://oregonstate.edu/">
            Oregon State University
          </ExternalLink>
          , graduating in June 2024, where I also obtained my BS in Computer
          Science in June 2015. I am the founder of{" "}
          <strong className="font-medium">Nomatic Software LLC</strong>, through
          which I pursue software consulting and research collaborations.
        </p>

        <p>
          I currently serve as{" "}
          <strong className="font-medium">
            Quality Automation Technical Manager
          </strong>{" "}
          at{" "}
          <ExternalLink href="https://www.telusinternational.com/">
            TELUS International AI
          </ExternalLink>
          , leading a Quality Automation team within the Data, Operations &amp; Quality organization, building automations and architecture that enable reliability and quality across B2B AI services supporting large-scale crowd contributors and custom model evaluations globally. I also
          serve as an{" "}
          <strong className="font-medium">Adjunct Professor</strong> at{" "}
          <ExternalLink href="https://www.clark.edu/">
            Clark College
          </ExternalLink>
          , teaching undergraduate software engineering courses.
        </p>

        <p>
          As a graduate student, I was a Research Intern at Microsoft on the{" "}
          <ExternalLink href="https://microsoft.github.io/prose/">
            PROSE
          </ExternalLink>{" "}
          team, mentored by{" "}
          <ExternalLink href="http://www.barik.net/">Titus Barik</ExternalLink>.
          As an undergraduate, I interned at{" "}
          <ExternalLink href="https://www.intel.com">
            Intel Corporation
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://www.hpe.com">
            Hewlett Packard Enterprise
          </ExternalLink>
          , and conducted my senior undergraduate project with{" "}
          <ExternalLink href="https://buy.garmin.com/en-US/US/cInTheAir-p1.html">
            Garmin AT
          </ExternalLink>
          . Previously, I was a Systems Analyst in healthcare IT and DevOps.
        </p>

        <p>
          My research interests are in enabling software developers to
          intuitively interact with their development environment. My
          dissertation explored the effects of spatial interactions and
          barrier-free version control within an IDE called{" "}
          <ExternalLink href="https://github.com/EPICLab/synectic/">
            Synectic
          </ExternalLink>
          . I have also conducted research into merge conflicts, continuous
          integration, and test-driven development, spanning software
          engineering, human-computer interaction, and programming language
          constructs for rapid and efficient development.
        </p>
      </div>
    </section>
  );
}
