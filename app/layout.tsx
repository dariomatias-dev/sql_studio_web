import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "SQL Studio",
  description: "Official SQL Studio website",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased selection:bg-[#00BCD4] selection:text-primary-foreground">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
