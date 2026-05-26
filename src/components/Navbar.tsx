"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Activated Carbon" },
    { href: "/about", label: "About Us" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-primary font-bold text-xl tracking-tight">
              Activated Carbon Agents
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-charcoal hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-gold hover:bg-gold-dark text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-charcoal p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-charcoal hover:text-primary font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block mx-3 bg-gold hover:bg-gold-dark text-white px-5 py-2 rounded-md text-sm font-semibold text-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
