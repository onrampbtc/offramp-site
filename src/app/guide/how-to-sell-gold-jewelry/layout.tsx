import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Sell Gold Jewelry: Step-by-Step Guide | Offramp",
  description:
    "Learn how to sell gold jewelry for the most money. Identify karat stamps, weigh your pieces, calculate melt value, and choose the best buyer. Step-by-step guide.",
  keywords: [
    "how to sell gold jewelry",
    "sell gold jewelry online",
    "gold jewelry karat",
    "gold melt value",
    "sell gold rings",
    "sell gold necklace",
    "gold jewelry worth",
  ],
  openGraph: {
    title: "How to Sell Gold Jewelry: Step-by-Step Guide | Offramp",
    description:
      "Learn how to sell gold jewelry for the most money. Step-by-step guide covering karat identification, weighing, and finding the best buyer.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offramp.com/guide/how-to-sell-gold-jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Gold Jewelry: Step-by-Step Guide | Offramp",
    description:
      "Sell gold jewelry for the most money. Step-by-step guide.",
  },
  alternates: {
    canonical: "https://offramp.com/guide/how-to-sell-gold-jewelry",
  },
};

export default function HowToSellGoldJewelryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
