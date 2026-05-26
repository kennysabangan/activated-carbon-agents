import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="section founder-section">
      <div className="container">
        <div className="founder-grid">
          <div className="founder-text fade-in-left">
            <p className="overline">LEADERSHIP</p>
            <h2 className="headline-lg">About the Founder &amp; CEO</h2>
            <p>
              With over three decades of dedicated service in the activated
              carbon industry, our founder built this company on the principles
              of quality, integrity, and unwavering commitment to customer
              success. Starting from a small operation in 1988, he recognized
              the gap between manufacturers and end-users — and set out to
              bridge it.
            </p>
            <p>
              His deep technical expertise, forged through years of hands-on
              work across water treatment, air purification, and industrial
              processing, has earned the trust of Fortune 500 companies and
              municipal agencies alike. Under his leadership, the company has
              been recognized by Forbes as one of America&apos;s most promising
              companies.
            </p>
            <p>
              Today, he continues to drive innovation in sourcing, quality
              assurance, and customer partnerships — ensuring that every gram
              of activated carbon we deliver meets the highest standards in
              the industry.
            </p>
          </div>
          <div className="founder-image fade-in-right">
            <Image
              src="/images/dark-image.webp"
              alt="Founder portrait"
              width={320}
              height={320}
              style={{ width: "100%", height: "auto", borderRadius: "50%", maxWidth: 320, margin: "0 auto" }}
            />
          </div>
        </div>
        <hr className="founder-divider" />
      </div>
    </section>
  );
}
