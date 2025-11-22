import { Database } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-12 bg-linear-to-br from-black to-cyan-700 text-white overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-cyan-400/20 rounded-full filter blur-3xl animate-pulse-slower"></div>
      <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-cyan-300/20 rounded-full filter blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-6 md:gap-8">
        <div className="mb-4 inline-flex items-center rounded-full bg-black/70 px-4 py-1.5 text-sm font-semibold text-cyan-300 shadow-[0_0_12px_rgba(0,188,212,0.5)] backdrop-blur-md">
          <Database className="mr-2 h-5 w-5 text-cyan-400" />
          Your Pocket SQLite Studio
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight">
          SQL Studio <br />
          <span className="bg-linear-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
            Anywhere
          </span>
          , Anytime
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
          Full control of your SQLite databases on mobile. Write, edit, and
          execute queries seamlessly with a fast, clean, and elegant interface.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            href="#download"
            className="px-6 py-3 bg-linear-to-r border-2 border-transparent from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-white font-bold rounded-3xl shadow-[0_0_15px_rgba(0,188,212,0.5)] hover:shadow-[0_0_15px_rgba(0,188,212,0.7)] transition-all duration-300"
          >
            Download Now
          </Link>

          <Link
            href="#features"
            className="px-6 py-3 border-2 border-white rounded-3xl text-white font-bold hover:bg-white hover:text-cyan-600 shadow-[0_0_10px_rgba(0,188,212,0.3)] hover:shadow-[0_0_15px_rgba(0,188,212,0.5)] transition-all duration-300"
          >
            Explore Features
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-linear-to-t from-black/80 to-transparent"></div>
    </section>
  );
};
