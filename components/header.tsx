import Image from "next/image";

import { Button } from "./ui/button";

export const Header = () => {
  return (
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
  );
};
