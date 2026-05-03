import type { MetadataRoute } from "next";

const BASE_URL = "https://offrampgold.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages = [
    { url: "/", changeFrequency: "daily" as const, priority: 1.0 },
    { url: "/sell", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/how-it-works", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/gold-calculator", changeFrequency: "daily" as const, priority: 0.9 },
    { url: "/gold-to-bitcoin", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/gold-price", changeFrequency: "daily" as const, priority: 0.9 },
    { url: "/get-kit", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/buy-gold", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/sell-jewelry", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/sell-coins", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/sell-dental-gold", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/sell-gold-for-bitcoin", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/sell-gold-coins-for-bitcoin", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/sell-jewelry-for-bitcoin", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/sell-silver-for-bitcoin", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/convert-gold-to-bitcoin", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/mail-in-gold-for-bitcoin", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/precious-metals-to-crypto", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/calculators/14k", changeFrequency: "daily" as const, priority: 0.8 },
    { url: "/calculators/10k", changeFrequency: "daily" as const, priority: 0.7 },
    { url: "/calculators/18k", changeFrequency: "daily" as const, priority: 0.7 },
    { url: "/calculators/scrap", changeFrequency: "daily" as const, priority: 0.8 },
    { url: "/calculators/dental", changeFrequency: "daily" as const, priority: 0.7 },
    { url: "/calculators/pawn-comparison", changeFrequency: "daily" as const, priority: 0.8 },
    { url: "/guide/bitcoin-vs-gold", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/guide/where-to-sell-gold", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/guide/best-place-sell-gold", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/guide/how-to-sell-gold-jewelry", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/guide/sell-inherited-gold", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/guide/how-to-sell-scrap-gold", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/guide/pawn-shop-gold-prices", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/guide/when-to-sell-gold", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/guide/digital-gold", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/guide/gold-vs-bitcoin-investment", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/guide/money-printing", changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "/guide/currency-debasement", changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "/guide/store-of-value", changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "/guide/hard-money", changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "/guide/gold-standard", changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/blog/should-i-sell-gold-for-bitcoin", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog/best-way-to-convert-gold-to-bitcoin", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog/gold-vs-bitcoin-investment-comparison", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog/how-to-sell-gold-coins-online", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog/is-bitcoin-the-new-gold", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog/best-place-to-sell-gold", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
