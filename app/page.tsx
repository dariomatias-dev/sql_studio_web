
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { ScreenshotsSection } from "@/components/screenshots-section";
import { WorkflowSection } from "@/components/workflow-section";

const Home = () => {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <WorkflowSection />

      <ScreenshotsSection />

      <FaqSection />

      <CtaSection />
    </>
  );
};

export default Home;
