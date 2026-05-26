import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Resources - Activated Carbon Agents",
  description: "Educational resources and articles about activated carbon, its uses, and industry insights.",
};

export default function ResourcesPage() {
  return (
    <main>
      <Header />

      <section className="page-content">
        <h1>Resources</h1>
        <p style={{ marginBottom: "48px" }}>
          Explore our collection of articles and guides about activated carbon and its many applications.
        </p>

        {/* Blog Card */}
        <div className="blog-card">
          <div className="blog-card-inner">
            <span className="card-meta">Activated Carbon</span>
            <span className="card-meta" style={{ marginLeft: "16px" }}>January 15, 2025</span>
            <span className="card-meta" style={{ marginLeft: "16px" }}>4 min read</span>
            <h2>
              <Link href="/resources/b/what-is-activated-carbon">
                What is Activated Carbon?
              </Link>
            </h2>
            <p>
              Activated carbon is a form of carbon processed to have small, low-volume pores that increase the surface area available for adsorption or chemical reactions. Learn about its types, manufacturing process, and wide-ranging applications.
            </p>
            <Link href="/resources/b/what-is-activated-carbon" className="read-more">
              Read More →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
