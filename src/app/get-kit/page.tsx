"use client";

import { useState } from "react";
import Link from "next/link";

const GOLD_TYPES = [
  "Jewelry (rings, necklaces, bracelets)",
  "Coins (American Eagle, Krugerrand, etc.)",
  "Bars & Bullion",
  "Dental Gold",
  "Scrap Gold / Broken Pieces",
  "Mixed / Not Sure",
] as const;

const KIT_INCLUDES = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Prepaid Insured Mailer",
    description: "USPS Priority Mail with up to $100,000 in insurance coverage. We pay shipping both ways.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Itemization Form",
    description: "Simple form to describe your gold. Helps us prepare for your XRF assay and get you paid faster.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Tamper-Proof Bag",
    description: "Security bag with unique serial number. Your gold is tracked from the moment it leaves your hands.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Process Guide",
    description: "Step-by-step instructions with our direct line. Know exactly what to expect at every stage.",
  },
] as const;

export default function GetKitPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    goldType: "",
    estimatedWeight: "",
    paymentPreference: "cash",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/kit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
            <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            Your Kit Is on the Way
          </h1>
          <p className="mt-4 max-w-md font-body text-lg text-cream-45">
            Check your email for a confirmation with tracking details. Your insured shipping kit typically arrives within 2-3 business days.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-cream-15 px-6 py-3 font-body text-sm font-semibold text-cream-60 transition-all hover:border-gold-500/40 hover:text-cream"
            >
              See How It Works
            </Link>
            <Link
              href="/gold-calculator"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-body text-sm font-semibold text-bg transition-all hover:shadow-lg hover:shadow-gold-500/20"
            >
              Estimate Your Gold Value
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Hero */}
      <section className="relative px-6 pb-12 pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
            Free &middot; Insured &middot; No Obligation
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Get Your Free Shipping Kit
          </h1>
          <p className="mt-5 font-body text-lg leading-relaxed text-cream-45 sm:text-xl">
            Everything you need to sell your gold safely. Prepaid insured shipping, tamper-proof packaging, and a dedicated specialist — all at zero cost to you.
          </p>
        </div>
      </section>

      {/* Kit contents */}
      <section className="relative px-6 pb-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KIT_INCLUDES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cream-08 bg-bg-card p-6 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
            >
              <div className="mb-3 text-gold-500">{item.icon}</div>
              <h3 className="font-body text-sm font-semibold text-cream">{item.title}</h3>
              <p className="mt-1 font-body text-xs leading-relaxed text-cream-35">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form section */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-cream-08 bg-bg-card p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              Request Your Kit
            </h2>
            <p className="mt-2 font-body text-sm text-cream-45">
              Fill out the form below and we&apos;ll ship your free insured kit within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="john@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                  Street Address *
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                  placeholder="123 Main St"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                  <label htmlFor="city" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    City *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="Austin"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    State *
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="TX"
                    maxLength={2}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="zip" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    ZIP *
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="78701"
                    maxLength={10}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-cream-08" />

              {/* Gold details */}
              <div>
                <label htmlFor="goldType" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                  Type of Gold
                </label>
                <select
                  id="goldType"
                  name="goldType"
                  value={formData.goldType}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors focus:border-gold-500/50 focus:outline-none"
                >
                  <option value="">Select gold type...</option>
                  {GOLD_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="estimatedWeight" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    Estimated Weight
                  </label>
                  <input
                    id="estimatedWeight"
                    name="estimatedWeight"
                    type="text"
                    value={formData.estimatedWeight}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                    placeholder="e.g., 2 oz, 50 grams"
                  />
                </div>
                <div>
                  <label htmlFor="paymentPreference" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                    Payment Preference
                  </label>
                  <select
                    id="paymentPreference"
                    name="paymentPreference"
                    value={formData.paymentPreference}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors focus:border-gold-500/50 focus:outline-none"
                  >
                    <option value="cash">Wire Transfer (USD)</option>
                    <option value="bitcoin">Bitcoin (BTC)</option>
                    <option value="either">Either — Best Rate</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-cream-45">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-body text-cream transition-colors placeholder:text-cream-25 focus:border-gold-500/50 focus:outline-none"
                  placeholder="Anything else we should know?"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gold-gradient px-8 py-4 font-body text-base font-semibold text-bg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-[0.98] disabled:opacity-50"
              >
                <span className="relative z-10">
                  {loading ? "Sending..." : "Ship My Free Kit"}
                </span>
                {!loading && (
                  <svg
                    className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <p className="text-center font-mono text-[10px] text-cream-25">
                No obligation. Your gold stays yours until you accept our offer. Fully insured both ways.
              </p>
            </form>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.928 6.472L20 8.264l-5.072 4.584L16.18 20 10 16.472 3.82 20l1.252-7.152L0 8.264l7.072-.792z" clipRule="evenodd" />
              </svg>
              <span className="font-mono text-xs text-cream-45">A+ BBB Rated</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="font-mono text-xs text-cream-45">$100k Insured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono text-xs text-cream-45">48hr Turnaround</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
