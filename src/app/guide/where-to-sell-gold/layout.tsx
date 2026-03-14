import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Where to Sell Gold: Best Places Compared (2026) | Offramp",
  description:
    "Compare pawn shops, jewelers, online gold buyers, and refineries. See payout percentages, pros and cons, and find the best place to sell your gold.",
  keywords: [
    "where to sell gold",
    "best place to sell gold",
    "sell gold near me",
    "sell gold online",
    "gold buyer comparison",
    "pawn shop vs online gold buyer",
  ],
  openGraph: {
    title: "Where to Sell Gold: Best Places Compared (2026) | Offramp",
    description:
      "Compare pawn shops, jewelers, online gold buyers, and refineries. See payout percentages and find the best option.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/where-to-sell-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Sell Gold: Best Places Compared (2026) | Offramp",
    description:
      "Compare pawn shops, jewelers, online gold buyers, and refineries. See payout percentages.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/where-to-sell-gold",
  },
};

export default function WhereToSellGoldLayout({
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
          { name: "Where to Sell Gold", url: "https://offrampgold.com/guide/where-to-sell-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="Where to Sell Gold: Best Places Compared (2026)"
        description="Compare pawn shops, jewelers, online gold buyers, and refineries. See payout percentages, pros and cons, and find the best place to sell your gold."
        url="https://offrampgold.com/guide/where-to-sell-gold"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
