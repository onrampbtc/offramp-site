import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Dental Gold — Dental Gold Value Calculator | Offramp",
  description:
    "Find out what your dental gold is worth and sell it for cash. Free dental gold value calculator for crowns, bridges, and dental scrap. XRF analysis, insured shipping, fair payouts.",
  alternates: { canonical: "https://offrampgold.com/sell-dental-gold" },
  openGraph: {
    title: "Sell Dental Gold — Dental Gold Value Calculator | Offramp",
    description:
      "Find out what your dental gold is worth and sell it for cash. Free dental gold value calculator for crowns, bridges, and dental scrap.",
    url: "https://offrampgold.com/sell-dental-gold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Dental Gold — Dental Gold Value Calculator | Offramp",
    description:
      "Free dental gold value calculator for crowns, bridges, and dental scrap. XRF assay, insured shipping.",
  },
};

export default function SellDentalGoldLayout({
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
          { name: "Sell Dental Gold", url: "https://offrampgold.com/sell-dental-gold" },
        ]}
      />
      {children}
    </>
  );
}
