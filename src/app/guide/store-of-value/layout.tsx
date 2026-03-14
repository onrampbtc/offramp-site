import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Store of Value: Gold, Bitcoin, and Preserving Wealth | Offramp",
  description:
    "What makes an asset a reliable store of value? Explore the properties of gold and Bitcoin that preserve purchasing power across time and economic cycles.",
  keywords: [
    "store of value",
    "gold store of value",
    "bitcoin store of value",
    "preserve wealth",
    "hard assets",
    "purchasing power",
    "inflation protection",
  ],
  openGraph: {
    title: "Store of Value: Gold, Bitcoin, and Preserving Wealth | Offramp",
    description:
      "What makes an asset a reliable store of value? Gold, Bitcoin, and the properties of sound money.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/store-of-value",
  },
  twitter: {
    card: "summary_large_image",
    title: "Store of Value: Gold, Bitcoin, and Preserving Wealth | Offramp",
    description: "What makes an asset a store of value?",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/store-of-value",
  },
};

export default function StoreOfValueLayout({
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
          { name: "Store of Value", url: "https://offrampgold.com/guide/store-of-value" },
        ]}
      />
      <ArticleJsonLd
        headline="Store of Value: Gold, Bitcoin, and Preserving Wealth"
        description="What makes an asset a reliable store of value? Explore the properties of gold and Bitcoin that preserve purchasing power across time and economic cycles."
        url="https://offrampgold.com/guide/store-of-value"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
