import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-col footer-col-contact">
            <h3>Contact Us</h3>
            <p>Activated Carbon Agents</p>
            <p>17512 Griffin Lane, Huntington Beach CA 92647</p>
            <a href="tel:8559343376">(855) 934-3376</a>
            <a href="mailto:kim@activatedcarbonagents.com">
              kim@activatedcarbonagents.com
            </a>
          </div>

          <div className="footer-col">
            <h3>Legal</h3>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
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
