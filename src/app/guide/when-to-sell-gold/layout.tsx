import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Is Now a Good Time to Sell Gold? (March 2026) | Offramp",
  description:
    "Gold prices are near all-time highs in March 2026. Analysis of current market conditions, macro trends, and when selling gold makes financial sense.",
  keywords: [
    "when to sell gold",
    "should I sell gold now",
    "gold price 2026",
    "is now a good time to sell gold",
    "gold market analysis",
    "sell gold timing",
  ],
  openGraph: {
    images: [{ url: "/api/og?t=Is%20Now%20a%20Good%20Time%20to%20Sell%20Gold%3F%20(March%202026)", width: 1200, height: 630, alt: "Is Now a Good Time to Sell Gold? (March 2026) — Offramp" }],
    title: "Is Now a Good Time to Sell Gold? (March 2026) | Offramp",
    description:
      "Gold prices are near all-time highs. Analysis of current conditions and when selling makes sense.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/when-to-sell-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Now a Good Time to Sell Gold? (March 2026) | Offramp",
    description:
      "Gold prices are near all-time highs. Should you sell?",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/when-to-sell-gold",
  },
};

export default function WhenToSellGoldLayout({
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
          { name: "When to Sell Gold", url: "https://offrampgold.com/guide/when-to-sell-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="Is Now a Good Time to Sell Gold? (March 2026)"
        description="Gold prices are near all-time highs in March 2026. Analysis of current market conditions, macro trends, and when selling gold makes financial sense."
        url="https://offrampgold.com/guide/when-to-sell-gold"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
