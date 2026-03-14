import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mail In Gold for Bitcoin | Ship Gold, Get BTC | Offramp",
  description:
    "Mail in your gold for Bitcoin. Free insured shipping kit, XRF assay under video, BTC payment through Onramp custody. The safest mail-in gold buyer for Bitcoiners.",
  keywords: [
    "mail in gold for bitcoin",
    "mail gold for bitcoin",
    "ship gold for bitcoin",
    "mail in gold buyer bitcoin",
    "send gold get bitcoin",
    "mail order gold buyer btc",
    "gold mail in service bitcoin",
    "ship gold for cryptocurrency",
  ],
  openGraph: {
    title: "Mail In Gold for Bitcoin | Offramp",
    description: "Mail in your gold and get Bitcoin. Free insured shipping kit, XRF assay, BTC payment through Onramp custody.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/mail-in-gold-for-bitcoin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mail In Gold for Bitcoin — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mail In Gold for Bitcoin | Offramp",
    description: "Mail in your gold and get paid in Bitcoin. Free insured shipping, XRF assay, BTC via Onramp custody.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/mail-in-gold-for-bitcoin" },
};

export default function MailInGoldForBitcoinLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Sell Gold for Bitcoin", url: "https://offrampgold.com/sell-gold-for-bitcoin" },
          { name: "Mail In Gold for Bitcoin", url: "https://offrampgold.com/mail-in-gold-for-bitcoin" },
        ]}
      />
      <FAQJsonLd
        questions={[
          { question: "How do I mail in gold for Bitcoin?", answer: "Request a free insured shipping kit from Offramp. Pack your gold items, drop off at USPS, and we handle the rest. Your gold is assayed via XRF spectrometry under video, and Bitcoin is sent through Onramp custody within 48 hours." },
          { question: "Is it safe to mail gold?", answer: "Yes. Offramp provides a free insured shipping kit with tamper-proof packaging and a prepaid USPS Priority Mail label. Every shipment is insured up to $100K and tracked from pickup to delivery." },
          { question: "How long does the mail-in process take?", answer: "Shipping typically takes 2-3 business days. Once received, your gold is assayed and you receive an offer the same day. Accept the offer and Bitcoin is sent within 48 hours — total turnaround is usually under a week." },
          { question: "What gold items can I mail in?", answer: "You can mail any gold: jewelry (rings, chains, bracelets), coins (Eagles, Krugerrands, Maple Leafs), bars, dental gold, scrap, and broken pieces. Any karat, any condition." },
        ]}
      />
      {children}
    </>
  );
}
