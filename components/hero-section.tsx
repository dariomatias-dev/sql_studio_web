import { ArrowRight, Sparkles, Database, Zap, WifiOff } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-20 pb-12">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15 pointer-events-none"></div>
      
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#00BCD4]/15 blur-[120px] rounded-full mix-blend-screen opacity-50 pointer-events-none"></div>
      
      <div className="absolute bottom-[-20%] right-[-5%] w-[600px] h-[400px] bg-purple-500/10 blur-[130px] rounded-full mix-blend-screen opacity-30 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4 md:px-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-md mb-10 cursor-default">
          <div className="flex h-2.5 w-2.5 relative items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00BCD4] opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BCD4]"></span>
          </div>
          <span className="text-xs md:text-sm font-semibold text-slate-300 tracking-wide uppercase">
            Native SQLite Client
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-none drop-shadow-2xl">
          SQL Studio <br />
          <span className="relative inline-block pb-2">
            <span className="absolute inset-0 bg-linear-to-r from-[#00BCD4] to-transparent blur-2xl opacity-15"></span>
            <span className="relative text-transparent bg-clip-text bg-linear-to-b from-white via-white to-slate-500">
              Anywhere.
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-light">
          Experience the full power of a desktop database client, re-engineered for touch. 
          <span className="text-slate-100 font-medium"> Fast, private, and offline-first.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center">
          
          <Link
            href="#download"
            className="relative inline-flex items-center justify-center gap-3 px-9 py-4.5 bg-white text-slate-950 font-bold text-base md:text-lg rounded-xl shadow-[0_0_20px_-5px_rgba(0,188,212,0.3)] hover:shadow-[0_0_35px_-5px_rgba(0,188,212,0.5)] hover:bg-slate-50 transition-all duration-300"
          >
            <FaGooglePlay className="w-5 h-5 text-[#00BCD4]" />
            <span>Download App</span>
          </Link>

          <Link
            href="#features"
            className="group inline-flex items-center justify-center gap-2 px-9 py-4.5 bg-slate-900/50 text-slate-300 font-medium text-base md:text-lg rounded-xl border border-slate-800 hover:border-[#00BCD4]/40 hover:text-white hover:bg-slate-900 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 group-hover:text-[#00BCD4] transition-colors" />
            <span>Explore Features</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-[#00BCD4] transition-transform" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-20 text-center border-t border-slate-800/50 pt-8 px-4">
           <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#00BCD4]/20 group-hover:bg-slate-800 transition-all">
                <Database className="w-5 h-5 text-[#00BCD4]" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">SQLite Native</span>
           </div>
           
           <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#00BCD4]/20 group-hover:bg-slate-800 transition-all">
                <Zap className="w-5 h-5 text-[#00BCD4]" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">Instant Query</span>
           </div>
           
           <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#00BCD4]/20 group-hover:bg-slate-800 transition-all">
                 <WifiOff className="w-5 h-5 text-[#00BCD4]" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">Offline Ready</span>
           </div>
        </div>
      </div>
    </section>
  );
};