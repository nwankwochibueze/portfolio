import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// ✅ Space Grotesk for headings (weights for h1-h6)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Portfolio showcasing React, Next.js, and MERN stack projects",
  keywords: ["React", "Next.js", "Full Stack", "Developer", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Full Stack Developer",
    description: "Portfolio showcasing React, Next.js, and MERN stack projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Full Stack Developer",
    description: "Portfolio showcasing React, Next.js, and MERN stack projects",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${spaceGrotesk.variable} ${GeistSans.variable}`}
    >
      <body className="antialiased min-h-screen bg-[#F8F9FA] font-sans">
        <Navbar />
        <div className="safe-top" />
        <main className="container mx-auto px-4 py-6 sm:py-8">
          {children}
        </main>
        <div className="safe-bottom" />
        <footer className="py-6 text-center text-gray-500 text-sm px-4">
          <p>© {new Date().getFullYear()} Nwankwo Chibueze</p>
        </footer>
      </body>
    </html>
  );
}