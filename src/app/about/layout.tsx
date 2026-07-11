import type { Metadata } from "next";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Offramp — Who We Are",
  description:
    "Learn about Offramp by Onramp — the trusted online gold buyer paying 80%+ of melt value. Free insured shipping, assay on camera, fast payment.",
  keywords: [
    "about offramp",
    "online gold buyer",
    "sell gold online",
    "trusted gold buyer",
    "offramp by onramp",
  ],
  openGraph: {
    title: "About Offramp — Who We Are",
    description:
      "Learn about Offramp by Onramp — the trusted online gold buyer paying 80%+ of melt value.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/about",
    images: [{ url: "/api/og?t=About%20Offramp%20%E2%80%94%20Who%20We%20Are", width: 1200, height: 630, alt: "About Offramp — Who We Are — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Offramp — Who We Are",
    description:
      "Learn about Offramp by Onramp — the trusted online gold buyer paying 80%+ of melt value.",
  },
  alternates: { canonical: "https://offrampgold.com/about" },
};

const FAQ_ITEMS = [
  {
    question: "Is Offramp a legitimate gold buyer?",
    answer:
      "Yes. Offramp is operated by Onramp, a registered business. We use precision assay equipment testing under video for full transparency, provide free insured shipping, and pay via bank wire or Bitcoin.",
  },
  {
    question: "How long has Offramp been in business?",
    answer:
      "Offramp is built by the team behind Onramp, which has been operating in the precious metals and Bitcoin space. We combine deep industry expertise with modern technology to offer the best gold-selling experience online.",
  },
  {
    question: "Where is Offramp located?",
    answer:
      "Offramp operates from the United States. All gold shipments are sent to our secure processing facility where items are tested and valued under video.",
  },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "About", url: "https://offrampgold.com/about" },
        ]}
      />
      <FAQJsonLd questions={FAQ_ITEMS} />
      {children}
    </>
  );
}
