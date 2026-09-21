import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { anchorTargets, whyContent } from "@/content/site-content";

export default function WhySection() {
  return (
    <section
      aria-labelledby="why-heading"
      data-nav-target={anchorTargets.careers}
      className="py-section"
    >
      <Container>
        <SectionHeading
          id="why-heading"
          label={whyContent.label}
          heading={whyContent.heading}
          signalNode
        />
        <Reveal className="mt-12">
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {whyContent.pillars.map((pillar) => (
              <li key={pillar.title} className="border-t border-border pt-6">
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-primary-text">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-copy text-sm leading-relaxed text-secondary-text">
                  {pillar.copy}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
