import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export const metadata: Metadata = {
  title: "What is Activated Carbon? | Activated Carbon Agents",
  description:
    "A comprehensive guide to activated carbon — what it is, how it's manufactured, and its key applications in water treatment, air purification, and industrial processes.",
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <div className="article-page">
          <div className="article-container">
            <div className="article-meta fade-in">
              <span className="resource-card-tag">Guide</span>
              <span style={{ color: "var(--text-muted)", fontSize: 14 }}>
                May 2026 &middot; 5 min read
              </span>
            </div>

            <h1 className="fade-in">What is Activated Carbon?</h1>

            <div className="fade-in">
              <p>
                Activated carbon is a form of carbon processed to have small,
                low-volume pores that increase the surface area available for
                adsorption or chemical reactions. Due to its high degree of
                microporosity, just one gram of activated carbon has a surface
                area in excess of 3,000 m² — roughly the size of half a
                football field.
              </p>

              <h2>How is Activated Carbon Made?</h2>
              <p>
                Activated carbon is produced from carbonaceous source materials
                such as wood, coconut shells, and coal. The production process
                involves two main steps:
              </p>
              <ul>
                <li>
                  <strong>Carbonization:</strong> The raw material is heated in
                  an inert atmosphere at temperatures between 400–700°C to
                  drive off most of the non-carbon elements.
                </li>
                <li>
                  <strong>Activation:</strong> The carbonized material is then
                  exposed to an oxidizing agent (steam or carbon dioxide) at
                  high temperatures, which creates the internal pore structure.
                </li>
              </ul>

              <h2>Types of Activated Carbon</h2>
              <h3>Granular Activated Carbon (GAC)</h3>
              <p>
                GAC particles range from 0.2 to 5 mm in size. It is commonly
                used in continuous flow water treatment systems and can be
                reactivated and reused multiple times.
              </p>

              <h3>Powdered Activated Carbon (PAC)</h3>
              <p>
                PAC consists of finely ground particles, typically smaller than
                0.18 mm. It is added directly to water treatment processes and
                is particularly effective for seasonal taste and odor removal.
              </p>

              <h3>Extruded / Pelletized Activated Carbon</h3>
              <p>
                These are cylindrical pellets with diameters of 1–5 mm,
                primarily used in gas phase applications such as air
                purification and solvent recovery due to their low pressure drop
                and high mechanical strength.
              </p>

              <h2>Key Applications</h2>
              <p>
                Activated carbon is one of the most versatile adsorbents
                available, with applications spanning virtually every industry:
              </p>
              <ul>
                <li>
                  <strong>Water Treatment:</strong> Removal of chlorine,
                  organic compounds, taste, odor, and micropollutants from
                  drinking water and wastewater.
                </li>
                <li>
                  <strong>Air Purification:</strong> Control of VOCs, hydrogen
                  sulfide, and other gaseous contaminants in industrial and
                  commercial settings.
                </li>
                <li>
                  <strong>Gold Recovery:</strong> Used in carbon-in-pulp and
                  carbon-in-leach processes for extracting gold from ore.
                </li>
                <li>
                  <strong>Food &amp; Beverage:</strong> Decolorization and
                  purification of sugar, edible oils, and alcoholic beverages.
                </li>
                <li>
                  <strong>Pharmaceutical:</strong> Purification of active
                  pharmaceutical ingredients and removal of contaminants from
                  drug formulations.
                </li>
              </ul>

              <h2>Choosing the Right Activated Carbon</h2>
              <p>
                Selecting the appropriate activated carbon depends on several
                factors, including the specific contaminants to be removed, the
                operating conditions (pH, temperature, contact time), and the
                physical form required by the application. Working with an
                experienced supplier ensures you get a product optimized for
                your needs.
              </p>

              <blockquote>
                &ldquo;The right activated carbon isn&apos;t just about
                specifications — it&apos;s about understanding your water, your
                process, and your goals.&rdquo;
              </blockquote>

              <p>
                At Activated Carbon Agents, we provide technical guidance to
                help you select the optimal product from our global sourcing
                network. Contact us today to discuss your requirements.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Animations />
    </>
  );
}
