import type { Metadata } from "next";
import { FAQJsonLd, HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Gold for Bitcoin | Convert Gold to BTC | Offramp",
  description:
    "Sell your gold for Bitcoin with Offramp. Free insured shipping, XRF spectrometer assay, and BTC payment through Onramp custody. Convert physical gold to Bitcoin — old hard money to new hard money.",
  keywords: [
    "sell gold for bitcoin",
    "gold to bitcoin",
    "convert gold to btc",
    "sell gold for btc",
    "gold for cryptocurrency",
    "sell gold coins for bitcoin",
    "sell jewelry for bitcoin",
    "gold to crypto",
    "exchange gold for bitcoin",
    "sell physical gold for bitcoin",
  ],
  openGraph: {
    title: "Sell Gold for Bitcoin | Convert Gold to BTC | Offramp",
    description:
      "Convert your physical gold into Bitcoin. Free insured shipping, XRF assay, BTC payment through Onramp custody. Old hard money → new hard money.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/sell-gold-for-bitcoin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sell Gold for Bitcoin — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold for Bitcoin | Convert Gold to BTC | Offramp",
    description:
      "Sell your gold for Bitcoin through Offramp. Free insured shipping, XRF assay, BTC payment via Onramp custody.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://offrampgold.com/sell-gold-for-bitcoin",
  },
};

export default function SellGoldForBitcoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold for Bitcoin", url: "https://offrampgold.com/sell-gold-for-bitcoin" },
        ]}
      />
      <HowToJsonLd
        name="How to Sell Gold for Bitcoin"
        description="Convert your physical gold into Bitcoin in 3 simple steps with free insured shipping and XRF assay."
        steps={[
          { name: "Request Your Free Shipping Kit", text: "Order a free insured shipping kit with prepaid USPS Priority Mail label and tamper-proof packaging. No cost, no commitment." },
          { name: "Ship Your Gold", text: "Pack your gold jewelry, coins, or scrap in the provided tamper-proof bag and drop it at any USPS location. Fully insured up to $100,000." },
          { name: "Get Paid in Bitcoin", text: "We assay your gold with an XRF spectrometer under video. Accept your offer and receive Bitcoin through Onramp custody within 48 hours." },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "Can I sell gold for Bitcoin?", answer: "Yes. Offramp lets you sell physical gold — jewelry, coins, bullion, dental gold, or scrap — and receive payment in Bitcoin. Your gold is assayed via XRF spectrometry, and the USD payout is converted to BTC through Onramp custody at current market rates." },
          { question: "How does the gold to Bitcoin conversion work?", answer: "Ship your gold to Offramp using a free insured kit. After XRF assay under video, accept your offer and choose Bitcoin as your payment method. The USD value is converted to BTC at the current spot price and sent to your Onramp account within 48 hours." },
          { question: "What types of gold can I sell for Bitcoin?", answer: "Offramp accepts all forms of gold: jewelry (rings, chains, bracelets, watches), coins (American Eagles, Krugerrands, Maple Leafs), bullion (bars, rounds), dental gold (crowns, bridges), and scrap gold of any karat." },
          { question: "Why should I convert gold to Bitcoin?", answer: "Both gold and Bitcoin are hard money — scarce, durable stores of value outside the fiat system. Bitcoin offers advantages in portability, divisibility, verifiability, and censorship resistance. Converting gold to Bitcoin moves your wealth from analog hard money to digital hard money." },
          { question: "How much does Offramp pay for gold converted to Bitcoin?", answer: "Offramp pays 80%+ of melt value, significantly more than pawn shops (20-55%) and most online competitors (60-75%). The same competitive pricing applies whether you choose USD wire or Bitcoin payment." },
          { question: "Is selling gold for Bitcoin safe with Offramp?", answer: "Yes. Offramp provides free insured shipping with up to $100,000 coverage, XRF assay under video for transparency, and Bitcoin custody through Onramp — a regulated Bitcoin financial services company. If you decline the offer, your gold is returned at no cost." },
        ]}
      />
      {children}
    </>
  );
}
