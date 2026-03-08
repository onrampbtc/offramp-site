import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "14K Gold Price Per Gram Today | Live Calculator | Offramp",
  description:
    "The current 14K gold price per gram is updated live. 14K gold contains 58.3% pure gold. Calculate your 14K gold value instantly with the Offramp calculator.",
  openGraph: {
    title: "14K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 14K gold price per gram is updated live. 14K gold contains 58.3% pure gold. Calculate your 14K gold value instantly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "14K Gold Price Per Gram Today | Live Calculator | Offramp",
    description:
      "The current 14K gold price per gram is updated live. 14K gold contains 58.3% pure gold.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
