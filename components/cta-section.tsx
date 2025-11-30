import { Check, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

export const CtaSection = () => {
  return (
    <section
      id="cta"
      className="relative w-full py-20 md:py-32 bg-black overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#00BCD4]/10 blur-[100px] rounded-full mix-blend-screen opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen opacity-30 animate-pulse-slow" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00BCD4]/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-x-3 rounded-full border border-white/10 bg-zinc-900/40 p-1.5 pl-2 pr-4 shadow-lg shadow-[#00BCD4]/5 ring-1 ring-white/5 backdrop-blur-xl mb-8 transition-all hover:bg-zinc-900/60 hover:border-white/20 hover:ring-white/10 cursor-default">
          <span className="flex items-center justify-center rounded-full bg-[#00BCD4]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#00BCD4] ring-1 ring-inset ring-[#00BCD4]/20">
            Beta
          </span>
          <div className="h-4 w-px bg-white/10" />
          <span className="flex items-center gap-2 text-sm font-medium text-zinc-300 font-mono tracking-tight">
            v0.1.x
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BCD4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BCD4]" />
            </span>
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          SQL power in your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-200 to-zinc-600">
            pocket.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The database client designed for touch. Query, edit, and visualize
          your data with the speed of a desktop app, entirely for free.
        </p>

        <div className="flex flex-col items-center justify-center gap-8">
          <Link
            href="/download"
            className="group relative inline-flex items-center gap-4 bg-white text-black px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:bg-zinc-100 hover:shadow-[0_0_30px_-5px_rgba(0,188,212,0.3)] focus:outline-none focus:ring-4 focus:ring-[#00BCD4]/30"
          >
            <FaGooglePlay className="text-[#00BCD4] text-2xl md:text-3xl transition-transform duration-500 ease-out group-hover:rotate-[-15deg]" />
            <div className="flex flex-col items-start leading-none gap-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 group-hover:text-zinc-700 transition-colors">
                Download on
              </span>
              <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">
                Google Play
              </span>
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-medium text-zinc-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00BCD4]" />
              No account required
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-zinc-800" />
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00BCD4]" />
              100% Free & Private
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
