import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Best Place to Sell Gold in 2026 | Offramp",
  description:
    "Find the best place to sell gold for maximum cash. Decision framework comparing online buyers, pawn shops, jewelers, and refineries by payout, speed, and convenience.",
  keywords: [
    "best place to sell gold",
    "where to sell gold for most money",
    "sell gold online best price",
    "gold buyer highest payout",
    "sell gold 2026",
  ],
  openGraph: {
    title: "Best Place to Sell Gold in 2026 | Offramp",
    description:
      "Find the best place to sell gold for maximum cash. Decision framework comparing all options.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/best-place-sell-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Place to Sell Gold in 2026 | Offramp",
    description:
      "Find the best place to sell gold for maximum cash in 2026.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/best-place-sell-gold",
  },
};

export default function BestPlaceSellGoldLayout({
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
          { name: "Best Place to Sell Gold", url: "https://offrampgold.com/guide/best-place-sell-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="Best Place to Sell Gold in 2026"
        description="Find the best place to sell gold for maximum cash. Decision framework comparing online buyers, pawn shops, jewelers, and refineries by payout, speed, and convenience."
        url="https://offrampgold.com/guide/best-place-sell-gold"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
