import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

interface CompanionLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function CompanionLayout({ title, children }: CompanionLayoutProps) {
  return (
    <div className="min-h-screen bg-paper">
      {/* Top bar */}
      <header className="border-b border-rule bg-paper-subtle">
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center gap-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-2xs text-ink-faint uppercase tracking-[0.08em] hover:text-accent transition-colors duration-150"
          >
            <FaArrowLeft className="w-3 h-3" aria-hidden />
            Nicholas Nelson
          </Link>
          <span className="text-rule select-none" aria-hidden>
            /
          </span>
          <span className="font-mono text-2xs text-ink-muted uppercase tracking-[0.08em] truncate">
            {title}
          </span>
        </div>
      </header>

      {/* Page body */}
      <main className="max-w-4xl mx-auto px-8 py-14 pb-24">{children}</main>

      {/* Footer */}
      <footer className="border-t border-rule max-w-4xl mx-auto px-8 pb-10 pt-6 font-mono text-2xs text-ink-faint tracking-[0.04em]">
        <Link to="/" className="hover:text-accent transition-colors duration-150">
          Nicholas Nelson
        </Link>{" "}
        · nomatic.dev · Updated March 2026
      </footer>
    </div>
  );
}
