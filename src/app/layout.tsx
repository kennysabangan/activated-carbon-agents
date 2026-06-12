import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
