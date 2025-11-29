import {
  Code,
  Database,
  LayoutDashboard,
  Lock,
  Palette,
  Play,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Smart SQL Editor",
    description:
      "Advanced syntax highlighting, auto-completion, and real-time error checking designed for a seamless mobile coding experience.",
  },
  {
    icon: Database,
    title: "SQLite Native",
    description:
      "Built specifically for SQLite. Connect, manage, and modify your local databases with native performance and zero latency.",
  },
  {
    icon: Play,
    title: "Execute & Visualize",
    description:
      "Run complex queries instantly. View results in beautiful, scrollable tables and analyze data with formatted outputs.",
  },
  {
    icon: Lock,
    title: "Pre-filled Practice",
    description:
      "Start coding immediately. Access a library of pre-populated databases to sharpen your skills without the hassle of setup.",
  },
  {
    icon: Palette,
    title: "Customizable UI",
    description:
      "Your environment, your rules. Switch between professional themes, adjust font sizes, and toggle layouts to match your workflow.",
  },
  {
    icon: LayoutDashboard,
    title: "Schema Explorer",
    description:
      "Navigate your database structure visually. Inspect tables, views, triggers, and indexes with an intuitive browser.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-24 px-4 md:px-8 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#00BCD4]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00BCD4]/30 bg-[#00BCD4]/5 text-[#00BCD4] text-xs font-bold uppercase tracking-wider mb-6">
            Powerful Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00BCD4] to-cyan-600">
              Modern Performance.
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-light">
            SQL Studio combines the raw power of a desktop client with the
            elegance of a mobile app. Every pixel designed for efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 transition-all duration-300 hover:border-[#00BCD4]/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,188,212,0.15)]"
            >
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00BCD4]/5 border border-[#00BCD4]/20 text-[#00BCD4] mb-6 overflow-hidden transition-all duration-300 group-hover:bg-[#00BCD4] group-hover:border-[#00BCD4] group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <feature.icon className="h-7 w-7 relative z-10 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00BCD4] transition-colors duration-200">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base group-hover:text-slate-700">
                {feature.description}
              </p>

              <div className="absolute top-4 right-4 w-2.5 h-2.5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00BCD4] opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BCD4]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
