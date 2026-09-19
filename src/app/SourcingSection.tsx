import Image from "next/image";
import Link from "next/link";

export default function SourcingSection() {
  return (
    <section className="section sourcing-section">
      <div className="container">
        <div className="sourcing-grid">
          <div className="sourcing-text fade-in-left">
            <Image
              className="sourcing-icon"
              src="/images/globe.png"
              alt=""
              aria-hidden="true"
              width={58}
              height={58}
            />
            <h2 className="section-title on-dark">
              Global sourcing,
              <br />
              unmatched quality
            </h2>
            <p>
              We have searched the world to find the best manufacturing
              facilities in wood, coal and coconut shell base products. These
              manufacturers have proven over the years to be reliable and
              produce a consistently high quality product. We match the right
              activated carbon for an application with the best manufacturer.
            </p>
            <Link href="/#contact" className="btn btn-light-accent">
              Contact Us
            </Link>
          </div>

          <div className="sourcing-image fade-in-right">
            <Image
              src="/images/about-carbon.jpeg"
              alt="Granular activated carbon"
              width={560}
              height={420}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
