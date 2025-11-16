export const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 bg-card text-muted-foreground text-center border-t border-border rounded-t-2xl text-[14px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} SQL Studio. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <a
            href="/privacy-policy"
            className="hover:text-[#00BCD4] transition-colors"
          >
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#00BCD4] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#00BCD4] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
