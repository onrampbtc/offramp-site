import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gold vs Bitcoin as an Investment (2026) | Offramp",
  description:
    "Gold vs Bitcoin investment comparison: returns, volatility, risk profile, and portfolio allocation theory. Which is the better investment in 2026?",
  keywords: [
    "gold vs bitcoin investment",
    "bitcoin returns vs gold",
    "gold investment 2026",
    "bitcoin investment comparison",
    "gold bitcoin portfolio",
    "hard asset investing",
  ],
  openGraph: {
    title: "Gold vs Bitcoin as an Investment (2026) | Offramp",
    description:
      "Investment comparison: returns, volatility, risk profile, and portfolio allocation for gold and Bitcoin.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/gold-vs-bitcoin-investment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold vs Bitcoin as an Investment (2026) | Offramp",
    description:
      "Gold vs Bitcoin: which is the better investment?",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/gold-vs-bitcoin-investment",
  },
};

export default function GoldVsBitcoinInvestmentLayout({
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
          { name: "Gold vs Bitcoin Investment", url: "https://offrampgold.com/guide/gold-vs-bitcoin-investment" },
        ]}
      />
      <ArticleJsonLd
        headline="Gold vs Bitcoin as an Investment (2026)"
        description="Gold vs Bitcoin investment comparison: returns, volatility, risk profile, and portfolio allocation theory. Which is the better investment in 2026?"
        url="https://offrampgold.com/guide/gold-vs-bitcoin-investment"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
