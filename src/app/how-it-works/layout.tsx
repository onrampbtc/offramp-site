import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How It Works: Mail In Gold for Cash | Offramp",
  description:
    "Sell gold to Offramp in three steps: request a free insured FedEx kit, mail your gold, and receive a transparent quote based on XRF assay and live spot price. Accept and get paid by wire within 48 hours.",
  keywords: [
    "how to sell gold online",
    "mail in gold for cash",
    "sell gold by mail",
    "gold selling process",
    "gold assay service",
    "XRF gold testing",
    "insured gold shipping",
    "sell gold from home",
  ],
  openGraph: {
    title: "How It Works: Mail In Gold for Cash | Offramp",
    description:
      "Three simple steps to sell your gold: request a free insured kit, ship your gold, get paid by wire in 48 hours. Free returns if you decline.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/how-it-works",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works: Mail In Gold for Cash | Offramp",
    description:
      "Three simple steps to sell your gold by mail. Free insured kit, XRF assay, wire payment in 48 hours.",
  },
  alternates: {
    canonical: "https://offrampgold.com/how-it-works",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "How It Works", url: "https://offrampgold.com/how-it-works" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "How much does shipping cost?", answer: "Nothing. Offramp provides a free prepaid FedEx shipping label and insured mailer. You never pay for shipping in either direction. If you decline the offer, your gold is returned at no cost." },
          { question: "How much insurance coverage does the kit include?", answer: "Every kit includes up to $25,000 in insurance coverage through FedEx. Your gold is protected from drop-off to arrival. For shipments over $25,000, contact Offramp for enhanced coverage." },
          { question: "How long does the entire process take?", answer: "The kit arrives in 2-3 business days. Assay and offer are completed within 24 hours of receiving your gold. Wire payment reaches your bank within 48 hours after acceptance. Total time is usually 5-7 business days." },
          { question: "What happens if I decline the offer?", answer: "If you decline, Offramp ships your gold back via insured FedEx at no cost. There are never any fees or obligations." },
          { question: "What is XRF spectrometry?", answer: "XRF (X-ray fluorescence) spectrometry is laboratory-grade technology used by refineries, the U.S. Mint, and major gold dealers. It non-destructively analyzes elemental composition to 0.01% accuracy." },
          { question: "Can I convert my payout to Bitcoin?", answer: "Yes. Through Offramp's partnership with Onramp, you can convert your cash payout directly into Bitcoin at current market rates." },
        ]}
      />
      {children}
    </>
  );
}
