/**
 * Renders a JSON-LD block. Structured data is how Google resolves the
 * business into an entity (address, phone, founder) and how FAQ and
 * breadcrumb markup become eligible for rich results.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The payload is authored in this repo, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
