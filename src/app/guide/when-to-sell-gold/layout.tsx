import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Now a Good Time to Sell Gold? (March 2026) | Offramp",
  description:
    "Gold prices are near all-time highs in March 2026. Analysis of current market conditions, macro trends, and when selling gold makes financial sense.",
  keywords: [
    "when to sell gold",
    "should I sell gold now",
    "gold price 2026",
    "is now a good time to sell gold",
    "gold market analysis",
    "sell gold timing",
  ],
  openGraph: {
    title: "Is Now a Good Time to Sell Gold? (March 2026) | Offramp",
    description:
      "Gold prices are near all-time highs. Analysis of current conditions and when selling makes sense.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offramp.com/guide/when-to-sell-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Now a Good Time to Sell Gold? (March 2026) | Offramp",
    description:
      "Gold prices are near all-time highs. Should you sell?",
  },
  alternates: {
    canonical: "https://offramp.com/guide/when-to-sell-gold",
  },
};

export default function WhenToSellGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
