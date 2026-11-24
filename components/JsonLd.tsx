import { SITE } from "@/lib/site";
import type { BlogPost } from "@/lib/blog";

type JsonLdProps = {
  data: Record<string, unknown>;
};

function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function LocalBusinessJsonLd() {
  const origin = SITE.origin || "https://zorvaxel.com";
  const phone = SITE.contact.phone.href?.startsWith("tel:")
    ? SITE.contact.phone.href.slice(4)
    : "+918144451947";
  const email = SITE.contact.email.href?.startsWith("mailto:")
    ? SITE.contact.email.href.slice(7)
    : "lab@zorvaxel.com";

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${origin}/#organization`,
    name: SITE.name,
    legalName: SITE.name,
    alternateName: ["Zorvaxel Lab", "Zorvaxel Chennai", "Zorvaxel Serum Lab"],
    url: origin,
    logo: `${origin}/dropper-mark.svg`,
    image: `${origin}/og-image`,
    description: SITE.description,
    slogan: SITE.tagline,
    telephone: phone,
    email: email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13/1, Varada Raja Perumal Koil Street, Tondiarpet",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1235,
      longitude: 80.2917,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:30",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Serum Formulation",
      "Cosmetics Manufacturing",
      "Private Label Skincare",
      "Cleanroom Contract Filling",
      "Custom Dropper Packaging",
    ],
  };

  return <JsonLd data={data} />;
}

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const articleUrl = SITE.origin
    ? new URL(`/blog/${post.slug}`, SITE.origin).toString()
    : undefined;
  const imageUrl = SITE.origin
    ? new URL("/og-image", SITE.origin).toString()
    : undefined;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    ...(articleUrl
      ? { mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl }, url: articleUrl }
      : {}),
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: post.category,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      ...(SITE.origin ? { url: SITE.origin } : {}),
    },
    ...(imageUrl ? { image: [imageUrl] } : {}),
  };

  return <JsonLd data={data} />;
}

export function FAQPageJsonLd({
  questions,
}: {
  questions: readonly { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const origin = SITE.origin || "https://zorvaxel.com";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: SITE.name,
        alternateName: [
          "Zorvaxel",
          "Zorvaxel Lab",
          "Zorvaxel Chennai",
          "Zorvaxel Private Label",
          "Zorvaxel Serum Manufacturer",
          "zorvaxel.com",
        ],
        description: SITE.shortDescription,
        inLanguage: ["en-IN", "ta-IN"],
        publisher: {
          "@id": `${origin}/#organization`,
        },
      },
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${origin}/#organization`,
        name: SITE.name,
        legalName: SITE.name,
        alternateName: ["Zorvaxel Lab", "Zorvaxel Chennai", "Zorvaxel Serum Lab"],
        url: origin,
        logo: `${origin}/dropper-mark.svg`,
        image: `${origin}/og-image`,
        description: SITE.description,
        slogan: SITE.tagline,
        telephone: "+918144451947",
        email: "lab@zorvaxel.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "13/1, Varada Raja Perumal Koil Street, Tondiarpet",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600081",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.1235,
          longitude: 80.2917,
        },
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "13:30",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        knowsAbout: [
          "Serum Formulation",
          "Cosmetics Manufacturing",
          "Private Label Skincare",
          "Cleanroom Contract Filling",
          "Custom Dropper Packaging",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+918144451947",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil"],
        },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${origin}/#navigation`,
        name: "Main Navigation",
        hasPart: [
          {
            "@type": "WebPage",
            name: "Services",
            url: `${origin}/services`,
            description: "Serum branding and filling services with no MOQ",
          },
          {
            "@type": "WebPage",
            name: "About Zorvaxel",
            url: `${origin}/about`,
            description: "About the Zorvaxel cleanroom serum laboratory in Chennai",
          },
          {
            "@type": "WebPage",
            name: "Founder Notes",
            url: `${origin}/blog`,
            description: "Practical guides on serum packaging, formulation, and brand launching",
          },
          {
            "@type": "WebPage",
            name: "Batch Enquiry",
            url: `${origin}/contact`,
            description: "Enquire about small-batch serum production and contract filling",
          },
        ],
      },
    ],
  };

  return <JsonLd data={data} />;
}
