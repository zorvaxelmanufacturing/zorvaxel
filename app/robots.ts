import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const origin = SITE.origin || "https://zorvaxel.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/api/*"],
      },
    ],
    sitemap: new URL("/sitemap.xml", origin).toString(),
    host: origin,
  };
}
