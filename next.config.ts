import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Migration map per docs/BUILD-SPEC.md §3: thin bitcoin-keyword pages 301
  // into /gold-to-bitcoin ("sell gold for bitcoin" = 20 searches/mo; BTC is a
  // differentiator, not an acquisition channel). /blog/* 301s land in M3 when
  // their /guides/ and /learn/ targets exist.
  async redirects() {
    return [
      { source: "/sell-gold-for-bitcoin", destination: "/gold-to-bitcoin", permanent: true },
      { source: "/sell-jewelry-for-bitcoin", destination: "/gold-to-bitcoin", permanent: true },
      { source: "/sell-silver-for-bitcoin", destination: "/gold-to-bitcoin", permanent: true },
      { source: "/sell-gold-coins-for-bitcoin", destination: "/gold-to-bitcoin", permanent: true },
      { source: "/convert-gold-to-bitcoin", destination: "/gold-to-bitcoin", permanent: true },
      { source: "/mail-in-gold-for-bitcoin", destination: "/gold-to-bitcoin", permanent: true },
      { source: "/precious-metals-to-crypto", destination: "/gold-to-bitcoin", permanent: true },
    ];
  },
};

export default nextConfig;
