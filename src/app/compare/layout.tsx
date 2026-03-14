import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Compare Gold Buyers — Offramp vs Pawn Shops vs Jewelers",
  description:
    "See how Offramp compares to pawn shops, jewelers, and other gold buyers. Live price comparison shows you exactly how much more you earn selling with Offramp.",
  keywords: [
    "compare gold buyers",
    "offramp vs pawn shop",
    "best place to sell gold",
    "gold buyer comparison",
    "sell gold for most money",
    "pawn shop gold prices",
  ],
  openGraph: {
    title: "Compare Gold Buyers — Offramp vs Pawn Shops vs Jewelers",
    description:
      "Live price comparison shows you exactly how much more you earn selling gold with Offramp.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/compare",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Compare Gold Buyers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare Gold Buyers — Offramp vs Pawn Shops vs Jewelers",
    description:
      "Live price comparison shows you exactly how much more you earn selling gold with Offramp.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/compare" },
};

const FAQ_ITEMS = [
  {
    question: "Why does Offramp pay more than pawn shops?",
    answer:
      "Pawn shops have high overhead costs — rent, staff, inventory — and buy gold as a side business. Offramp is a dedicated online gold buyer with lower overhead, so we pass those savings to you by paying 80% or more of melt value.",
  },
  {
    question: "How does Offramp compare to local jewelers?",
    answer:
      "Local jewelers typically pay 40-60% of melt value. Offramp pays 80% or more. Plus, we provide free insured shipping so you don't even need to leave home.",
  },
  {
    question: "Is it safe to mail gold?",
    answer:
      "Yes. Offramp provides free insured shipping kits. Your gold is fully insured from the moment you drop it off at the carrier until we process your payment.",
  },
  {
    question: "How fast does Offramp pay?",
    answer:
      "We process payments within 24-48 hours of receiving and testing your gold. You can choose bank wire or Bitcoin.",
  },
];

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Compare Gold Buyers", url: "https://offrampgold.com/compare" },
        ]}
      />
      <FAQJsonLd questions={FAQ_ITEMS} />
      {children}
    </>
  );
}
