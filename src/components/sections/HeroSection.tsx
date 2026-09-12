import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import EngineeringSignalVisual from "@/components/visuals/EngineeringSignalVisual";
import { heroContent } from "@/content/site-content";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
          <div>
            <p
              className="hero-enter font-mono text-label tracking-[0.2em] text-signal-cyan uppercase"
              style={{ animationDelay: "0ms" }}
            >
              {heroContent.eyebrow}
            </p>
            <h1
              id="hero-heading"
              tabIndex={-1}
              className="hero-enter mt-5 text-display font-semibold tracking-tight text-balance text-primary-text"
              style={{ animationDelay: "90ms" }}
            >
              {heroContent.heading}
            </h1>
            <p
              className="hero-enter mt-5 max-w-copy text-body text-secondary-text"
              style={{ animationDelay: "180ms" }}
            >
              {heroContent.supporting}
            </p>
            <div
              className="hero-enter mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "270ms" }}
            >
              <ButtonLink href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={heroContent.secondaryCta.href}
                variant="secondary"
              >
                {heroContent.secondaryCta.label}
              </ButtonLink>
            </div>
            <p
              className="hero-enter mt-6 font-mono text-label text-secondary-text"
              style={{ animationDelay: "360ms" }}
            >
              <span
                aria-hidden="true"
                className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-success align-middle"
              />
              {heroContent.trustCue}
            </p>
          </div>
          <EngineeringSignalVisual animationDelay="200ms" />
        </div>
      </Container>
    </section>
  );
}
