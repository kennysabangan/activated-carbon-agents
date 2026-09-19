import Image from "next/image";
import Link from "next/link";

/**
 * The front panel is the supplied carbon-pour clip, autoplaying silently over
 * the still the original site used as its first frame. The back panel stays a
 * still image: the original screenshot shows granular carbon there, which is
 * not what palms.mp4 contains.
 */
export default function AboutSection() {
  return (
    <section id="activated-carbon" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-in-left">
            <h2 className="section-title">About us</h2>
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
            <video
              className="about-image-front"
              src="/videos/carbon-pour.mp4"
              poster="/images/about-water.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
