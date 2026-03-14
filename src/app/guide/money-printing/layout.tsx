import type { Metadata } from "next";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Money Printing: Why Gold and Bitcoin Exist | Offramp",
  description:
    "How money printing and quantitative easing reduce purchasing power and why hard assets like gold and Bitcoin exist as protection against currency debasement.",
  keywords: [
    "money printing",
    "quantitative easing",
    "M2 money supply",
    "inflation hard assets",
    "gold vs money printing",
    "bitcoin inflation hedge",
    "currency debasement",
  ],
  openGraph: {
    title: "Money Printing: Why Gold and Bitcoin Exist | Offramp",
    description:
      "How money printing reduces purchasing power and why hard assets protect your wealth.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/money-printing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Printing: Why Gold and Bitcoin Exist | Offramp",
    description:
      "How money printing reduces purchasing power.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/money-printing",
  },
};

export default function MoneyPrintingLayout({
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
          { name: "Money Printing", url: "https://offrampgold.com/guide/money-printing" },
        ]}
      />
      <ArticleJsonLd
        headline="Money Printing: Why Gold and Bitcoin Exist"
        description="How money printing and quantitative easing reduce purchasing power and why hard assets like gold and Bitcoin exist as protection against currency debasement."
        url="https://offrampgold.com/guide/money-printing"
        datePublished="2026-03-01"
        author="Offramp"
      />
      {children}
    </>
  );
}
