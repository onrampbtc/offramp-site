import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Gold for Bitcoin | Gold to BTC | Offramp by Onramp",
  description:
    "Offramp is the bridge from physical gold to Bitcoin. Sell your jewelry, coins, or scrap gold for USD wired to your bank, then convert to BTC through Onramp custody. Gold is old hard money. Bitcoin is new hard money.",
  openGraph: {
    title: "Sell Gold for Bitcoin | Gold to BTC | Offramp by Onramp",
    description:
      "Sell your gold for Bitcoin through Offramp. Free insured shipping, XRF assay, wire payment converted to BTC through Onramp custody.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold for Bitcoin | Gold to BTC | Offramp by Onramp",
    description:
      "Sell your gold for Bitcoin through Offramp. The bridge from physical gold to the Bitcoin economy.",
  },
  alternates: {
    canonical: "https://offrampgold.com/gold-to-bitcoin",
  },
};

export default function GoldToBitcoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Gold to Bitcoin", url: "https://offrampgold.com/gold-to-bitcoin" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "Can I sell gold for Bitcoin?", answer: "Yes. Offramp lets you sell physical gold and receive payment in Bitcoin. Your gold is assayed via XRF spectrometry, and the USD payout is converted to BTC through Onramp custody at current market rates." },
          { question: "How does gold to Bitcoin conversion work?", answer: "Ship your gold to Offramp using a free insured kit. After XRF assay, accept your offer and choose Bitcoin as your payment method. The USD value is converted to BTC at the current spot price and sent to your Onramp account." },
          { question: "What is the minimum gold amount to convert to Bitcoin?", answer: "There is no strict minimum. Offramp accepts gold of any weight, though shipping costs are covered by Offramp for all shipments. Even a single gold ring or broken chain can be converted to Bitcoin." },
          { question: "Why convert gold to Bitcoin?", answer: "Both gold and Bitcoin are hard money — scarce, durable stores of value outside the fiat system. Bitcoin offers advantages in portability, divisibility, and verifiability. Converting gold to Bitcoin moves your wealth from analog hard money to digital hard money." },
        ]}
      />
      {children}
    </>
  );
}
