import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Sell Scrap Gold: Complete Guide | Offramp",
  description:
    "Learn how to sell scrap gold for the best price. What counts as scrap, how to sort by karat, weigh your gold, and find buyers who pay top dollar.",
  keywords: [
    "sell scrap gold",
    "scrap gold prices",
    "scrap gold buyer",
    "broken gold jewelry",
    "dental gold",
    "sell gold scrap online",
  ],
  openGraph: {
    title: "How to Sell Scrap Gold: Complete Guide | Offramp",
    description:
      "Learn how to sell scrap gold for the best price. Sort, weigh, and find the best buyer.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/how-to-sell-scrap-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Scrap Gold: Complete Guide | Offramp",
    description: "Sell scrap gold for the best price. Complete guide.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/how-to-sell-scrap-gold",
  },
};

export default function HowToSellScrapGoldLayout({
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
          { name: "How to Sell Scrap Gold", url: "https://offrampgold.com/guide/how-to-sell-scrap-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="How to Sell Scrap Gold: Complete Guide"
        description="Learn how to sell scrap gold for the best price. What counts as scrap, how to sort by karat, weigh your gold, and find buyers who pay top dollar."
        url="https://offrampgold.com/guide/how-to-sell-scrap-gold"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
