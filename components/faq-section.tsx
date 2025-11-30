import { Plus, Minus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqItems = [
  {
    question: "What databases does SQL Studio support?",
    answer: (
      <>
        Currently, SQL Studio provides full support for{" "}
        <strong className="text-slate-900 font-semibold">SQLite</strong>{" "}
        databases. We are continuously evaluating support for other database
        systems based on user feedback and roadmap priorities.
      </>
    ),
  },
  {
    question: "Is SQL Studio free?",
    answer:
      "SQL Studio is completely free and offers all essential features at no additional cost. We believe in accessible tools for developers everywhere.",
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: (
      <>
        We value your feedback! You can report bugs or request features directly
        through the{" "}
        <span className="text-slate-900 font-semibold">
          &quot;Contact&quot;
        </span>{" "}
        section in the app settings, or by visiting our dedicated support page.
      </>
    ),
  },
  {
    question: "Does SQL Studio provide practice databases?",
    answer:
      "Yes, SQL Studio comes pre-loaded with several example databases. These include ready-to-use tables and populated data, making it perfect for beginners to practice queries immediately.",
  },
];

export const FaqSection = () => {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 px-4 bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00BCD4]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-xs mb-3 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            We&apos;ve got answers.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-light">
            Everything you need to know about the product and billing.
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            support.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="border-b border-slate-100 last:border-0 py-2"
            >
              <AccordionTrigger className="flex items-center justify-between w-full py-6 text-left hover:no-underline [&>svg]:hidden group">
                <span className="text-lg md:text-xl font-medium text-slate-700 group-hover:text-[#00BCD4] transition-colors duration-300 pr-8">
                  {item.question}
                </span>

                <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
                  <Plus className="absolute w-5 h-5 text-slate-400 transition-all duration-300 group-hover:text-[#00BCD4] group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90" />
                  <Minus className="absolute w-5 h-5 text-[#00BCD4] transition-all duration-300 opacity-0 -rotate-90 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-base leading-relaxed pb-8 pr-12 animate-in slide-in-from-top-2 fade-in duration-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
