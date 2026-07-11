import type { Metadata } from "next";
import { WebApplicationJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "10K Gold Price Per Gram Today | Live Calculator | Offramp",
  description:
    "The current 10K gold price per gram is updated live. 10K gold contains 41.7% pure gold. Calculate your 10K gold value instantly with the Offramp calculator.",
  alternates: { canonical: "https://offrampgold.com/calculators/10k" },
  openGraph: {
    images: [{ url: "/api/og?t=10K%20Gold%20Price%20Per%20Gram%20Today%20%E2%80%94%20Live%20Calculator", width: 1200, height: 630, alt: "10K Gold Price Per Gram Today — Live Calculator — Offramp" }],
    title: "10K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 10K gold price per gram is updated live. 10K gold contains 41.7% pure gold. Calculate your 10K gold value instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "10K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 10K gold price per gram is updated live. 10K gold contains 41.7% pure gold.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Calculators", url: "https://offrampgold.com/calculators" },
          { name: "10K Gold Calculator", url: "https://offrampgold.com/calculators/10k" },
        ]}
      />
      <WebApplicationJsonLd
        name="10K Gold Price Calculator"
        description="The current 10K gold price per gram is updated live. 10K gold contains 41.7% pure gold. Calculate your 10K gold value instantly."
        url="https://offrampgold.com/calculators/10k"
      />
      {children}
    </>
  );
}
