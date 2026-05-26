import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-bg" />
          <div className="hero-content">
            <h1>Quality Activated Carbon</h1>
            <p className="subtitle">Directly from Manufacturers</p>
            <p className="sub-heading">
              Manufacturer direct pricing backed by decades of experience and technical support.
            </p>
            <Link href="/#contact" className="contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro (2 columns, desktop only) */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <div className="about-intro-left">
            <h2>Activated Carbon Agents</h2>
          </div>
          <div className="about-intro-right">
            <p>
              With decades of experience in the activated carbon industry, we provide high-quality products at manufacturer direct pricing. Our team is dedicated to understanding your specific needs and delivering solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* About Us / Mission */}
      <section className="mission">
        <div className="mission-inner">
          {/* Left: Text */}
          <div className="mission-text">
            <h1>ABOUT US</h1>
            <p className="sub-heading">
              Our mission at Activated Carbon Agents is simple: to provide high-quality products and outstanding customer service at manufacturer direct pricing. Our team goes above and beyond to cater to each client&apos;s specific needs. For more information or general inquiries, get in touch today.
            </p>
            <Link href="/#contact" className="contact-btn">
              Contact Us
            </Link>
          </div>

          {/* Middle: Carbon image */}
          <div className="mission-image-mid" />

          {/* Right: Water image */}
          <div className="mission-image-right" />
        </div>
      </section>

      {/* Image Row (desktop only) */}
      <section className="image-row">
        <div className="image-row-inner">
          <Image src="/images/svg-accent.svg" alt="Accent" width={400} height={300} />
          <Image src="/images/blue-logo.png" alt="Blue Logo" width={400} height={300} />
          <Image src="/images/dark-image.webp" alt="Dark Image" width={400} height={300} />
        </div>
      </section>

      {/* Global Sourcing */}
      <section className="global-sourcing">
        <div className="global-sourcing-inner">
          {/* Left: Text */}
          <div className="global-sourcing-text">
            <Image
              src="/images/globe.png"
              alt="Globe"
              width={120}
              height={120}
              className="globe"
            />
            <h1>GLOBAL SOURCING,</h1>
            <h1>UNMATCHED QUALITY</h1>
            <p className="sub-heading">
              We source activated carbon from the best manufacturers around the world, ensuring every product meets the highest quality standards. Our global network allows us to offer competitive pricing without compromising on quality.
            </p>
            <Link href="/#contact" className="contact-btn">
              Contact Us
            </Link>
          </div>

          {/* Right: Background image */}
          <div className="global-sourcing-image" />
        </div>
      </section>

      {/* Founder */}
      <section className="founder">
        <div className="founder-inner">
          <div className="founder-border">
            <div className="founder-content">
              <h1>ABOUT THE FOUNDER & CEO</h1>
              <h2>
                Kimberly Walsh has over three decades of experience in the activated carbon market, both domestically and internationally. Her career began in 1988 with Atochem NA, a manufacturer of sub-bituminous coal in Pryor, OK, which was later acquired by Norit/Cabot.
              </h2>
              <p>
                In 1998, she founded Carbon Resources, which was recognized twice on the Forbes 5000 list of fastest-growing companies. Over 16 years of ownership, she traveled internationally to qualify manufacturers that met the stringent quality control standards she implemented. Her team-focused approach has always centered on delivering exceptional customer service by proactively anticipating client needs.
              </p>
              <p>
                Beyond her professional achievements, Kimberly enjoys spending time with her husband and family, sailing, traveling, and supporting several local and international non-profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </main>
  );
}
