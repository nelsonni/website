import { cn } from "@/lib/utils";
import type { BadgeVariant } from "@/types";

interface BadgeProps {
  label: string;
  variant: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  current: "bg-accent-light text-accent",
  fulltime: "bg-brand-light text-brand",
  phd: "bg-scholar text-scholar-text border border-scholar-border",
};

export function Badge({ label, variant }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-2xs tracking-[0.05em] uppercase px-1.5 py-0.5 rounded-sm",
        variantClasses[variant]
      )}
    >
      {label}
    </span>
  );
}
