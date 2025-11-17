import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="py-3 px-4 md:px-8 bg-white shadow-lg z-50 rounded-b-xl backdrop-blur-sm bg-opacity-80">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/sql_studio_icon.png"
            alt="SQL Studio Logo"
            width={50}
            height={50}
            className="rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            SQL Studio
          </h2>
        </div>

        <div className="space-x-8 hidden md:flex items-center">
          <Link
            href="#features"
            className="text-lg text-gray-600 hover:text-[#00BCD4] transition-colors font-medium relative group"
          >
            Features
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00BCD4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link
            href="#how-it-works"
            className="text-lg text-gray-600 hover:text-[#00BCD4] transition-colors font-medium relative group"
          >
            How it Works
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00BCD4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link
            href="#demo"
            className="text-lg text-gray-600 hover:text-[#00BCD4] transition-colors font-medium relative group"
          >
            Demo
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00BCD4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link
            href="#faq"
            className="text-lg text-gray-600 hover:text-[#00BCD4] transition-colors font-medium relative group"
          >
            FAQ
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00BCD4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link
            href="#cta"
            className="px-6 py-2 bg-linear-to-r from-[#00BCD4] to-[#00ACC1] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Download App
          </Link>
        </div>

        <Button variant="outline" className="md:hidden rounded-xl p-2"></Button>
      </nav>
    </header>
  );
};
