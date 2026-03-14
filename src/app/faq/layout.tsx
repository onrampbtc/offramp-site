import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about selling gold with Offramp. Learn about our process, pricing, shipping, payment options, and more.",
  keywords: [
    "sell gold faq",
    "gold selling questions",
    "how to sell gold",
    "gold buyer faq",
    "offramp questions",
    "sell gold for bitcoin faq",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Offramp",
    description:
      "Get answers to common questions about selling gold with Offramp.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/faq",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Offramp FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Offramp",
    description: "Get answers to common questions about selling gold with Offramp.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/faq" },
};

const FAQ_ITEMS = [
  {
    question: "What types of gold does Offramp accept?",
    answer:
      "We accept all forms of gold including jewelry (rings, chains, bracelets, earrings), coins (American Eagles, Krugerrands, Maple Leafs, and more), dental gold, scrap gold, gold bars, and broken or damaged gold items. We test all karats from 8K to 24K.",
  },
  {
    question: "How does the selling process work?",
    answer:
      "It's simple: 1) Request a free insured shipping kit, 2) Pack your gold and ship it to us for free, 3) We test your gold with an XRF spectrometer under video and send you an offer, 4) Accept the offer and get paid via bank wire or Bitcoin within 24-48 hours.",
  },
  {
    question: "How much does Offramp pay for gold?",
    answer:
      "Offramp pays 80% or more of the current melt value of your gold. This is significantly more than pawn shops (20-35%) and most local jewelers (40-60%). Use our gold calculator to see exactly what your gold is worth.",
  },
  {
    question: "Is shipping free and insured?",
    answer:
      "Yes. We provide a free insured shipping kit with prepaid labels. Your gold is fully insured from the moment you hand it to the carrier until we process your payment.",
  },
  {
    question: "How do you test my gold?",
    answer:
      "We use a Thermo Scientific Niton XRF spectrometer — the same technology used by refineries and assay offices. Every test is performed under video so you can see the exact purity and weight readings for your items.",
  },
  {
    question: "Can I get paid in Bitcoin?",
    answer:
      "Yes. Offramp is the bridge between physical gold and the digital economy. You can choose to receive payment via bank wire or Bitcoin to any wallet address you provide.",
  },
  {
    question: "What if I don't accept the offer?",
    answer:
      "No problem. If you decline our offer, we ship your gold back to you at no cost. There's zero risk and no obligation.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Most sellers receive their shipping kit within 2-3 business days. Once we receive your gold, we test and send an offer within 24 hours. Payment is sent within 24-48 hours of acceptance.",
  },
  {
    question: "Do I need to know the karat of my gold?",
    answer:
      "No. Our XRF spectrometer precisely determines the purity of your gold regardless of markings. Many items are unmarked or incorrectly stamped — our testing gives you an accurate reading.",
  },
  {
    question: "Is there a minimum amount of gold I can sell?",
    answer:
      "We accept gold shipments of any size. Whether you have a single ring or a collection of coins, we'll test and make an offer on everything you send.",
  },
];

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "FAQ", url: "https://offrampgold.com/faq" },
        ]}
      />
      <FAQJsonLd questions={FAQ_ITEMS} />
      {children}
    </>
  );
}
