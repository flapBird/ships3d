import { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdated = new Date(siteConfig.content.updated);
  const legalUpdated = new Date(siteConfig.legal.lastUpdated);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.domain}/`,
      lastModified: contentUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.domain}/guides`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.domain}/about`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteConfig.domain}/contact`,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.domain}/privacy`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteConfig.domain}/terms`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.domain}${guide.href}`,
    lastModified: contentUpdated,
    changeFrequency: "monthly",
    priority: guide.featured ? 0.7 : 0.6,
  }));

  return [...staticRoutes, ...guideRoutes];
}
