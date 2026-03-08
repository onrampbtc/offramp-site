import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Do Pawn Shops Pay for Gold? (2026) | Offramp",
  description:
    "Pawn shops pay 20-55% of gold's melt value. Learn why pawn shop prices are low, what determines your offer, and how online buyers pay significantly more.",
  keywords: [
    "pawn shop gold prices",
    "how much do pawn shops pay for gold",
    "pawn shop gold value",
    "sell gold pawn shop",
    "pawn shop vs online gold buyer",
    "pawn shop gold percentage",
  ],
  openGraph: {
    title: "How Much Do Pawn Shops Pay for Gold? (2026) | Offramp",
    description:
      "Pawn shops pay 20-55% of gold's melt value. Learn why and discover better alternatives.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/guide/pawn-shop-gold-prices",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Do Pawn Shops Pay for Gold? (2026) | Offramp",
    description:
      "Pawn shops pay 20-55% of gold's melt value. Here is why.",
  },
  alternates: {
    canonical: "https://offrampgold.com/guide/pawn-shop-gold-prices",
  },
};

export default function PawnShopGoldPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
