export default function TrustBar() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      stat: "30+",
      label: "Years Experience",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      stat: "Global",
      label: "Sourcing Network",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      stat: "100%",
      label: "Quality Guaranteed",
    },
  ];

  return (
    <>
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar-grid">
            {items.map((item, i) => (
              <div key={i} className="trust-item fade-in">
                <div className="trust-icon">{item.icon}</div>
                <div className="trust-stat">{item.stat}</div>
                <div className="trust-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institution Logos Banner */}
      <section className="institutions-bar">
        <div className="container">
          <div className="institutions-grid">
            <div className="institution-logo fade-in">
              <div className="institution-name">ASTM</div>
              <div className="institution-sub">International</div>
              <div className="institution-tagline">Helping our world work better.</div>
            </div>
            <div className="institution-divider" />
            <div className="institution-logo fade-in">
              <div className="institution-name">NSF</div>
              <div className="institution-sub">National Sanitation Foundation</div>
              <div className="institution-sub">International</div>
            </div>
            <div className="institution-divider" />
            <div className="institution-logo fade-in">
              <div className="institution-name">AWWA</div>
              <div className="institution-sub">American Water Works Association</div>
              <div className="institution-tagline">Dedicated to the World&apos;s Most Important Resource.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
