/**
 * Application pages — the commercial-intent content.
 *
 * Copy discipline: the technical material here is general, verifiable
 * activated-carbon industry fact (adsorption mechanisms, standard grades and
 * the ASTM/AWWA parameters buyers specify by). Company-specific claims are
 * limited to what the client's own site already states: manufacturer direct
 * pricing, a global sourcing network, decades of experience, and wood-, coal-
 * and coconut-shell-based products. No performance figures, certifications or
 * customer names are attributed to the business.
 */

export type Faq = { q: string; a: string };

export type ApplicationSection = {
  heading: string;
  body: string[];
  bullets?: { term: string; detail: string }[];
};

export type Application = {
  slug: string;
  nav: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  sections: ApplicationSection[];
  faqs: Faq[];
};

export const APPLICATIONS: Application[] = [
  {
    slug: "water-treatment",
    nav: "Water Treatment",
    title: "Activated Carbon for Water Treatment",
    metaTitle: "Activated Carbon for Water Treatment | Manufacturer Direct",
    metaDescription:
      "Granular and powdered activated carbon for municipal and industrial water treatment — taste and odour control, dechlorination and organics removal, at manufacturer direct pricing.",
    summary:
      "Granular and powdered grades for municipal drinking water, wastewater polishing and industrial process water.",
    intro: [
      "Activated carbon is one of the most widely used technologies in drinking water and process water treatment. Its extremely high internal surface area adsorbs dissolved organic compounds that conventional coagulation and filtration leave behind — the compounds responsible for taste, odour, colour and many regulated contaminants.",
      "We supply both granular and powdered grades from the manufacturers we have qualified, at manufacturer direct pricing. Which grade suits a plant depends on the contaminant, the contact time available and the existing filter configuration.",
    ],
    sections: [
      {
        heading: "What activated carbon removes from water",
        body: [
          "In municipal drinking water, activated carbon is most often specified for taste and odour episodes, for dechlorination ahead of membranes or ion exchange, and for reducing the dissolved organic carbon that forms disinfection by-products downstream.",
        ],
        bullets: [
          {
            term: "Taste and odour compounds",
            detail:
              "Geosmin and 2-methylisoborneol (MIB), the earthy-musty compounds produced during algal blooms, are detectable at nanogram-per-litre levels and are adsorbed effectively by carbon.",
          },
          {
            term: "Chlorine and chloramine",
            detail:
              "Carbon dechlorinates by catalytic reduction rather than adsorption, which is why it is standard pre-treatment ahead of reverse osmosis membranes that chlorine would damage.",
          },
          {
            term: "Disinfection by-product precursors",
            detail:
              "Removing natural organic matter before disinfection reduces formation of trihalomethanes and haloacetic acids.",
          },
          {
            term: "Synthetic organic compounds",
            detail:
              "Pesticides, herbicides, industrial solvents and a range of trace organics adsorb well onto properly selected grades.",
          },
        ],
      },
      {
        heading: "Granular vs. powdered",
        body: [
          "Granular activated carbon (GAC) is used in fixed beds — either as a post-filter contactor or as a replacement for sand in existing filters. It runs continuously for months to years and can often be reactivated rather than replaced, which matters to operating cost at scale.",
          "Powdered activated carbon (PAC) is dosed directly into the water and removed with the sludge. Because it is added only when needed, it suits seasonal problems such as an algal bloom, and it requires no capital work to start using.",
        ],
      },
      {
        heading: "How buyers specify it",
        body: [
          "Water treatment carbon is normally bought against measurable parameters rather than by brand. The ones that appear on most specifications are:",
        ],
        bullets: [
          {
            term: "Iodine number",
            detail:
              "A measure of micropore volume, and the most common single indicator of capacity for small molecules.",
          },
          {
            term: "Mesh size",
            detail:
              "Controls pressure drop and the rate of adsorption. 8x30 and 12x40 are common in water service.",
          },
          {
            term: "Apparent density",
            detail:
              "Determines how much carbon a vessel of a given volume holds, and therefore bed life.",
          },
          {
            term: "Abrasion number",
            detail:
              "Predicts how well the carbon survives backwashing, transport and reactivation.",
          },
        ],
      },
      {
        heading: "Choosing a base material",
        body: [
          "We source wood-, coal- and coconut-shell-based products. Coconut shell carbon is highly microporous and performs well on small molecules such as chlorine and light organics. Bituminous coal-based carbon carries a broader pore distribution that suits mixed organic loads and is widely used in municipal contactors. Wood-based carbon is more mesoporous, which favours larger molecules and colour bodies.",
          "Matching the base material to the contaminant is the single decision with the largest effect on bed life. We are glad to talk through a specific water analysis before anything is quoted.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between GAC and PAC?",
        a: "Granular activated carbon (GAC) sits in a fixed bed and treats water continuously for months or years, and can often be reactivated. Powdered activated carbon (PAC) is dosed into the water and removed with the sludge, which suits intermittent problems such as seasonal taste and odour episodes and needs no capital work to begin.",
      },
      {
        q: "Does activated carbon remove chlorine?",
        a: "Yes. Carbon removes free chlorine by catalytic reduction rather than by adsorption, converting it to chloride. This is why activated carbon is standard pre-treatment ahead of reverse osmosis membranes and ion exchange resins that chlorine would otherwise damage.",
      },
      {
        q: "Which carbon is best for taste and odour?",
        a: "Taste and odour compounds such as geosmin and MIB are small molecules, so highly microporous carbons — typically coconut shell or a suitable bituminous grade — are usually specified. The right choice depends on what else is in the water, since competing organic matter occupies the same pores.",
      },
      {
        q: "Can spent water treatment carbon be reactivated?",
        a: "Granular carbon can often be thermally reactivated and returned to service, which reduces both cost and waste compared with replacement. Whether it is practical depends on the contaminants adsorbed and the volume involved.",
      },
    ],
  },
  {
    slug: "air-purification",
    nav: "Air Purification",
    title: "Activated Carbon for Air Purification",
    metaTitle: "Activated Carbon for Air & Gas Purification | Manufacturer Direct",
    metaDescription:
      "Granular and pelletized activated carbon for VOC control, odour abatement and emission control in HVAC and industrial exhaust — manufacturer direct pricing and technical support.",
    summary:
      "Granular and pelletized grades for VOC abatement, odour control and industrial emission treatment.",
    intro: [
      "Gas-phase activated carbon is used wherever an air stream carries organic vapours or odorous compounds that must be captured before discharge or recirculation. The same adsorption mechanism applies as in water, but the grades, the pore structure and the way performance is measured all differ.",
      "Applications run from commercial HVAC filtration through solvent recovery to industrial emission control and odour abatement at wastewater and waste handling facilities.",
    ],
    sections: [
      {
        heading: "Where gas-phase carbon is used",
        body: [
          "The common thread is a contaminant present at low concentration in a large volume of air, where adsorption is more practical than combustion or scrubbing.",
        ],
        bullets: [
          {
            term: "Volatile organic compounds",
            detail:
              "Solvent vapours from coating, printing and chemical handling operations, captured either for emission compliance or for recovery and reuse.",
          },
          {
            term: "Odour control",
            detail:
              "Hydrogen sulphide, mercaptans and amines at wastewater plants, pump stations, composting sites and rendering operations.",
          },
          {
            term: "HVAC and indoor air",
            detail:
              "Removal of outdoor pollutants and indoor-generated organics in commercial buildings, often in combination with particulate filtration.",
          },
          {
            term: "Process and exhaust streams",
            detail:
              "Industrial emission control where a stack must meet a discharge limit.",
          },
        ],
      },
      {
        heading: "How gas-phase performance is measured",
        body: [
          "Gas-phase carbon is specified against different parameters from water-grade carbon. Buying a water grade for an air application, or the reverse, is a common and expensive mistake.",
        ],
        bullets: [
          {
            term: "Carbon tetrachloride (CTC) activity",
            detail:
              "The conventional measure of gas-phase adsorption capacity, reported as a percentage by weight.",
          },
          {
            term: "Butane activity and butane working capacity",
            detail:
              "Used where the carbon will be regenerated in service, since working capacity reflects what is usable across repeated cycles rather than total capacity.",
          },
          {
            term: "Hardness and particle size",
            detail:
              "Determine pressure drop across the bed and resistance to attrition in high-velocity streams.",
          },
        ],
      },
      {
        heading: "Granular, pelletized and impregnated grades",
        body: [
          "Pelletized carbon offers a uniform shape and lower pressure drop, which matters when a fan has to push large volumes through a deep bed continuously. Granular grades are common in lighter-duty and filter-frame applications.",
          "Some compounds — hydrogen sulphide and certain acid gases among them — are handled far better by carbons impregnated with a reactive agent than by plain carbon, because the contaminant is chemically converted rather than simply held. Where an odour problem is dominated by one known compound, it is worth identifying it before selecting a grade.",
        ],
      },
      {
        heading: "Humidity and service life",
        body: [
          "Gas-phase beds are sensitive to relative humidity in a way water-phase beds obviously are not. Above roughly 50% relative humidity, water vapour begins to compete for pore volume and capacity for the target compound falls. Where a stream is close to saturation, conditioning the air or selecting a grade tolerant of moisture makes a substantial difference to bed life.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can water treatment carbon be used for air purification?",
        a: "It is not advisable. Gas-phase and liquid-phase carbons are specified against different parameters — CTC or butane activity for air, iodine number for water — and are optimised for different pore structures and particle sizes. A water grade in an air application typically delivers poor capacity and excessive pressure drop.",
      },
      {
        q: "How does humidity affect activated carbon in air service?",
        a: "Water vapour competes with the target compound for pore volume. Above roughly 50% relative humidity, capacity begins to fall, and in near-saturated streams the reduction can be severe. Conditioning the air or selecting a moisture-tolerant grade helps preserve bed life.",
      },
      {
        q: "What removes hydrogen sulphide odour?",
        a: "Hydrogen sulphide is usually handled with an impregnated carbon, which converts the compound chemically rather than relying on physical adsorption alone. Plain carbon has comparatively limited capacity for it, so identifying the dominant compound before selecting a grade matters.",
      },
      {
        q: "What shape of carbon gives the lowest pressure drop?",
        a: "Pelletized carbon, because of its uniform shape and packing, generally produces a lower pressure drop than granular material of comparable size. That becomes important in deep beds and high-volume continuous systems where fan energy is a running cost.",
      },
    ],
  },
  {
    slug: "industrial-processing",
    nav: "Industrial Processing",
    title: "Activated Carbon for Industrial Processing",
    metaTitle: "Activated Carbon for Industrial Processing | Manufacturer Direct",
    metaDescription:
      "Activated carbon for gold recovery, food and beverage decolourisation, and chemical and pharmaceutical purification — manufacturer direct pricing with technical support.",
    summary:
      "Grades for gold recovery, food and beverage decolourisation, and chemical and pharmaceutical purification.",
    intro: [
      "Beyond water and air, activated carbon is a process material in its own right — used to recover a valuable product, to remove colour from a stream, or to purify an intermediate before the next step. These applications tend to have tighter specifications than environmental ones, because the carbon is in contact with a product rather than a waste stream.",
      "The grades differ sharply between applications, and so do the properties that matter. Hardness dominates in gold recovery; pore structure dominates in decolourisation.",
    ],
    sections: [
      {
        heading: "Gold recovery",
        body: [
          "In carbon-in-pulp, carbon-in-leach and carbon-in-column circuits, activated carbon adsorbs the gold cyanide complex from the leach slurry and is then stripped and reactivated for reuse. Because the carbon is moved, screened and abraded against slurry continuously, mechanical durability determines how much is lost per cycle.",
          "Coconut shell carbon dominates this application for exactly that reason: it combines high hardness and abrasion resistance with the microporosity the process needs. Attrition losses are a direct operating cost, so hardness is often the first specification a mine looks at.",
        ],
      },
      {
        heading: "Food, beverage and sweeteners",
        body: [
          "Activated carbon is used to decolourise sugar syrups, high fructose corn syrup, glucose and edible oils, and to remove off-flavours and trace organics from process streams and potable spirits.",
          "Colour bodies are large molecules, so this work calls for mesoporous carbon — typically wood-based — rather than the highly microporous grades used for small-molecule adsorption. Powdered grades are common because they are dosed, filtered out and replaced, keeping the carbon out of the finished product.",
        ],
      },
      {
        heading: "Chemical and pharmaceutical purification",
        body: [
          "In fine chemical and pharmaceutical manufacture, carbon is used to remove coloured impurities, trace organics and catalyst residues from intermediates and final products. Purity of the carbon itself matters here: acid-washed grades are specified where extractable ash or trace metals would contaminate the product.",
        ],
      },
      {
        heading: "Matching grade to process",
        body: [
          "Because these applications span such different requirements, the base material and form are chosen against the process rather than from a catalogue. We source wood-, coal- and coconut-shell-based products and can work from the specification a process already runs to, or help develop one where a plant is specifying carbon for the first time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is coconut shell carbon used for gold recovery?",
        a: "Gold recovery circuits move, screen and abrade carbon continuously against slurry, so attrition loss is a direct operating cost. Coconut shell carbon combines high hardness and abrasion resistance with the microporosity the gold cyanide complex requires, which is why hardness is often the first parameter a mine specifies.",
      },
      {
        q: "Which carbon is used to decolourise syrups and oils?",
        a: "Colour bodies are relatively large molecules, so mesoporous carbon — usually wood-based — outperforms the highly microporous grades used for small-molecule work. Powdered grades are common because the carbon is dosed and then filtered out rather than left in contact with the product.",
      },
      {
        q: "What is acid-washed activated carbon for?",
        a: "Acid washing reduces extractable ash and trace metal content. It is specified in pharmaceutical and fine chemical work, and in some food applications, where residues leaching from the carbon would contaminate the product.",
      },
      {
        q: "Can activated carbon be reactivated in industrial service?",
        a: "In gold recovery, reactivation is part of the normal cycle — the carbon is stripped of gold and thermally reactivated repeatedly. In product-contact applications such as decolourisation, powdered carbon is more often used once and discarded to avoid any carry-over risk.",
      },
    ],
  },
];

export function getApplication(slug: string) {
  return APPLICATIONS.find((a) => a.slug === slug);
}
