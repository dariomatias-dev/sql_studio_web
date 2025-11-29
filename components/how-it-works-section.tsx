import { Database, Download, Terminal } from "lucide-react";
import Image from "next/image";

export const HowItWorksSection = () => {
  return (
    <section id="workflow" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-50/40 via-transparent to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          <div className="lg:w-1/2 pt-8">
            <h2 className="text-sm font-bold text-[#00BCD4] uppercase tracking-widest mb-3">
              Workflow
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Master your data in <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00BCD4] to-cyan-600">
                three simple steps
              </span>
            </h3>
            <p className="text-lg text-gray-500 font-light mb-16 max-w-md leading-relaxed">
              We stripped away the complexity. Get straight to querying with a
              streamlined mobile experience.
            </p>

            <div className="space-y-0">
              <div className="group flex gap-8 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 text-[#00BCD4] flex items-center justify-center group-hover:border-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                    <Download className="w-6 h-6" />
                  </div>
                  <div className="w-px h-full bg-gray-100 absolute top-12 left-6 -ml-px group-hover:bg-cyan-100 transition-colors" />
                </div>
                <div className="pb-16 pt-3">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#00BCD4] transition-colors">
                    Get the App
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed max-w-sm">
                    Download SQL Studio from the Play Store. It&apos;s
                    lightweight, fast, and optimized for battery life.
                  </p>
                </div>
              </div>

              <div className="group flex gap-8 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 text-[#00BCD4] flex items-center justify-center group-hover:border-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="w-px h-full bg-gray-100 absolute top-12 left-6 -ml-px group-hover:bg-cyan-100 transition-colors" />
                </div>
                <div className="pb-16 pt-3">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#00BCD4] transition-colors">
                    Initialize Database
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed max-w-sm">
                    Create a new SQLite file instantly or choose from standard
                    databases.
                  </p>
                </div>
              </div>

              <div className="group flex gap-8 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-100 text-[#00BCD4] flex items-center justify-center group-hover:border-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                    <Terminal className="w-6 h-6" />
                  </div>
                </div>
                <div className="pt-3">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#00BCD4] transition-colors">
                    Start Querying
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed max-w-sm">
                    Write valid SQL with syntax highlighting. Execute queries
                    and analyze the results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-tr from-[#00BCD4]/20 to-transparent blur-[100px] rounded-full w-[120%] h-[120%]" />

            <div className="relative z-10 group perspective-1000">
              <div className="absolute -inset-1 bg-linear-to-r from-gray-100 to-gray-200 rounded-[2.8rem] blur opacity-75 rotate-6 group-hover:rotate-0 transition-transform duration-700 ease-out" />
              <Image
                src="/screenshots/screenshot_1.jpg"
                alt="App Screenshot"
                width={360}
                height={720}
                className="relative rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-8 border-white bg-white rotate-6 transition-transform duration-700 ease-out"
              />

              <div className="absolute -right-8 top-1/4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-50 hidden md:block animate-bounce duration-3000">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-gray-600">
                    Query executed successfully
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};