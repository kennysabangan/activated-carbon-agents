import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";
import JsonLd from "@/components/JsonLd";
import { APPLICATIONS, getApplication } from "@/lib/applications";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { canonical, SITE_NAME } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return APPLICATIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) return {};

  const url = canonical(`/activated-carbon/${app.slug}`);
  return {
    title: app.metaTitle,
    description: app.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: app.metaTitle,
      description: app.metaDescription,
      url,
      type: "website",
      siteName: SITE_NAME,
      // A page-level openGraph block replaces the parent's rather than
      // merging, so the image has to be repeated here.
      images: [{ url: "/images/hero-bg.jpeg", width: 1200, height: 630, alt: app.title }],
    },
  };
}

export default async function ApplicationPage({ params }: Params) {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) notFound();

  const path = `/activated-carbon/${app.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Activated Carbon", path: "/activated-carbon" },
          { name: app.nav, path },
        ])}
      />
      <JsonLd data={serviceSchema(app.title, app.metaDescription, path)} />
      <JsonLd data={faqSchema(app.faqs)} />

      <Header />
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>{app.title}</h1>
            <p className="subtitle">{app.summary}</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/activated-carbon">Activated Carbon</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{app.nav}</span>
            </nav>

            <article className="prose-narrow fade-in">
              {app.intro.map((p, i) => (
                <p key={i} className="lead">
                  {p}
                </p>
              ))}

              {app.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {section.bullets && (
                    <dl className="spec-list">
                      {section.bullets.map((b) => (
                        <div key={b.term}>
                          <dt>{b.term}</dt>
                          <dd>{b.detail}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </section>
              ))}

              <section>
                <h2>Common questions</h2>
                {app.faqs.map((f) => (
                  <div key={f.q} className="faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </section>

              <div className="page-cta">
                <p>
                  Tell us what you are treating and we will match the grade
                  before quoting.
                </p>
                <Link href="/#contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>

              <nav className="sibling-links" aria-label="Other applications">
                {APPLICATIONS.filter((a) => a.slug !== app.slug).map((a) => (
                  <Link key={a.slug} href={`/activated-carbon/${a.slug}`}>
                    {a.nav} <span aria-hidden="true">&#10142;</span>
                  </Link>
                ))}
              </nav>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <Animations />
    </>
  );
}
