import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Section 2: Hero */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-bg.jpeg)", opacity: 0.5 }}
        />
        <div className="relative z-10 max-w-[1170px] mx-auto text-center px-4">
          <h1 className="font-headline font-bold text-[32px] md:text-[48px] mb-2">
            Quality Activated Carbon
          </h1>
          <p className="font-headline text-[24px] md:text-[32px] mb-6">
            Directly from Manufacturers
          </p>
          <p className="font-headline text-[20px] md:text-[24px] mb-8 max-w-3xl mx-auto">
            Manufacturer direct pricing backed by decades of experience and technical support.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-headline text-lg animate-slideInUp hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Section 3: Activated Carbon Agents intro */}
      <section className="w-full border-t border-black py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 hidden md:flex gap-12">
          <div className="w-1/2">
            <h2 className="font-headline font-bold text-[32px]">
              Activated Carbon Agents
            </h2>
          </div>
          <div className="w-1/2">
            <p className="font-headline text-[24px] leading-relaxed">
              With decades of experience in the activated carbon industry, we provide high-quality products at manufacturer direct pricing. Our team is dedicated to understanding your specific needs and delivering solutions that exceed expectations.
            </p>
          </div>
        </div>
        {/* Mobile fallback */}
        <div className="md:hidden max-w-[1200px] mx-auto px-4">
          <h2 className="font-headline font-bold text-[28px] mb-4">
            Activated Carbon Agents
          </h2>
          <p className="font-headline text-[20px] leading-relaxed">
            With decades of experience in the activated carbon industry, we provide high-quality products at manufacturer direct pricing.
          </p>
        </div>
      </section>

      {/* Section 4: About Us */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left: Text */}
            <div className="w-full md:w-1/3 py-8 md:py-12 md:pr-8">
              <h1 className="font-headline font-bold text-[32px] mb-6">
                ABOUT US
              </h1>
              <p className="font-headline text-[24px] leading-relaxed mb-8">
                Our mission at Activated Carbon Agents is simple: to provide high-quality products and outstanding customer service at manufacturer direct pricing. Our team goes above and beyond to cater to each client&apos;s specific needs. For more information or general inquiries, get in touch today.
              </p>
              <Link
                href="/#contact"
                className="inline-block font-headline text-lg border-[3px] border-black border-b-4 px-6 py-2 hover:bg-black hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Middle: Carbon image (desktop only) */}
            <div
              className="hidden md:block w-1/3 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/about-carbon.jpeg)" }}
            />

            {/* Right: Water image */}
            <div
              className="hidden md:block w-1/3 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/about-water.webp)" }}
            />
          </div>
        </div>
      </section>

      {/* Section 5: Carbon images row (desktop only) */}
      <section className="hidden md:block w-full py-8">
        <div className="max-w-[1200px] mx-auto px-4 flex gap-4">
          <div className="w-1/3 animate-zoomIn">
            <Image src="/images/svg-accent.svg" alt="Accent" width={400} height={300} className="w-full h-auto" />
          </div>
          <div className="w-1/3 animate-zoomIn">
            <Image src="/images/blue-logo.png" alt="Blue Logo" width={400} height={300} className="w-full h-auto" />
          </div>
          <div className="w-1/3 animate-zoomIn">
            <Image src="/images/dark-image.webp" alt="Dark Image" width={400} height={300} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Section 6: Global Sourcing */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          {/* Left: Text */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/globe.png"
              alt="Globe"
              width={120}
              height={120}
              className="mb-6 animate-fadeInUp"
            />
            <h1 className="font-headline font-bold text-[32px] mb-2">
              GLOBAL SOURCING,
            </h1>
            <h1 className="font-headline font-bold text-[32px] mb-6">
              UNMATCHED QUALITY
            </h1>
            <p className="font-headline text-[24px] leading-relaxed mb-8">
              We source activated carbon from the best manufacturers around the world, ensuring every product meets the highest quality standards. Our global network allows us to offer competitive pricing without compromising on quality.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-headline text-lg hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Right: Background image */}
          <div className="w-full md:w-1/2">
            <div
              className="w-full h-[400px] bg-cover bg-center rounded-[8px]"
              style={{ backgroundImage: "url(/images/about-carbon.jpeg)" }}
            />
          </div>
        </div>
      </section>

      {/* Section 7: About the Founder & CEO */}
      <section className="w-full py-12 md:py-16">
        <div className="mx-4 md:mx-[60px] py-5 px-4 md:px-6 border-2 border-black">
          <div className="md:w-[56.9%]">
            <h1 className="font-headline font-bold text-[32px] mb-6">
              ABOUT THE FOUNDER & CEO
            </h1>
            <h2 className="font-headline text-[24px] leading-relaxed mb-4" style={{ color: "#000321" }}>
              Kimberly Walsh has over three decades of experience in the activated carbon market, both domestically and internationally. Her career began in 1988 with Atochem NA, a manufacturer of sub-bituminous coal in Pryor, OK, which was later acquired by Norit/Cabot.
            </h2>
            <p className="font-headline text-[24px] leading-relaxed mb-4">
              In 1998, she founded Carbon Resources, which was recognized twice on the Forbes 5000 list of fastest-growing companies. Over 16 years of ownership, she traveled internationally to qualify manufacturers that met the stringent quality control standards she implemented. Her team-focused approach has always centered on delivering exceptional customer service by proactively anticipating client needs.
            </p>
            <p className="font-headline text-[24px] leading-relaxed">
              Beyond her professional achievements, Kimberly enjoys spending time with her husband and family, sailing, traveling, and supporting several local and international non-profits.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Contact Form */}
      <ContactForm />

      <Footer />
    </main>
  );
}
