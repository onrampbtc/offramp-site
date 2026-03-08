import type { Metadata } from "next";

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
  return <>{children}</>;
}
