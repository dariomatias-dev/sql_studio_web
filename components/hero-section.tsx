import { ArrowRight, Sparkles, Database, Zap, WifiOff } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 pb-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00BCD4]/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute top-[-150px] left-1/2 translate-x-1/4 w-[500px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping duration-[3s]" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#00BCD4] rounded-full animate-pulse duration-[4s]" />
        <div className="absolute bottom-1/3 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-ping duration-[5s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl px-4 md:px-6">
        <div className="group relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-xl shadow-lg shadow-[#00BCD4]/5 mb-10 transition-all hover:border-[#00BCD4]/30 hover:bg-zinc-900/80 cursor-default overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="flex h-2.5 w-2.5 relative items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00BCD4] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BCD4] shadow-[0_0_10px_#00BCD4]" />
          </div>
          <span className="text-xs md:text-sm font-bold text-zinc-300 tracking-wider uppercase group-hover:text-white transition-colors">
            Native SQLite Client
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9] drop-shadow-2xl">
          SQL Studio <br />
          <span className="relative inline-block pb-2">
            <span className="absolute inset-0 bg-[#00BCD4] blur-[60px] opacity-20 pointer-events-none" />
            <span className="relative text-transparent bg-clip-text bg-linear-to-b from-white via-white to-zinc-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Anywhere.
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-14 font-light">
          The power of a desktop database client,{" "}
          <span className="text-zinc-200 font-medium">
            re-engineered for touch.
          </span>
          <br className="hidden md:block" /> Fast, private, and 100%
          offline-first.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
          <Link
            href="/download"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300"
          >
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-zinc-300/30 to-transparent skew-x-[-25deg] animate-[shine_3s_infinite]" />

            <FaGooglePlay className="w-5 h-5 text-[#00BCD4] relative z-10" />
            <span className="relative z-10">Download App</span>
          </Link>

          <Link
            href="#features"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-black/50 text-zinc-300 font-medium text-lg rounded-2xl border border-white/10 hover:border-[#00BCD4]/50 hover:text-white hover:bg-zinc-900 transition-all duration-300 backdrop-blur-md"
          >
            <Sparkles className="w-5 h-5 text-zinc-500 group-hover:text-[#00BCD4] transition-colors" />
            <span>Explore Features</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-[#00BCD4] transition-transform" />
          </Link>
        </div>

        <div className="mt-24 w-full grid grid-cols-3 gap-6 md:gap-12 border-t border-white/5 pt-10">
          {[
            { icon: Database, label: "SQLite Native" },
            { icon: Zap, label: "Instant Query" },
            { icon: WifiOff, label: "Offline Ready" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="relative p-3.5 rounded-2xl bg-zinc-900/50 border border-white/5 group-hover:border-[#00BCD4]/30 group-hover:bg-[#00BCD4]/5 transition-all duration-300">
                <div className="absolute inset-0 bg-[#00BCD4] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <feature.icon className="w-6 h-6 text-zinc-500 group-hover:text-[#00BCD4] transition-colors relative z-10" />
              </div>
              <span className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-200 transition-colors uppercase tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
