import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Gold Coins and Bullion for Cash",
  description:
    "Sell gold coins and bullion at competitive rates near spot price. We accept American Eagles, Canadian Maple Leafs, Krugerrands, gold bars, and rounds of any size. Ship free with insurance up to $25,000.",
  alternates: { canonical: "https://offrampgold.com/sell-coins" },
  openGraph: {
    images: [{ url: "/api/og?t=Sell%20Gold%20Coins%20and%20Bullion%20for%20Cash", width: 1200, height: 630, alt: "Sell Gold Coins and Bullion for Cash — Offramp" }],
    title: "Sell Gold Coins and Bullion for Cash | Offramp",
    description:
      "Sell gold coins and bullion at competitive rates near spot price. American Eagles, Maple Leafs, Krugerrands, bars, and rounds. Free insured shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold Coins and Bullion for Cash | Offramp",
    description:
      "Sell gold coins and bullion at competitive rates near spot price. Free insured shipping up to $25K.",
  },
};

export default function SellCoinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold", url: "https://offrampgold.com/sell" },
          { name: "Sell Gold Coins", url: "https://offrampgold.com/sell-coins" },
        ]}
      />
      {children}
    </>
  );
}
