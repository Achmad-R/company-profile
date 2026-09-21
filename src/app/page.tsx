import ConceptBar from "@/components/layout/ConceptBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SkipLink from "@/components/layout/SkipLink";
import SignalDivider from "@/components/ui/SignalDivider";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import WhySection from "@/components/sections/WhySection";
import TalentSection from "@/components/sections/TalentSection";
import CareersSection from "@/components/sections/CareersSection";
import ContactSection from "@/components/sections/ContactSection";

// Phase 5: the full one-page journey. All header, footer, and CTA targets
// resolve to real sections; no empty target anchors remain.
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      <ConceptBar />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-24">
        <HeroSection />
        <AboutSection />
        <SignalDivider />
        <CapabilitiesSection />
        <SignalDivider />
        <ProcessSection />
        <WorkSection />
        <SignalDivider />
        <WhySection />
        <TalentSection />
        <CareersSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
