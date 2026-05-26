import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Row 1 */}
        <div className="footer-row1">
          {/* Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li>Activated Carbon Agents</li>
              <li>17512 Griffin Lane, Huntington Beach CA 92647</li>
              <li><a href="tel:8559343376">(855) 934-3376</a></li>
              <li><a href="mailto:kim@activatedcarbonagents.com">kim@activatedcarbonagents.com</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h3>Legal</h3>
            <div className="footer-legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>Activated Carbon Agents &copy; 2026</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
