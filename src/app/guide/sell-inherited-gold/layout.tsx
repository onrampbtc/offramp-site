import type { Metadata } from "next";

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
    url: "https://offramp.com/guide/sell-inherited-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Inherited Gold and Jewelry | Offramp",
    description:
      "A sensitive guide to selling inherited gold and jewelry.",
  },
  alternates: {
    canonical: "https://offramp.com/guide/sell-inherited-gold",
  },
};

export default function SellInheritedGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
