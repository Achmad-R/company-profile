"use client";

import { useState } from "react";
import Tag from "@/components/ui/Tag";
import { careersContent } from "@/content/site-content";
import type { Role } from "@/types/content";

function rolePanelId(title: string): string {
  return `role-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

// Inline expandable concept role. The approved pattern keeps focus on the
// trigger; the panel restates the role fields and always ends with the
// fictional-role disclosure. No apply action exists.
export default function ConceptRoleItem({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);
  const panelId = rolePanelId(role.title);
  const titleId = `${panelId}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="border-t border-border py-8 last:border-b"
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3
          id={titleId}
          className="text-xl font-semibold tracking-tight text-balance text-primary-text"
        >
          {role.title}
        </h3>
        <span className="rounded-full border border-signal-cyan/50 px-3 py-1 font-mono text-label text-signal-cyan">
          {role.conceptLabel}
        </span>
      </div>
      <p className="mt-3 font-mono text-label tracking-wide text-secondary-text">
        {role.discipline} · {role.location} · {role.employmentType}
      </p>
      <p className="mt-3 max-w-copy text-sm leading-relaxed text-secondary-text">
        {role.summary}
      </p>
      <ul aria-label={`${role.title} skills`} className="mt-4 flex flex-wrap gap-2">
        {role.skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${careersContent.viewLabel}: ${role.title}`}
        onClick={() => setOpen((value) => !value)}
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-control border border-control-border px-6 py-2.5 text-control font-semibold text-primary-text transition duration-(--duration-micro) ease-signal hover:border-signal-cyan hover:text-signal-cyan active:scale-[0.98]"
      >
        {careersContent.viewLabel}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
          focusable="false"
          className={`transition-transform duration-(--duration-micro) ease-signal ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={titleId}
          className="mt-6 rounded-panel border border-border bg-surface p-6"
        >
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                Discipline
              </dt>
              <dd className="mt-1 text-sm text-primary-text">{role.discipline}</dd>
            </div>
            <div>
              <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                Location
              </dt>
              <dd className="mt-1 text-sm text-primary-text">{role.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                Type
              </dt>
              <dd className="mt-1 text-sm text-primary-text">{role.employmentType}</dd>
            </div>
            <div>
              <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                Skills
              </dt>
              <dd className="mt-1 text-sm text-primary-text">
                {role.skills.join(", ")}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                Summary
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-primary-text">
                {role.summary}
              </dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-secondary-text">
            {careersContent.detailClosing}
          </p>
        </div>
      ) : null}
    </article>
  );
}
