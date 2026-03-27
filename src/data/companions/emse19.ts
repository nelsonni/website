import type { CompanionMeta } from "@/types";

export const emse19: CompanionMeta = {
  route: "/emse19",
  title:
    "The Life-Cycle of Merge Conflicts: Processes, Barriers, and Strategies",
  authors:
    "**Nicholas Nelson**, Caius Brindescu, Shane McKee, Anita Sarma, Danny Dig.",
  venueLabel: "Empirical Software Engineering (EMSE)",
  venueHref: "https://doi.org/10.1007/s10664-018-9674-x",
  contacts: [
    "{nelsonni, brindesc, anita.sarma, digd}@oregonstate.edu",
    "mckeesh@outlook.com",
  ],
  abstract: [
    "Merge conflicts occur when developers make concurrent changes to the same part of the code. They are an inevitable and disruptive aspect of collaborative software development. Thus tool builders and researchers have focused on the prevention and automatic resolution of merge conflicts. However, there is little empirical knowledge about how developers actually monitor for merge conflicts and plan, perform, and evaluate resolutions. Without such knowledge, tool builders might be building on the wrong assumptions and researchers might miss opportunities for improving the state of the art.",
    "We conducted semi-structured interviews with 10 software developers across 7 organizations, including both open-source and commercial projects. We identify key processes, techniques, and perceptions from developers, which we extend and validate via two surveys, a Processes Survey and a Barriers Survey, of 102 and 162 developers, respectively.",
    "Among others, we find that developers rely on reactive strategies of monitoring for merge conflicts. We find that developers defer responding to conflicts based on their perception of the complexity of the conflicting code and that deferring affects the workflow of the entire team. Developers also rely on this perception to visually evaluate their merge conflict resolutions for correctness. Finally, developers' perceptions alter the impact of tools and processes designed to preemptively and efficiently resolve merge conflicts. Understanding their processes and perceptions can help design human-oriented tools that better support their individual development processes.",
  ],
  artifacts: [
    {
      label: "Author Pre-print",
      href: "https://nomatic.dev/docs/emse19-nelson.pdf",
    },
    {
      label: "Interview Questions",
      href: "https://nomatic.dev/docs/emse19-interviewQuestions.pdf",
    },
    {
      label: "Barriers Survey Questions",
      href: "https://nomatic.dev/docs/emse19-barriersSurveyQuestions.pdf",
    },
    {
      label: "Processes Survey Questions",
      href: "https://nomatic.dev/docs/emse19-processesSurveyQuestions.pdf",
    },
    {
      label: "Processes Survey Codebook",
      href: "https://nomatic.dev/docs/emse19-processesSurveyCodebook.pdf",
    },
  ],
} as const;
