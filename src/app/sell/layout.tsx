import type { Metadata } from "next";
import { FAQJsonLd, HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Gold Online for Cash | Offramp by Onramp",
  description:
    "Sell your gold jewelry, coins, bullion, and scrap gold online for cash. Free insured FedEx shipping, XRF spectrometer assay, and wire payment within 48 hours. Get 80%+ of spot value.",
  keywords: [
    "sell gold online",
    "sell gold for cash",
    "cash for gold",
    "sell gold jewelry",
    "sell gold coins",
    "sell scrap gold",
    "sell dental gold",
    "gold buyer online",
    "mail in gold for cash",
    "best place to sell gold",
  ],
  openGraph: {
    title: "Sell Gold Online for Cash | Offramp by Onramp",
    description:
      "Sell your gold jewelry, coins, bullion, and scrap gold online. Free insured shipping, XRF assay under video, wire payment in 48 hours.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/sell",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sell Gold Online — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold Online for Cash | Offramp by Onramp",
    description:
      "Sell your gold jewelry, coins, bullion, and scrap gold online. Free insured shipping, XRF assay, wire payment in 48 hours.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://offrampgold.com/sell",
  },
};

export default function SellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold", url: "https://offrampgold.com/sell" },
        ]}
      />
      <HowToJsonLd
        name="How to Sell Gold Online with Offramp"
        description="Sell your gold for cash or Bitcoin in 3 simple steps with free insured shipping and transparent XRF assay."
        steps={[
          { name: "Request Your Free Kit", text: "Order a free insured shipping kit with prepaid USPS Priority Mail label and tamper-proof packaging." },
          { name: "Ship Your Gold", text: "Pack your gold in the provided tamper-proof bag and drop it at any USPS location. Fully insured up to $100,000." },
          { name: "Get Paid", text: "We assay your gold with an XRF spectrometer under video. Accept your offer and receive payment via wire transfer or Bitcoin within 48 hours." },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "How much does Offramp pay for gold?", answer: "Offramp pays 80%+ of melt value, significantly more than pawn shops (20-55%) and most online competitors (60-75%). Our pricing is transparent and based on live spot prices." },
          { question: "Is shipping insured?", answer: "Yes. We provide free USPS Priority Mail shipping with up to $100,000 in insurance coverage. Shipping is prepaid both ways — if you decline our offer, we return your gold at no cost." },
          { question: "How long does the process take?", answer: "From the time we receive your gold, we complete XRF assay and send your offer within 24 hours. Once you accept, payment is sent within 48 hours via wire transfer or Bitcoin." },
          { question: "Can I get paid in Bitcoin?", answer: "Yes. Offramp is the first gold buyer built for the Bitcoin economy. Choose USD wire transfer, Bitcoin, or a combination of both." },
        ]}
      />
      {children}
    </>
  );
}
