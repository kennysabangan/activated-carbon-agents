import Image from "next/image";

/**
 * Standards bodies the company's carbon is tested against — the real
 * association marks shipped with the original site.
 *
 * These three lockups have very different proportions (ASTM is a wide
 * horizontal strip at ~5:1, AWWA is a stacked block at ~2.2:1), so a shared
 * max-height makes ASTM tower over the others. The original balances them by
 * width instead, which is what `width` below sets; height follows from each
 * file's own aspect ratio.
 *
 * Stacked on phones, equal width is wrong too: the eye judges size by ink,
 * not by bounding box, and at the same width NSF's solid disc carries 2.6x
 * the ink of ASTM's line-art (measured: 94,407 vs 36,300 ink pixels at
 * 1000px wide; AWWA 71,713). Ink scales with width squared, so `mobileWidth`
 * sets widths in the ratio of sqrt(ink), lightly tempered so NSF's small
 * text stays legible. Rendered result is within +-18% visual mass across
 * the three. Percentages of the panel so the ratio holds at 360px.
 */
const INSTITUTIONS = [
  {
    src: "/images/astm-international.svg",
    alt: "ASTM International",
    intrinsic: [342, 68],
    width: 280,
    mobileWidth: "100%",
  },
  {
    src: "/images/nsf-international.png",
    alt: "NSF International",
    intrinsic: [1707, 585],
    width: 215,
    mobileWidth: "68%",
  },
  {
    src: "/images/awwa.webp",
    alt: "American Water Works Association",
    intrinsic: [330, 147],
    width: 205,
    mobileWidth: "79%",
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
              style={
                {
                  "--logo-w": `${logo.width}px`,
                  "--logo-w-sm": logo.mobileWidth,
                } as React.CSSProperties
              }
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
