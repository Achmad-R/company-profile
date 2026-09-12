import type { MetadataRoute } from "next";

// Crawling stays allowed so crawlers can read the HTML `noindex`
// directive. This file must never use `Disallow: /` as an indexing
// control, and it must not advertise the demonstration sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
