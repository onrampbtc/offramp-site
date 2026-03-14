import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hard Money: From Gold to Bitcoin | Offramp",
  description:
    "Trace the evolution of hard money from ancient gold coins to the gold standard to Bitcoin. Learn why sound money matters and how hard assets protect purchasing power.",
  keywords: [
    "hard money",
    "sound money",
    "gold standard",
    "bitcoin hard money",
    "hard assets",
    "monetary history",
    "gold to bitcoin",
  ],
  openGraph: {
    title: "Hard Money: From Gold to Bitcoin | Offramp",
    description:
      "The evolution of hard money from the gold standard to the Bitcoin standard.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/hard-money",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hard Money: From Gold to Bitcoin | Offramp",
    description:
      "From the gold standard to the Bitcoin standard.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/hard-money",
  },
};

export default function HardMoneyLayout({
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
          { name: "Hard Money", url: "https://offrampgold.com/guide/hard-money" },
        ]}
      />
      <ArticleJsonLd
        headline="Hard Money: From Gold to Bitcoin"
        description="Trace the evolution of hard money from ancient gold coins to the gold standard to Bitcoin. Learn why sound money matters and how hard assets protect purchasing power."
        url="https://offrampgold.com/guide/hard-money"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
