export const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 bg-linear-to-br from-gray-950 via-gray-900 to-black text-gray-400 text-center border-t border-gray-800 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p className="font-light text-gray-300">
          &copy; {new Date().getFullYear()} SQL Studio. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 font-medium text-sm">
          <a
            href="/privacy-policy"
            className="text-gray-300 hover:text-[#00BCD4] transition-colors duration-300 ease-in-out"
          >
            Privacy Policy
          </a>

          <a
            href="/terms-of-service"
            className="text-gray-300 hover:text-[#00BCD4] transition-colors duration-300 ease-in-out"
          >
            Terms of Service
          </a>

          <a
            href="/contact"
            className="text-gray-300 hover:text-[#00BCD4] transition-colors duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};