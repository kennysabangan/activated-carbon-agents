import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Activated Carbon Agents",
  description:
    "Privacy Policy for Activated Carbon Agents. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Activated Carbon Agents",
    description: "Privacy Policy for Activated Carbon Agents.",
    url: "https://activatedcarbonagents.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-headings:text-charcoal prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: January 1, 2026</em></p>

        <p>
          Activated Carbon Agents (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website activatedcarbonagents.com.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Fill out a contact or inquiry form</li>
          <li>Subscribe to our newsletter or communications</li>
          <li>Request a quote or product information</li>
          <li>Communicate with us via email, phone, or other channels</li>
        </ul>
        <p>This information may include your name, email address, phone number, company name, mailing address, and any other details you choose to provide.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and fulfill your requests</li>
          <li>Process orders and provide customer support</li>
          <li>Send you relevant information about our products and services</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep your information confidential. We may also disclose your information when required by law or to protect our rights.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you interact with our site. You can control cookie preferences through your browser settings.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Your continued use of our website after any changes constitutes acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Activated Carbon Agents<br />
          17512 Griffin Lane<br />
          Huntington Beach, CA 92647<br />
          Phone: (855) 934-3376<br />
          Email: kim@activatedcarbonagents.com
        </p>
      </div>
    </article>
  );
}
