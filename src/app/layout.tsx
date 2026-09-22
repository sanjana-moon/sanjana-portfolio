import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ThemeProvider from "@/providers/ThemeProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// const manrope = Manrope({
//   subsets: ["latin"],
//   variable: "--font-manrope",
// });

export const metadata: Metadata = {
  title: "Sanjana Moon | Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}