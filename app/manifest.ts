import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zorvaxel — Private Label Serum Formulation & Packaging",
    short_name: "Zorvaxel",
    description: SITE.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#F4F1DE",
    theme_color: "#0D1B2A",
    icons: [
      {
        src: "/dropper-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
