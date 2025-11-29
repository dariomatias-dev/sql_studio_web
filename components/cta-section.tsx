import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

export const CtaSection = () => {
  return (
    <section
      id="cta"
      className="relative w-full py-20 md:py-32 bg-slate-950 overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#00BCD4]/15 blur-[100px] rounded-full mix-blend-screen opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full mix-blend-screen opacity-40"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00BCD4]/30 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-x-3 rounded-full border border-slate-800 bg-slate-900/60 p-1.5 pl-2 pr-4 shadow-lg shadow-[#00BCD4]/5 ring-1 ring-white/5 backdrop-blur-xl mb-8 transition-all hover:bg-slate-900/80 hover:border-slate-700 hover:ring-white/10 cursor-default">
          <span className="flex items-center justify-center rounded-full bg-[#00BCD4]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#00BCD4] ring-1 ring-inset ring-[#00BCD4]/20">
            Beta
          </span>
          <div className="h-4 w-px bg-slate-800"></div>
          <span className="flex items-center gap-2 text-sm font-medium text-slate-300 font-mono tracking-tight">
            v0.1.x
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BCD4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BCD4]"></span>
            </span>
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          SQL power in your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-slate-600">
            pocket.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The database client designed for touch. Query, edit, and visualize
          your data with the speed of a desktop app, entirely for free.
        </p>

        <div className="flex flex-col items-center justify-center gap-8">
          <Link
            href="https://play.google.com/"
            target="_blank"
            className="group relative inline-flex items-center gap-5 bg-white text-slate-950 px-9 py-4 md:px-11 md:py-5 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:bg-gray-50 hover:shadow-[0_0_40px_-10px_rgba(0,188,212,0.4)] focus:outline-none focus:ring-4 focus:ring-[#00BCD4]/30"
          >
            <FaGooglePlay className="text-[#00BCD4] text-3xl md:text-4xl transition-transform duration-500 ease-out group-hover:rotate-[-15deg]" />
            <div className="flex flex-col items-start leading-none gap-1">
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                Download on
              </span>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                Google Play
              </span>
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#00BCD4]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              No account required
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-800"></span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#00BCD4]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              100% Free & Private
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
