import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Silver for Bitcoin | Convert Silver to BTC | Offramp",
  description:
    "Sell your silver for Bitcoin. Coins, bars, rounds, flatware, and sterling jewelry. Free insured shipping, XRF assay, BTC payment through Onramp custody.",
  keywords: [
    "sell silver for bitcoin",
    "silver to bitcoin",
    "convert silver to btc",
    "sell silver coins for bitcoin",
    "sell silver bars for bitcoin",
    "silver to crypto",
    "sell sterling silver for bitcoin",
    "exchange silver for bitcoin",
  ],
  openGraph: {
    title: "Sell Silver for Bitcoin | Offramp",
    description: "Convert your silver into Bitcoin. Coins, bars, rounds, flatware, and more. Free insured shipping, BTC payment through Onramp custody.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/sell-silver-for-bitcoin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sell Silver for Bitcoin — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Silver for Bitcoin | Offramp",
    description: "Convert your silver into Bitcoin through Offramp. Free insured shipping, XRF assay, BTC via Onramp custody.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/sell-silver-for-bitcoin" },
};

export default function SellSilverForBitcoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold for Bitcoin", url: "https://offrampgold.com/sell-gold-for-bitcoin" },
          { name: "Sell Silver for Bitcoin", url: "https://offrampgold.com/sell-silver-for-bitcoin" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "Can I sell silver for Bitcoin?", answer: "Yes. Offramp accepts all forms of silver including coins, bars, rounds, flatware, and sterling jewelry. Ship your silver with our free insured kit and receive Bitcoin through Onramp custody." },
          { question: "What types of silver does Offramp accept?", answer: "We accept all silver: American Silver Eagles, Canadian Maple Leafs, Morgan/Peace dollars, junk silver, .999 bars and rounds, sterling silver (92.5%), flatware, and any other silver items." },
          { question: "How much will I get for my silver in Bitcoin?", answer: "Offramp pays competitive rates based on melt value for silver — significantly more than pawn shops and most local buyers. Payment is converted to BTC at current spot rates through Onramp custody." },
          { question: "How is silver assayed?", answer: "Silver is tested via XRF spectrometry — the same technology used by refineries. This determines exact silver content and purity. The entire assay is performed under video for full transparency." },
        ]}
      />
      {children}
    </>
  );
}
