import Link from "next/link";

/**
 * Hero and the intro paragraph share a single full-bleed photo, as on the
 * original site. The intro sits in a translucent panel at the base of the
 * image, leading with the company name in bold and running on from it.
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
          <p>
            <strong>Activated Carbon Agents</strong> has led the activated
            carbon market for decades, sourcing the highest-quality products at
            the best prices. With deep industry expertise, we know which
            manufacturers deliver superior carbon—ensuring full transparency,
            expert support, and unmatched value every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
