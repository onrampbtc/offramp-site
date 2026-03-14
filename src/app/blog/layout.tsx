import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog | Offramp",
  description:
    "Expert insights on selling gold, converting precious metals to Bitcoin, market analysis, and guides to getting the best value for your gold.",
  alternates: { canonical: "https://offrampgold.com/blog" },
  openGraph: {
    title: "Offramp Blog — Gold, Bitcoin & Precious Metals Insights",
    description:
      "Expert insights on selling gold, converting precious metals to Bitcoin, and getting the best value.",
    url: "https://offrampgold.com/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Blog", url: "https://offrampgold.com/blog" },
        ]}
      />
      {children}
    </>
  );
}
