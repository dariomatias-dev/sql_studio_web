"use client";

import { useEffect } from "react";

import { useHeaderTransparency } from "@/context/header-transparency-context";

const PrivacyPolicyPage = () => {
  const { setEnabled } = useHeaderTransparency();

  useEffect(() => {
    setEnabled(false);

    return () => setEnabled(true);
  }, [setEnabled]);

  return (
    <section className="py-20 px-4 md:px-8 bg-subtle-pattern mx-auto my-8 max-w-7xl text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          This privacy policy applies to the SQL Studio app (hereby referred to
          as &quot;Application&quot;) for mobile devices that was created by
          Dário Matias (hereby referred to as &quot;Service Provider&quot;) as a
          Free service. This service is intended for use &quot;AS IS&quot;.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Information Collection and Use
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Application collects information when you download and use it.
          This information may include information such as:
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 mb-6 ml-4">
          <li>
            Your device&apos;s Internet Protocol address (e.g. IP address)
          </li>
          <li>
            The pages of the Application that you visit, the time and date of
            your visit, the time spent on those pages
          </li>
          <li>The time spent on the Application</li>
          <li>The operating system you use on your mobile device</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-6">
          The Application does not gather precise information about the location
          of your mobile device.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          The Service Provider may use the information you provided to contact
          you from time to time to provide you with important information,
          required notices and marketing promotions.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          For a better experience, while using the Application, the Service
          Provider may require you to provide us with certain personally
          identifiable information. The information that the Service Provider
          request will be retained by them and used as described in this privacy
          policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Third Party Access
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Only aggregated, anonymized data is periodically transmitted to
          external services to aid the Service Provider in improving the
          Application and their service. The Service Provider may share your
          information with third parties in the ways that are described in this
          privacy statement.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          The Service Provider may disclose User Provided and Automatically
          Collected Information:
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 mb-6 ml-4">
          <li>
            as required by law, such as to comply with a subpoena, or similar
            legal process;
          </li>
          <li>
            when they believe in good faith that disclosure is necessary to
            protect their rights, protect your safety or the safety of others,
            investigate fraud, or respond to a government request;
          </li>
          <li>
            with their trusted services providers who work on their behalf, do
            not have an independent use of the information we disclose to them,
            and have agreed to adhere to the rules set forth in this privacy
            statement.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Opt-Out Rights
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          You can stop all collection of information by the Application easily
          by uninstalling it. You may use the standard uninstall processes as
          may be available as part of your mobile device or via the mobile
          application marketplace or network.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Data Retention Policy
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The Service Provider will retain User Provided data for as long as you
          use the Application and for a reasonable time thereafter. If
          you&apos;d like them to delete User Provided Data that you have
          provided via the Application, please contact them at{" "}
          <a
            href="mailto:matiasdario75@gmail.com"
            className="text-[#00BCD4] hover:underline"
          >
            matiasdario75@gmail.com
          </a>{" "}
          and they will respond in a reasonable time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Children
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Service Provider does not use the Application to knowingly solicit
          data from or market to children under the age of 13.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          The Service Provider does not knowingly collect personally
          identifiable information from children. The Service Provider
          encourages all children to never submit any personally identifiable
          information through the Application and/or Services. The Service
          Provider encourage parents and legal guardians to monitor their
          children&apos;s Internet usage and to help enforce this Policy by
          instructing their children never to provide personally identifiable
          information through the Application and/or Services without their
          permission. If you have reason to believe that a child has provided
          personally identifiable information to the Service Provider through
          the Application and/or Services, please contact the Service Provider (
          <a
            href="mailto:matiasdario75@gmail.com"
            className="text-[#00BCD4] hover:underline"
          >
            matiasdario75@gmail.com
          </a>
          ) so that they will be able to take the necessary actions. You must
          also be at least 16 years of age to consent to the processing of your
          personally identifiable information in your country (in some countries
          we may allow your parent or guardian to do so on your behalf).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Security
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The Service Provider is concerned about safeguarding the
          confidentiality of your information. The Service Provider provides
          physical, electronic, and procedural safeguards to protect information
          the Service Provider processes and maintains.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Changes
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          This Privacy Policy may be updated from time to time for any reason.
          The Service Provider will notify you of any changes to the Privacy
          Policy by updating this page with the new Privacy Policy. You are
          advised to consult this Privacy Policy regularly for any changes, as
          continued use is deemed approval of all changes.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          This privacy policy is effective as of{" "}
          <span className="font-semibold">2025-11-20</span>
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Your Consent
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          By using the Application, you are consenting to the processing of your
          information as set forth in this Privacy Policy now and as amended by
          us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Contact Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          If you have any questions regarding privacy while using the
          Application, or have questions about the practices, please contact the
          Service Provider via email at{" "}
          <a
            href="mailto:matiasdario75@gmail.com"
            className="text-[#00BCD4] hover:underline"
          >
            matiasdario75@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
