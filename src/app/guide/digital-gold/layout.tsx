import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bitcoin: The Digital Gold | Offramp",
  description:
    "Why Bitcoin is called digital gold. Deep comparison of Bitcoin and gold's core properties: fixed supply, resistance to debasement, and no counterparty risk.",
  keywords: [
    "digital gold",
    "bitcoin digital gold",
    "bitcoin vs gold",
    "bitcoin store of value",
    "bitcoin fixed supply",
    "bitcoin gold comparison",
  ],
  openGraph: {
    title: "Bitcoin: The Digital Gold | Offramp",
    description:
      "Why Bitcoin earned the title of digital gold. Deep comparison of core monetary properties.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/digital-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin: The Digital Gold | Offramp",
    description: "Why Bitcoin is digital gold. A deep exploration.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/digital-gold",
  },
};

export default function DigitalGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Guides", url: "https://offrampgold.com/guide" },
          { name: "Digital Gold", url: "https://offrampgold.com/guide/digital-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="Bitcoin: The Digital Gold"
        description="Why Bitcoin is called digital gold. Deep comparison of Bitcoin and gold's core properties: fixed supply, resistance to debasement, and no counterparty risk."
        url="https://offrampgold.com/guide/digital-gold"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
