import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import {
  RelayGridVisual,
  SignalOpsVisual,
  VantageSimVisual,
} from "@/components/visuals/ProjectVisuals";
import { anchorTargets, workContent } from "@/content/site-content";
import type { ComponentType } from "react";

const sectionId = anchorTargets.work.slice(1);

const projectVisuals: Record<string, ComponentType> = {
  SignalOps: SignalOpsVisual,
  RelayGrid: RelayGridVisual,
  VantageSim: VantageSimVisual,
};

export default function WorkSection() {
  return (
    <section
      id={sectionId}
      aria-labelledby="work-heading"
      className="py-section"
    >
      <Container>
        <SectionHeading
          id="work-heading"
          label={workContent.label}
          heading={workContent.heading}
          intro={workContent.intro}
        />
        <Reveal className="mt-12">
          {workContent.projects.map((project, index) => {
            const Visual = projectVisuals[project.title];
            const visualFirst = index % 2 === 1;
            return (
              <article
                key={project.title}
                aria-labelledby={`${project.title.toLowerCase()}-title`}
                className="grid gap-8 border-t border-border py-10 last:border-b lg:grid-cols-12 lg:gap-10"
              >
                <div
                  aria-hidden="true"
                  className={`project-visual aspect-video w-full overflow-hidden rounded-panel border border-border bg-surface lg:col-span-5 ${visualFirst ? "lg:order-2" : ""}`}
                >
                  {Visual ? <Visual /> : null}
                </div>
                <div className={`lg:col-span-7 ${visualFirst ? "lg:order-1" : ""}`}>
                  <p className="font-mono text-label tracking-[0.2em] text-signal-cyan">
                    {String(index + 1).padStart(2, "0")} / {project.domain}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h3
                      id={`${project.title.toLowerCase()}-title`}
                      className="text-2xl font-semibold tracking-tight text-balance text-primary-text"
                    >
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-signal-cyan/50 px-3 py-1 font-mono text-label text-signal-cyan">
                      {project.statusLabel}
                    </span>
                  </div>
                  <p className="mt-4 max-w-copy text-body text-secondary-text">
                    {project.summary}
                  </p>
                  <dl className="mt-6 grid gap-5 sm:grid-cols-3">
                    <div>
                      <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                        Challenge
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-primary-text">
                        {project.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                        Contribution
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-primary-text">
                        {project.contribution}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-label tracking-[0.14em] text-secondary-text uppercase">
                        Concept outcome
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-primary-text">
                        {project.conceptOutcome}
                      </dd>
                    </div>
                  </dl>
                  <ul
                    aria-label={`${project.title} technologies`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>
                        <Tag>{technology}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
