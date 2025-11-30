import {
  Database,
  Download,
  Terminal,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Download,
    title: "Download & Install",
    description:
      "Get SQL Studio directly from the Play Store. It's a lightweight package optimized for performance and battery efficiency.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Initialize Database",
    description:
      "Open an existing SQLite file or create a brand new database schema in seconds. No complex configuration required.",
    color: "from-cyan-500 to-teal-400",
  },
  {
    icon: Terminal,
    title: "Start Querying",
    description:
      "Write SQL with our smart editor. Execute queries, visualize results in tables, and export data with a single tap.",
    color: "from-teal-400 to-emerald-400",
  },
];

export const WorkflowSection = () => {
  return (
    <section
      id="workflow"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BCD4]/10 text-[#00BCD4] text-xs font-bold uppercase tracking-wider mb-8">
              Seamless Workflow
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Master your data in <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00BCD4] to-cyan-600">
                three simple steps.
              </span>
            </h2>

            <p className="text-lg text-slate-500 font-light mb-16 max-w-lg leading-relaxed">
              We stripped away the complexity of desktop clients. Get straight
              to querying with a streamlined mobile experience designed for
              speed.
            </p>

            <div className="relative space-y-12">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-linear-to-b from-slate-200 via-slate-200 to-transparent" />

              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-8 group">
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                      />
                      <step.icon className="w-6 h-6 text-slate-600 group-hover:text-[#00BCD4] transition-colors duration-300" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00BCD4] transition-colors duration-300 flex items-center gap-2">
                      {step.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00BCD4]" />
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-base max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400/20 blur-[120px] rounded-full w-[150%] h-[150%] pointer-events-none" />

            <div className="relative z-10">
              <div className="relative rounded-[2.5rem] border-8 border-slate-950 bg-slate-950 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-xl z-20" />

                <Image
                  src="/screenshots/screenshot_1.jpg"
                  alt="SQL Studio Interface"
                  width={320}
                  height={690}
                  className="rounded-4xl relative z-10"
                />

                <div className="absolute -right-12 bottom-20 z-30 animate-bounce duration-3000">
                  <div className="flex items-center gap-3 p-4 pr-6 bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl shadow-slate-200/50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        Status
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        Query Executed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 top-32 z-30">
                  <div className="p-4 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-2 w-32">
                      <div className="h-2 w-full bg-slate-700 rounded-full" />
                      <div className="h-2 w-2/3 bg-slate-700 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
