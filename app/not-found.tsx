"use client";

import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { useHeaderTransparency } from "@/context/header-transparency-context";

const NotFoundPage = () => {
  const { setEnabled } = useHeaderTransparency();

  useEffect(() => {
    setEnabled(false);

    return () => setEnabled(true);
  }, [setEnabled]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-6">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-t from-cyan-50 to-transparent rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <span className="text-[12rem] md:text-[18rem] font-black text-slate-50 leading-none select-none tracking-tighter">
              404
            </span>
          </div>

          <div className="relative h-32 w-32 md:h-40 md:w-40 bg-white rounded-3xl border border-slate-100 shadow-xl flex items-center justify-center mt-12 md:mt-20">
            <div className="absolute inset-0 bg-linear-to-br from-[#00BCD4]/10 to-transparent rounded-3xl" />
            <FileQuestion className="w-12 h-12 md:w-16 md:h-16 text-[#00BCD4]" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Page not found
        </h1>

        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
          The requested URL was not found on this server. It might have been
          moved or deleted.
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-transparent text-slate-900 font-bold text-base rounded-full border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
