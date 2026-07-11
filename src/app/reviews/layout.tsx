import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials",
  description:
    "Read reviews from real customers who sold their gold with Offramp. See why sellers trust us for the best payouts, fast payment, and transparent professional testing.",
  keywords: [
    "offramp reviews",
    "gold buyer reviews",
    "sell gold reviews",
    "offramp testimonials",
    "trusted gold buyer",
    "best gold buyer reviews",
  ],
  openGraph: {
    title: "Customer Reviews & Testimonials | Offramp",
    description:
      "Read reviews from real customers who sold their gold with Offramp.",
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    url: "https://offrampgold.com/reviews",
    images: [{ url: "/api/og?t=Customer%20Reviews%20%26%20Testimonials", width: 1200, height: 630, alt: "Customer Reviews & Testimonials — Offramp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Testimonials | Offramp",
    description: "Read reviews from real customers who sold their gold with Offramp.",
  },
  alternates: { canonical: "https://offrampgold.com/reviews" },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Reviews", url: "https://offrampgold.com/reviews" },
        ]}
      />
      {children}
    </>
  );
}
