import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    siteName: "Activated Carbon Agents",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
