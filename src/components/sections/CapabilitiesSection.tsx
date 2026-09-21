import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { anchorTargets, capabilitiesContent } from "@/content/site-content";

const sectionId = anchorTargets.capabilities.slice(1);

export default function CapabilitiesSection() {
  return (
    <section
      id={sectionId}
      aria-labelledby="capabilities-heading"
      className="py-section"
    >
      <Container>
        <SectionHeading
          id="capabilities-heading"
          label={capabilitiesContent.label}
          heading={capabilitiesContent.heading}
          intro={capabilitiesContent.intro}
          signalNode
        />
        <Reveal className="mt-12">
          <ol>
          {capabilitiesContent.items.map((capability, index) => (
            <li
              key={capability.title}
              className="grid gap-5 border-t border-border py-8 last:border-b lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-signal-cyan"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-balance text-primary-text">
                  {capability.title}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="max-w-copy text-sm leading-relaxed text-secondary-text">
                  {capability.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {capability.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-baseline gap-2.5 text-sm text-primary-text"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-signal-cyan"
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <ul
                aria-label={`${capability.title} technologies`}
                className="flex flex-wrap content-start gap-2 lg:col-span-3"
              >
                {capability.technologies.map((technology) => (
                  <li key={technology}>
                    <Tag>{technology}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
