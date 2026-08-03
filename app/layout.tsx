import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/ui/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Sourajit Majumder | Full Stack & AI Developer",
  description:
    "Portfolio of Sourajit Majumder, building digital products with clean code and intentional UX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className="bg-ctp-mantle text-ctp-text font-sans antialiased selection:bg-ctp-mauve/20 selection:text-ctp-mauve">
        <ThemeProvider>
          <Navigation />
          {children}
          <ChatWidget />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
