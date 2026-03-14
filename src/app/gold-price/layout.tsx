import type { Metadata } from "next";
import { BreadcrumbJsonLd, WebApplicationJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gold Price Today | Live Spot Price in USD and BTC | Offramp",
  description:
    "The live gold spot price today is displayed on this page in both US dollars and Bitcoin, updated every 60 seconds. Track gold per ounce, gram, pennyweight, and kilogram.",
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
      {children}
    </>
  );
}
