import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Precious Metals to Crypto | Gold & Silver to Bitcoin | Offramp",
  description:
    "Convert precious metals to cryptocurrency. Sell gold, silver, platinum, and palladium for Bitcoin. Free insured shipping, XRF assay under video, BTC payment through Onramp custody.",
  keywords: [
    "precious metals to crypto",
    "precious metals to cryptocurrency",
    "precious metals to bitcoin",
    "gold and silver to bitcoin",
    "convert precious metals to crypto",
    "sell precious metals for bitcoin",
    "precious metals to btc",
    "trade precious metals for crypto",
  ],
  openGraph: {
    title: "Precious Metals to Crypto | Offramp",
    description: "Convert your precious metals into Bitcoin. Gold, silver, platinum, and palladium. Free insured shipping, BTC through Onramp custody.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/precious-metals-to-crypto",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Precious Metals to Crypto — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precious Metals to Crypto | Offramp",
    description: "Convert precious metals into Bitcoin through Offramp. Gold, silver, platinum, palladium. Free insured shipping, BTC via Onramp custody.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/precious-metals-to-crypto" },
};

export default function PreciousMetalsToCryptoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold for Bitcoin", url: "https://offrampgold.com/sell-gold-for-bitcoin" },
          { name: "Precious Metals to Crypto", url: "https://offrampgold.com/precious-metals-to-crypto" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "Can I convert precious metals to cryptocurrency?", answer: "Yes. Offramp converts gold, silver, platinum, and palladium into Bitcoin. Ship your metals with our free insured kit, receive a transparent XRF assay, and get BTC through Onramp custody." },
          { question: "What precious metals does Offramp accept?", answer: "Offramp accepts gold (coins, bars, jewelry, scrap), silver (coins, bars, rounds, flatware, sterling), and platinum/palladium items. Any form, any purity, any condition." },
          { question: "Why convert precious metals to Bitcoin instead of selling for cash?", answer: "Bitcoin is the digital evolution of sound money. Converting precious metals to BTC gives you a portable, divisible, verifiable store of value with a fixed supply of 21 million — the hardest money ever created." },
          { question: "How is my precious metal valued for crypto conversion?", answer: "Each item is tested via XRF spectrometry under video to determine exact metal content. Payment is calculated at current spot prices and converted to Bitcoin at real-time exchange rates. No hidden fees." },
        ]}
      />
      {children}
    </>
  );
}
