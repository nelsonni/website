import type { SynecticRelease } from "@/types";

const BASE = "https://github.com/EPICLab/synectic/releases";

/** Build the standard installer download set for v1.0.0+ */
function installerDownloads(v: string): SynecticRelease["downloads"] {
  const slug = v.replace(/\./g, "_");
  return [
    {
      format: "macos" as const,
      href: `${BASE}/download/v${v}/Synectic-${v}-x64.dmg`,
    },
    {
      format: "windows" as const,
      href: `${BASE}/download/v${v}/Synectic-${v}.Setup.exe`,
    },
    {
      format: "nuget" as const,
      href: `${BASE}/download/v${v}/Synectic-${v}-full.nupkg`,
    },
    {
      format: "deb" as const,
      href: `${BASE}/download/v${v}/synectic_${slug}_amd64.deb`,
    },
    {
      format: "rpm" as const,
      href: `${BASE}/download/v${v}/synectic-${v}-1.x86_64.rpm`,
    },
  ] as const;
}

/** Source-archive downloads for pre-installer releases */
function archiveDownloads(v: string): SynecticRelease["downloads"] {
  return [
    {
      format: "zip" as const,
      href: `https://github.com/EPICLab/synectic/archive/refs/tags/v${v}.zip`,
    },
    {
      format: "targz" as const,
      href: `https://github.com/EPICLab/synectic/archive/refs/tags/v${v}.tar.gz`,
    },
  ] as const;
}

export const synecticReleases: readonly SynecticRelease[] = [
  {
    version: "5.0.2",
    notesHref: `${BASE}/tag/v5.0.2`,
    downloads: archiveDownloads("5.0.2"),
  },
  {
    version: "5.0.0",
    notesHref: `${BASE}/tag/v5.0.0`,
    downloads: archiveDownloads("5.0.0"),
  },
  {
    version: "4.4.0",
    notesHref: `${BASE}/tag/v4.4.0`,
    downloads: installerDownloads("4.4.0"),
  },
  {
    version: "4.3.0",
    notesHref: `${BASE}/tag/v4.3.0`,
    downloads: installerDownloads("4.3.0"),
  },
  {
    version: "4.2.0",
    notesHref: `${BASE}/tag/v4.2.0`,
    downloads: installerDownloads("4.2.0"),
  },
  {
    version: "4.1.0",
    notesHref: `${BASE}/tag/v4.1.0`,
    downloads: installerDownloads("4.1.0"),
  },
  {
    version: "4.0.0",
    notesHref: `${BASE}/tag/v4.0.0`,
    downloads: installerDownloads("4.0.0"),
  },
  {
    version: "3.0.0",
    notesHref: `${BASE}/tag/v3.0.0`,
    downloads: installerDownloads("3.0.0"),
  },
  {
    version: "2.3.1",
    notesHref: `${BASE}/tag/v2.3.1`,
    downloads: installerDownloads("2.3.1"),
  },
  {
    version: "2.3.0",
    notesHref: `${BASE}/tag/v2.3.0`,
    downloads: installerDownloads("2.3.0"),
  },
  {
    version: "2.2.0",
    notesHref: `${BASE}/tag/v2.2.0`,
    downloads: installerDownloads("2.2.0"),
  },
  {
    version: "2.1.0",
    notesHref: `${BASE}/tag/v2.1.0`,
    downloads: installerDownloads("2.1.0"),
  },
  {
    version: "2.0.0",
    notesHref: `${BASE}/tag/v2.0.0`,
    downloads: installerDownloads("2.0.0"),
  },
  {
    version: "1.4.1",
    notesHref: `${BASE}/tag/v1.4.1`,
    downloads: installerDownloads("1.4.1"),
  },
  {
    version: "1.4.0",
    notesHref: `${BASE}/tag/v1.4.0`,
    downloads: installerDownloads("1.4.0"),
  },
  {
    version: "1.3.1",
    notesHref: `${BASE}/tag/v1.3.1`,
    downloads: installerDownloads("1.3.1"),
  },
  {
    version: "1.3.0",
    notesHref: `${BASE}/tag/v1.3.0`,
    downloads: installerDownloads("1.3.0"),
  },
  {
    version: "1.2.0",
    notesHref: `${BASE}/tag/v1.2.0`,
    downloads: installerDownloads("1.2.0"),
  },
  {
    version: "1.1.0",
    notesHref: `${BASE}/tag/v1.1.0`,
    downloads: installerDownloads("1.1.0"),
  },
  {
    version: "1.0.0",
    notesHref: `${BASE}/tag/v1.0.0`,
    downloads: installerDownloads("1.0.0"),
  },
  {
    version: "0.7.0",
    notesHref: `${BASE}/tag/v0.7.0`,
    downloads: archiveDownloads("0.7.0"),
  },
  {
    version: "0.6.0",
    notesHref: `${BASE}/tag/v0.6.0`,
    downloads: archiveDownloads("0.6.0"),
  },
] as const;
