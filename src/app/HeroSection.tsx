import Link from "next/link";

/**
 * Hero and the "Activated Carbon Agents" intro row share a single full-bleed
 * photo, as on the original site. The intro sits in a translucent panel at
 * the base of the image rather than beneath a rule.
 */
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            Quality Activated Carbon{" "}
            <br className="hero-br" />
            Directly from Manufacturers
          </h1>
          <p className="hero-sub">
            Manufacturer direct pricing backed by decades of experience and
            technical support.
          </p>
          <Link href="/#contact" className="btn btn-light">
            Contact Us
          </Link>
        </div>

        <div className="hero-intro">
          <h2>Activated Carbon Agents</h2>
          <p>
            Activated Carbon Agents has led the activated carbon market for
            decades, sourcing the highest-quality products at the best prices.
            With deep industry expertise, we know which manufacturers deliver
            superior carbon—ensuring full transparency, expert support, and
            unmatched value every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
