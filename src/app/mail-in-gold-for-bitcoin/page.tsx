import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Package,
  Clock,
  Sparkles,
  Bitcoin,
  Phone,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Video,
  Lock,
  TrendingUp,
  Truck,
  MapPin,
  ScanLine,
} from "lucide-react";

export default function MailInGoldForBitcoinPage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-body">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/[0.06] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/[0.04] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-gold-500/[0.03] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/[0.06] mb-8">
            <Truck className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
              Free Insured Shipping → Bitcoin
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-6">
            Mail In Gold for{" "}
            <span className="text-gold-shimmer font-normal">Bitcoin</span>
          </h1>

          <p className="text-lg md:text-xl text-cream-60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ship your gold from anywhere in the US — free insured kit, XRF assay
            under video, Bitcoin through Onramp custody. No local buyer needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-kit"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Get Your Free Kit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all duration-300"
            >
              <Package className="w-4 h-4" />
              See the Process
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AEO ANSWER BOX
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-gold-gradient rounded-2xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
                Quick Answer
              </p>
              <p className="text-cream-60 leading-relaxed">
                <strong className="text-cream">Yes, you can mail in gold and get paid in Bitcoin.</strong>{" "}
                Offramp sends you a free insured shipping kit with a prepaid USPS Priority Mail label
                and tamper-proof packaging. Ship your gold from anywhere in the US — jewelry, coins,
                bars, dental, or scrap. We assay with XRF spectrometry under video and pay you in BTC
                through Onramp custody within 48 hours. Shipments are insured up to $100K.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY MAIL IN YOUR GOLD
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            Skip the Local Buyer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Why Mail In Your Gold?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: MapPin,
              title: "No Local Buyer Needed",
              description:
                "No pawn shops, no driving around for quotes. Mail your gold from anywhere in the US and get paid in Bitcoin — no matter where you live.",
            },
            {
              icon: Shield,
              title: "Fully Insured Transit",
              description:
                "Every shipment is insured up to $100K with tamper-proof packaging and tracking from pickup to delivery. Your gold is protected the entire way.",
            },
            {
              icon: Video,
              title: "Video-Recorded Assay",
              description:
                "Watch your gold get tested. Every XRF assay is recorded on video so you can see exactly how your gold content was measured — total transparency.",
            },
            {
              icon: TrendingUp,
              title: "Better Rates Than Local",
              description:
                "Offramp pays 80%+ of melt value — significantly more than pawn shops (20-55%) and most local jewelers (50-70%). Lower overhead means higher payouts.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-500/[0.08] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">{title}</h3>
                  <p className="text-cream-45 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT YOU CAN MAIL
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            What to Ship
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Mail Any Gold. Get Bitcoin.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: "Jewelry",
              items: "Rings, chains, bracelets, watches, earrings, broken pieces",
              href: "/sell-jewelry-for-bitcoin",
            },
            {
              icon: Bitcoin,
              title: "Coins & Bullion",
              items: "Eagles, Krugerrands, Maple Leafs, bars, rounds of any size",
              href: "/sell-gold-coins-for-bitcoin",
            },
            {
              icon: FlaskConical,
              title: "Dental Gold",
              items: "Crowns, bridges, inlays — any dental restoration with gold",
              href: "/sell",
            },
            {
              icon: Zap,
              title: "Scrap & Broken",
              items: "Any karat, any condition — we pay by pure gold weight",
              href: "/sell",
            },
            {
              icon: Package,
              title: "Estate Collections",
              items: "Inherited jewelry, mixed lots, entire collections welcome",
              href: "/sell",
            },
            {
              icon: ScanLine,
              title: "Any Karat",
              items: "10K, 14K, 18K, 22K, 24K — XRF determines exact gold content",
              href: "/gold-to-bitcoin",
            },
          ].map(({ icon: Icon, title, items, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-display text-lg mb-2 group-hover:text-gold-400 transition-colors">
                {title}
              </h3>
              <p className="text-cream-45 text-sm leading-relaxed">{items}</p>
              <div className="mt-4 flex items-center gap-1 text-gold-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Mail-In Buyers Compared
          </h2>
        </div>

        <div className="border-gold-gradient rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream-08">
                <th className="text-left p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">Buyer</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">% of Melt</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">Video Assay</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">BTC Payment</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Cash for Gold (TV Ads)</td>
                <td className="p-4 text-center font-mono text-cream-45">20–50%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">No</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Online Gold Buyers</td>
                <td className="p-4 text-center font-mono text-cream-45">60–75%</td>
                <td className="p-4 text-center text-cream-35">Rarely</td>
                <td className="p-4 text-center text-cream-35">No</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Refineries (Direct)</td>
                <td className="p-4 text-center font-mono text-cream-45">90–97%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">No</td>
              </tr>
              <tr className="bg-gold-500/[0.06]">
                <td className="p-4 font-semibold text-gold-400">Offramp</td>
                <td className="p-4 text-center font-mono font-semibold text-gold-400">80%+</td>
                <td className="p-4 text-center text-gold-400">
                  <CheckCircle2 className="w-5 h-5 mx-auto" />
                </td>
                <td className="p-4 text-center text-gold-400">
                  <CheckCircle2 className="w-5 h-5 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-cream-35 text-xs mt-4">
          Offramp is the only mail-in gold buyer offering Bitcoin payment through regulated custody.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            3 Simple Steps
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            How Mail-In Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: Package,
              title: "Request Your Free Kit",
              description:
                "We send a free insured shipping kit to your door with a prepaid USPS Priority Mail label and tamper-proof packaging. Arrives in 2–3 days.",
            },
            {
              step: "02",
              icon: FlaskConical,
              title: "Pack & Drop Off",
              description:
                "Place your gold items in the kit, seal it, and drop off at any USPS location. Your shipment is tracked and insured up to $100K from pickup to delivery.",
            },
            {
              step: "03",
              icon: Bitcoin,
              title: "Assay & Bitcoin",
              description:
                "We XRF assay your gold under video and send you an offer. Accept it and receive BTC through Onramp custody within 48 hours.",
            },
          ].map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 rounded-full border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-mono text-gold-400 text-lg">{step}</span>
              </div>
              <Icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-xl mb-3">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm"
          >
            See detailed process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST SIGNALS
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, stat: "$100K", label: "Insured Shipping", detail: "Every package fully covered" },
            { icon: Video, stat: "100%", label: "Video Assay", detail: "XRF testing on camera" },
            { icon: Truck, stat: "Free", label: "Shipping Kit", detail: "Prepaid Priority Mail" },
            { icon: Lock, stat: "Onramp", label: "BTC Custody", detail: "Institutional-grade security" },
          ].map(({ icon: Icon, stat, label, detail }) => (
            <div key={label} className="text-center bg-bg-card border border-cream-08 rounded-xl p-6">
              <Icon className="w-6 h-6 text-gold-400 mx-auto mb-3" />
              <p className="font-mono text-2xl text-gold-400 mb-1">{stat}</p>
              <p className="font-display text-sm mb-1">{label}</p>
              <p className="text-cream-35 text-xs">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERT CTA
      ═══════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-gold-gradient rounded-2xl p-8 md:p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-light mb-4">
            Questions About Mailing Gold?
          </h2>
          <p className="text-cream-60 mb-8 max-w-xl mx-auto">
            Our team will walk you through the shipping process, answer questions about
            insurance, and help you get the best value for your gold — paid in Bitcoin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <Link
              href="/get-kit"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Get Your Free Kit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTERNAL LINKS
      ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-light">Explore More</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Gold to Bitcoin Calculator", description: "See how much BTC your gold is worth at current spot prices.", href: "/gold-to-bitcoin" },
            { title: "Sell Gold for Bitcoin", description: "Learn about converting all types of gold into Bitcoin.", href: "/sell-gold-for-bitcoin" },
            { title: "Sell Gold Coins for Bitcoin", description: "Eagles, Krugerrands, Maple Leafs, and more to BTC.", href: "/sell-gold-coins-for-bitcoin" },
            { title: "Sell Jewelry for Bitcoin", description: "Rings, chains, watches — any gold jewelry accepted.", href: "/sell-jewelry-for-bitcoin" },
            { title: "How It Works", description: "Detailed walkthrough of our process from kit to Bitcoin.", href: "/how-it-works" },
            { title: "Sell Gold for Cash", description: "Prefer USD? Get wire payment within 48 hours instead.", href: "/sell" },
          ].map(({ title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <h3 className="font-display text-lg mb-2 group-hover:text-gold-400 transition-colors">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed">{description}</p>
              <div className="mt-4 flex items-center gap-1 text-gold-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">
            Ready to Mail Your Gold for{" "}
            <span className="text-gold-shimmer">Bitcoin</span>?
          </h2>
          <p className="text-cream-60 text-lg mb-10 max-w-xl mx-auto">
            Free insured kit. Ship from anywhere. 48-hour BTC payment.
            No local buyer needed.
          </p>
          <Link
            href="/get-kit"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg text-lg font-semibold rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Get Your Free Shipping Kit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
