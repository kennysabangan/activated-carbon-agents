import Image from "next/image";

export default function SourcingSection() {
  return (
    <section className="section sourcing-section">
      <div className="container">
        <div className="sourcing-grid">
          <div className="sourcing-image fade-in-left">
            <Image
              src="/images/globe-network.webp"
              alt="Global sourcing network"
              width={520}
              height={520}
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="sourcing-text fade-in-right">
            <p className="overline">Global Sourcing</p>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="materials-band fade-in">
          <Image
            src="/images/materials-trio.webp"
            alt="Raw materials: coconut shell, coal, and wood"
            width={1800}
            height={1013}
            sizes="(max-width: 1200px) 100vw, 1152px"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="materials-caption">
            <span>Coconut Shell</span>
            <span className="materials-dot" />
            <span>Coal</span>
            <span className="materials-dot" />
            <span>Wood</span>
          </div>
        </div>
      </div>
    </section>
  );
}
