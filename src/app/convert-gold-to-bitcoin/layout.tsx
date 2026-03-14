import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Convert Gold to Bitcoin | Gold to BTC Exchange | Offramp",
  description:
    "Convert your gold to Bitcoin. Sell gold coins, bars, jewelry, and scrap for BTC. Free insured shipping, XRF assay under video, Bitcoin payment through Onramp custody.",
  keywords: [
    "convert gold to bitcoin",
    "gold to bitcoin",
    "gold to btc",
    "exchange gold for bitcoin",
    "gold to bitcoin exchange",
    "trade gold for bitcoin",
    "gold to crypto",
    "swap gold for bitcoin",
  ],
  openGraph: {
    title: "Convert Gold to Bitcoin | Offramp",
    description: "Convert your physical gold into Bitcoin. Free insured shipping, XRF assay, BTC payment through Onramp custody.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/convert-gold-to-bitcoin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Convert Gold to Bitcoin — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Gold to Bitcoin | Offramp",
    description: "Convert your physical gold into Bitcoin through Offramp. Free insured shipping, XRF assay, BTC via Onramp custody.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/convert-gold-to-bitcoin" },
};

export default function ConvertGoldToBitcoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold for Bitcoin", url: "https://offrampgold.com/sell-gold-for-bitcoin" },
          { name: "Convert Gold to Bitcoin", url: "https://offrampgold.com/convert-gold-to-bitcoin" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "How do I convert gold to Bitcoin?", answer: "Ship your gold to Offramp using our free insured kit. We assay it via XRF spectrometry under video, make an offer based on melt value, and send Bitcoin through Onramp custody within 48 hours of acceptance." },
          { question: "What is the gold to Bitcoin conversion rate?", answer: "Offramp pays 80%+ of melt value for gold. Your payout is calculated at the current gold spot price, then converted to BTC at the real-time Bitcoin exchange rate. No hidden fees or deductions." },
          { question: "Why convert gold to Bitcoin instead of cash?", answer: "Bitcoin offers superior portability, divisibility, and censorship resistance compared to both gold and fiat currency. Converting gold to BTC preserves your wealth in a harder, more liquid monetary asset with no counterparty risk." },
          { question: "Is converting gold to Bitcoin safe?", answer: "Yes. Offramp provides insured shipping up to $100K, XRF assay under video for full transparency, and Bitcoin delivery through Onramp — a regulated Bitcoin custody platform. Your gold and payment are protected at every step." },
        ]}
      />
      {children}
    </>
  );
}
