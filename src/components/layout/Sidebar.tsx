import { useState } from "react";
import { contacts } from "@/data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#teaching", label: "Teaching" },
  { href: "#service", label: "Service" },
] as const;

function Avatar() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-28 h-28 flex-shrink-0">
      {/* Dashed ring */}
      <span
        className="absolute -inset-1.5 rounded-full border border-dashed border-rule pointer-events-none"
        aria-hidden
      />
      {/* Initials fallback — always present, hidden once photo loads */}
      <div
        className={`absolute inset-0 rounded-full bg-paper-subtle border-2 border-rule flex items-center justify-center font-serif text-2xl font-semibold text-ink-muted select-none transition-opacity duration-300 ${loaded ? "opacity-0" : "opacity-100"}`}
        aria-hidden
      >
        NN
      </div>
      <img
        src="/assets/avatar-b.jpeg"
        alt="Nicholas Nelson"
        className={`absolute inset-0 w-full h-full rounded-full object-cover border-2 border-paper-subtle outline outline-1 outline-rule transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen flex flex-col gap-6 py-16 overflow-y-auto">
      <Avatar />

      {/* Identity */}
      <div className="flex flex-col gap-1.5">
        <h1 className="font-serif text-xl font-semibold leading-tight tracking-tight">
          Nicholas Nelson
        </h1>
        <p className="font-mono text-2xs text-accent tracking-[0.06em] uppercase">
          PhD · Software Engineering
        </p>
      </div>

      {/* Contact links */}
      <ul className="flex flex-col gap-1.5" aria-label="Contact links">
        {contacts.map(({ id, label, href, Icon, external }) => (
          <li key={id} className="flex items-center gap-2 min-w-0">
            <Icon
              className="w-4 h-4 text-ink-faint flex-shrink-0"
              aria-hidden
            />
            <a
              href={href}
              className="font-mono text-[0.79rem] text-ink-muted whitespace-nowrap overflow-hidden text-ellipsis hover:text-accent transition-colors duration-150"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CV / Résumé */}
      <div className="flex gap-2">
        {(
          [
            { label: "CV", href: "/docs/cv.pdf" },
            { label: "Résumé", href: "/docs/resume.pdf" },
          ] as const
        ).map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="inline-block px-3 py-1 border border-rule rounded-sm font-mono text-2xs text-ink-muted tracking-[0.04em] bg-white hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Section nav */}
      <nav aria-label="Page sections">
        <ul className="flex flex-col gap-0.5 border-l border-rule pl-3.5">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block font-mono text-xs tracking-[0.05em] uppercase text-ink-faint py-0.5 hover:text-accent transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
