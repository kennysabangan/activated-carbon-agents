import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-in-left">
            <p className="overline">About Us</p>
            <h2 className="headline-lg">
              Decades of Expertise in Activated Carbon
            </h2>
            <p className="body-lg">
              We&apos;ve been at the forefront of the activated carbon industry for
              over three decades. Our commitment to quality, reliability, and
              customer satisfaction has made us a trusted partner for businesses
              worldwide. From water treatment plants to industrial
              manufacturers, we deliver solutions that meet the highest
              standards.
            </p>
            <p className="body-lg" style={{ marginBottom: 32 }}>
              As a Forbes 5000 recognized company, we combine deep technical
              expertise with global sourcing capabilities to provide
              manufacturer direct pricing — eliminating middlemen and passing
              the savings directly to our customers.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="about-image-wrapper fade-in-right">
            <div className="image-frame">
              <Image
                src="/images/about-carbon-pour.webp"
                alt="Activated carbon pellets in motion"
                width={700}
                height={525}
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="about-badge">
              <div className="about-badge-title">Since 1988</div>
              <div className="about-badge-sub">Industry Leader</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
