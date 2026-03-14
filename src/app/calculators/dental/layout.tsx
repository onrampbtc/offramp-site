import type { Metadata } from "next";
import { WebApplicationJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dental Gold Value Calculator | Offramp",
  description:
    "Dental gold is typically 16K-20K purity and ranges from 1-10 grams per piece. Calculate the value of your dental gold crowns, bridges, and fillings with the Offramp calculator.",
  openGraph: {
    title: "Dental Gold Value Calculator | Offramp",
    description:
      "Dental gold is typically 16K-20K purity and ranges from 1-10 grams per piece. Calculate your dental gold value instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Gold Value Calculator | Offramp",
    description:
      "Dental gold is typically 16K-20K purity and ranges from 1-10 grams per piece.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Calculators", url: "https://offrampgold.com/calculators" },
          { name: "Dental Gold Calculator", url: "https://offrampgold.com/calculators/dental" },
        ]}
      />
      <WebApplicationJsonLd
        name="Dental Gold Value Calculator"
        description="Dental gold is typically 16K-20K purity. Calculate the value of your dental gold crowns, bridges, and fillings with live spot prices."
        url="https://offrampgold.com/calculators/dental"
      />
      {children}
    </>
  );
}
