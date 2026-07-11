import type { Metadata } from "next";
import { WebApplicationJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "14K Gold Price Per Gram Today | Live Calculator | Offramp",
  description:
    "The current 14K gold price per gram is updated live. 14K gold contains 58.3% pure gold. Calculate your 14K gold value instantly with the Offramp calculator.",
  alternates: { canonical: "https://offrampgold.com/calculators/14k" },
  openGraph: {
    images: [{ url: "/api/og?t=14K%20Gold%20Price%20Per%20Gram%20Today%20%E2%80%94%20Live%20Calculator", width: 1200, height: 630, alt: "14K Gold Price Per Gram Today — Live Calculator — Offramp" }],
    title: "14K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 14K gold price per gram is updated live. 14K gold contains 58.3% pure gold. Calculate your 14K gold value instantly.",
    url: "https://offrampgold.com/calculators/14k",
  },
  twitter: {
    card: "summary_large_image",
    title: "14K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 14K gold price per gram is updated live. 14K gold contains 58.3% pure gold.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Calculators", url: "https://offrampgold.com/calculators" },
          { name: "14K Gold Calculator", url: "https://offrampgold.com/calculators/14k" },
        ]}
      />
      <WebApplicationJsonLd
        name="14K Gold Price Calculator"
        description="The current 14K gold price per gram is updated live. 14K gold contains 58.3% pure gold. Calculate your 14K gold value instantly."
        url="https://offrampgold.com/calculators/14k"
      />
      {children}
    </>
  );
}
