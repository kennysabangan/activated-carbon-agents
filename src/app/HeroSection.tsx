import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="/images/hero-carbon.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={82}
        className="hero-bg-img"
      />
      <div className="hero-overlay" />
      <div className="hero-glow" />
      <div className="hero-content">
        <p className="overline overline-framed">Manufacturer Direct Pricing</p>
        <h1 className="hero-headline">
          Quality <span className="text-copper">Activated Carbon</span>
        </h1>
        <p className="hero-subline">Directly from Manufacturers</p>
        <p className="hero-desc">
          Manufacturer direct pricing backed by decades of experience and
          technical support.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#about" className="btn btn-ghost">
            Learn More
          </a>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
      </div>
    </section>
  );
}
