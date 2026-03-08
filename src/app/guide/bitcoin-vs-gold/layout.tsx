import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitcoin vs Gold: The Complete Comparison | Offramp",
  description:
    "Bitcoin and gold compared across scarcity, portability, divisibility, durability, and censorship resistance. Learn why owning both is the optimal strategy.",
  keywords: [
    "bitcoin vs gold",
    "bitcoin and gold comparison",
    "gold vs bitcoin",
    "store of value comparison",
    "bitcoin gold scarcity",
    "digital gold",
  ],
  openGraph: {
    title: "Bitcoin vs Gold: The Complete Comparison | Offramp",
    description:
      "Bitcoin and gold compared across scarcity, portability, divisibility, durability, and censorship resistance.",
    type: "article",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offramp.com/guide/bitcoin-vs-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin vs Gold: The Complete Comparison | Offramp",
    description:
      "Bitcoin and gold compared across scarcity, portability, divisibility, durability, and censorship resistance.",
  },
  alternates: {
    canonical: "https://offramp.com/guide/bitcoin-vs-gold",
  },
};

export default function BitcoinVsGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
