import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Offramp terms of service — the terms and conditions governing the use of our gold-selling platform and services.",
  keywords: ["offramp terms of service", "gold buyer terms", "sell gold terms"],
  openGraph: {
    title: "Terms of Service | Offramp",
    description: "Terms and conditions for using the Offramp gold-selling platform.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/terms",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Offramp Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Offramp",
    description: "Terms and conditions for using the Offramp gold-selling platform.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/terms" },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Terms of Service", url: "https://offrampgold.com/terms" },
        ]}
      />
      {children}
    </>
  );
}
