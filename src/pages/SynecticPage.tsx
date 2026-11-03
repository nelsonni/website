import {
  FaApple,
  FaWindows,
  FaLinux,
  FaBoxOpen,
  FaFileZipper,
} from "react-icons/fa6";
import { CompanionLayout } from "@/components/layout/CompanionLayout";
import { synecticReleases } from "@/data/companions/synectic";
import type { SynecticDownload, DownloadFormat } from "@/types";

// ── Download icon & label map ─────────────────────────────────────────────────

const formatMeta: Record<
  DownloadFormat,
  { label: string; Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }> }
> = {
  macos:  { label: "macOS",   Icon: FaApple },
  windows:{ label: "Windows", Icon: FaWindows },
  nuget:  { label: "NuGet",   Icon: FaBoxOpen },
  deb:    { label: "deb",     Icon: FaLinux },
  rpm:    { label: "RPM",     Icon: FaLinux },
  zip:    { label: "zip",     Icon: FaFileZipper },
  targz:  { label: "tar.gz",  Icon: FaFileZipper },
};

// ── Sub-components ────────────────────────────────────────────────────────────

function DownloadLink({ dl }: { dl: SynecticDownload }) {
  const { label, Icon } = formatMeta[dl.format];
  return (
    <a
      href={dl.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-rule rounded-xs font-mono text-2xs text-ink-muted hover:border-brand hover:text-brand hover:bg-brand-light transition-all duration-150"
    >
      <Icon className="w-3 h-3 shrink-0" aria-hidden />
      {label}
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function SynecticPage() {
  return (
    <CompanionLayout title="Synectic IDE">
      {/* Hero */}
      <div className="flex items-start gap-6 mb-12">
        <img
          src="/assets/synectic_icon.png"
          alt="Synectic IDE icon"
          className="w-20 h-20 shrink-0 rounded-xl"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div>
          <h1 className="font-serif text-2xl font-semibold text-ink leading-snug mb-2">
            Synectic IDE
          </h1>
          <p className="text-[0.93rem] leading-relaxed text-ink mb-2">
            Synectics is a problem solving methodology that stimulates thought
            processes of which the subject may be unaware. Synectic IDE is a
            fundamentally different type of IDE, focused on supporting a
            human-oriented view of problem solving in software development.
            Synectic promotes context-specific functionalities that allow
            complex, diverse solutions to be explored and developed.
          </p>
          <p className="text-[0.83rem] text-ink-muted italic">
            <strong className="font-medium not-italic text-ink">NOTE:</strong>{" "}
            This is a research-driven project, and as such should be considered
            experimental.
          </p>
        </div>
      </div>

      {/* Releases */}
      <section>
        <h2 className="font-mono text-2xs tracking-[0.14em] uppercase text-ink-faint mb-6 pb-2 border-b border-rule flex items-center gap-3">
          <span className="w-5 h-px bg-accent shrink-0" aria-hidden />
          Releases
        </h2>

        <div className="flex flex-col gap-0">
          {synecticReleases.map((release, idx) => (
            <div
              key={release.version}
              className={`grid grid-cols-[6rem_1fr] gap-x-5 py-4 ${
                idx < synecticReleases.length - 1
                  ? "border-b border-paper-subtle"
                  : ""
              }`}
            >
              {/* Version */}
              <div className="font-mono font-medium text-[0.85rem] text-ink-muted pt-0.5">
                {release.version}
                {idx === 0 && (
                  <span className="ml-2 inline-block px-1.5 py-px bg-accent-light text-accent text-2xs rounded-xs uppercase tracking-[0.05em]">
                    Latest
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={release.notesHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-2.5 py-1 border border-rule rounded-xs font-mono text-2xs text-ink-muted hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-150"
                >
                  Release Notes
                </a>
                <span className="text-rule select-none text-xs" aria-hidden>
                  ·
                </span>
                {release.downloads.map((dl) => (
                  <DownloadLink key={dl.format} dl={dl} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </CompanionLayout>
  );
}
