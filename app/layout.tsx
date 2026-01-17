import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Import it

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "Sourajit Majumder | Full Stack Developer",
  description: "Portfolio of a Full Stack Developer & AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}