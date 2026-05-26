import Image from "next/image";

export default function SourcingSection() {
  return (
    <section className="section sourcing-section">
      <div className="container">
        <div className="sourcing-grid">
          <div className="sourcing-image fade-in-left">
            <Image
              src="/images/globe.png"
              alt="Global sourcing network"
              width={460}
              height={460}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sourcing-text fade-in-right">
            <p className="overline">GLOBAL SOURCING</p>
            <h2 className="headline-lg">Unmatched Quality, Worldwide</h2>
            <p className="body-lg">
              Our global sourcing network ensures access to the highest quality
              activated carbon from trusted manufacturers across multiple
              continents. We maintain rigorous quality standards at every step,
              from raw material selection to final delivery.
            </p>
            <div className="sourcing-features">
              <div className="sourcing-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Wood-based activated carbon
              </div>
              <div className="sourcing-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Coal-based products
              </div>
              <div className="sourcing-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Coconut shell carbon
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
