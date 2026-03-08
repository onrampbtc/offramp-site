import type { Metadata } from "next";
import { WebApplicationJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gold Calculator: What Is Your Gold Worth? | Offramp",
  description:
    "Calculate the value of your gold in USD and Bitcoin. Live spot prices updated every 60 seconds. Enter weight and karat for instant value.",
  openGraph: {
    title: "Gold Calculator: What Is Your Gold Worth? | Offramp",
    description:
      "Calculate the value of your gold in USD and Bitcoin. Live spot prices updated every 60 seconds. Enter weight and karat for instant value.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gold Calculator — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Calculator: What Is Your Gold Worth? | Offramp",
    description:
      "Calculate the value of your gold in USD and Bitcoin. Live spot prices updated every 60 seconds.",
    images: ["/og-image.png"],
  },
};

export default function GoldCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Gold Calculator", url: "https://offrampgold.com/gold-calculator" },
        ]}
      />
      <WebApplicationJsonLd
        name="Gold Value Calculator"
        description="Free gold calculator with live spot prices. Calculate the value of your gold in USD and Bitcoin by weight and karat."
        url="https://offrampgold.com/gold-calculator"
      />
      {children}
    </>
  );
}
