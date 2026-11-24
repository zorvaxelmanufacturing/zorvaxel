import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
  openGraphTitle?: string;
  publishedTime?: string;
  section?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
  openGraphTitle,
  publishedTime,
  section,
}: PageMetadataInput): Metadata {
  const fullTitle = title.startsWith(SITE.name)
    ? title
    : path === "/"
    ? `${SITE.name} — ${title}`
    : `${title} | ${SITE.name}`;
  const pageUrl = SITE.origin ? new URL(path, SITE.origin).toString() : undefined;
  const imageUrl = SITE.origin ? new URL("/og-image", SITE.origin).toString() : undefined;
  const commonOpenGraph = {
    siteName: SITE.name,
    locale: SITE.locale.replace("_", "-"),
    title: openGraphTitle ?? fullTitle,
    description,
    ...(pageUrl ? { url: pageUrl } : {}),
    ...(imageUrl
      ? {
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: SITE.seo.socialImageAlt,
            },
          ],
        }
      : {}),
  };

  const openGraph =
    openGraphType === "article"
      ? {
          ...commonOpenGraph,
          type: "article" as const,
          ...(publishedTime ? { publishedTime } : {}),
          ...(section ? { section } : {}),
        }
      : { ...commonOpenGraph, type: "website" as const };

  return {
    ...(SITE.origin ? { metadataBase: new URL(SITE.origin) } : {}),
    title: { absolute: fullTitle },
    description,
    keywords: [
      "Zorvaxel",
      "Zorvaxel Chennai",
      "Zorvaxel serum",
      "Zorvaxel lab",
      "Zorvaxel private label",
      "private label serum manufacturer",
      "contract filling Chennai",
      "small batch cosmetic manufacturing",
      "serum packaging India",
      "custom serum packaging",
      "cleanroom cosmetic manufacturing Chennai",
    ],
    applicationName: SITE.name,
    authors: [{ name: `${SITE.name} Technical Team`, url: SITE.origin }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "Cosmetics Manufacturing",
    verification: {
      google: "WMudnjt19zuze38gZWjZNmNQduOZ5UUSJE_3ITFIxWk",
    },
    ...(pageUrl ? { alternates: { canonical: pageUrl } } : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle ?? fullTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}
