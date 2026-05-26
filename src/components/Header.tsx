"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-black">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/home">
          <Image
            src="/images/logo.png"
            alt="Activated Carbon Agents"
            width={200}
            height={68}
            className="h-[68px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none font-headline text-lg font-medium">
            <li><Link href="/home" className="hover:text-linkBlue transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-linkBlue transition-colors">Activated Carbon</Link></li>
            <li><Link href="/about" className="hover:text-linkBlue transition-colors">About Us</Link></li>
            <li><Link href="/resources" className="hover:text-linkBlue transition-colors">Resources</Link></li>
          </ul>
          <Link
            href="/#contact"
            className="bg-black text-white px-6 py-2 rounded-full font-headline text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-black">
          <ul className="flex flex-col items-center gap-4 py-6 list-none font-headline text-lg font-medium">
            <li><Link href="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>Activated Carbon</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
            <li>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-black text-white px-6 py-2 rounded-full"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
