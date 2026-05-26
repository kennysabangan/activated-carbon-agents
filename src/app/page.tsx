import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Activated Carbon Agents | Quality Activated Carbon Directly from Manufacturers",
  description:
    "Manufacturer direct pricing on quality activated carbon backed by decades of experience and technical support. Global sourcing, unmatched quality.",
  keywords: [
    "activated carbon",
    "activated carbon suppliers",
    "wholesale activated carbon",
    "granular activated carbon",
    "powdered activated carbon",
    "coconut shell activated carbon",
    "manufacturer direct pricing",
  ],
  openGraph: {
    title: "Activated Carbon Agents | Quality Activated Carbon",
    description:
      "Manufacturer direct pricing backed by decades of experience and technical support.",
    url: "https://activatedcarbonagents.com",
    siteName: "Activated Carbon Agents",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background gradient simulating dark industrial image */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-charcoal-dark to-gray-800"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(27,94,32,0.3) 0%, rgba(26,26,26,0.9) 50%, rgba(51,51,51,0.8) 100%)",
          }}
        />
        {/* Overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Quality Activated Carbon
          </h1>
          <p className="text-2xl sm:text-3xl text-gold font-semibold mb-6">
            Directly from Manufacturers
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Manufacturer direct pricing backed by decades of experience and technical support.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            Welcome to Activated Carbon Agents
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Activated Carbon Agents, we specialize in sourcing the highest quality activated carbon products directly from trusted manufacturers worldwide. With decades of combined experience in the activated carbon industry, our team is dedicated to providing transparent pricing, expert technical support, and reliable supply chain management for businesses across all industries.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you need granular activated carbon (GAC), powdered activated carbon (PAC), or pelletized carbon, we have the knowledge and the network to deliver the right product at the right price. Our commitment to quality and customer satisfaction sets us apart in the industry.
          </p>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission at Activated Carbon Agents is simple: to provide high-quality products and outstanding customer service at manufacturer direct pricing. Our team goes above and beyond to cater to each client&apos;s specific needs. We understand that every application is unique, and we work closely with our customers to ensure they receive the best activated carbon solution for their requirements.
          </p>
        </div>
      </section>

      {/* Global Sourcing Section */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-wide uppercase">
            Global Sourcing, Unmatched Quality
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            We search the globe for the best manufacturing facilities in wood, coal, and coconut shell base activated carbon products. Our extensive network of vetted manufacturers ensures that every product we deliver meets the highest standards of quality and performance. From Southeast Asia to Europe, we partner with facilities that share our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-10">
            About the Founder &amp; CEO
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 md:p-10">
            {/* Founder placeholder */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                <span className="text-white text-4xl font-bold">KW</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Kimberly Walsh</h3>
                <p className="text-gold font-semibold mb-4">Founder &amp; CEO</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kimberly Walsh brings over three decades of experience in the activated carbon industry. Her journey began in 1988 with Atochem NA, where she developed a deep understanding of activated carbon products and their applications across various industries.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In 1998, Kimberly founded Carbon Resources, which earned a place on the Inc. 5000 list twice — a testament to her business acumen and dedication to the industry. After 16 years of successful ownership, she launched Activated Carbon Agents to continue providing manufacturer direct pricing with an unwavering commitment to quality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kimberly has traveled extensively across the globe to personally qualify manufacturers and ensure that only the highest quality products reach her clients. Her hands-on approach and industry expertise make Activated Carbon Agents a trusted partner for businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
