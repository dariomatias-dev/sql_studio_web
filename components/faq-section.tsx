import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export const FaqSection = () => {
  return (
    <section
      id="faq"
      className="py-20 px-4 md:px-8 bg-subtle-pattern mx-auto my-12 max-w-7xl"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 leading-tight">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full text-left">
          <AccordionItem value="item-1" className="border-b border-gray-200 py-6 group">
            <AccordionTrigger className="relative flex items-center justify-between w-full text-xl font-semibold text-gray-800 hover:text-[#00BCD4] transition-colors duration-200 pr-12 [&>svg]:hidden">
              What databases does SQL Studio support?
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
                <span className="block h-0.5 w-4 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-0"></span>
                <span className="absolute block h-4 w-0.5 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:scale-x-0"></span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4 leading-relaxed max-w-3xl mx-auto opacity-90">
              Currently, SQL Studio provides full support for SQLite databases.
              We are continuously evaluating support for other database systems.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-gray-200 py-6 group">
            <AccordionTrigger className="relative flex items-center justify-between w-full text-xl font-semibold text-gray-800 hover:text-[#00BCD4] transition-colors duration-200 pr-12 [&>svg]:hidden">
              Is SQL Studio free?
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
                <span className="block h-0.5 w-4 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-0"></span>
                <span className="absolute block h-4 w-0.5 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:scale-x-0"></span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4 leading-relaxed max-w-3xl mx-auto opacity-90">
              SQL Studio offers a free version with essential features. Premium
              features are available through an in-app purchase to unlock the
              full potential of the app.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-200 py-6 group">
            <AccordionTrigger className="relative flex items-center justify-between w-full text-xl font-semibold text-gray-800 hover:text-[#00BCD4] transition-colors duration-200 pr-12 [&>svg]:hidden">
              How do I report a bug or request a feature?
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
                <span className="block h-0.5 w-4 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-0"></span>
                <span className="absolute block h-4 w-0.5 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:scale-x-0"></span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4 leading-relaxed max-w-3xl mx-auto opacity-90">
              You can report bugs or request features directly through the
              &quot;Contact&quot; section in the app settings, or by visiting
              our support page on the website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="py-6 group">
            <AccordionTrigger className="relative flex items-center justify-between w-full text-xl font-semibold text-gray-800 hover:text-[#00BCD4] transition-colors duration-200 pr-12 [&>svg]:hidden">
              Does SQL Studio provide pre-filled databases for practice?
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
                <span className="block h-0.5 w-4 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-0"></span>
                <span className="absolute block h-4 w-0.5 bg-[#00BCD4] transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:scale-x-0"></span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pt-4 leading-relaxed max-w-3xl mx-auto opacity-90">
              Yes, SQL Studio comes with several pre-created databases, complete
              con ready-to-use tables and populated data, perfect for practicing
              your SQL queries.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};