"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaChevronRight } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-slate-900/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00BCD4]/40 to-transparent shadow-[0_0_15px_rgba(0,188,212,0.5)]"></div>
      
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00BCD4]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
          <div className="lg:max-w-md">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-extrabold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                SQL Studio<span className="text-[#00BCD4] drop-shadow-[0_0_10px_rgba(0,188,212,0.5)]">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-7 mb-8 font-light">
              The professional database client designed for modern developers. 
              Manage your SQLite databases with speed, efficiency, and style directly from your mobile device.
            </p>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-500 tracking-wider uppercase">
                Stable Release v0.1.x
              </span>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md overflow-hidden hover:border-[#00BCD4]/30 hover:shadow-[0_0_25px_-10px_rgba(0,188,212,0.2)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#00BCD4]/0 via-[#00BCD4]/5 to-[#00BCD4]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white relative z-10">Back to Top</span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00BCD4]/10 text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black transition-all duration-300 relative z-10">
              <FaArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20 border-t border-slate-800/40 pt-16">
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-wider uppercase bg-linear-to-r from-white to-slate-400 bg-clip-text w-fit">Product</h3>
            <ul className="space-y-3 text-sm">
              {['Features', 'Screenshots', 'Workflow', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="group flex items-center text-slate-400 hover:text-[#00BCD4] transition-colors duration-200">
                    <FaChevronRight className="w-0 h-3 mr-0 opacity-0 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-[#00BCD4]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-sm tracking-wider uppercase bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent w-fit">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="group flex items-center text-slate-400 hover:text-[#00BCD4] transition-colors duration-200">
                  <FaChevronRight className="w-0 h-3 mr-0 opacity-0 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-[#00BCD4]" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="group flex items-center text-slate-400 hover:text-[#00BCD4] transition-colors duration-200">
                  <FaChevronRight className="w-0 h-3 mr-0 opacity-0 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-[#00BCD4]" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center text-slate-400 hover:text-[#00BCD4] transition-colors duration-200">
                  <FaChevronRight className="w-0 h-3 mr-0 opacity-0 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-[#00BCD4]" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Support</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="font-bold mb-6 text-sm tracking-wider uppercase bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent w-fit">Connect</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Built with passion for the SQL community.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/dariomatias-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#00BCD4]/40 hover:bg-[#00BCD4]/10 hover:shadow-[0_0_20px_-5px_rgba(0,188,212,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-[#00BCD4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaGithub size={24} className="group-hover:scale-110 transition-transform relative z-10" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dariomatias-dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-[#0077B5]/10 hover:shadow-[0_0_20px_-5px_rgba(0,119,181,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-[#0077B5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaLinkedin size={24} className="group-hover:scale-110 transition-transform relative z-10" />
              </a>
              <a 
                href="mailto:matiasdario75@gmail.com" 
                className="group flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:border-[#EA4335]/40 hover:bg-[#EA4335]/10 hover:shadow-[0_0_20px_-5px_rgba(234,67,53,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-[#EA4335]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaEnvelope size={22} className="group-hover:scale-110 transition-transform relative z-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm border-t border-slate-800/40 pt-10">
          <p className="text-slate-500 font-medium">
            &copy; {currentYear} SQL Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
            <span className="text-slate-500 text-xs uppercase tracking-wider font-bold">Built by</span>
            <a 
              href="https://github.com/dariomatias-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 font-bold hover:text-[#00BCD4] transition-colors"
            >
              Dário Matias
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};