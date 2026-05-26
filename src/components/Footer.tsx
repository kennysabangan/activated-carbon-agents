import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Activated Carbon Agents
            </h3>
            <p className="text-sm leading-relaxed">
              17512 Griffin Lane<br />
              Huntington Beach, CA 92647
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm mb-2">
              <a href="tel:+18559343376" className="hover:text-white transition-colors">
                (855) 934-3376
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:kim@activatedcarbonagents.com" className="hover:text-white transition-colors">
                kim@activatedcarbonagents.com
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Activated Carbon Agents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
