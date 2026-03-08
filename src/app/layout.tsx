import type { Metadata } from "next";
import { Cormorant_Garamond, Sora, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Offramp | Sell Gold for Cash or Bitcoin",
    template: "%s | Offramp",
  },
  description:
    "Sell your gold for cash or Bitcoin. Free insured shipping, XRF spectrometer assay under video, wire payment to your bank. The bridge between physical gold and the digital economy.",
  keywords: [
    "sell gold online",
    "sell gold for cash",
    "sell gold for bitcoin",
    "gold to bitcoin",
    "cash for gold",
    "gold calculator",
    "gold price today",
    "sell gold jewelry",
    "sell gold coins",
    "gold buyer online",
  ],
  authors: [{ name: "Offramp by Onramp" }],
  creator: "Offramp",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Offramp",
    title: "Offramp | Sell Gold for Cash or Bitcoin",
    description:
      "Sell your gold for cash or Bitcoin. Free insured shipping, XRF assay, wire payment. The bridge between gold and the digital economy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Offramp — Sell Gold for Cash or Bitcoin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offramp | Sell Gold for Cash or Bitcoin",
    description:
      "Sell your gold for cash or Bitcoin. Free insured shipping, XRF assay, wire payment.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "kE79H4vFl-MtuLVjy_QxEXdEgb0YWarxhZvouY0GLbo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${cormorant.variable} ${sora.variable} ${dmMono.variable} font-body antialiased bg-bg text-cream`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
