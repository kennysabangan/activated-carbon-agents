import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Activated Carbon Agents - Quality Activated Carbon Directly from Manufacturers",
  description: "Manufacturer direct pricing on quality activated carbon backed by decades of experience and technical support. Global sourcing, unmatched quality.",
  keywords: "activated carbon, carbon agents, manufacturer direct, water filtration, air purification",
  openGraph: {
    title: "Activated Carbon Agents",
    description: "Quality Activated Carbon Directly from Manufacturers",
    url: "https://activatedcarbonagents.com",
    siteName: "Activated Carbon Agents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Activated Carbon Agents",
    description: "Quality Activated Carbon Directly from Manufacturers",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Activated Carbon Agents",
      "url": "https://activatedcarbonagents.com",
      "logo": "https://activatedcarbonagents.com/images/logo.png",
      "description": "Manufacturer direct pricing on quality activated carbon backed by decades of experience.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17512 Griffin Lane",
        "addressLocality": "Huntington Beach",
        "addressRegion": "CA",
        "postalCode": "92647"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "(855) 934-3376",
        "contactType": "customer service"
      }
    }),
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
