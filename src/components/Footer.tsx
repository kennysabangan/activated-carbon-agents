import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="header-logo">
              <Image
                src="/images/logo.png"
                alt="Activated Carbon Agents"
                width={160}
                height={53}
              />
            </Link>
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
            <p>Activated Carbon Agents</p>
            <p>17512 Griffin Lane, Huntington Beach CA 92647</p>
            <p>
              <a href="tel:8559343376">(855) 934-3376</a>
            </p>
            <p>
              <a href="mailto:kim@activatedcarbonagents.com">
                kim@activatedcarbonagents.com
              </a>
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>Activated Carbon Agents &copy; 2026</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
