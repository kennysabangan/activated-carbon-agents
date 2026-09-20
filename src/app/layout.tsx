import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL, canonical } from "@/lib/site";

export const metadata: Metadata = {
  // Without metadataBase, Open Graph and canonical URLs resolve relatively
  // and shared links render without a preview card.
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: canonical("/") },
  title: "Activated Carbon Agents | Quality Activated Carbon, Manufacturer Direct",
  description:
    "Manufacturer direct pricing on activated carbon. Decades of experience in water treatment, air purification, and industrial processing solutions. Global sourcing, 100% quality guaranteed.",
  keywords: [
    "activated carbon",
    "water treatment",
    "air purification",
    "industrial carbon",
    "manufacturer direct",
    "coconut shell carbon",
    "coal-based carbon",
    "wood-based carbon",
  ],
  openGraph: {
    title: "Activated Carbon Agents | Quality Activated Carbon, Manufacturer Direct",
    description:
      "Manufacturer direct pricing on activated carbon. Decades of experience in water treatment, air purification, and industrial processing.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [{ url: "/images/hero-bg.jpeg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Activated Carbon Agents | Quality Activated Carbon, Manufacturer Direct",
    description:
      "Manufacturer direct pricing on activated carbon for water treatment, air purification and industrial processing.",
    images: ["/images/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Without JS the IntersectionObserver never runs, so reveal everything. */}
        <noscript>
          <style>{`.fade-in,.fade-in-left,.fade-in-right{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
      </body>
    </html>
  );
}
