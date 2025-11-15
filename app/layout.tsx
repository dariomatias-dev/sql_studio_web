import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
