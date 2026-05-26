export default function ProductsSection() {
  const products = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      title: "Water Treatment",
      desc: "Remove contaminants, chlorine, and organic compounds from municipal and industrial water supplies with our high-performance granular and powdered activated carbon.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 0-7.35 16.76C6.23 16.39 9 15 12 15s5.77 1.39 7.35 3.76A10 10 0 0 0 12 2z" />
          <circle cx="12" cy="7" r="3" />
        </svg>
      ),
      title: "Air Purification",
      desc: "Control volatile organic compounds, odors, and hazardous gases in commercial HVAC systems, industrial exhaust, and emission control applications.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Industrial Processing",
      desc: "Specialized activated carbon solutions for gold recovery, food and beverage processing, pharmaceutical manufacturing, and chemical purification.",
    },
  ];

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <p className="overline">PRODUCTS</p>
        <h2 className="headline-lg">
          The Right Carbon for Every Application
        </h2>
        <div className="products-grid">
          {products.map((p, i) => (
            <div key={i} className="product-card fade-in">
              <div className="product-card-icon">{p.icon}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
