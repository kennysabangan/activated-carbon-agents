import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      image: "/images/product-water.webp",
      title: "Water Treatment",
      desc: "Remove contaminants, chlorine, and organic compounds from municipal and industrial water supplies with our high-performance granular and powdered activated carbon.",
    },
    {
      image: "/images/product-air.webp",
      title: "Air Purification",
      desc: "Control volatile organic compounds, odors, and hazardous gases in commercial HVAC systems, industrial exhaust, and emission control applications.",
    },
    {
      image: "/images/product-gold.webp",
      title: "Industrial Processing",
      desc: "Specialized activated carbon solutions for gold recovery, food and beverage processing, pharmaceutical manufacturing, and chemical purification.",
    },
  ];

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <p className="overline">Products</p>
        <h2 className="headline-lg">
          The Right Carbon for Every Application
        </h2>
        <div className="products-grid">
          {products.map((p, i) => (
            <div
              key={i}
              className="product-card fade-in"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="product-card-image">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1000}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="product-card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#contact" className="product-card-link">
                  Learn More{" "}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
