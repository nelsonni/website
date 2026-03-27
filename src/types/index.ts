import type { IconType } from "react-icons";

// ── Contact ──────────────────────────────────────────────────────────────────

export interface ContactLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly Icon: IconType;
  readonly external?: boolean;
}

// ── Experience ────────────────────────────────────────────────────────────────

export type BadgeVariant = "current" | "fulltime" | "phd";

export interface Badge {
  readonly label: string;
  readonly variant: BadgeVariant;
}

export interface ExperienceItem {
  readonly id: string;
  readonly year: string;
  readonly dateLabel: string;
  readonly role: string;
  readonly org: string;
  readonly orgUrl?: string;
  readonly location: string;
  readonly description: string;
  readonly badges?: readonly Badge[];
}

// ── Publications ──────────────────────────────────────────────────────────────

export interface PublicationLink {
  readonly label: string;
  readonly href: string;
}

export interface Publication {
  readonly id: string;
  readonly year: string;
  readonly month: string;
  readonly title: string;
  readonly href: string;
  readonly authors: string; // raw string; bold markers handled via render helper
  readonly venue: string;
  readonly venueAbbr: string;
  readonly links: readonly PublicationLink[];
  readonly awards?: readonly string[];
}

// ── Teaching ──────────────────────────────────────────────────────────────────

export interface Course {
  readonly code: string;
  readonly name: string;
  readonly terms: string;
}

export interface TeachingBlock {
  readonly id: string;
  readonly role: string;
  readonly institution: string;
  readonly department: string;
  readonly period: string;
  readonly courses: readonly Course[];
}

// ── Service ───────────────────────────────────────────────────────────────────

export interface ServiceEntry {
  readonly label: string;
  readonly href?: string;
  readonly note?: string;
  readonly forthcoming?: boolean;
}

export interface ServiceBlock {
  readonly id: string;
  readonly heading: string;
  readonly entries: readonly ServiceEntry[];
}

// ── Mentor ────────────────────────────────────────────────────────────────────

export interface Mentor {
  readonly name: string;
  readonly href?: string;
  readonly affiliation: string;
}

// ── Companion pages ───────────────────────────────────────────────────────────

export interface CompanionArtifact {
  readonly label: string;
  readonly href: string;
}

export interface CompanionMeta {
  readonly route: string;
  readonly title: string;
  readonly authors: string; // raw with **bold** markers
  readonly venueLabel: string;
  readonly venueHref: string;
  readonly contacts: readonly string[];
  readonly abstract: readonly string[];
  readonly artifacts: readonly CompanionArtifact[];
}

// Synectic releases

export type DownloadFormat = "macos" | "windows" | "nuget" | "deb" | "rpm" | "zip" | "targz";

export interface SynecticDownload {
  readonly format: DownloadFormat;
  readonly href: string;
}

export interface SynecticRelease {
  readonly version: string;
  readonly notesHref: string;
  readonly downloads: readonly SynecticDownload[];
}
