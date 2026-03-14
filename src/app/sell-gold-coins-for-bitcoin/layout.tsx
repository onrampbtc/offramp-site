import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Gold Coins for Bitcoin | Eagles, Krugerrands to BTC | Offramp",
  description:
    "Sell your gold coins for Bitcoin. American Eagles, Krugerrands, Maple Leafs, Buffalos, and more. Free insured shipping, XRF assay, BTC payment through Onramp custody.",
  keywords: [
    "sell gold coins for bitcoin",
    "sell gold eagles for bitcoin",
    "sell krugerrands for bitcoin",
    "gold coins to btc",
    "sell gold bullion for bitcoin",
    "convert gold coins to bitcoin",
    "sell american eagle gold coin bitcoin",
    "gold coin to cryptocurrency",
  ],
  openGraph: {
    title: "Sell Gold Coins for Bitcoin | Offramp",
    description: "Convert your gold coins into Bitcoin. Eagles, Krugerrands, Maple Leafs, and more. Free insured shipping, BTC payment through Onramp custody.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/sell-gold-coins-for-bitcoin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sell Gold Coins for Bitcoin — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold Coins for Bitcoin | Offramp",
    description: "Convert your gold coins into Bitcoin through Offramp. Free insured shipping, XRF assay, BTC via Onramp custody.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/sell-gold-coins-for-bitcoin" },
};

export default function SellGoldCoinsForBitcoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold for Bitcoin", url: "https://offrampgold.com/sell-gold-for-bitcoin" },
          { name: "Sell Gold Coins for Bitcoin", url: "https://offrampgold.com/sell-gold-coins-for-bitcoin" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "Can I sell gold coins for Bitcoin?", answer: "Yes. Offramp accepts all gold coins including American Eagles, Krugerrands, Maple Leafs, Buffalos, Philharmonics, and more. Ship your coins with our free insured kit and receive Bitcoin through Onramp custody." },
          { question: "How much will I get for my gold coins in Bitcoin?", answer: "Offramp pays 80%+ of melt value for gold coins — significantly more than pawn shops (20-55%) and most online buyers (60-75%). Numismatic premiums may apply for rare coins. Payment is converted to BTC at current spot rates." },
          { question: "Are gold coins assayed differently?", answer: "Gold coins from government mints have known purity (e.g., American Eagles are 91.67% gold, Maple Leafs are 99.99%). We verify authenticity via XRF spectrometry and pay based on actual gold content weight." },
          { question: "What gold coins does Offramp accept?", answer: "We accept all gold coins: American Eagles, Canadian Maple Leafs, South African Krugerrands, Austrian Philharmonics, American Buffalos, Chinese Pandas, British Sovereigns, and any other gold coins of any purity." },
        ]}
      />
      {children}
    </>
  );
}
