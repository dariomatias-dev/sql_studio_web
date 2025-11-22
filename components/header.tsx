"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-3 px-4 md:px-8 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/sql_studio.png"
            alt="SQL Studio Logo"
            width={36}
            height={36}
          />
          <h2 className="text-2xl font-extrabold tracking-tight">SQL Studio</h2>
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {[
            { href: "#features", label: "Features" },
            { href: "#how-it-works", label: "How it Works" },
            { href: "#demo", label: "Demo" },
            { href: "#faq", label: "FAQ" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-lg  hover:text-[#00BCD4] transition-colors font-medium relative group",
                scrolled ? "text-black" : "text-gray-300"
              )}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00BCD4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="https://play.google.com/"
            target="_blank"
            className="px-4 py-2 bg-linear-to-r from-[#00BCD4] to-[#00ACC1] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Download App
          </Link>
        </div>

        <Button variant="outline" className="md:hidden rounded-xl p-2" />
      </nav>
    </header>
  );
};
