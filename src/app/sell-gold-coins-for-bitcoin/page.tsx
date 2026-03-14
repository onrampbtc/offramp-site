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
  Coins,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Video,
  Lock,
  Award,
  Star,
} from "lucide-react";

export default function SellGoldCoinsForBitcoinPage() {
  return (
    <main className="min-h-screen bg-bg text-cream font-body">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/[0.06] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-500/[0.04] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-gold-500/[0.03] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/[0.06] mb-8">
            <Coins className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
              Eagles · Krugerrands · Maple Leafs · Buffalos
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-6">
            Sell Gold Coins for{" "}
            <span className="text-gold-shimmer font-normal">Bitcoin</span>
          </h1>

          <p className="text-lg md:text-xl text-cream-60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Convert your gold coins into Bitcoin. American Eagles, Krugerrands,
            Maple Leafs, Philharmonics, and more — all accepted, all paid in BTC.
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
              href="/gold-to-bitcoin"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all duration-300"
            >
              <Bitcoin className="w-4 h-4" />
              Coin→BTC Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* AEO ANSWER BOX */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-gold-gradient rounded-2xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
                Quick Answer
              </p>
              <p className="text-cream-60 leading-relaxed">
                <strong className="text-cream">Yes, you can sell gold coins for Bitcoin.</strong>{" "}
                Offramp accepts all government-minted gold coins including American Eagles, Canadian
                Maple Leafs, South African Krugerrands, Austrian Philharmonics, American Buffalos,
                and more. Ship your coins with our free insured kit, and we pay 80%+ of melt value
                in Bitcoin through Onramp custody — typically within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COINS WE ACCEPT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            All Major Mints
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Gold Coins We Accept
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "American Gold Eagle",
              purity: "91.67% (22K)",
              sizes: "1 oz, 1/2 oz, 1/4 oz, 1/10 oz",
              icon: Star,
            },
            {
              name: "Canadian Maple Leaf",
              purity: "99.99% (24K)",
              sizes: "1 oz, 1/2 oz, 1/4 oz, 1/10 oz, 1/20 oz",
              icon: Award,
            },
            {
              name: "South African Krugerrand",
              purity: "91.67% (22K)",
              sizes: "1 oz, 1/2 oz, 1/4 oz, 1/10 oz",
              icon: Coins,
            },
            {
              name: "Austrian Philharmonic",
              purity: "99.99% (24K)",
              sizes: "1 oz, 1/2 oz, 1/4 oz, 1/10 oz",
              icon: Star,
            },
            {
              name: "American Gold Buffalo",
              purity: "99.99% (24K)",
              sizes: "1 oz",
              icon: Award,
            },
            {
              name: "Any Other Gold Coin",
              purity: "Any karat",
              sizes: "Any size — we pay by gold content",
              icon: Bitcoin,
            },
          ].map(({ name, purity, sizes, icon: Icon }) => (
            <div
              key={name}
              className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-gold-400 mb-4" />
              <h3 className="font-display text-lg mb-2">{name}</h3>
              <p className="text-cream-60 text-sm mb-1">
                <span className="text-gold-400 font-mono text-xs">Purity:</span> {purity}
              </p>
              <p className="text-cream-45 text-sm">
                <span className="text-gold-400 font-mono text-xs">Sizes:</span> {sizes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            More for Your Coins, Paid in BTC
          </h2>
        </div>

        <div className="border-gold-gradient rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream-08">
                <th className="text-left p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">Seller</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">% of Melt</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">BTC Option</th>
                <th className="text-center p-4 text-cream-45 font-mono text-xs uppercase tracking-wider">Insured Ship</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Coin Dealer</td>
                <td className="p-4 text-center font-mono text-cream-45">85–95%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">No</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Pawn Shop</td>
                <td className="p-4 text-center font-mono text-cream-45">50–70%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">N/A</td>
              </tr>
              <tr className="border-b border-cream-08">
                <td className="p-4 text-cream-60">Online Gold Buyer</td>
                <td className="p-4 text-center font-mono text-cream-45">70–85%</td>
                <td className="p-4 text-center text-cream-35">No</td>
                <td className="p-4 text-center text-cream-35">Sometimes</td>
              </tr>
              <tr className="bg-gold-500/[0.06]">
                <td className="p-4 font-semibold text-gold-400">Offramp</td>
                <td className="p-4 text-center font-mono font-semibold text-gold-400">80%+</td>
                <td className="p-4 text-center text-gold-400"><CheckCircle2 className="w-5 h-5 mx-auto" /></td>
                <td className="p-4 text-center text-gold-400"><CheckCircle2 className="w-5 h-5 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-cream-35 text-xs mt-4">
          Numismatic premiums may apply for rare or collectible coins. We pay based on actual gold content.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">3 Simple Steps</p>
          <h2 className="font-display text-3xl md:text-4xl font-light">How to Sell Gold Coins for Bitcoin</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", icon: Package, title: "Get Your Free Kit", description: "Request a free insured shipping kit with prepaid USPS Priority Mail label and tamper-proof packaging. Coins ship safely with up to $100,000 insurance." },
            { step: "02", icon: FlaskConical, title: "XRF Verification", description: "Government-minted coins have known purities, but we verify authenticity via XRF spectrometry under video. We pay based on actual gold content weight." },
            { step: "03", icon: Bitcoin, title: "Get Paid in Bitcoin", description: "Accept your offer and receive BTC through Onramp custody within 48 hours. Or choose USD wire — same competitive pricing either way." },
          ].map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 rounded-full border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-mono text-gold-400 text-lg">{step}</span>
              </div>
              <Icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="font-display text-xl mb-3">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm">
            See detailed process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, stat: "$100K", label: "Insured Shipping", detail: "Every coin shipment fully covered" },
            { icon: Video, stat: "100%", label: "Video Assay", detail: "XRF testing recorded on camera" },
            { icon: Clock, stat: "48hrs", label: "BTC Payment", detail: "Bitcoin within 2 business days" },
            { icon: Lock, stat: "Onramp", label: "Regulated Custody", detail: "Institutional-grade BTC custody" },
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

      {/* EXPERT CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-gold-gradient rounded-2xl p-8 md:p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-light mb-4">
            Have Rare or Collectible Coins?
          </h2>
          <p className="text-cream-60 mb-8 max-w-xl mx-auto">
            Some coins carry numismatic premiums above melt value. Our team can help you
            determine if your coins are worth more as collectibles before converting to Bitcoin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold-500/30 text-gold-400 rounded-lg hover:bg-gold-500/[0.06] transition-all duration-300">
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <Link href="/get-kit" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300">
              Get Your Free Kit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-light">Explore More</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Gold to Bitcoin Calculator", description: "See how much BTC your gold coins are worth right now.", href: "/gold-to-bitcoin" },
            { title: "Sell Gold for Bitcoin", description: "Convert any gold — jewelry, scrap, bullion — to BTC.", href: "/sell-gold-for-bitcoin" },
            { title: "Gold vs Bitcoin Guide", description: "Compare these two hard money assets side by side.", href: "/guide/gold-vs-bitcoin-investment" },
            { title: "How It Works", description: "Step-by-step walkthrough of our process.", href: "/how-it-works" },
            { title: "Live Gold Price", description: "Track the real-time gold spot price.", href: "/gold-price" },
            { title: "Sell Gold for Cash", description: "Prefer USD? Get wire payment within 48 hours.", href: "/sell" },
          ].map(({ title, description, href }) => (
            <Link key={title} href={href} className="group bg-bg-card border border-cream-08 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300">
              <h3 className="font-display text-lg mb-2 group-hover:text-gold-400 transition-colors">{title}</h3>
              <p className="text-cream-45 text-sm leading-relaxed">{description}</p>
              <div className="mt-4 flex items-center gap-1 text-gold-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light mb-6">
            Convert Your Gold Coins to{" "}
            <span className="text-gold-shimmer">Bitcoin</span>
          </h2>
          <p className="text-cream-60 text-lg mb-10 max-w-xl mx-auto">
            Eagles, Krugerrands, Maple Leafs — all accepted. Free kit. No commitment. 48-hour BTC payment.
          </p>
          <Link href="/get-kit" className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-bg text-lg font-semibold rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300">
            Get Your Free Shipping Kit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
