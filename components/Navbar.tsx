"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/nwankwochibueze" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nwankwo-chibueze-54bb801a9/" },
    { name: "Twitter", href: "https://twitter.com/yourusername" },
    { name: "Email", href: "mailto:nwankwochibu11@gmail.com" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold min-h-11 min-w-11 flex items-center text-foreground hover:text-primary transition-colors"
          >
            N|C
          </Link>

          {/* Mobile Hamburger - Pure black */}
          <button
            className="md:hidden p-2 min-h-11 min-w-11 flex items-center justify-center text-[#111827] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition min-h-11 flex items-center text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ✅ Mobile Dropdown - Increased height, black bg, horizontal social links */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-[#111827]">
            <div className="flex flex-col gap-2 px-4">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition py-3 px-2 rounded-lg hover:bg-white/10 min-h-11 flex items-center text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="my-4 border-t border-white/10" />

              {/* Social Links - Horizontal Stack */}
              <div className="flex items-center gap-4 overflow-x-auto pb-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-white/70 hover:text-[#E4F222] transition text-sm font-medium whitespace-nowrap min-h-11 flex items-center"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}