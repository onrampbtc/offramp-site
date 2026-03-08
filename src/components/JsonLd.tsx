export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Offramp",
        alternateName: "Offramp by Onramp",
        url: "https://offrampgold.com",
        logo: "https://offrampgold.com/logo.png",
        description:
          "Sell your gold for cash or Bitcoin. Free insured shipping, XRF spectrometer assay, wire payment.",
        sameAs: [
          "https://x.com/offramp",
          "https://youtube.com/@offramp",
          "https://linkedin.com/company/offramp",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: "English",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Offramp",
        url: "https://offrampgold.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://offrampgold.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        url,
        brand: { "@type": "Brand", name: "Offramp" },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  author,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        url,
        datePublished,
        dateModified: datePublished,
        author: { "@type": "Person", name: author },
        publisher: {
          "@type": "Organization",
          name: "Offramp",
          logo: {
            "@type": "ImageObject",
            url: "https://offrampgold.com/logo.png",
          },
        },
      }}
    />
  );
}

export function FAQJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }}
    />
  );
}

export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }}
    />
  );
}

export function WebApplicationJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name,
        description,
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function ServiceJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Offramp Gold Selling Service",
        provider: {
          "@type": "Organization",
          name: "Offramp",
          url: "https://offrampgold.com",
        },
        description:
          "Sell gold jewelry, coins, bullion, dental gold, and scrap gold online for cash or Bitcoin. Free insured shipping, XRF spectrometer assay under video, wire payment within 48 hours.",
        serviceType: "Gold Buying",
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Gold Selling Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sell Gold Jewelry",
                url: "https://offrampgold.com/sell-jewelry",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sell Gold Coins & Bullion",
                url: "https://offrampgold.com/sell-coins",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sell Dental Gold",
                url: "https://offrampgold.com/sell-dental-gold",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gold to Bitcoin Conversion",
                url: "https://offrampgold.com/gold-to-bitcoin",
              },
            },
          ],
        },
      }}
    />
  );
}

export function SpeakableJsonLd({
  url,
  cssSelectors,
}: {
  url: string;
  cssSelectors: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: cssSelectors,
        },
      }}
    />
  );
}
