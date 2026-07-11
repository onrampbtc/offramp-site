import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Gold Calculator Widget | Embed on Your Site",
  description:
    "Embed the Offramp gold value calculator on your own site with one iframe snippet. Live spot prices, every karat, no signup required.",
  alternates: { canonical: "https://offrampgold.com/widget" },
};

export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
