import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { anchorTargets, talentContent } from "@/content/site-content";

export default function TalentSection() {
  return (
    <section
      aria-labelledby="talent-heading"
      data-nav-target={anchorTargets.careers}
      className="py-section"
    >
      <Container>
        <div className="max-w-copy">
          <SectionHeading
            id="talent-heading"
            label={talentContent.label}
            heading={talentContent.heading}
          />
          <Reveal>
            <p className="mt-6 text-body text-secondary-text">{talentContent.body}</p>
            <p className="mt-4 text-body text-secondary-text">
              {talentContent.candidateStatement}
            </p>
            <div className="mt-8">
              <ButtonLink href={talentContent.cta.href}>
                {talentContent.cta.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
