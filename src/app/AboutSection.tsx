import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="activated-carbon" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-in-left">
            <h2>ABOUT US</h2>
            <p>
              Our mission at Activated Carbon Agents is simple: to provide
              high-quality products and outstanding customer service at
              manufacturer direct pricing. Our team goes above and beyond to
              cater to each client&apos;s specific needs. For more information
              or general inquiries, get in touch today.
            </p>
            <Link href="/#contact" className="link-arrow">
              Contact Us <span aria-hidden="true">&#10142;</span>
            </Link>
          </div>

          <div className="about-images fade-in-right">
            <Image
              className="about-image-back"
              src="/images/about-carbon.jpeg"
              alt="Granular activated carbon"
              width={440}
              height={560}
            />
            <Image
              className="about-image-front"
              src="/images/about-water.webp"
              alt="Activated carbon pellets held in a hand"
              width={440}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
