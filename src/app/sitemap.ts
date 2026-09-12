import type { MetadataRoute } from "next";
import { conceptConfig } from "@/content/site-content";

// Technical demonstration only. The canonical `.example` URL is the
// concept identity, not a deployment address, and this sitemap is never
// registered with search engines or promoted through robots.txt.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: conceptConfig.canonicalUrl,
      lastModified: new Date(),
    },
  ];
}
