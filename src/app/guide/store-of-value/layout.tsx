import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store of Value: Gold, Bitcoin, and Preserving Wealth | Offramp",
  description:
    "What makes an asset a reliable store of value? Explore the properties of gold and Bitcoin that preserve purchasing power across time and economic cycles.",
  keywords: [
    "store of value",
    "gold store of value",
    "bitcoin store of value",
    "preserve wealth",
    "hard assets",
    "purchasing power",
    "inflation protection",
  ],
  openGraph: {
    title: "Store of Value: Gold, Bitcoin, and Preserving Wealth | Offramp",
    description:
      "What makes an asset a reliable store of value? Gold, Bitcoin, and the properties of sound money.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offramp.com/guide/store-of-value",
  },
  twitter: {
    card: "summary_large_image",
    title: "Store of Value: Gold, Bitcoin, and Preserving Wealth | Offramp",
    description: "What makes an asset a store of value?",
  },
  alternates: {
    canonical: "https://offramp.com/guide/store-of-value",
  },
};

export default function StoreOfValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
