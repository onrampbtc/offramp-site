import type { Metadata } from "next";
import { WebApplicationJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "18K Gold Price Per Gram Today | Live Calculator | Offramp",
  description:
    "The current 18K gold price per gram is updated live. 18K gold contains 75% pure gold. Calculate your 18K gold value instantly with the Offramp calculator.",
  alternates: { canonical: "https://offrampgold.com/calculators/18k" },
  openGraph: {
    images: [{ url: "/api/og?t=18K%20Gold%20Price%20Per%20Gram%20Today%20%E2%80%94%20Live%20Calculator", width: 1200, height: 630, alt: "18K Gold Price Per Gram Today — Live Calculator — Offramp" }],
    title: "18K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 18K gold price per gram is updated live. 18K gold contains 75% pure gold. Calculate your 18K gold value instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "18K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 18K gold price per gram is updated live. 18K gold contains 75% pure gold.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Calculators", url: "https://offrampgold.com/calculators" },
          { name: "18K Gold Calculator", url: "https://offrampgold.com/calculators/18k" },
        ]}
      />
      <WebApplicationJsonLd
        name="18K Gold Price Calculator"
        description="The current 18K gold price per gram is updated live. 18K gold contains 75% pure gold. Calculate your 18K gold value instantly."
        url="https://offrampgold.com/calculators/18k"
      />
      {children}
    </>
  );
}
