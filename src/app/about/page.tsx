import type { Metadata } from "next";
import { canonical } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: canonical("/about") },
  title: "About Us | Activated Carbon Agents",
  description:
    "Learn about our mission, values, and the decades of expertise behind Activated Carbon Agents. Forbes 5000 recognized, serving since 1988.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>About Us</h1>
            <p className="subtitle">
              Decades of expertise. Global reach. Manufacturer direct.
            </p>
          </div>
        </div>

        <section className="section about-content">
          <div className="container">
            <div className="about-mission fade-in">
              <h2>Our Mission</h2>
              <p>
                We exist to connect businesses with the highest quality
                activated carbon at the best possible price. By sourcing
                directly from manufacturers and maintaining rigorous quality
                standards, we eliminate unnecessary costs and deliver
                solutions that perform.
              </p>
            </div>

            <div className="about-features">
              <div className="about-feature fade-in">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <h3>Quality Guaranteed</h3>
                <p>
                  Every batch undergoes rigorous testing to ensure it meets
                  or exceeds industry standards for iodine number, ash content,
                  and moisture.
                </p>
              </div>

              <div className="about-feature fade-in">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Global Sourcing</h3>
                <p>
                  Our network spans multiple continents, giving us access to
                  diverse raw materials and production capabilities to meet
                  any specification.
                </p>
              </div>

              <div className="about-feature fade-in">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Expert Support</h3>
                <p>
                  Our technical team provides end-to-end guidance — from
                  product selection through application engineering and
                  ongoing optimization.
                </p>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="founder-grid founder-grid-single">
              <div className="founder-text fade-in-left">
                <p className="overline">LEADERSHIP</p>
                <h2 className="headline-lg">About the Founder &amp; CEO</h2>
                <p>
                  Kimberly Walsh has over three decades of experience in the
                  activated carbon market, both domestically and
                  internationally. Her career began in 1988 with Atochem NA, a
                  manufacturer of sub-bituminous coal in Pryor, OK, which was
                  later acquired by Norit/Cabot.
                </p>
                <p>
                  In 1998, she founded Carbon Resources, which was recognized
                  twice on the Forbes 5000 list of fastest-growing companies.
                  Over 16 years of ownership, she traveled internationally to
                  qualify manufacturers that met the stringent quality control
                  standards she implemented. Her team-focused approach has
                  always centered on delivering exceptional customer service by
                  proactively anticipating client needs.
                </p>
                <p>
                  Beyond her professional achievements, Kimberly enjoys
                  spending time with her husband and family, sailing,
                  traveling, and supporting several local and international
                  non-profits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="section-sm contact-section">
          <div className="container">
            <div className="contact-card fade-in">
              <h2>Have a Question?</h2>
              <p className="subtitle">
                One of our representatives will reach back to you quickly.
              </p>
          <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Animations />
    </>
  );
}
