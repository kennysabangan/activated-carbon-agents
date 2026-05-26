"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > lastY && y > 120) setHidden(true);
      else setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <header className={`header${hidden ? " hidden" : ""}${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="header-logo">
            <Image
              src="/images/logo.png"
              alt="Activated Carbon Agents"
              width={180}
              height={60}
              priority
            />
          </Link>

          <nav className="header-nav">
            <Link href="/">Home</Link>
            <Link href="/#products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
          </nav>

          <div className="header-cta">
            <Link href="/#contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu" onClick={() => setMobileOpen(false)}>
          <Link href="/">Home</Link>
          <Link href="/#products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/#contact" className="btn btn-primary" style={{ textAlign: "center" }}>
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
}
