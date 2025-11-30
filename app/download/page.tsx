"use client";

import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGooglePlay } from "react-icons/fa";

import { useHeaderTransparency } from "@/context/header-transparency-context";

enum Status {
  Idle,
  Submitting,
  Success,
  Error,
}

const DownloadBetaPage = () => {
  const { setEnabled } = useHeaderTransparency();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>(Status.Idle);

  useEffect(() => {
    setEnabled(false);
    return () => setEnabled(true);
  }, [setEnabled]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(Status.Submitting);

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          subject: "Beta Access Request",
          message: `Requesting beta access for Google Play email: ${email}`,
          email: email,
          name: "Beta Candidate",
        },
        publicKey
      );

      setStatus(Status.Success);
    } catch (error) {
      console.error("Beta request failed:", error);
      setStatus(Status.Error);
      setTimeout(() => setStatus(Status.Idle), 4000);
    }
  };

  return (
    <section className="relative min-h-screen bg-white pt-32 pb-24 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00BCD4]/5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 shadow-sm mb-8 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-xs font-bold text-yellow-700 tracking-wider uppercase">
              Closed Beta Access
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Join the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00BCD4] to-cyan-600">
              Development Program
            </span>
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto">
            SQL Studio is currently invite-only. To access the app on the Play
            Store, your email needs to be whitelisted in our testers database.
          </p>
        </div>

        <div className="w-full bg-white/60 backdrop-blur-xl border border-slate-200 rounded-3xl p-1 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
          <div className="bg-white rounded-[1.4rem] p-8 md:p-10 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-[#00BCD4]/30 to-transparent"></div>

            {status == Status.Success ? (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Request Received
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                  You have been added to the waiting list. Please wait for an{" "}
                  <span className="text-slate-700 font-bold">
                    invitation email
                  </span>{" "}
                  within the next 24 hours.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 text-left flex gap-3 items-start">
                  <div className="mt-0.5 min-w-1 h-4 bg-[#00BCD4] rounded-full"></div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <strong className="text-slate-700 block mb-1">
                      Important:
                    </strong>
                    The Play Store link below will show an error (&quot;App not
                    available&quot;) until your email is officially approved in
                    our console. Please wait for the confirmation email.
                  </p>
                </div>

                <Link
                  href="https://play.google.com/"
                  target="_blank"
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02] shadow-xl shadow-slate-200"
                >
                  <FaGooglePlay className="text-[#00BCD4] text-xl" />
                  <span>Open in Play Store</span>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700 ml-1 block"
                  >
                    Google Play Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-[#00BCD4] to-cyan-400 rounded-xl opacity-0 group-focus-within:opacity-100 transition duration-500 blur-sm"></div>
                    <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-white focus-within:bg-white transition-all">
                      <div className="pl-4 pr-3 text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>

                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your-account@gmail.com"
                        className="w-full bg-transparent py-4 px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none font-medium"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 ml-1 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00BCD4]"></span>
                    Must match the account logged in on your Android device.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={status == Status.Submitting}
                    className="group relative w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shadow-lg shadow-slate-200"
                  >
                    <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-[shine_2s_infinite]"></div>

                    {status == Status.Submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Beta Waitlist</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === Status.Error && (
                    <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-2">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Failed to send request. Please try again.
                      </span>
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 w-full">
          <h4 className="text-slate-900 font-semibold mb-6 text-center">
            How it works
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Submit Email",
                desc: "Enter your Google Play email above to join the list.",
              },
              {
                step: "02",
                title: "Wait for Invite",
                desc: "We'll enable access and notify you via email.",
              },
              {
                step: "03",
                title: "Download",
                desc: "Access the Play Store link to install the app.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 group"
              >
                <span className="text-xs font-bold text-[#00BCD4] bg-[#00BCD4]/10 px-2 py-1 rounded-md mb-1 border border-[#00BCD4]/20">
                  Step {item.step}
                </span>
                <span className="text-sm font-bold text-slate-700">
                  {item.title}
                </span>
                <span className="text-xs text-slate-500 leading-relaxed max-w-[150px]">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBetaPage;
