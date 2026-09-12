import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CopyDemoAddressButton from "@/components/sections/CopyDemoAddressButton";
import { anchorTargets, contactContent } from "@/content/site-content";

const sectionId = anchorTargets.contact.slice(1);

export default function ContactSection() {
  return (
    <section
      id={sectionId}
      aria-labelledby="contact-heading"
      className="py-section"
    >
      <Container>
        <SectionHeading
          id="contact-heading"
          label={contactContent.label}
          heading={contactContent.heading}
          intro={contactContent.body}
        />
        <p className="mt-6 max-w-copy font-mono text-label tracking-wide text-secondary-text">
          {contactContent.demoNote}
        </p>
        <Reveal className="mt-8 grid gap-px overflow-hidden rounded-panel border border-border bg-border sm:grid-cols-2">
          <div className="bg-background p-6 sm:p-8">
            <h3 className="font-mono text-label tracking-[0.2em] text-signal-cyan uppercase">
              {contactContent.projectLabel}
            </h3>
            <p className="mt-4 font-mono text-base break-all text-primary-text">
              {contactContent.projectEmail}
            </p>
            <div className="mt-5">
              <CopyDemoAddressButton
                email={contactContent.projectEmail}
                description={contactContent.copyProjectDescription}
              />
            </div>
          </div>
          <div className="bg-background p-6 sm:p-8">
            <h3 className="font-mono text-label tracking-[0.2em] text-signal-cyan uppercase">
              {contactContent.careersLabel}
            </h3>
            <p className="mt-4 font-mono text-base break-all text-primary-text">
              {contactContent.careersEmail}
            </p>
            <div className="mt-5">
              <CopyDemoAddressButton
                email={contactContent.careersEmail}
                description={contactContent.copyCareersDescription}
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
