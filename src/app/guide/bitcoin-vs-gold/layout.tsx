import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bitcoin vs Gold: The Complete Comparison | Offramp",
  description:
    "Bitcoin and gold compared across scarcity, portability, divisibility, durability, and censorship resistance. Learn why owning both is the optimal strategy.",
  keywords: [
    "bitcoin vs gold",
    "bitcoin and gold comparison",
    "gold vs bitcoin",
    "store of value comparison",
    "bitcoin gold scarcity",
    "digital gold",
  ],
  openGraph: {
    title: "Bitcoin vs Gold: The Complete Comparison | Offramp",
    description:
      "Bitcoin and gold compared across scarcity, portability, divisibility, durability, and censorship resistance.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/bitcoin-vs-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin vs Gold: The Complete Comparison | Offramp",
    description:
      "Bitcoin and gold compared across scarcity, portability, divisibility, durability, and censorship resistance.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/bitcoin-vs-gold",
  },
};

export default function BitcoinVsGoldLayout({
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
          { name: "Bitcoin vs Gold", url: "https://offrampgold.com/guide/bitcoin-vs-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="Bitcoin vs Gold: The Complete Comparison"
        description="Bitcoin and gold compared across scarcity, portability, divisibility, durability, and censorship resistance. Learn why owning both is the optimal strategy."
        url="https://offrampgold.com/guide/bitcoin-vs-gold"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
