import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Offramp privacy policy — how we collect, use, and protect your personal information when you sell gold for cash or Bitcoin.",
  keywords: ["offramp privacy policy", "gold buyer privacy", "sell gold privacy"],
  openGraph: {
    title: "Privacy Policy | Offramp",
    description: "How Offramp collects, uses, and protects your personal information.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/privacy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Offramp Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Offramp",
    description: "How Offramp collects, uses, and protects your personal information.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/privacy" },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Privacy Policy", url: "https://offrampgold.com/privacy" },
        ]}
      />
      {children}
    </>
  );
}
