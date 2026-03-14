import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Jewelry for Bitcoin | Gold Jewelry to BTC | Offramp",
  description:
    "Sell your gold jewelry for Bitcoin. Rings, chains, bracelets, watches, broken pieces, and estate jewelry. Free insured shipping, XRF assay, BTC payment through Onramp custody.",
  keywords: [
    "sell jewelry for bitcoin",
    "sell gold jewelry for bitcoin",
    "gold jewelry to btc",
    "sell rings for bitcoin",
    "sell gold chain for bitcoin",
    "convert jewelry to bitcoin",
    "sell broken gold jewelry bitcoin",
    "jewelry to cryptocurrency",
  ],
  openGraph: {
    title: "Sell Jewelry for Bitcoin | Offramp",
    description: "Convert your gold jewelry into Bitcoin. Rings, chains, bracelets, watches, and more. Free insured shipping, BTC payment through Onramp custody.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/sell-jewelry-for-bitcoin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sell Jewelry for Bitcoin — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Jewelry for Bitcoin | Offramp",
    description: "Convert your gold jewelry into Bitcoin through Offramp. Free insured shipping, XRF assay, BTC via Onramp custody.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/sell-jewelry-for-bitcoin" },
};

export default function SellJewelryForBitcoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold for Bitcoin", url: "https://offrampgold.com/sell-gold-for-bitcoin" },
          { name: "Sell Jewelry for Bitcoin", url: "https://offrampgold.com/sell-jewelry-for-bitcoin" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "Can I sell gold jewelry for Bitcoin?", answer: "Yes. Offramp accepts all gold jewelry including rings, chains, bracelets, watches, broken pieces, and estate jewelry of any karat. Ship with our free insured kit and receive Bitcoin through Onramp custody." },
          { question: "Does my jewelry need to be in good condition?", answer: "No. Offramp pays based on gold content, not appearance. Broken chains, single earrings, bent rings, and damaged pieces are all accepted. We pay by pure gold weight determined via XRF spectrometry." },
          { question: "How much will I get for my jewelry in Bitcoin?", answer: "Offramp pays 80%+ of melt value for gold jewelry — significantly more than pawn shops (20-55%) and most jewelers (50-70%). Payment is converted to BTC at current spot rates through Onramp custody." },
          { question: "What karats of gold jewelry does Offramp accept?", answer: "We accept all karats: 10K, 14K, 18K, 22K, and 24K gold jewelry. Our XRF spectrometer determines exact gold content regardless of markings. Even unmarked or worn-stamp jewelry is accepted." },
        ]}
      />
      {children}
    </>
  );
}
