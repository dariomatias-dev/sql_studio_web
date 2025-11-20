import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 bg-linear-to-br from-white via-blue-50 to-blue-100 pt-4 pb-12 rounded-b-3xl overflow-hidden shadow-lg">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#A7D9FF] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#4FC3F7] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#03A9F4] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start p-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight drop-shadow-sm">
          SQL Studio: Your Database In Your Pocket.
          <br className="hidden md:block" /> Edit, Query, and Manage Anywhere.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-sm">
          The complete mobile SQL editor for modern developers and DBAs. Power
          and flexibility in the palm of your hand, wherever you are.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            href="https://play.google.com/"
            target="_blank"
            className="flex items-center gap-3 px-10 py-5 bg-linear-to-r from-[#00BCD4] to-[#00ACC1] hover:from-[#00ACC1] hover:to-[#00BCD4] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <FaGooglePlay className="size-10" />

            <div className="flex flex-col">
              <span className="text-sm font-light">GET IT ON</span>
              <span className="text-2xl font-normal">Google Play</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center items-center relative z-10 p-4">
        <Image
          src="/screenshots/screenshot_1.jpg"
          alt="SQL Studio app mockup on a smartphone"
          width={300}
          height={500}
          className="rounded-3xl shadow-2xl border-4 border-white object-contain"
        />
      </div>
    </section>
  );
};
