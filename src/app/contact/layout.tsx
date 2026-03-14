import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Offramp. Questions about selling your gold for cash or Bitcoin? Contact our team for fast, friendly support.",
  keywords: [
    "contact offramp",
    "gold buyer contact",
    "sell gold help",
    "offramp support",
    "gold selling questions",
  ],
  openGraph: {
    title: "Contact Us | Offramp",
    description: "Get in touch with the Offramp team for questions about selling your gold.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Offramp",
    description: "Get in touch with the Offramp team for questions about selling your gold.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://offrampgold.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Contact", url: "https://offrampgold.com/contact" },
        ]}
      />
      {children}
    </>
  );
}
