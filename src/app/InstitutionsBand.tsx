import Image from "next/image";

/**
 * Standards bodies the company's carbon is tested against — the real
 * association marks shipped with the original site.
 *
 * These three lockups have very different proportions (ASTM is a wide
 * horizontal strip at ~5:1, AWWA is a stacked block at ~2.2:1), so a shared
 * max-height makes ASTM tower over the others. The original balances them by
 * width instead, which is what `width` below sets; height follows from each
 * file's own aspect ratio. On phones, where they stack, the CSS overrides
 * this with one shared width and a common left edge.
 */
const INSTITUTIONS = [
  {
    src: "/images/astm-international.svg",
    alt: "ASTM International",
    intrinsic: [342, 68],
    width: 280,
  },
  {
    src: "/images/nsf-international.png",
    alt: "NSF International",
    intrinsic: [1707, 585],
    width: 215,
  },
  {
    src: "/images/awwa.webp",
    alt: "American Water Works Association",
    intrinsic: [330, 147],
    width: 205,
  },
];

export default function InstitutionsBand() {
  return (
    <section className="institutions">
      <div className="container">
        <div className="institutions-panel fade-in">
          {INSTITUTIONS.map((logo) => (
            <div
              className="institution-logo"
              key={logo.alt}
              // On the wrapper, not the img, so the phone media query can
              // override the img width: an inline value on the img itself
              // would beat the stylesheet.
              style={{ "--logo-w": `${logo.width}px` } as React.CSSProperties}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.intrinsic[0]}
                height={logo.intrinsic[1]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
