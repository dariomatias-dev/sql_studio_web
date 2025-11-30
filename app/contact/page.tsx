"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  AtSign,
  CheckCircle,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useHeaderTransparency } from "@/context/header-transparency-context";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const ContactPage = () => {
  const { setEnabled } = useHeaderTransparency();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    },
  });

  useEffect(() => {
    setEnabled(false);
    return () => setEnabled(true);
  }, [setEnabled]);

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("idle");

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          subject: data.subject,
          message: `${data.name}: ${data.message}`,
          email: data.email,
        },
        publicKey
      );

      setSubmitStatus("success");
      reset();

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Email error:", error);

      setSubmitStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen bg-white pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00BCD4]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#00BCD4]/5 text-[#00BCD4] mb-6 ring-1 ring-[#00BCD4]/20">
            <MessageSquare className="w-6 h-6" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Get in Touch
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have a question, found a bug, or want to suggest a feature?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Let&apos;s start a conversation
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Since SQL Studio is an offline-first app tailored for
                developers, your feedback is crucial for future updates. Whether
                it&apos;s a technical issue or a feature request, reach out
                directly.
              </p>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#00BCD4] shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      Email Support
                    </p>
                    <a
                      href="mailto:matiasdario75@gmail.com"
                      className="text-slate-600 hover:text-[#00BCD4] transition-colors"
                    >
                      matiasdario75@gmail.com
                    </a>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-200" />

                <div className="flex gap-4">
                  <a
                    href="https://github.com/dariomatias-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-[#00BCD4] transition-colors text-sm font-medium"
                  >
                    <Github className="w-5 h-5" />
                    GitHub Profile
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dariomatias-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-[#00BCD4] transition-colors text-sm font-medium"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#00BCD4]/5 border border-[#00BCD4]/10 rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-2">
                Reporting a Bug?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Please include your device model and Android version to help us
                resolve the issue faster.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/50 focus:border-[#00BCD4] transition-all text-slate-900 placeholder:text-slate-400 ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-slate-200"
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/50 focus:border-[#00BCD4] transition-all text-slate-900 placeholder:text-slate-400 ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-slate-200"
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-700"
                >
                  Subject
                </label>
                <select
                  {...register("subject")}
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/50 focus:border-[#00BCD4] transition-all text-slate-900"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Feedback">Feedback</option>
                </select>
                {errors.subject && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/50 focus:border-[#00BCD4] transition-all text-slate-900 placeholder:text-slate-400 resize-none ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-200"
                  }`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#00BCD4] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Message sent successfully!
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Failed to send. Please try again.
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
