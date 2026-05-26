import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export const metadata: Metadata = {
  title: "Privacy Policy | Activated Carbon Agents",
  description: "Privacy Policy for Activated Carbon Agents.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>Privacy Policy</h1>
          </div>
        </div>

        <section className="legal-page">
          <div className="container">
            <div className="legal-container fade-in">
              <p>
                <em>Last updated: May 2026</em>
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly through our contact
                forms, including your name, email address, phone number, and
                any message content you submit. We also collect basic usage
                data through standard analytics tools.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                Information collected through our website is used solely to:
              </p>
              <ul>
                <li>Respond to your inquiries and provide requested information</li>
                <li>
                  Send relevant product updates or industry insights (only with
                  your consent)
                </li>
                <li>Improve our website and services</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share information with trusted partners
                who assist in operating our website or servicing you, provided
                they agree to keep the information confidential.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>

              <h2>5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing
                experience. You can choose to disable cookies through your
                browser settings, though this may affect site functionality.
              </p>

              <h2>6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                sites.
              </p>

              <h2>7. Changes to This Policy</h2>
              <p>
                We reserve the right to update this privacy policy at any time.
                Changes will be posted on this page with an updated revision
                date.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact
                us at{" "}
                <a
                  href="mailto:info@activatedcarbonagents.com"
                  style={{ color: "var(--accent)" }}
                >
                  info@activatedcarbonagents.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Animations />
    </>
  );
}
