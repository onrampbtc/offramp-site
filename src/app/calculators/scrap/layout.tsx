import type { Metadata } from "next";
import { WebApplicationJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Scrap Gold Calculator — Current Scrap Gold Price Per Gram | Offramp",
  description:
    "Calculate your scrap gold value instantly with live spot prices. Get current scrap gold prices per gram for 10K, 14K, 18K, 22K, and 24K. Free scrap gold calculator updated in real time.",
  alternates: { canonical: "https://offrampgold.com/calculators/scrap" },
  openGraph: {
    images: [{ url: "/api/og?t=Scrap%20Gold%20Calculator%20%E2%80%94%20Current%20Scrap%20Gold%20Price%20Per%20Gram", width: 1200, height: 630, alt: "Scrap Gold Calculator — Current Scrap Gold Price Per Gram — Offramp" }],
    title: "Scrap Gold Calculator — Current Scrap Gold Price Per Gram | Offramp",
    description:
      "Calculate your scrap gold value instantly with live spot prices for all karats. Free scrap gold calculator.",
    url: "https://offrampgold.com/calculators/scrap",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrap Gold Calculator — Current Scrap Gold Price Per Gram | Offramp",
    description:
      "Calculate your scrap gold value instantly with live spot prices for all karats.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Calculators", url: "https://offrampgold.com/calculators" },
          { name: "Scrap Gold Calculator", url: "https://offrampgold.com/calculators/scrap" },
        ]}
      />
      <WebApplicationJsonLd
        name="Scrap Gold Calculator"
        description="Calculate the value of your scrap gold based on weight, purity, and today's spot price. Instant estimates for all karats."
        url="https://offrampgold.com/calculators/scrap"
      />
      {children}
    </>
  );
}
