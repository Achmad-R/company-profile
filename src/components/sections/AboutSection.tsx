import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutContent, anchorTargets } from "@/content/site-content";

const sectionId = anchorTargets.about.slice(1);

export default function AboutSection() {
  return (
    <section
      id={sectionId}
      aria-labelledby="about-heading"
      className="py-section"
    >
      <Container>
        <SectionHeading
          id="about-heading"
          label={aboutContent.label}
          heading={aboutContent.heading}
        />
        <Reveal className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="max-w-copy space-y-5 lg:col-span-7">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-body text-secondary-text">
                {paragraph}
              </p>
            ))}
          </div>
          <ol className="lg:col-span-5">
            {aboutContent.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border py-6 last:border-b"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-signal-cyan"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-primary-text">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-text">
                    {principle.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
