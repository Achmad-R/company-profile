import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { anchorTargets, processContent } from "@/content/site-content";

export default function ProcessSection() {
  return (
    <section
      aria-labelledby="method-heading"
      data-nav-target={anchorTargets.capabilities}
      className="py-section"
    >
      <Container>
        <SectionHeading
          id="method-heading"
          label={processContent.label}
          heading={processContent.heading}
          intro={processContent.intro}
          signalNode
        />
        <Reveal className="mt-12">
          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {processContent.steps.map((step) => (
            <li key={step.index} className="relative border-t border-border pt-6">
              <span
                aria-hidden="true"
                className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-signal-cyan"
              />
              <span
                aria-hidden="true"
                className="font-mono text-label text-signal-cyan"
              >
                {step.index}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-primary-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text">
                {step.copy}
              </p>
            </li>
          ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
