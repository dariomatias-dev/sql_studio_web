import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

export const DownloadButton = () => {
  return (
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
  );
};
