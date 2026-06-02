import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Exotic Junk Removal in Dallas`,
    template: `%s · ${site.name}`,
  },
  description:
    "Discreet, white-glove junk removal, move-outs, and construction debris hauling for discerning clients across Dallas–Fort Worth. By appointment.",
  keywords: [
    "luxury junk removal Dallas",
    "white glove hauling",
    "estate cleanout Dallas",
    "construction debris removal Dallas",
    "luxury moving Dallas Fort Worth",
    "concierge junk removal",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description:
      "The most exotic junk movers in the world. Dallas–Fort Worth, by appointment.",
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "The most exotic junk movers in the world. Dallas–Fort Worth.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: site.name,
  description:
    "Discreet, white-glove junk removal, move-outs, and construction debris hauling for discerning clients across Dallas–Fort Worth.",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  areaServed: {
    "@type": "City",
    name: "Dallas–Fort Worth",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  priceRange: "$$$$",
  slogan: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
