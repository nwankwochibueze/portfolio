import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

// ✅ Fixed viewport for proper mobile scaling
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true, // ✅ Allow zoom for accessibility
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#F8F9FA]">
        <Navbar />
        <div className="safe-top" />
        <main className="container mx-auto px-4 py-6 sm:py-8">
          {children}
        </main>
        <div className="safe-bottom" />
        <footer className="py-6 text-center text-gray-500 text-sm px-4">
          <p>© {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </body>
    </html>
  );
}