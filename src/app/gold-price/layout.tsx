import type { Metadata } from "next";
import {
  BreadcrumbJsonLd,
  WebApplicationJsonLd,
  FAQJsonLd,
  DatasetJsonLd,
} from "@/components/JsonLd";
import { GOLD_PRICE_FAQ } from "./faq";

export const metadata: Metadata = {
  title: "Gold Price Today | Live Spot Price in USD and BTC | Offramp",
  description:
    "The live gold spot price today is displayed on this page in both US dollars and Bitcoin, updated every 60 seconds. Track gold per ounce, gram, pennyweight, and kilogram.",
  alternates: { canonical: "https://offrampgold.com/gold-price" },
  openGraph: {
    title: "Gold Price Today | Live Spot Price in USD and BTC | Offramp",
    description:
      "Live gold spot price in USD and Bitcoin. Updated every 60 seconds. Track gold per ounce, gram, pennyweight, and kilogram.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Price Today | Live Spot Price in USD and BTC | Offramp",
    description:
      "Live gold spot price in USD and Bitcoin. Updated every 60 seconds.",
  },
};

export default function GoldPriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Gold Price Today", url: "https://offrampgold.com/gold-price" },
        ]}
      />
      <WebApplicationJsonLd
        name="Gold Price Today"
        description="Live gold spot price in USD and Bitcoin. Updated every 60 seconds. Track gold per ounce, gram, pennyweight, and kilogram."
        url="https://offrampgold.com/gold-price"
      />
      <DatasetJsonLd
        name="Live Gold Price — USD, per-karat, and Bitcoin"
        description="Live gold spot price updated every 60 seconds: per troy ounce, per gram, per pennyweight, per kilogram, and broken down by karat (10k, 14k, 18k, 22k, 24k), plus the gold-to-Bitcoin ratio. Free JSON feed available at /api/prices."
        url="https://offrampgold.com/gold-price"
      />
      <FAQJsonLd questions={GOLD_PRICE_FAQ} />
      {children}
    </>
  );
}
