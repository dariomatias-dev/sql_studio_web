import {
  CheckCircle,
  Code,
  Database,
  LayoutDashboard,
  Lock,
  Palette,
  Play,
  PlayCircle,
  Rocket,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

import { HeroSection } from "@/components/hero-section";
import { ScreenshotsSection } from "@/components/screenshots-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  return (
    <>
      <HeroSection />

      <section
        id="features"
        className="py-20 px-4 md:px-8 bg-subtle-pattern mx-auto my-12 max-w-7xl"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Features You&apos;ll Love
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00BCD4]/20 border border-gray-100">
              <Code className="h-12 w-12 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Smart SQL Editor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced syntax highlighting, auto-completion, and real-time
                error checking for a seamless writing experience.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00BCD4]/20 border border-gray-100">
              <Database className="h-12 w-12 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                SQLite Database Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect and manage your SQLite databases with full power. Create
                new databases directly from your device.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00BCD4]/20 border border-gray-100">
              <Play className="h-12 w-12 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Execute & Visualize
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Execute your queries and get formatted results instantly.
                Analyze data quickly with filters and ordering.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00BCD4]/20 border border-gray-100">
              <Lock className="h-12 w-12 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Pre-populated Databases
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Practice your SQL skills with pre-created databases, tables, and
                populated data ready for your queries.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00BCD4]/20 border border-gray-100">
              <Palette className="h-12 w-12 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Customizable Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from various code themes and adjust the interface to suit
                your workflow and visual preferences.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00BCD4]/20 border border-gray-100">
              <LayoutDashboard className="h-12 w-12 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Schema Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore tables, views, and other database objects with an
                intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-20 px-4 md:px-8 bg-subtle-pattern-alt mx-auto my-12 max-w-7xl"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-left space-y-10">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-xl font-extrabold shadow-md">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Download the App
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get SQL Studio from Google Play and install it on your
                    Android device.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-xl font-extrabold shadow-md">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Create or Use a Database
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Start by creating a new SQLite database, or pick one of our
                    pre-loaded practice databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-xl font-extrabold shadow-md">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Start Querying and Managing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Open the SQL editor, write your queries, execute them, and
                    manage your database objects on the go.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
              <Image
                src="/screenshots/screenshot_1.jpg"
                alt="How it works app flow"
                width={350}
                height={550}
                className="rounded-3xl shadow-2xl border-4 border-white object-contain"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section
        id="faq"
        className="py-20 px-4 md:px-8 bg-subtle-pattern mx-auto my-12 max-w-7xl"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-gray-800 hover:text-[#00BCD4] transition-colors py-4">
                What databases does SQL Studio support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 py-4 leading-relaxed">
                Currently, SQL Studio provides full support for SQLite
                databases. We are continuously evaluating support for other
                database systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-gray-800 hover:text-[#00BCD4] transition-colors py-4">
                Is SQL Studio free?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 py-4 leading-relaxed">
                SQL Studio offers a free version with essential features.
                Premium features are available through an in-app purchase to
                unlock the full potential of the app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-gray-800 hover:text-[#00BCD4] transition-colors py-4">
                How do I report a bug or request a feature?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 py-4 leading-relaxed">
                You can report bugs or request features directly through the
                &quot;Contact&quot; section in the app settings, or by visiting
                our support page on the website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-gray-800 hover:text-[#00BCD4] transition-colors py-4">
                Does SQL Studio provide pre-filled databases for practice?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 py-4 leading-relaxed">
                Yes, SQL Studio comes with several pre-created databases,
                complete con ready-to-use tables and populated data, perfect for
                practicing your SQL queries.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section
        id="cta"
        className="py-20 px-4 md:px-8 bg-linear-to-tr from-[#00BCD4] to-[#00ACC1] text-center rounded-3xl mx-auto my-12 max-w-7xl shadow-2xl"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Elevate Your SQL Experience?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 opacity-90 leading-relaxed">
            Join thousands of developers and DBAs who trust SQL Studio for their
            mobile database needs. Download today!
          </p>

          <div className="flex justify-center">
            <Link
              href="https://play.google.com/"
              target="_blank"
              className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-extrabold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out text-lg border border-gray-300"
            >
              <FaGooglePlay className="text-gray-700 size-9" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-light">GET IT ON</span>
                <span className="text-2xl font-normal">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
