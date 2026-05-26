export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="overline">MANUFACTURER DIRECT PRICING</p>
        <h1 className="hero-headline">Quality Activated Carbon</h1>
        <p className="hero-subline">Directly from Manufacturers</p>
        <p className="hero-desc">
          Manufacturer direct pricing backed by decades of experience and
          technical support.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
          <a href="#about" className="btn btn-ghost">
            Learn More
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
