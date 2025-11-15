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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-background text-foreground antialiased selection:bg-[#00BCD4] selection:text-primary-foreground">
      <header className="py-2 px-4 md:px-8 bg-card shadow-sm fixed top-0 left-0 right-0 z-50 rounded-b-xl">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/sql_studio_icon.png"
              alt="SQL Studio Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <h2 className="text-xl font-bold text-foreground">SQL Studio</h2>
          </div>
          <div className="space-x-6 hidden md:flex">
            <a
              href="#features"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors font-medium"
            >
              How it Works
            </a>
            <a
              href="#demo"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors font-medium"
            >
              Demo
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href="#cta"
              className="text-muted-foreground hover:text-[#00BCD4] transition-colors font-medium"
            >
              Download
            </a>
          </div>
          <Button variant="outline" className="md:hidden rounded-xl">
            Menu
          </Button>
        </nav>
      </header>

      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 bg-white pt-24 pb-12 rounded-b-3xl overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#A7D9FF] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#4FC3F7] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#03A9F4] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            SQL Studio: Your Database In Your Pocket.
            <br className="hidden md:block" /> Edit, Query, and Manage Anywhere.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0">
            The complete mobile SQL editor for modern developers and DBAs. Power
            and flexibility in the palm of your hand, wherever you are.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href=""
              className="flex items-center gap-3 px-6 py-3 bg-[#00BCD4] hover:bg-[#00ACC1] text-primary-foreground font-bold rounded-xl shadow-lg"
            >
              <FaGooglePlay className="size-8" />
              <div className="flex flex-col">
                <span className="text-sm font-light">GET IT ON</span>
                <span className="text-2xl font-normal">Google Play</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center items-center relative z-10">
          <Image
            src="https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_app/refs/heads/main/screenshots/flutter_guide_screen_1.jpeg"
            alt="SQL Studio app mockup on a smartphone"
            width={300}
            height={500}
            className="rounded-3xl shadow-xl border-4 border-white object-contain"
          />
        </div>
      </section>

      <section
        id="features"
        className="py-20 px-4 md:px-8 bg-subtle-pattern mx-auto my-12 max-w-7xl"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Features You&apos;ll Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:bg-linear-to-br hover:from-white hover:to-[#E0F7FA] hover:shadow-lg hover:shadow-[#00BCD4]/10">
              <Code className="h-10 w-10 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Smart SQL Editor
              </h3>
              <p className="text-muted-foreground">
                Advanced syntax highlighting, auto-completion, and real-time
                error checking for a seamless writing experience.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:bg-linear-to-br hover:from-white hover:to-[#E0F7FA] hover:shadow-lg hover:shadow-[#00BCD4]/10">
              <Database className="h-10 w-10 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                SQLite Database Support
              </h3>
              <p className="text-muted-foreground">
                Connect and manage your SQLite databases with full power. Create
                new databases directly from your device.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:bg-linear-to-br hover:from-white hover:to-[#E0F7FA] hover:shadow-lg hover:shadow-[#00BCD4]/10">
              <Play className="h-10 w-10 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Execute & Visualize
              </h3>
              <p className="text-muted-foreground">
                Execute your queries and get formatted results instantly.
                Analyze data quickly with filters and ordering.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:bg-linear-to-br hover:from-white hover:to-[#E0F7FA] hover:shadow-lg hover:shadow-[#00BCD4]/10">
              <Lock className="h-10 w-10 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Pre-populated Databases
              </h3>
              <p className="text-muted-foreground">
                Practice your SQL skills with pre-created databases, tables, and
                populated data ready for your queries.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:bg-linear-to-br hover:from-white hover:to-[#E0F7FA] hover:shadow-lg hover:shadow-[#00BCD4]/10">
              <Palette className="h-10 w-10 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Customizable Experience
              </h3>
              <p className="text-muted-foreground">
                Choose from various code themes and adjust the interface to suit
                your workflow and visual preferences.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl transition-all duration-300 transform hover:bg-linear-to-br hover:from-white hover:to-[#E0F7FA] hover:shadow-lg hover:shadow-[#00BCD4]/10">
              <LayoutDashboard className="h-10 w-10 text-[#00BCD4] mb-4 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Schema Management
              </h3>
              <p className="text-muted-foreground">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-left space-y-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Download the App
                  </h3>
                  <p className="text-muted-foreground">
                    Get SQL Studio from Google Play and install it on your
                    Android device.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Create or Use a Database
                  </h3>
                  <p className="text-muted-foreground">
                    Start by creating a new SQLite database, or pick one of our
                    pre-loaded practice databases.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#00BCD4] text-white rounded-full flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Start Querying and Managing
                  </h3>
                  <p className="text-muted-foreground">
                    Open the SQL editor, write your queries, execute them, and
                    manage your database objects on the go.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src="https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_app/refs/heads/main/screenshots/flutter_guide_screen_1.jpeg"
                alt="How it works app flow"
                width={300}
                height={500}
                className="rounded-3xl shadow-xl border-4 border-white object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="demo"
        className="py-20 px-4 md:px-8 bg-subtle-pattern mx-auto my-12 max-w-7xl"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            See SQL Studio in Action
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            A powerful and intuitive interface, designed to maximize your
            productivity. Explore the screenshots below!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image
              src="https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_app/refs/heads/main/screenshots/flutter_guide_screen_1.jpeg"
              alt="SQL Studio Screenshot 1"
              width={200}
              height={400}
              className="rounded-xl shadow-sm border border-border w-full h-auto object-cover"
            />
            <Image
              src="https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_app/refs/heads/main/screenshots/flutter_guide_screen_1.jpeg"
              alt="SQL Studio Screenshot 2"
              width={200}
              height={400}
              className="rounded-xl shadow-sm border border-border w-full h-auto object-cover"
            />
            <Image
              src="https://raw.githubusercontent.com/dariomatias-dev/flutter_guide_app/refs/heads/main/screenshots/flutter_guide_screen_1.jpeg"
              alt="SQL Studio Screenshot 3"
              width={200}
              height={400}
              className="rounded-xl shadow-sm border border-border w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="why-choose-us"
        className="py-20 px-4 md:px-8 bg-card text-center mx-auto my-12 max-w-7xl"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unlock Your Database Potential
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Discover why SQL Studio is the essential tool for every developer
            and DBA on the go.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <Rocket className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Boost Productivity
              </h3>
              <p className="text-muted-foreground text-base">
                Edit, query, and manage your databases efficiently from
                anywhere, turning downtime into productive time.
              </p>
            </div>

            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <Sparkles className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stunning & Intuitive
              </h3>
              <p className="text-muted-foreground text-base">
                Experience a beautifully crafted interface that makes complex
                database tasks feel simple and enjoyable.
              </p>
            </div>

            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <CheckCircle className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Secure & Reliable
              </h3>
              <p className="text-muted-foreground text-base">
                Trust in a robust and secure environment for all your database
                operations, ensuring data integrity.
              </p>
            </div>

            <div className="group bg-[#F8FDFE] p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <PlayCircle className="h-14 w-14 text-[#00BCD4] mx-auto transition-transform duration-300 mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Learn & Master SQL
              </h3>
              <p className="text-muted-foreground text-base">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1" className="border-b border-border">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-foreground hover:text-[#00BCD4] transition-colors">
                What databases does SQL Studio support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground py-4">
                Currently, SQL Studio provides full support for SQLite
                databases. We are continuously evaluating support for other
                database systems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-foreground hover:text-[#00BCD4] transition-colors">
                Is SQL Studio free?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground py-4">
                SQL Studio offers a free version with essential features.
                Premium features are available through an in-app purchase to
                unlock the full potential of the app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-foreground hover:text-[#00BCD4] transition-colors">
                How do I report a bug or request a feature?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground py-4">
                You can report bugs or request features directly through the
                &quot;Contact&quot; section in the app settings, or by visiting
                our support page on the website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-border">
              <AccordionTrigger className="text-lg font-medium hover:no-underline text-foreground hover:text-[#00BCD4] transition-colors">
                Does SQL Studio provide pre-filled databases for practice?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground py-4">
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
        className="py-20 px-4 md:px-8 bg-linear-to-tr from-[#00BCD4] to-[#00ACC1] text-center rounded-2xl mx-auto my-12 max-w-7xl shadow-xl"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            Ready to Elevate Your SQL Experience?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground mb-12">
            Join thousands of developers and DBAs who trust SQL Studio for their
            mobile database needs. Download today!
          </p>
          <div className="flex justify-center">
            <Link
              href={""}
              className="flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-extrabold rounded-xl shadow-md text-lg border border-gray-300"
            >
              <FaGooglePlay className="text-gray-700 size-8" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-light">GET IT ON</span>
                <span className="text-2xl font-normal">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 md:px-8 bg-card text-muted-foreground text-center border-t border-border rounded-t-2xl text-[14px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} SQL Studio. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="hover:text-[#00BCD4] transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#00BCD4] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
