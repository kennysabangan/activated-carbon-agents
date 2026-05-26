import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Us | Activated Carbon Agents",
  description:
    "Learn about Activated Carbon Agents — our mission to provide high-quality activated carbon at manufacturer direct pricing, and meet our founder Kimberly Walsh.",
  keywords: [
    "about activated carbon agents",
    "Kimberly Walsh",
    "activated carbon company",
    "activated carbon supplier",
    "manufacturer direct pricing",
  ],
  openGraph: {
    title: "About Us | Activated Carbon Agents",
    description:
      "Learn about our mission and meet our founder Kimberly Walsh.",
    url: "https://activatedcarbonagents.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            About Activated Carbon Agents
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Decades of experience. Global reach. Manufacturer direct pricing.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6">
            Our mission at Activated Carbon Agents is simple: to provide high-quality products and outstanding customer service at manufacturer direct pricing. Our team goes above and beyond to cater to each client&apos;s specific needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We believe that access to premium activated carbon shouldn&apos;t come with inflated costs. By working directly with manufacturers and eliminating unnecessary middlemen, we pass significant savings on to our customers while maintaining the highest quality standards.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Decades of Experience",
                desc: "Over 30 years of combined experience in the activated carbon industry, giving us unmatched expertise in sourcing and applications.",
              },
              {
                title: "Manufacturer Direct",
                desc: "We work directly with manufacturers worldwide, cutting out middlemen to deliver the best pricing without sacrificing quality.",
              },
              {
                title: "Personalized Service",
                desc: "Every client is different. We take the time to understand your specific needs and recommend the right carbon product for your application.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-charcoal mb-10">
            Meet the Founder &amp; CEO
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 md:p-10">
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
                  Kimberly has traveled extensively across the globe to personally qualify manufacturers, ensuring that only the highest quality products reach her clients. Her hands-on approach and industry expertise make Activated Carbon Agents a trusted partner for businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
