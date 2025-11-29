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
        <strong className="text-gray-900 font-medium">SQLite</strong> databases.
        We are continuously evaluating support for other database systems based
        on user feedback and roadmap priorities.
      </>
    ),
  },
  {
    question: "Is SQL Studio free?",
    answer: (
      <>
        SQL Studio is completely free and offers all essential features at no
        additional cost.
      </>
    ),
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: (
      <>
        We value your feedback! You can report bugs or request features directly
        through the
        <span className="text-gray-900 font-medium"> &quot;Contact&quot; </span>
        section in the app settings, or by visiting our dedicated support page
        on the website.
      </>
    ),
  },
  {
    question: "Does SQL Studio provide practice databases?",
    answer: (
      <>
        Yes, SQL Studio comes pre-loaded with several example databases. These
        include ready-to-use tables and populated data, making it perfect for
        beginners to practice queries without needing to import external files.
      </>
    ),
  },
];

const AccordionIcon = () => (
  <div className="shrink-0 h-6 w-6 md:h-8 md:w-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:border-[#00BCD4]/30 group-hover:bg-[#00BCD4]/5 transition-colors duration-200">
    <div className="relative h-3 w-3 md:h-4 md:w-4">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-400 group-hover:bg-[#00BCD4] rounded-full transition-colors duration-200"></span>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-gray-400 group-hover:bg-[#00BCD4] rounded-full transition-all duration-300 ease-out group-data-[state=open]:rotate-90 group-data-[state=open]:scale-y-0"></span>
    </div>
  </div>
);

export const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600 text-[11px] md:text-xs font-semibold tracking-wide uppercase mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]"></span>
            Support
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base max-w-lg mx-auto leading-relaxed">
            Find answers to common questions about functionality, billing, and
            support.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="group border border-gray-200 last:border-b bg-white rounded-lg px-2 md:px-5 transition-all duration-200 data-[state=open]:border-gray-400/50 data-[state=open]:ring-gray-200 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="flex items-center justify-between w-full py-4 text-left hover:no-underline [&>svg]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]/50 rounded-md group-data-[state=open]:text-gray-900">
                <span className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-[#00BCD4] transition-colors duration-200 pr-4">
                  {item.question}
                </span>
                <AccordionIcon />
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-sm md:text-base pb-5 leading-7 animate-in fade-in-0 slide-in-from-top-1 duration-200">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};