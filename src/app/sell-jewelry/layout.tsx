import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Gold Jewelry for Cash Online | Offramp",
  description:
    "Sell gold jewelry for cash online. Offramp buys gold jewelry in any condition — broken, damaged, or outdated. All karats accepted: 10K, 14K, 18K, 22K, 24K. Free insured shipping, XRF assay, 48hr payment.",
  openGraph: {
    title: "Sell Gold Jewelry for Cash Online | Offramp",
    description:
      "Sell gold jewelry for cash online. All karats, any condition. Free insured shipping, XRF assay, 48hr payment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold Jewelry for Cash Online | Offramp",
    description:
      "Sell gold jewelry for cash online. All karats, any condition. Free insured shipping, XRF assay, 48hr payment.",
  },
};

export default function SellJewelryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
