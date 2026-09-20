import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";
import JsonLd from "@/components/JsonLd";
import { APPLICATIONS } from "@/lib/applications";
import { breadcrumbSchema } from "@/lib/schema";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Activated Carbon Applications | Water, Air & Industrial",
  description:
    "Activated carbon for water treatment, air purification and industrial processing. Wood-, coal- and coconut-shell-based products at manufacturer direct pricing.",
  alternates: { canonical: canonical("/activated-carbon") },
};

export default function ActivatedCarbonPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Activated Carbon", path: "/activated-carbon" },
        ])}
      />
      <Header />
      <main>
        <div className="page-hero">
          <div className="container">
            <h1>Activated Carbon</h1>
            <p className="subtitle">
              The right carbon for the application — matched to the contaminant,
              the process and the specification you run to.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="prose-narrow fade-in">
              <p>
                Activated carbon is not a single product. Pore structure, base
                material, particle size and hardness all vary by grade, and the
                grade that performs in one application can fail in another. We
                source wood-, coal- and coconut-shell-based products and match
                them to the application, at manufacturer direct pricing.
              </p>
            </div>

            <div className="app-grid">
              {APPLICATIONS.map((app) => (
                <Link
                  key={app.slug}
                  href={`/activated-carbon/${app.slug}`}
                  className="app-card fade-in"
                >
                  <h2>{app.nav}</h2>
                  <p>{app.summary}</p>
                  <span className="app-card-link">
                    Read more <span aria-hidden="true">&#10142;</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="prose-narrow fade-in" style={{ marginTop: "56px" }}>
              <p>
                Not sure which grade fits? Send us the water analysis, the air
                stream detail or the process specification and we will talk it
                through before anything is quoted.{" "}
                <Link href="/#contact" className="inline-link">
                  Get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Animations />
    </>
  );
}
