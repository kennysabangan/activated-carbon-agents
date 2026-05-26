import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export const metadata: Metadata = {
  title: "Terms & Conditions | Activated Carbon Agents",
  description: "Terms and conditions for using the Activated Carbon Agents website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>Terms &amp; Conditions</h1>
          </div>
        </div>

        <section className="legal-page">
          <div className="container">
            <div className="legal-container fade-in">
              <p>
                <em>Last updated: May 2026</em>
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by these Terms &amp; Conditions. If you do not agree,
                please do not use this site.
              </p>

              <h2>2. Use of Website</h2>
              <p>
                This website is provided for informational purposes regarding
                our activated carbon products and services. You may not use
                this site for any unlawful purpose or in any way that could
                damage, disable, or impair the site.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos,
                and images — is the property of Activated Carbon Agents and is
                protected by applicable intellectual property laws. You may not
                reproduce, distribute, or modify any content without our
                written consent.
              </p>

              <h2>4. Product Information</h2>
              <p>
                While we strive to provide accurate product descriptions and
                specifications, we do not warrant that product descriptions or
                other content on this site is complete, reliable, or
                error-free. All products are subject to availability and may
                vary by region.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                Activated Carbon Agents shall not be liable for any direct,
                indirect, incidental, or consequential damages arising from
                your use of this website or reliance on information provided
                herein.
              </p>

              <h2>6. External Links</h2>
              <p>
                This website may contain links to third-party websites. We are
                not responsible for the content or practices of any linked
                sites and provide these links for convenience only.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                These Terms &amp; Conditions are governed by and construed in
                accordance with the laws of the State of California, without
                regard to conflict of law principles.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms &amp; Conditions at
                any time. Continued use of the site after changes constitutes
                acceptance of the revised terms.
              </p>

              <h2>9. Contact</h2>
              <p>
                For questions about these Terms &amp; Conditions, contact us at{" "}
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
