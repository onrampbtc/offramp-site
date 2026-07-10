import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sell Gold in Austin, TX | By-Appointment Drop-Off",
  description:
    "Sell gold in Austin with a by-appointment drop-off downtown: XRF assay while you watch, paid by wire or bitcoin. Or use a free insured mail-in kit from anywhere in Texas.",
  alternates: { canonical: "https://offrampgold.com/austin" },
};

const PHONE_DISPLAY = "(512) 983-5997";
const PHONE_HREF = `tel:${process.env.NEXT_PUBLIC_PHONE ?? "+15129835997"}`;

export default function AustinPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://offrampgold.com" },
          { name: "Austin", url: "https://offrampgold.com/austin" },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Offramp",
          url: "https://offrampgold.com/austin",
          telephone: "+15129835997",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "500 W 2nd St Ste 1900",
            addressLocality: "Austin",
            addressRegion: "TX",
            postalCode: "78701",
            addressCountry: "US",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
          description:
            "By-appointment gold buying in downtown Austin: XRF assay while you watch, payment by wire or bitcoin. Free insured mail-in kits available nationwide.",
        }}
      />

      <div className="max-w-2xl">
        <p className="font-display text-base italic text-gold-400">Downtown Austin</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Sell gold in Austin, by appointment
        </h1>
        <p className="mt-4 font-body text-lg leading-relaxed text-ink-2">
          Bring your gold downtown and watch the XRF assay yourself. Honest range up
          front, final price from the reading, paid by wire or bitcoin. Appointment
          only — call or request a time and we&rsquo;ll confirm same day.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-raise p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">Book a drop-off</h2>
          <address className="mt-4 space-y-1 font-mono text-sm not-italic text-ink-2">
            <p>500 W 2nd St Ste 1900</p>
            <p>Austin, TX 78701</p>
            <p className="text-ink-3">Mon-Fri 9:00-5:00 CT · by appointment</p>
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-ink px-6 py-3 font-mono text-sm font-medium text-paper hover:opacity-90"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/get-kit"
              className="rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
            >
              Prefer mail? Free insured kit
            </Link>
            <Link
              href="/consult"
              className="rounded-full border border-line-2 px-6 py-3 font-body text-sm font-semibold text-ink hover:border-ink"
            >
              Not sure yet? Free consult
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-raise p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            What to bring
          </h2>
          <ul className="mt-4 space-y-3 font-body text-sm leading-relaxed text-ink-2">
            <li>Your gold — jewelry, coins, dental, scrap. Sorted or not.</li>
            <li>A government ID (required by Texas law at payout).</li>
            <li>
              Nothing else. Weighing, testing, and paperwork happen here, in front of
              you.
            </li>
          </ul>
          <p className="mt-5 font-body text-sm text-ink-2">
            Want a number before you drive?{" "}
            <Link
              href="/gold-calculator"
              className="font-medium text-gold-400 underline decoration-line-2 underline-offset-4 hover:text-ink"
            >
              Check your gold in 60 seconds
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
