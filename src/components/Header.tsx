"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <Image
            src="/images/logo.png"
            alt="Activated Carbon Agents"
            width={200}
            height={68}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Activated Carbon</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/resources">Resources</Link></li>
          </ul>
          <Link href="/#contact" className="contact-btn-header">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>Activated Carbon</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
          <li>
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="contact-btn-header"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
