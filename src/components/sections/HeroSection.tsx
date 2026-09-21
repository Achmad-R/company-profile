import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import EngineeringSignalVisual from "@/components/visuals/EngineeringSignalVisual";
import { heroContent } from "@/content/site-content";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container>
        <div className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-12 lg:py-16 xl:py-20">
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
          </div>
          <EngineeringSignalVisual animationDelay="200ms" />
          <p
            className="hero-enter border-t border-border pt-4 font-mono text-label text-secondary-text lg:col-span-2"
            style={{ animationDelay: "360ms" }}
          >
            <span
              aria-hidden="true"
              className="mr-2 inline-block h-px w-8 bg-signal-violet align-middle"
            />
            {heroContent.trustCue}
          </p>
        </div>
      </Container>
    </section>
  );
}
