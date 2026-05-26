import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="list-disc list-inside space-y-2 text-footerGray text-base">
              <li>Activated Carbon Agents</li>
              <li>17512 Griffin Lane, Huntington Beach CA 92647</li>
              <li><a href="tel:8559343376" className="hover:underline">(855) 934-3376</a></li>
              <li><a href="mailto:kim@activatedcarbonagents.com" className="hover:underline">kim@activatedcarbonagents.com</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-footerGray border-2 border-white rounded-[15px] px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-footerGray border-2 border-white rounded-[15px] px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-footerGray text-lg">Activated Carbon Agents © 2026</p>
          <p className="text-footerGray text-lg">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
