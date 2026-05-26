import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Activated Carbon Agents | Quality Activated Carbon Directly from Manufacturers",
  description:
    "Manufacturer direct pricing on quality activated carbon backed by decades of experience and technical support. Global sourcing, unmatched quality.",
  keywords: [
    "activated carbon",
    "activated carbon suppliers",
    "wholesale activated carbon",
    "granular activated carbon",
    "powdered activated carbon",
    "coconut shell activated carbon",
    "coal activated carbon",
    "water treatment carbon",
    "air purification carbon",
    "manufacturer direct pricing",
  ],
  openGraph: {
    title: "Activated Carbon Agents | Quality Activated Carbon",
    description:
      "Manufacturer direct pricing backed by decades of experience and technical support.",
    url: "https://activatedcarbonagents.com",
    siteName: "Activated Carbon Agents",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Activated Carbon Agents",
    description:
      "Manufacturer direct pricing backed by decades of experience and technical support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Activated Carbon Agents",
              url: "https://activatedcarbonagents.com",
              logo: "https://activatedcarbonagents.com/logo.png",
              description:
                "Manufacturer direct pricing on quality activated carbon backed by decades of experience and technical support.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17512 Griffin Lane",
                addressLocality: "Huntington Beach",
                addressRegion: "CA",
                postalCode: "92647",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-855-934-3376",
                contactType: "customer service",
                email: "kim@activatedcarbonagents.com",
              },
              founder: {
                "@type": "Person",
                name: "Kimberly Walsh",
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Activated Carbon Agents",
              image: "https://activatedcarbonagents.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "17512 Griffin Lane",
                addressLocality: "Huntington Beach",
                addressRegion: "CA",
                postalCode: "92647",
                addressCountry: "US",
              },
              telephone: "+1-855-934-3376",
              email: "kim@activatedcarbonagents.com",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
