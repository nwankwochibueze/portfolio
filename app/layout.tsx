import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// ✅ Headings: Space Grotesk
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// ✅ Body: Inter (clean, highly readable, built-in)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nwankwo Chibueze | Full Stack Developer",
  description: "Portfolio showcasing React, Next.js, and MERN stack projects",
  keywords: ["React", "Next.js", "Full Stack", "Developer", "Portfolio"],
  authors: [{ name: "Nwankwo Chibueze" }],
  openGraph: {
    title: "Nwankwo Chibueze | Full Stack Developer",
    description: "Portfolio showcasing React, Next.js, and MERN stack projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nwankwo Chibueze | Full Stack Developer",
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
  // ✅ Social links config - properly typed & scoped inside component
  const socialLinks: { name: string; href: string }[] = [
    { name: "GitHub", href: "https://github.com/nwankwochibueze" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nwankwo-chibueze-54bb801a9/" },
    { name: "Twitter", href: "https://twitter.com/yourusername" },
    { name: "Email", href: "mailto:nwankwochibu11@gmail.com" },
  ];

  return (
    <html 
      lang="en" 
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased min-h-screen bg-[#F8F9FA] font-[var(--font-body)]">
        <Navbar />
        <div className="safe-top" />
        <main className="container mx-auto px-4 py-6 sm:py-8">
          {children}
        </main>
        <div className="safe-bottom" />
        
        {/* ✅ Footer - Single Horizontal Row */}
        <footer className="py-8 text-center px-4">
          <div className="flex justify-center gap-4 mb-4 flex-nowrap overflow-x-auto pb-2">
            {socialLinks.map((social: { name: string; href: string }) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                className="text-gray-500 hover:text-[#E4F222] transition text-sm font-medium whitespace-nowrap"
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nwankwo Chibueze
          </p>
        </footer>
      </body>
    </html>
  );
}