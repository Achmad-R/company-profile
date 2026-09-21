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
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7" data-talent-narrative>
            <SectionHeading
              id="talent-heading"
              label={talentContent.label}
              heading={talentContent.heading}
            />
            <Reveal>
              <p className="mt-6 max-w-copy text-body text-secondary-text">
                {talentContent.body}
              </p>
              <div className="mt-8">
                <ButtonLink href={talentContent.cta.href}>
                  {talentContent.cta.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5">
            <aside
              data-talent-statement
              className="border-l-2 border-l-signal-violet pl-6"
            >
              <p className="text-body text-primary-text">
                {talentContent.candidateStatement}
              </p>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
