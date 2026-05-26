import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Insights | Activated Carbon Agents",
  description:
    "Articles, guides, and insights on activated carbon — applications, selection, and best practices.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>Resources &amp; Insights</h1>
            <p className="subtitle">
              Guides, articles, and industry knowledge to help you make
              informed decisions.
            </p>
          </div>
        </div>

        <section className="section" style={{ background: "var(--bg-primary)" }}>
          <div className="container">
            <div className="resources-grid">
              <Link
                href="/resources/b/what-is-activated-carbon"
                className="resource-card fade-in"
              >
                <Image
                  src="/images/about-water.webp"
                  alt="What is activated carbon"
                  width={400}
                  height={220}
                  className="resource-card-image"
                />
                <div className="resource-card-body">
                  <span className="resource-card-tag">Guide</span>
                  <h3>What is Activated Carbon?</h3>
                  <p>
                    A comprehensive overview of activated carbon — what it is,
                    how it&apos;s made, and why it matters for water treatment,
                    air purification, and industrial processes.
                  </p>
                  <div className="resource-card-meta">
                    <span>5 min read</span>
                    <span>•</span>
                    <span>May 2026</span>
                  </div>
                  <span className="resource-card-link">
                    Read More{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Animations />
    </>
  );
}
