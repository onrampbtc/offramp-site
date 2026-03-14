import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Buy Physical Gold With Bitcoin | Offramp by Onramp",
  description:
    "Offramp lets you buy physical gold using Bitcoin. Sell BTC through Onramp, receive USD, and purchase gold coins or bars through Offramp. The two-way bridge between digital and physical hard money.",
  openGraph: {
    title: "Buy Physical Gold With Bitcoin | Offramp by Onramp",
    description:
      "Buy physical gold using Bitcoin. The two-way bridge between digital and physical hard money.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Physical Gold With Bitcoin | Offramp by Onramp",
    description:
      "Buy physical gold using Bitcoin through Offramp. The two-way bridge between digital and physical hard money.",
  },
};

export default function BuyGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Buy Gold with Bitcoin", url: "https://offrampgold.com/buy-gold" },
        ]}
      />
      {children}
    </>
  );
}
