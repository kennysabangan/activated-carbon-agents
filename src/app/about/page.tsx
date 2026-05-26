import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "About Us - Activated Carbon Agents",
  description: "Learn about Activated Carbon Agents - our mission, values, and the team behind decades of activated carbon expertise.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="page-content">
        <h1>Activated Carbon Agents</h1>
        <p>
          At Activated Carbon Agents, our mission is to provide high-quality activated carbon products at manufacturer direct pricing, backed by decades of experience and exceptional technical support. We work directly with top manufacturers worldwide to ensure our clients receive the best products for their specific applications.
        </p>

        <h2>Why Choose Us?</h2>
        <p>
          Kimberly Walsh, our founder and CEO, brings over three decades of expertise in the activated carbon market. Her career began in 1988 with Atochem NA and continued through the founding of Carbon Resources, which earned a place twice on the Forbes 5000 list of fastest-growing companies.
        </p>
        <p>
          Our global network of qualified manufacturers ensures consistent quality and competitive pricing. We&apos;ve built lasting relationships based on trust, reliability, and a genuine commitment to our clients&apos; success.
        </p>
        <p>
          Whether you need activated carbon for water treatment, air purification, food processing, or industrial applications, our team has the knowledge and resources to match you with the right solution.
        </p>
        <Link href="/#contact" className="contact-btn-header" style={{ marginTop: "20px" }}>
          Contact Us
        </Link>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
