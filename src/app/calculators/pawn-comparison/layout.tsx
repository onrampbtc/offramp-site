import type { Metadata } from "next";
import { WebApplicationJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pawn Shop Gold Calculator | Compare Offers | Offramp",
  description:
    "Pawn shops typically pay 20-55% of gold's melt value due to overhead costs and profit margins. Compare pawn shop, jeweler, and Offramp payouts side by side.",
  openGraph: {
    title: "Pawn Shop Gold Calculator | Compare Offers | Offramp",
    description:
      "Pawn shops typically pay 20-55% of gold's melt value due to overhead costs and profit margins. Compare offers side by side.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawn Shop Gold Calculator | Compare Offers | Offramp",
    description:
      "Pawn shops typically pay 20-55% of gold's melt value. Compare offers side by side.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Calculators", url: "https://offrampgold.com/calculators" },
          { name: "Pawn Shop Comparison", url: "https://offrampgold.com/calculators/pawn-comparison" },
        ]}
      />
      <WebApplicationJsonLd
        name="Pawn Shop Gold Calculator"
        description="Compare pawn shop, jeweler, and Offramp payouts side by side. Pawn shops typically pay 20-55% of gold's melt value."
        url="https://offrampgold.com/calculators/pawn-comparison"
      />
      {children}
    </>
  );
}
