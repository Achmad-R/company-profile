import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ConceptRoleItem from "@/components/sections/ConceptRoleItem";
import { anchorTargets, careersContent } from "@/content/site-content";

const sectionId = anchorTargets.careers.slice(1);

export default function CareersSection() {
  return (
    <section
      id={sectionId}
      aria-labelledby="careers-heading"
      className="py-section"
    >
      <Container>
        <h2
          id="careers-heading"
          tabIndex={-1}
          className="text-section font-semibold tracking-tight text-balance text-primary-text"
        >
          <span
            aria-hidden="true"
            data-careers-node
            className="mr-3 inline-block h-2 w-2 rounded-full bg-signal-violet align-middle"
          />
          {careersContent.listHeading}
        </h2>
        <Reveal className="mt-8">
          {careersContent.roles.map((role, index) => (
            <ConceptRoleItem key={role.title} role={role} index={index} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
