import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="header-logo">
              <span className="logo-icon">AC</span>
              Activated Carbon
            </div>
            <p className="footer-tagline">
              Quality activated carbon, manufacturer direct.
            </p>
          </div>

          <div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            </div>
          </div>

          <div className="footer-contact">
            <p>123 Industrial Way, Suite 100</p>
            <p>
              <a href="tel:+18005551234">(800) 555-1234</a>
            </p>
            <p>
              <a href="mailto:info@activatedcarbonagents.com">
                info@activatedcarbonagents.com
              </a>
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Activated Carbon Agents</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
