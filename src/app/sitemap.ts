import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { APPLICATIONS } from "@/lib/applications";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/activated-carbon`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/resources`, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${SITE_URL}/resources/b/what-is-activated-carbon`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.2 },
  ];

  for (const app of APPLICATIONS) {
    entries.push({
      url: `${SITE_URL}/activated-carbon/${app.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries.map((e) => ({ lastModified: now, ...e }));
}
