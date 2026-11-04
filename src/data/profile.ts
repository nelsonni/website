import {
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaBluesky,
  FaGoogleScholar,
} from "react-icons/fa6";
import { SiDblp, SiOrcid } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import type {
  ContactLink,
  ExperienceItem,
  Publication,
  TeachingBlock,
  ServiceBlock,
  Mentor,
} from "@/types";

// ── Contact ───────────────────────────────────────────────────────────────────

export const contacts: readonly ContactLink[] = [
  {
    id: "email",
    label: "nnelson@clark.edu",
    href: "mailto:nnelson@clark.edu",
    Icon: MdOutlineEmail,
  },
  {
    id: "github",
    label: "nelsonni",
    href: "https://github.com/nelsonni/",
    Icon: FaGithub,
    external: true,
  },
  {
    id: "linkedin",
    label: "nelsonni1",
    href: "https://www.linkedin.com/in/nelsonni1/",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    id: "scholar",
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=E_X1HXQAAAAJ&hl=en&oi=ao",
    Icon: FaGoogleScholar,
    external: true,
  },
  {
    id: "dblp",
    label: "DBLP",
    href: "https://dblp.uni-trier.de/pid/47/6907-2.html",
    Icon: SiDblp,
    external: true,
  },
  {
    id: "orcid",
    label: "ORCID",
    href: "https://orcid.org/0000-0002-6365-7152",
    Icon: SiOrcid,
    external: true,
  },
  {
    id: "twitter",
    label: "@nomaticdev",
    href: "https://twitter.com/nomaticdev",
    Icon: FaXTwitter,
    external: true,
  },
  {
    id: "bluesky",
    label: "nelsonni.bsky.social",
    href: "https://bsky.app/profile/nelsonni.bsky.social",
    Icon: FaBluesky,
    external: true,
  },
] as const;

// ── Experience ────────────────────────────────────────────────────────────────

export const experience: readonly ExperienceItem[] = [
  {
    id: "telus-ftm",
    year: "2026",
    dateLabel: "Feb – present",
    role: "Quality Automation Technical Manager",
    org: "TELUS International AI",
    orgUrl: "https://www.telusinternational.com/",
    location: "Vancouver, BC (Remote)",
    description:
      "Leading a Quality Automation team within the Data, Operations & Quality (DOQ) organization, building automations and architecture that enable reliability and quality across B2B AI services supporting large-scale crowd contributors and custom model evaluations globally.",
    badges: [
      { label: "Current", variant: "current" },
      { label: "Full-time", variant: "fulltime" },
    ],
  },
  {
    id: "clark",
    year: "2025",
    dateLabel: "Sep – present",
    role: "Adjunct Professor",
    org: "Clark College",
    orgUrl: "https://www.clark.edu/",
    location: "Vancouver, WA",
    description:
      "Teaching undergraduate software engineering and algorithms courses in the Computer Science & Engineering department.",
    badges: [{ label: "Current", variant: "current" }],
  },
  {
    id: "telus-contract",
    year: "2025",
    dateLabel: "Aug – Feb 2026",
    role: "AI Business Consultant",
    org: "TELUS International AI",
    orgUrl: "https://www.telusinternational.com/",
    location: "Contract",
    description:
      "Provided AI quality evaluation strategy and business consulting, contributing to GCP Medallion architecture design and executive-facing quality metrics dashboards before converting to a full-time role.",
  },
  {
    id: "nomatic",
    year: "2024",
    dateLabel: "Founded",
    role: "Founder",
    org: "Nomatic Software LLC",
    location: "Portland, OR",
    description:
      "Independent software consulting and research collaborations in software engineering, AI quality evaluation, and developer tooling.",
    badges: [{ label: "Current", variant: "current" }],
  },
  {
    id: "phd",
    year: "2024",
    dateLabel: "PhD",
    role: "Doctor of Philosophy, Computer Science",
    org: "Oregon State University",
    orgUrl: "https://oregonstate.edu/",
    location: "Corvallis, OR",
    description:
      "Defended February 2024 · Graduated June 2024. Dissertation research on spatial interactions and barrier-free version control in developer IDEs, realized through the Synectic IDE.",
    badges: [{ label: "PhD", variant: "phd" }],
  },
  {
    id: "microsoft",
    year: "2019",
    dateLabel: "Summer",
    role: "Research Intern",
    org: "Microsoft — PROSE Team",
    orgUrl: "https://microsoft.github.io/prose/",
    location: "Redmond, WA",
    description: "Mentored by Titus Barik.",
  },
  {
    id: "bs",
    year: "2015",
    dateLabel: "BS",
    role: "Bachelor of Science, Computer Science",
    org: "Oregon State University",
    orgUrl: "https://oregonstate.edu/",
    location: "Corvallis, OR",
    description:
      "Internships at Intel Corporation and Hewlett Packard Enterprise. Senior project with Garmin AT.",
  },
] as const;

// ── Publications ──────────────────────────────────────────────────────────────

export const publications: readonly Publication[] = [
  {
    id: "commacm-2022",
    year: "2022",
    month: "April",
    title: "Cognitive Biases in Software Development",
    href: "https://dl.acm.org/doi/10.1145/3517217",
    authors:
      "Souti Chattopadhyay, **Nicholas Nelson**, Audrey Au, Natalia Morales, Christopher Sanchez, Rahul Pandita, Anita Sarma.",
    venue: "Communications of the ACM, Volume 65, Issue 4. pp 115–122.",
    venueAbbr: "CACM",
    links: [
      {
        label: "Author Copy",
        href: "https://nomatic.dev/docs/commacm-chattopadhyay.pdf",
      },
    ],
  },
  {
    id: "vlhcc-2020",
    year: "2020",
    month: "August",
    title:
      "Supporting Code Comprehension via Annotations: Right Information at the Right Time and Place",
    href: "https://ieeexplore.ieee.org/document/9127264",
    authors:
      "Marjan Adeli, **Nicholas Nelson**, Souti Chattopadhyay, Hayden Coffey, Austin Henley, Anita Sarma.",
    venue: "VL/HCC'20, Dunedin, New Zealand, August 10, 2020 (AR: 30.0%).",
    venueAbbr: "VL/HCC",
    links: [
      {
        label: "Conference",
        href: "https://conf.researchr.org/home/vlhcc2020",
      },
      {
        label: "Pre-print",
        href: "https://nomatic.dev/docs/vlhcc20-adeli.pdf",
      },
      {
        label: "Slides",
        href: "https://nomatic.dev/presentations/vlhcc20-slides.pdf",
      },
    ],
  },
  {
    id: "icse-2020",
    year: "2020",
    month: "May",
    title:
      "A Tale from the Trenches: Cognitive Biases and Software Development",
    href: "https://dl.acm.org/doi/abs/10.1145/3377811.3380330",
    authors:
      "Souti Chattopadhyay, **Nicholas Nelson**, Audrey Au, Natalia Morales, Christopher Sanchez, Rahul Pandita, Anita Sarma.",
    venue: "ICSE'20, Seoul, South Korea, May 23, 2020 (AR: 20.9%).",
    venueAbbr: "ICSE",
    links: [
      {
        label: "Conference",
        href: "https://conf.researchr.org/home/icse-2020",
      },
      {
        label: "Pre-print",
        href: "https://nomatic.dev/docs/icse20-chattopadhyay.pdf",
      },
    ],
    awards: ["★ Distinguished Paper", "◆ SIGSOFT Highlight 2020"],
  },
  {
    id: "icse-2019",
    year: "2019",
    month: "May",
    title:
      "Latent Patterns in Activities: A Field Study of How Developers Manage Context",
    href: "https://dl.acm.org/citation.cfm?id=3339554",
    authors:
      "Souti Chattopadhyay, **Nicholas Nelson**, Yenifer Ramirez Gonzalez, Annel Amelia Leon, Rahul Pandita, Anita Sarma.",
    venue: "ICSE'19, Montreal, Canada, May 25, 2019 (AR: 20.6%).",
    venueAbbr: "ICSE",
    links: [
      { label: "Conference", href: "https://2019.icse-conferences.org/" },
      {
        label: "Pre-print",
        href: "https://nomatic.dev/docs/icse19-chattopadhyay.pdf",
      },
      {
        label: "Artifacts",
        href: "https://epiclab.github.io/ICSE19-LatentPatternsInActivities/",
      },
    ],
  },
  {
    id: "emse-2019",
    year: "2019",
    month: "February",
    title: "The Life-Cycle of Merge Conflicts: Processes, Barriers, and Strategies",
    href: "https://doi.org/10.1007/s10664-018-9674-x",
    authors:
      "**Nicholas Nelson**, Caius Brindescu, Shane McKee, Anita Sarma, Danny Dig.",
    venue:
      "EMSE, Empirical Software Engineering Journal (Springer), February 2019.",
    venueAbbr: "EMSE",
    links: [
      { label: "Journal", href: "https://link.springer.com/journal/10664" },
      {
        label: "Pre-print",
        href: "https://nomatic.dev/docs/emse19-nelson.pdf",
      },
      { label: "Artifacts", href: "https://nomatic.dev/emse19.html" },
    ],
  },
  {
    id: "chase-2018",
    year: "2018",
    month: "May",
    title:
      "Context in Programming: An Investigation of How Programmers Create Context",
    href: "https://dl.acm.org/doi/abs/10.1145/3195836.3195861",
    authors:
      "Souti Chattopadhyay, **Nicholas Nelson**, Thien Nam, McKenzie Calvert, Anita Sarma.",
    venue: "CHASE'18: Short Paper, Gothenburg, Sweden, May 27, 2018.",
    venueAbbr: "CHASE",
    links: [
      {
        label: "Conference",
        href: "http://www.chaseresearch.org/workshops/chase-2018",
      },
      {
        label: "Pre-print",
        href: "https://nomatic.dev/docs/chase18-chattopadhyay.pdf",
      },
    ],
  },
  {
    id: "icsme-2017",
    year: "2017",
    month: "September",
    title:
      "Software Practitioner Perspectives on Merge Conflicts and Resolutions",
    href: "https://ieeexplore.ieee.org/document/8094445/",
    authors:
      "Shane McKee, **Nicholas Nelson**, Anita Sarma, Danny Dig.",
    venue: "ICSME'17, Shanghai, China, Sept. 17–22, 2017 (AR: 27.8%).",
    venueAbbr: "ICSME",
    links: [
      { label: "Conference", href: "https://icsme2017.github.io/" },
      {
        label: "Pre-print",
        href: "https://nomatic.dev/docs/icsme17-mckee.pdf",
      },
      {
        label: "Slides",
        href: "https://nomatic.dev/presentations/icsme17-slides.pdf",
      },
      { label: "Artifacts", href: "https://nomatic.dev/icsme17.html" },
      {
        label: "IEEE Blog",
        href: "http://blog.ieeesoftware.org/2017/10/software-practitioner-views-on-merge.html",
      },
    ],
    awards: ["★ Distinguished Paper"],
  },
  {
    id: "fse-2017",
    year: "2017",
    month: "September",
    title:
      "Trade-Offs in Continuous Integration: Assurance, Security, and Flexibility",
    href: "https://dl.acm.org/citation.cfm?id=3106270",
    authors:
      "Michael Hilton, **Nicholas Nelson**, Timothy Tunnell, Darko Marinov, Danny Dig.",
    venue: "ESEC/FSE'17, Paderborn, Germany, Sept. 4–8, 2017 (AR: 24.4%).",
    venueAbbr: "ESEC/FSE",
    links: [
      {
        label: "Conference",
        href: "https://esec-fse17.uni-paderborn.de/",
      },
      {
        label: "Pre-print",
        href: "https://nomatic.dev/docs/fse17-hilton.pdf",
      },
      {
        label: "Artifacts",
        href: "http://cope.eecs.oregonstate.edu/CI_Tradeoffs/",
      },
    ],
    awards: ["★ Distinguished Paper"],
  },
  {
    id: "ppig-2017a",
    year: "2017",
    month: "July",
    title: "Towards an IDE to Support Programming as Problem-Solving",
    href: "https://www.ppig.org/files/2017-PPIG-28th-nelson.pdf",
    authors: "**Nicholas Nelson**, Anita Sarma, André van der Hoek.",
    venue: "PPIG'17, Delft, Netherlands, Jul 1–3, 2017.",
    venueAbbr: "PPIG",
    links: [
      {
        label: "Conference",
        href: "https://www.ppig.org/workshops/2017-annual-workshop/",
      },
      {
        label: "Session",
        href: "https://www.ppig.org/papers/2017-ppig-28th-nelson/",
      },
      {
        label: "Slides",
        href: "https://nomatic.dev/presentations/ppig17-slides.pdf",
      },
      { label: "Code", href: "https://github.com/nelsonni/bonsai" },
    ],
  },
  {
    id: "ppig-2017b",
    year: "2017",
    month: "July",
    title: "Problem-Solving Applications in Developer Environments",
    href: "https://www.ppig.org/files/2017-PPIG-28th-DC-nelson.pdf",
    authors: "**Nicholas Nelson**.",
    venue: "PPIG'17: Doctoral Consortium, Delft, Netherlands, Jul 1–3, 2017.",
    venueAbbr: "PPIG DC",
    links: [
      {
        label: "Conference",
        href: "https://www.ppig.org/workshops/2017-annual-workshop/",
      },
      {
        label: "Session",
        href: "https://www.ppig.org/papers/2017-ppig-28th-dc-nelson/",
      },
    ],
  },
  {
    id: "xp-2016",
    year: "2016",
    month: "May",
    title:
      "TDDViz: Using Software Changes to Understand Conformance to Test Driven Development",
    href: "https://link.springer.com/chapter/10.1007%2F978-3-319-33515-5_5",
    authors:
      "Michael Hilton, **Nicholas Nelson**, Hugh McDonald, Sean McDonald, Ron Metoyer, Danny Dig.",
    venue: "XP'16, Edinburgh, United Kingdom, May 24–27, 2016.",
    venueAbbr: "XP",
    links: [
      {
        label: "Conference",
        href: "https://researchr.org/conference/xpu-2016",
      },
      {
        label: "Pre-print",
        href: "http://www.cs.cmu.edu/~mhilton/publications/2016/TDDViz.pdf",
      },
      { label: "Code", href: "https://github.com/nelsonni/TDDViz" },
    ],
  },
] as const;

// ── Teaching ──────────────────────────────────────────────────────────────────

export const teaching: readonly TeachingBlock[] = [
  {
    id: "clark",
    role: "Adjunct Professor",
    institution: "Clark College",
    department: "Computer Science & Engineering",
    period: "Sep 2025 – Present",
    courses: [
      {
        code: "CSBS 310",
        name: "Software Engineering",
        terms: "Fall 2026",
      },
      {
        code: "CSE 310",
        name: "Software Engineering",
        terms: "Fall 2025",
      },
      {
        code: "CSE 325",
        name: "Software Design & Development",
        terms: "Winter 2026",
      },
      {
        code: "CSE 320",
        name: "Design & Analysis of Algorithms",
        terms: "Spring 2026",
      },
    ],
  },
  {
    id: "osu-ta",
    role: "Teaching Assistant",
    institution: "Oregon State University",
    department: "School of Electrical Engineering & Computer Science",
    period: "2016 – 2023",
    courses: [
      {
        code: "CS 567",
        name: "Laboratory Studies in Software Engineering and Human-Computer Interaction",
        terms: "Fall 2021",
      },
      {
        code: "CS 560",
        name: "Data-Driven Software Engineering",
        terms: "Fall 2020",
      },
      {
        code: "CS 419/579",
        name: "Usable Security",
        terms: "Winter 2020",
      },
      {
        code: "CS 362",
        name: "Software Engineering II",
        terms: "Spring 2020, Spring 2022",
      },
      {
        code: "CS 361",
        name: "Software Engineering I",
        terms: "Winter 2022, Fall 2017, Winter 2017, Winter 2016",
      },
      {
        code: "CS 344",
        name: "Operating Systems I",
        terms: "Winter 2023, Fall 2022",
      },
    ],
  },
] as const;

// ── Service ───────────────────────────────────────────────────────────────────

export const service: readonly ServiceBlock[] = [
  {
    id: "community",
    heading: "Community",
    entries: [
      {
        label: "Board of Trustees, International School of Portland",
        href: "https://www.intlschool.org/about-us/board-of-trustees",
      },
    ],
  },
  {
    id: "reviewer",
    heading: "Reviewer",
    entries: [
      {
        label: "Empirical Software Engineering Journal (EMSE)",
        note: "April 2026",
      },
      {
        label: "Empirical Software Engineering Journal (EMSE)",
        note: "September 2025",
      },
      {
        label: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
        note: "2023",
      },
      {
        label: "Empirical Software Engineering Journal (EMSE)",
        note: "May 2022",
      },
      {
        label: "IEEE Transactions on Software Engineering (TSE)",
        note: "2020",
      },
      {
        label: "Empirical Software Engineering Journal (EMSE)",
        note: "February 2020",
      },
    ],
  },
  {
    id: "pc",
    heading: "PC Member",
    entries: [
      { label: "PROMISE 2020 — Replication Challenge Track" },
    ],
  },
  {
    id: "subreviewer",
    heading: "Sub-Reviewer",
    entries: [
      {
        label:
          "IEEE/ACM International Conference on Automated Software Engineering (ASE)",
        note: "2019, 2018, 2017, 2015",
      },
      {
        label:
          "ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE)",
        note: "2020, 2019",
      },
      {
        label:
          "IEEE/ACM International Conference on Program Comprehension (ICPC)",
        note: "2020",
      },
      { label: "Mining Software Repositories (MSR)", note: "2017" },
      {
        label:
          "IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC)",
        note: "2019",
      },
      {
        label: "ACM Symposium on User Interface Software and Technology (UIST)",
        note: "2017",
      },
    ],
  },
  {
    id: "volunteer",
    heading: "Student Volunteer",
    entries: [
      {
        label: "International Conference on Software Engineering (ICSE)",
        note: "2019",
      },
    ],
  },
] as const;

// ── Mentors ───────────────────────────────────────────────────────────────────

export const mentors: readonly Mentor[] = [
  {
    name: "Neha Sajnani",
    href: "https://neha-sajnani.github.io/",
    affiliation: "MS, Oregon State University",
  },
  {
    name: "Andrea Tongsak",
    href: "https://github.com/andrealit",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Leif Tsang",
    href: "https://github.com/TsangL",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Karen Berba",
    href: "https://karenberba.com/",
    affiliation: "Undergrad, Oregon State Ecampus",
  },
  {
    name: "Jett Seale",
    href: "https://github.com/jettseale",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Ben Klein",
    href: "https://unhexium.net/ll/",
    affiliation: "Undergrad, University of Tennessee",
  },
  {
    name: "Cheng Qing Lim",
    href: "https://github.com/Flazzing",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Hayden Coffey",
    href: "https://github.com/hcoffey1",
    affiliation: "Undergrad, University of Tennessee",
  },
  {
    name: "Annel Amelia Leon",
    href: "https://www.linkedin.com/in/amelia-leon/",
    affiliation: "HS, Corvallis High School",
  },
  {
    name: "Yenifer Ramirez Gonzalez",
    href: "https://github.com/yramirez17",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Thien Nam",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "McKenzie Calvert",
    href: "https://github.com/kenziecalvert1",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Lauren Gastineau",
    href: "https://github.com/laurengastineau",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Brandon Dring",
    href: "https://github.com/El-Dringo-Brannde",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "Jacob Lewis",
    href: "https://github.com/lewisj3",
    affiliation: "Undergrad, Oregon State University",
  },
  {
    name: "George Harder",
    href: "https://github.com/hardergeorge",
    affiliation: "Undergrad, Oregon State University",
  },
] as const;
