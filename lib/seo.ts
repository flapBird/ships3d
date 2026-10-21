import { Metadata } from "next";
import type { GuideMeta } from "./guides";
import { siteConfig } from "./site.config";

interface PageSeoInput {
  /** Page-specific title (without the site-name suffix). If omitted, uses seo.title for home or siteName fallback. */
  title?: string;
  /** Page-specific description. If omitted, falls back to seo.description. */
  description?: string;
  /** Path starting with '/', e.g. '/', '/about'. */
  path: string;
  /** Open Graph type. Guides use "article". */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageSeoInput): Metadata {
  const isHome = path === "/";
  const hasSiteName = title?.includes(siteConfig.siteName) ?? false;
  const pageTitle = isHome
    ? siteConfig.seo.title
    : title
      ? hasSiteName
        ? title
        : `${title} | ${siteConfig.siteName}`
      : siteConfig.siteName;
  const pageDescription = description ?? siteConfig.seo.description;
  // The homepage is served at the root URL with a trailing slash. Keep
  // subpage URLs in their existing format instead of normalizing the whole site.
  const canonical = isHome
    ? `${siteConfig.domain}/`
    : `${siteConfig.domain}${path}`;
  const ogImage = `${siteConfig.domain}${siteConfig.seo.ogImage}`;

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          title: pageTitle,
          description: pageDescription,
          url: canonical,
          siteName: siteConfig.siteName,
          images: [{ url: ogImage, width: 1200, height: 630 }],
          ...(publishedTime ? { publishedTime } : {}),
          ...(modifiedTime ? { modifiedTime } : {}),
        }
      : {
          type: "website",
          title: pageTitle,
          description: pageDescription,
          url: canonical,
          siteName: siteConfig.siteName,
          images: [{ url: ogImage, width: 1200, height: 630 }],
        };

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    authors: [{ name: siteConfig.siteName, url: siteConfig.domain }],
    creator: siteConfig.siteName,
    ...(siteConfig.gscVerification
      ? { verification: { google: siteConfig.gscVerification } }
      : {}),
  };
}

export function buildGuideMetadata(guide: GuideMeta): Metadata {
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.href,
    type: "article",
    publishedTime: siteConfig.content.updated,
    modifiedTime: siteConfig.content.updated,
  });
}

/**
 * Build a VideoGame JSON-LD object for the homepage.
 * Validate at https://search.google.com/test/rich-results after deployment.
 */
export function buildVideoGameJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteConfig.game.name,
    alternateName: ["Ships3D", "Ships 3D game"],
    genre: siteConfig.game.genre,
    applicationCategory: "Game",
    operatingSystem: "Web browser",
    gamePlatform: "Web browser",
    playMode: ["SinglePlayer", "MultiPlayer"],
    description: siteConfig.seo.description,
    url: `${siteConfig.domain}/`,
    image: `${siteConfig.domain}${siteConfig.seo.ogImage}`,
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: "Yp3d / ASDF Games",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/`,
    },
  };
}

interface ArticleJsonLdInput {
  headline: string;
  description: string;
  path: string;
  publishedTime: string;
  modifiedTime: string;
}

export function buildArticleJsonLd({
  headline,
  description,
  path,
  publishedTime,
  modifiedTime,
}: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    inLanguage: "en",
    mainEntityOfPage: `${siteConfig.domain}${path}`,
    image: `${siteConfig.domain}${siteConfig.seo.ogImage}`,
    author: {
      "@type": "Organization",
      name: `${siteConfig.siteName} Guides`,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.domain,
    },
    about: {
      "@type": "VideoGame",
      name: siteConfig.game.name,
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item:
        item.path === "/"
          ? `${siteConfig.domain}/`
          : `${siteConfig.domain}${item.path}`,
    })),
  };
}

export function buildFaqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
