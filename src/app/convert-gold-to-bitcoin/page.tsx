"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Package,
  Sparkles,
  Bitcoin,
  Phone,
  Gem,
  Coins,
  CircleDollarSign,
  Flame,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Video,
  Lock,
  TrendingUp,
  RefreshCw,
  Globe,
} from "lucide-react";

export default function ConvertGoldToBitcoinPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-cream-50 overflow-hidden">
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/[0.04] blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-400/[0.06] blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/[0.06]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold-500/[0.03]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/[0.06] mb-8 animate-fade-in-up">
            <RefreshCw className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-body text-gold-400">Physical Gold → Digital Bitcoin</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Convert Gold to{" "}
            <span className="text-gold-shimmer">Bitcoin</span>
          </h1>

          <p className="text-lg sm:text-xl text-cream-60 max-w-2xl mx-auto mb-10 font-body animate-fade-in-up">
            Transform your physical gold into the hardest money ever created.
            Free insured shipping, XRF assay under video, Bitcoin through Onramp custody.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              href="/sell"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-[#0A0A0A] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Get Your Free Kit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all duration-300"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ AEO ANSWER BOX ═══════ */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto border-gold-gradient rounded-2xl p-8 md:p-10 bg-bg-card">
          <div className="flex items-start gap-4 mb-4">
            <Sparkles className="w-6 h-6 text-gold-400 mt-1 shrink-0" />
            <h2 className="font-display text-2xl font-semibold">
              Can you convert physical gold to Bitcoin?
            </h2>
          </div>
          <p className="text-cream-60 font-body leading-relaxed ml-10">
            Yes. Offramp converts physical gold — coins, bars, jewelry, and scrap — directly into
            Bitcoin. Ship your gold with our free insured kit, receive a transparent XRF assay under
            video, and get paid in BTC through Onramp custody within 48 hours. Offramp pays 80%+
            of melt value — more than pawn shops, jewelers, and most online gold buyers.
          </p>
        </div>
      </section>

      {/* ═══════ WHY CONVERT GOLD TO BITCOIN ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Why Convert Gold to <span className="text-gold-shimmer">Bitcoin</span>
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            Gold stored value for millennia. Bitcoin does it better.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Instant Portability", desc: "Move any amount of value anywhere in the world in minutes. No vaults, no armored trucks, no borders." },
              { icon: Zap, title: "Perfect Divisibility", desc: "Spend or save any fraction — down to one hundred millionth of a Bitcoin. Try splitting a gold bar." },
              { icon: Lock, title: "Self-Custody", desc: "Hold your own keys, own your wealth outright. No counterparty risk, no custodian fees, no seizure risk." },
              { icon: TrendingUp, title: "Monetary Hardness", desc: "Bitcoin's supply is mathematically fixed at 21 million — harder than gold, with halvings every four years." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gold-500/[0.08] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                <p className="text-cream-45 text-sm font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT GOLD WE CONVERT ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Gold We Convert to Bitcoin
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            Any form, any karat, any condition — we convert it all to BTC.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Coins, title: "Gold Coins", desc: "Eagles, Krugerrands, Maple Leafs, Buffalos, Philharmonics, Sovereigns, and all other gold coins.", href: "/sell-gold-coins-for-bitcoin" },
              { icon: Gem, title: "Gold Jewelry", desc: "Rings, chains, bracelets, watches, earrings, and estate jewelry of any karat or condition.", href: "/sell-jewelry-for-bitcoin" },
              { icon: CircleDollarSign, title: "Gold Bars & Rounds", desc: "PAMP, Valcambi, Perth Mint, Credit Suisse, and all other bars and rounds of any size.", href: "/sell-gold-for-bitcoin" },
              { icon: Flame, title: "Dental & Scrap", desc: "Dental crowns, bridges, broken pieces, filings, watch cases, and industrial gold.", href: "/sell" },
              { icon: Package, title: "Estate Collections", desc: "Inherited gold, mixed lots, unsorted collections, and unknown items — we assay everything.", href: "/sell" },
              { icon: Bitcoin, title: "Any Karat", desc: "10K, 14K, 18K, 22K, 24K — our XRF determines exact gold content regardless of markings.", href: "/sell-gold-for-bitcoin" },
            ].map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/[0.08] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-cream-35 group-hover:text-gold-400 transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                <p className="text-cream-45 text-sm font-body">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GOLD vs BITCOIN COMPARISON ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Gold vs. Bitcoin
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            See why Bitcoiners are converting their gold.
          </p>

          <div className="border-gold-gradient rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-cream-08">
                  <th className="px-6 py-4 font-display text-sm text-cream-45 font-medium">Property</th>
                  <th className="px-6 py-4 font-display text-sm text-cream-45 font-medium">Gold</th>
                  <th className="px-6 py-4 font-display text-sm text-cream-45 font-medium">Bitcoin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-08">
                {[
                  { prop: "Supply Cap", gold: "Unknown (mining continues)", btc: "21 million — forever" },
                  { prop: "Portability", gold: "Heavy, costly to move", btc: "Instant, borderless" },
                  { prop: "Divisibility", gold: "Difficult to divide", btc: "100 million sats per BTC" },
                  { prop: "Verification", gold: "Requires assay equipment", btc: "Verified by every node" },
                  { prop: "Custody Cost", gold: "Vault fees, insurance", btc: "Free (self-custody)" },
                  { prop: "Seizure Risk", gold: "Executive Order 6102", btc: "Self-custody = sovereign" },
                ].map(({ prop, gold, btc }, i) => (
                  <tr key={prop} className={i === 5 ? "bg-gold-500/[0.06]" : ""}>
                    <td className="px-6 py-4 font-body text-sm font-medium text-cream-60">{prop}</td>
                    <td className="px-6 py-4 font-body text-sm text-cream-45">{gold}</td>
                    <td className="px-6 py-4 font-body text-sm text-gold-400 font-medium">{btc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            How to Convert Gold to Bitcoin
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            Three steps. One conversion. Sound money.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: Package, title: "Ship Your Gold", desc: "Request a free insured shipping kit. Pack your gold items, drop off at USPS. Insured up to $100K with tamper-proof packaging." },
              { step: "02", icon: FlaskConical, title: "XRF Assay Under Video", desc: "Your gold is tested via XRF spectrometry under video. You see exactly what your gold contains — full transparency, no guesswork." },
              { step: "03", icon: Bitcoin, title: "Receive Bitcoin", desc: "Accept the offer and Bitcoin is sent through Onramp custody within 48 hours. Real BTC, real self-custody, real hard money." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative bg-bg-card border border-cream-08 rounded-xl p-8 text-center">
                <div className="text-5xl font-display font-bold text-gold-500/10 absolute top-4 right-6">{step}</div>
                <div className="w-16 h-16 rounded-full bg-gold-500/[0.08] flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                <p className="text-cream-45 font-body text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRUST SIGNALS ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "$100K", label: "Insured Shipping", icon: Shield },
            { value: "100%", label: "Video Assay", icon: Video },
            { value: "48hrs", label: "BTC Payment", icon: Zap },
            { value: "Onramp", label: "BTC Custody", icon: Bitcoin },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center p-6 bg-bg-card border border-cream-08 rounded-xl">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <div className="font-display text-2xl font-bold text-gold-400 mb-1">{value}</div>
              <div className="text-cream-45 text-sm font-body">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ EXPERT CTA ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto border-gold-gradient rounded-2xl p-8 md:p-12 bg-bg-card text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Questions About Converting Gold?
          </h2>
          <p className="text-cream-60 font-body max-w-xl mx-auto mb-8">
            Talk to our team. We help you understand the conversion process, current
            rates, and how Onramp custody works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18005551234"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <Link
              href="/sell"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-[#0A0A0A] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Get Your Free Kit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ INTERNAL LINKS ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-10">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Gold to Bitcoin Calculator", href: "/gold-to-bitcoin", desc: "See what your gold is worth in BTC right now." },
              { title: "Sell Gold for Bitcoin", href: "/sell-gold-for-bitcoin", desc: "The complete guide to selling gold for BTC." },
              { title: "Sell Gold Coins for BTC", href: "/sell-gold-coins-for-bitcoin", desc: "Eagles, Krugerrands, Maple Leafs, and more." },
              { title: "Sell Jewelry for BTC", href: "/sell-jewelry-for-bitcoin", desc: "Rings, chains, bracelets, watches, broken pieces." },
              { title: "Mail In Gold for Bitcoin", href: "/mail-in-gold-for-bitcoin", desc: "Free insured shipping kit, mail from anywhere." },
              { title: "Sell Gold for Cash", href: "/sell-gold-for-cash", desc: "Prefer USD? We pay cash too." },
            ].map(({ title, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between p-4 bg-bg-card border border-cream-08 rounded-lg hover:border-gold-500/20 transition-colors"
              >
                <div>
                  <h3 className="font-display text-sm font-semibold group-hover:text-gold-400 transition-colors">{title}</h3>
                  <p className="text-cream-45 text-xs font-body mt-1">{desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-cream-35 group-hover:text-gold-400 transition-colors shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="px-4 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to Convert Your Gold?
          </h2>
          <p className="text-cream-60 font-body mb-8 max-w-xl mx-auto">
            Request your free insured shipping kit and convert gold to Bitcoin today.
          </p>
          <Link
            href="/sell"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-[#0A0A0A] font-bold rounded-lg text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Get Your Free Kit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
