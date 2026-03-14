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
  Layers,
} from "lucide-react";

export default function PreciousMetalsToCryptoPage() {
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
            <Layers className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-body text-gold-400">Gold &middot; Silver &middot; Platinum → Bitcoin</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Precious Metals to{" "}
            <span className="text-gold-shimmer">Crypto</span>
          </h1>

          <p className="text-lg sm:text-xl text-cream-60 max-w-2xl mx-auto mb-10 font-body animate-fade-in-up">
            Convert gold, silver, platinum, and palladium into Bitcoin.
            Free insured shipping, XRF assay under video, BTC through Onramp custody.
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
              Can you convert precious metals to cryptocurrency?
            </h2>
          </div>
          <p className="text-cream-60 font-body leading-relaxed ml-10">
            Yes. Offramp accepts gold, silver, platinum, and palladium in any form — coins, bars,
            jewelry, flatware, scrap, and more — and converts them directly to Bitcoin. Ship your
            metals with our free insured kit, receive a transparent XRF assay under video, and get
            BTC through Onramp custody within 48 hours. No middlemen, no hidden fees.
          </p>
        </div>
      </section>

      {/* ═══════ METALS WE ACCEPT ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Metals We Convert to <span className="text-gold-shimmer">Bitcoin</span>
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            Every precious metal, every form, every condition.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Coins, title: "Gold Coins & Bars", desc: "American Eagles, Krugerrands, Maple Leafs, PAMP bars, and all other gold bullion. Any size, any mint.", href: "/sell-gold-coins-for-bitcoin" },
              { icon: Gem, title: "Gold Jewelry", desc: "Rings, chains, bracelets, watches, estate pieces, and broken jewelry. Any karat, any condition.", href: "/sell-jewelry-for-bitcoin" },
              { icon: CircleDollarSign, title: "Silver Coins & Bars", desc: "Silver Eagles, Morgan dollars, junk silver, .999 bars and rounds, and all other silver bullion.", href: "/sell-silver-for-bitcoin" },
              { icon: Layers, title: "Sterling Silver", desc: "Flatware sets, tea services, candelabras, trays, bowls, and all sterling silver (92.5%) items.", href: "/sell-silver-for-bitcoin" },
              { icon: Flame, title: "Platinum & Palladium", desc: "Platinum coins, bars, jewelry, and palladium items. Tested via XRF for exact metal content.", href: "/sell" },
              { icon: Package, title: "Mixed Collections", desc: "Inherited lots, mixed metals, unsorted collections. We test and separate every piece via XRF.", href: "/sell" },
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

      {/* ═══════ WHY CRYPTO OVER CASH ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            Why Convert to Crypto?
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            Precious metals preserved wealth for centuries. Bitcoin does it for the digital age.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "Fixed Supply", desc: "21 million Bitcoin — ever. Gold supply grows 1-2% yearly from mining. Bitcoin is mathematically scarce." },
              { icon: Zap, title: "Instant Settlement", desc: "Send Bitcoin anywhere in minutes. Moving physical metals takes days, armored transport, and vault access." },
              { icon: TrendingUp, title: "Growing Adoption", desc: "Nation-states, institutions, and individuals are adopting Bitcoin as a treasury asset. Demand is accelerating." },
              { icon: Shield, title: "Onramp Custody", desc: "Your Bitcoin is held by Onramp — a regulated, insured custody platform built for long-term holders." },
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

      {/* ═══════ PRICING COMPARISON ═══════ */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
            How Offramp Compares
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            Better rates, better transparency, better money.
          </p>

          <div className="border-gold-gradient rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-cream-08">
                  <th className="px-6 py-4 font-display text-sm text-cream-45 font-medium">Buyer</th>
                  <th className="px-6 py-4 font-display text-sm text-cream-45 font-medium">% of Melt</th>
                  <th className="px-6 py-4 font-display text-sm text-cream-45 font-medium">Video Assay</th>
                  <th className="px-6 py-4 font-display text-sm text-cream-45 font-medium">BTC Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-08">
                {[
                  { buyer: "Pawn Shops", pct: "20–55%", video: false, btc: false },
                  { buyer: "Local Dealers", pct: "60–75%", video: false, btc: false },
                  { buyer: "Online Buyers", pct: "65–80%", video: false, btc: false },
                  { buyer: "Offramp", pct: "80%+", video: true, btc: true, highlight: true },
                ].map(({ buyer, pct, video, btc, highlight }) => (
                  <tr key={buyer} className={highlight ? "bg-gold-500/[0.06]" : ""}>
                    <td className={`px-6 py-4 font-body text-sm ${highlight ? "text-gold-400 font-semibold" : "text-cream-60"}`}>{buyer}</td>
                    <td className={`px-6 py-4 font-body text-sm ${highlight ? "text-gold-400 font-semibold" : "text-cream-45"}`}>{pct}</td>
                    <td className="px-6 py-4">
                      {video ? <CheckCircle2 className="w-5 h-5 text-gold-400" /> : <span className="text-cream-35 text-sm">—</span>}
                    </td>
                    <td className="px-6 py-4">
                      {btc ? <CheckCircle2 className="w-5 h-5 text-gold-400" /> : <span className="text-cream-35 text-sm">—</span>}
                    </td>
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
            How It Works
          </h2>
          <p className="text-cream-45 text-center max-w-2xl mx-auto mb-14 font-body">
            From precious metals to Bitcoin in three steps.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: Package, title: "Request Your Free Kit", desc: "We send an insured shipping kit with tamper-proof packaging and a prepaid USPS Priority Mail label. Insured up to $100K." },
              { step: "02", icon: FlaskConical, title: "XRF Assay Under Video", desc: "Every item is tested via XRF spectrometry under video. You see exact metal content and purity — full transparency." },
              { step: "03", icon: Bitcoin, title: "Get Bitcoin", desc: "Accept the offer and receive Bitcoin through Onramp custody within 48 hours. Real BTC, real ownership." },
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
            Have Questions About Your Metals?
          </h2>
          <p className="text-cream-60 font-body max-w-xl mx-auto mb-8">
            Not sure what metals you have or what they&apos;re worth? Our team can help you
            understand the process and current spot rates.
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
              { title: "Sell Gold for Bitcoin", href: "/sell-gold-for-bitcoin", desc: "The complete guide to selling gold for BTC." },
              { title: "Sell Silver for Bitcoin", href: "/sell-silver-for-bitcoin", desc: "Coins, bars, rounds, flatware, and sterling." },
              { title: "Sell Gold Coins for BTC", href: "/sell-gold-coins-for-bitcoin", desc: "Eagles, Krugerrands, Maple Leafs, and more." },
              { title: "Sell Jewelry for BTC", href: "/sell-jewelry-for-bitcoin", desc: "Rings, chains, bracelets, watches, broken pieces." },
              { title: "Convert Gold to Bitcoin", href: "/convert-gold-to-bitcoin", desc: "Gold to BTC conversion — rates, process, custody." },
              { title: "Mail In Gold for Bitcoin", href: "/mail-in-gold-for-bitcoin", desc: "Free insured shipping kit, mail from anywhere." },
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
            Ready to Convert Your Precious Metals?
          </h2>
          <p className="text-cream-60 font-body mb-8 max-w-xl mx-auto">
            Request your free insured shipping kit and convert precious metals to Bitcoin today.
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
