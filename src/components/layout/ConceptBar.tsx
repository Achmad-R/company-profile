import { conceptConfig } from "@/content/site-content";
import Container from "@/components/ui/Container";

export default function ConceptBar() {
  return (
    <div className="border-b border-border bg-surface">
      <Container>
        <p className="py-2 text-center font-mono text-label tracking-wide text-secondary-text">
          {conceptConfig.conceptLabel}
        </p>
      </Container>
    </div>
  );
}
