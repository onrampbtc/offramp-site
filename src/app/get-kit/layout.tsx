import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Get Your Free Shipping Kit",
  description:
    "Request your free insured shipping kit to sell gold for cash or Bitcoin. Prepaid USPS Priority Mail with up to $100,000 insurance. No obligation.",
  openGraph: {
    title: "Get Your Free Gold Shipping Kit | Offramp",
    description:
      "Free insured shipping kit to sell your gold. Prepaid Priority Mail, tamper-proof packaging, $100K insurance. Get paid in USD or Bitcoin.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Free Gold Shipping Kit | Offramp",
    description:
      "Free insured shipping kit to sell your gold. Prepaid Priority Mail, tamper-proof packaging, $100K insurance.",
  },
};

export default function GetKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Get Free Shipping Kit", url: "https://offrampgold.com/get-kit" },
        ]}
      />
      {children}
    </>
  );
}
