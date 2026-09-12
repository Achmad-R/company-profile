"use client";

import type { ReactNode } from "react";
import type { NavLink } from "@/types/content";
import { focusSectionHeading } from "@/lib/anchor-focus";

type ButtonLinkProps = {
  href: NavLink["href"];
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "bg-signal-cyan text-background hover:bg-primary-text focus-visible:outline-signal-cyan",
  secondary:
    "border border-control-border text-primary-text hover:border-signal-cyan hover:text-signal-cyan",
} as const;

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={() => {
        requestAnimationFrame(() => focusSectionHeading(href));
      }}
      className={`inline-flex min-h-11 items-center justify-center rounded-control px-6 py-3 text-control font-semibold transition duration-(--duration-micro) ease-signal active:scale-[0.98] ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
