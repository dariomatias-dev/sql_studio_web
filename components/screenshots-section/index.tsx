import { ScreenshotsCarousel } from "./screenshots-carousel";

export const ScreenshotsSection = () => {
  return (
    <section
      id="screenshots"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#00BCD4]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mb-6 mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00BCD4]/30 bg-[#00BCD4]/5 text-[#00BCD4] text-xs font-bold uppercase tracking-wider mb-6">
            Interface Design
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Built for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00BCD4] to-cyan-600">
              Speed & Precision.
            </span>
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed font-light">
            A powerful interface that feels native. Clean layout, intuitive
            navigation, and optimized for one-handed use.
          </p>
        </div>

        <ScreenshotsCarousel />
      </div>
    </section>
  );
};
