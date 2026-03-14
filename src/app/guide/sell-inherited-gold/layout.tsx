import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Sell Inherited Gold and Jewelry | Offramp",
  description:
    "A sensitive guide to selling inherited gold and jewelry. Learn how to inventory, appraise, and sell inherited precious metals while respecting sentimental value.",
  keywords: [
    "sell inherited gold",
    "sell inherited jewelry",
    "selling gold after death",
    "inherited gold coins",
    "estate gold jewelry",
    "sell family gold",
  ],
  openGraph: {
    title: "How to Sell Inherited Gold and Jewelry | Offramp",
    description:
      "A sensitive guide to selling inherited gold and jewelry. Inventory, appraise, and sell while respecting sentimental value.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/sell-inherited-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Inherited Gold and Jewelry | Offramp",
    description:
      "A sensitive guide to selling inherited gold and jewelry.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/sell-inherited-gold",
  },
};

export default function SellInheritedGoldLayout({
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
          { name: "Sell Inherited Gold", url: "https://offrampgold.com/guide/sell-inherited-gold" },
        ]}
      />
      <ArticleJsonLd
        headline="How to Sell Inherited Gold and Jewelry"
        description="A sensitive guide to selling inherited gold and jewelry. Learn how to inventory, appraise, and sell inherited precious metals while respecting sentimental value."
        url="https://offrampgold.com/guide/sell-inherited-gold"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
