import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Place to Sell Gold in 2026 | Offramp",
  description:
    "Find the best place to sell gold for maximum cash. Decision framework comparing online buyers, pawn shops, jewelers, and refineries by payout, speed, and convenience.",
  keywords: [
    "best place to sell gold",
    "where to sell gold for most money",
    "sell gold online best price",
    "gold buyer highest payout",
    "sell gold 2026",
  ],
  openGraph: {
    title: "Best Place to Sell Gold in 2026 | Offramp",
    description:
      "Find the best place to sell gold for maximum cash. Decision framework comparing all options.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offramp.com/guide/best-place-sell-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Place to Sell Gold in 2026 | Offramp",
    description:
      "Find the best place to sell gold for maximum cash in 2026.",
  },
  alternates: {
    canonical: "https://offramp.com/guide/best-place-sell-gold",
  },
};

export default function BestPlaceSellGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
