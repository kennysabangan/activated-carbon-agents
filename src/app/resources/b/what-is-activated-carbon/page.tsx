import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "What is Activated Carbon? - Activated Carbon Agents",
  description: "A comprehensive guide to activated carbon: what it is, how it's made, its types, and its many applications in water treatment, air purification, and industry.",
};

export default function WhatIsActivatedCarbon() {
  return (
    <main>
      <Header />

      <article className="article-content">
        <div className="article-meta">
          Activated Carbon &nbsp;·&nbsp; January 15, 2025 &nbsp;·&nbsp; 4 min read
        </div>

        <h1>What is Activated Carbon?</h1>

        <p>
          Activated carbon, also known as activated charcoal, is a form of carbon that has been processed to create millions of tiny pores between its atoms. These pores dramatically increase the surface area of the carbon, giving it extraordinary adsorption capabilities. Just one gram of activated carbon can have a surface area exceeding 3,000 square meters.
        </p>

        <h2>How is it Made?</h2>
        <p>
          Activated carbon is produced from carbon-rich source materials such as coconut shells, wood, coal, and peat. The production process involves two main stages: carbonization and activation.
        </p>
        <p>
          <strong>Carbonization</strong> is the process of heating the raw material in an inert atmosphere (without oxygen) at temperatures between 400–600°C. This drives off most of the non-carbon elements, leaving behind a carbon skeleton.
        </p>
        <p>
          <strong>Activation</strong> follows carbonization and involves exposing the carbonized material to oxidizing gases (such as steam or carbon dioxide) at high temperatures (800–1100°C). This process opens up the pore structure and develops the internal surface area.
        </p>

        <h2>Types of Activated Carbon</h2>
        <p>
          <strong>Granular Activated Carbon (GAC)</strong> — irregular-shaped particles with sizes ranging from 0.2 to 5 mm. GAC is widely used in water treatment, air purification, and solvent recovery applications.
        </p>
        <p>
          <strong>Powdered Activated Carbon (PAC)</strong> — finely ground carbon particles, mostly smaller than 0.18 mm. PAC is typically used in batch processes, such as municipal water treatment and food processing.
        </p>
        <p>
          <strong>Pelletized Activated Carbon</strong> — extruded cylindrical pellets with diameters between 0.8 and 5 mm. These offer low pressure drop and high mechanical strength, making them ideal for gas phase applications.
        </p>

        <h2>Applications</h2>
        <p>
          The unique properties of activated carbon make it invaluable across numerous industries:
        </p>
        <ul>
          <li><strong>Water Treatment:</strong> Removing organic contaminants, chlorine, taste, and odor from drinking water</li>
          <li><strong>Air Purification:</strong> Capturing volatile organic compounds (VOCs) and hazardous air pollutants</li>
          <li><strong>Food & Beverage:</strong> Decolorizing and purifying sugar, edible oils, and alcoholic beverages</li>
          <li><strong>Gold Recovery:</strong> Extracting precious metals from mining operations</li>
          <li><strong>Medical:</strong> Poison treatment, wound care, and gastrointestinal decontamination</li>
          <li><strong>Industrial:</strong> Solvent recovery, chemical purification, and environmental remediation</li>
        </ul>

        <h2>Choosing the Right Activated Carbon</h2>
        <p>
          Selecting the appropriate activated carbon depends on several factors, including the specific application, the contaminants to be removed, operating conditions, and budget considerations. Our team at Activated Carbon Agents has decades of experience matching clients with the optimal product for their needs.
        </p>
        <p>
          Contact us today to discuss your activated carbon requirements and receive manufacturer direct pricing.
        </p>
      </article>

      <Footer />
    </main>
  );
}
