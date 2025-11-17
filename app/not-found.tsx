import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const NotFoundPage = () => {
  return (
    <>
      <Header />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 bg-linear-to-br from-white via-blue-50 to-blue-100 pt-4 pb-12 rounded-b-3xl overflow-hidden shadow-lg text-center">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#A7D9FF] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#4FC3F7] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#03A9F4] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-2xl mx-auto p-4">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#00BCD4] leading-tight mb-6 tracking-tight drop-shadow-sm">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight drop-shadow-sm">
            Page Not Found
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>

          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-linear-to-r from-[#00BCD4] to-[#00ACC1] hover:from-[#00ACC1] hover:to-[#00BCD4] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <span className="text-lg font-normal">Go to Homepage</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NotFoundPage;
