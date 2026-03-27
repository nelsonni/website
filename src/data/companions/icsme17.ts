import type { CompanionMeta } from "@/types";

export const icsme17: CompanionMeta = {
  route: "/icsme17",
  title: "Software Practitioner Perspectives on Merge Conflicts and Resolutions",
  authors:
    "Shane McKee, **Nicholas Nelson**, Anita Sarma, Danny Dig.",
  venueLabel:
    "Proceedings of the 2017 IEEE International Conference on Software Maintenance and Evolution (ICSME)",
  venueHref:
    "https://ieeexplore.ieee.org/xpl/mostRecentIssue.jsp?punumber=8090480",
  contacts: [
    "{mckeesh, nelsonni, digd, anita.sarma}@oregonstate.edu",
  ],
  abstract: [
    "Merge conflicts occur when software practitioners need to work in parallel and are inevitable in software development. Tool builders and researchers have focused on the prevention and resolution of merge conflicts, but there is little empirical knowledge about how practitioners actually approach and perform merge conflict resolution. Without such knowledge, tool builders might be building on wrong assumptions and researchers might miss opportunities for improving the state of the art.",
    "We conducted semi-structured interviews of 10 software practitioners across 7 organizations, including both open-source and commercial projects. We identify the key concepts and perceptions from practitioners, which we then validated via a survey of 162 additional practitioners.",
    "We find that practitioners are directly impacted by their perception of the complexity of the conflicting code, and may alter the timeline in which to resolve these conflicts, as well as the methods employed for conflict resolution based upon that initial perception. Practitioners' perceptions alter the impact of tools and processes that have been designed to preemptively and efficiently resolve merge conflicts. Understanding whether practitioners will react according to standard use cases is important when creating human-oriented tools to support development processes.",
  ],
  artifacts: [
    {
      label: "Interview Questions",
      href: "https://nomatic.dev/docs/icsme17-interviewScript.pdf",
    },
    {
      label: "Survey Questions",
      href: "https://nomatic.dev/docs/icsme17-surveyQuestions.pdf",
    },
  ],
} as const;
