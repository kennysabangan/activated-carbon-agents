import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
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
            <div className="founder-grid">
              <div className="founder-text fade-in-left">
                <p className="overline">LEADERSHIP</p>
                <h2 className="headline-lg">About the Founder &amp; CEO</h2>
                <p>
                  With over three decades of dedicated service in the activated
                  carbon industry, our founder built this company on the
                  principles of quality, integrity, and unwavering commitment
                  to customer success. Starting from a small operation in 1988,
                  he recognized the gap between manufacturers and end-users —
                  and set out to bridge it.
                </p>
                <p>
                  His deep technical expertise, forged through years of
                  hands-on work across water treatment, air purification, and
                  industrial processing, has earned the trust of Fortune 500
                  companies and municipal agencies alike. Under his leadership,
                  the company has been recognized by Forbes as one of
                  America&apos;s most promising companies.
                </p>
              </div>
              <div className="founder-image fade-in-right">
                <Image
                  src="/images/dark-image.webp"
                  alt="Founder portrait"
                  width={320}
                  height={320}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "50%",
                    maxWidth: 320,
                    margin: "0 auto",
                  }}
                />
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
