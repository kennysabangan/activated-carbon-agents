import Image from "next/image";

/**
 * Standards bodies the company's carbon is tested against. These are the
 * real association marks shipped with the original site.
 */
const INSTITUTIONS = [
  { src: "/images/astm-international.svg", alt: "ASTM International", width: 342, height: 68 },
  { src: "/images/nsf-international.png", alt: "NSF International", width: 279, height: 99 },
  { src: "/images/awwa.webp", alt: "American Water Works Association", width: 330, height: 150 },
];

export default function InstitutionsBand() {
  return (
    <section className="institutions">
      <div className="container">
        <div className="institutions-panel fade-in">
          {INSTITUTIONS.map((logo) => (
            <div className="institution-logo" key={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
