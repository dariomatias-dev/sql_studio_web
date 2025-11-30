"use client";

import { Calendar, FileText } from "lucide-react";
import { useEffect } from "react";

import { useHeaderTransparency } from "@/context/header-transparency-context";

const TermsOfServicePage = () => {
  const { setEnabled } = useHeaderTransparency();

  useEffect(() => {
    setEnabled(false);
    return () => setEnabled(true);
  }, [setEnabled]);

  return (
    <section className="relative min-h-screen bg-white pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00BCD4]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 border-b border-slate-100 pb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#00BCD4]/5 text-[#00BCD4] mb-6 ring-1 ring-[#00BCD4]/20">
            <FileText className="w-6 h-6" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Terms of Service
          </h1>

          <div className="items-center justify-center gap-2 text-slate-500 text-sm font-medium bg-slate-50 inline-flex px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: November 30, 2025</span>
          </div>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10 text-sm md:text-base">
            <p className="mb-0">
              By downloading or using the{" "}
              <strong className="text-slate-900">SQL Studio app</strong>, these
              terms will automatically apply to you – you should make sure
              therefore that you read them carefully before using the app.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                License & Restrictions
              </h2>
              <p className="leading-relaxed mb-4">
                You are granted a non-exclusive, non-transferable, revocable
                license to use the Application for your personal, non-commercial
                purposes.
              </p>
              <p className="leading-relaxed">
                You are not allowed to copy or modify the app, any part of the
                app, or our trademarks in any way. You are not allowed to
                attempt to extract the source code of the app, and you also
                shouldn&apos;t try to translate the app into other languages or
                make derivative versions. The app itself, and all the
                trademarks, copyright, database rights, and other intellectual
                property rights related to it, still belong to{" "}
                <strong className="text-slate-900">Dário Matias</strong>.
              </p>
            </section>

            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                Local Data Responsibility
              </h2>
              <p className="leading-relaxed mb-4">
                SQL Studio operates entirely{" "}
                <strong className="text-slate-900">offline</strong> and locally
                on your device. We do not provide cloud storage, backup
                services, or data synchronization.
              </p>
              <p className="leading-relaxed mb-4">
                You are solely responsible for:
              </p>
              <ul className="space-y-3 my-6 pl-2">
                <li className="flex items-start gap-3">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0"></div>
                  <span>Backing up your database files regularly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0"></div>
                  <span>Managing the integrity of your data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0"></div>
                  <span>
                    Ensuring the physical and digital security of your device.
                  </span>
                </li>
              </ul>

              <div className="p-4 bg-yellow-50/50 rounded-xl border border-yellow-100 text-slate-700 text-sm leading-relaxed">
                <p className="mb-0">
                  <strong>Important:</strong> Dário Matias cannot be held liable
                  for any loss of data, corruption of files, or inability to
                  access your databases caused by device failure, uninstallation
                  of the app, or user error, as we have no access to your data.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Third Party Services
              </h2>
              <p className="leading-relaxed mb-4">
                The app does use third-party services that declare their Terms
                and Conditions, primarily for the purpose of application
                distribution and core system functionality (like Google Play
                Services).
              </p>
              <p className="leading-relaxed mb-4">
                Link to Terms and Conditions of third-party service providers
                used by the app:
              </p>
              <ul className="space-y-3 my-6 pl-2">
                <li className="flex items-start gap-3">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0"></div>
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00BCD4] hover:underline font-medium"
                  >
                    Google Play Services
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                Offline Functionality
              </h2>
              <p className="leading-relaxed mb-4">
                The Application allows you to create and edit SQL databases
                without an internet connection. However, you acknowledge that
                you are responsible for any data charges incurred if you choose
                to download updates for the app via your mobile network.
              </p>
              <p className="leading-relaxed">
                Dário Matias cannot take responsibility for the app not working
                at full functionality if you don&apos;t have access to the
                internet solely for the purpose of downloading initial assets or
                critical updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Updates & Termination
              </h2>
              <p className="leading-relaxed mb-4">
                Dário Matias is committed to ensuring that the app is as useful
                and efficient as possible. We reserve the right to make changes
                to the app at any time.
              </p>
              <p className="leading-relaxed">
                We may wish to stop providing the app, and may terminate use of
                it at any time without giving notice of termination to you. Upon
                termination, (a) the rights and licenses granted to you in these
                terms will end; (b) you must stop using the app, and (if needed)
                delete it from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Changes to Terms
              </h2>
              <p className="leading-relaxed mb-4">
                We may update our Terms and Conditions from time to time. Thus,
                you are advised to review this page periodically for any
                changes. We will notify you of any changes by posting the new
                Terms and Conditions on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions or suggestions about the Terms and
                Conditions, do not hesitate to contact the Service Provider at{" "}
                <a
                  href="mailto:matiasdario75@gmail.com"
                  className="font-medium text-[#00BCD4] hover:text-[#00ACC1] hover:underline underline-offset-4 decoration-2"
                >
                  matiasdario75@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
