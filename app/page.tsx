import {
  CheckCircle,
  PlayCircle,
  Rocket,
  Sparkles
} from "lucide-react";

import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ScreenshotsSection } from "@/components/screenshots-section";

const Home = () => {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <ScreenshotsSection />

      <section
        id="why-choose-us"
        className="py-20 px-4 md:px-8 bg-card text-center mx-auto my-12 max-w-7xl"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unlock Your Database Potential
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover why SQL Studio is the essential tool for every developer
            and DBA on the go.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <Rocket className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Boost Productivity
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Edit, query, and manage your databases efficiently from
                anywhere, turning downtime into productive time.
              </p>
            </div>

            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <Sparkles className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Stunning & Intuitive
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Experience a beautifully crafted interface that makes complex
                database tasks feel simple and enjoyable.
              </p>
            </div>

            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <CheckCircle className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Trust in a robust and secure environment for all your database
                operations, ensuring data integrity.
              </p>
            </div>

            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <PlayCircle className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Learn & Master SQL
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Utilize pre-populated databases to hone your SQL skills and
                experiment without risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      <CtaSection />
    </>
  );
};

export default Home;
