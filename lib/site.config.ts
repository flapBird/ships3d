/**
 * Site configuration — the single source of truth for the entire game site.
 * When creating a new game site, only edit this file and replace images in /public.
 */
export const siteConfig = {
  /** Display name shown in header, footer, and browser title. */
  siteName: "Ships 3D",

  /** Canonical domain, no trailing slash. Used for sitemap, OG URLs, etc. */
  domain: "https://ships3d.xyz",

  seo: {
    /** Homepage <title>. Used as-is on the homepage. */
    title: "Play Ships 3D Online Free | Ships 3D",

    /**
     * Homepage meta description, keep under 160 characters.
     * Describe what the game is and that it's free to play online.
     */
    description: "Play Ships 3D online free — a multiplayer naval combat game with sailing physics. Steer your ship, fire cannons, and battle worldwide in your browser.",

    /** Comma-separated keywords for the homepage. */
    keywords: ["ships 3d", "play ships 3d online", "ships 3d game", "naval battle game", "multiplayer ship game", "free online ship game", "ships 3d browser"],

    /** Social sharing image, 1200x630px. Replace /public/og-image.png. */
    ogImage: "/og-image.png",

    /** Twitter/X handle, can be left empty. */
    twitterHandle: "",
  },

  game: {
    /** Name of the game, shown in Hero, JSON-LD, etc. */
    name: "Ships 3D",

    /** Genre(s) for JSON-LD VideoGame.genre. e.g. ["Sports", "Basketball"]. */
    genre: ["Action", "Naval Combat", "Multiplayer"],

    /** iframe embed URL — must be manually replaced with the real embeddable URL. */
    embedUrl: "https://yp3d.com/ships3d/",

    /** Aspect ratio of the embedded game, used to prevent CLS. */
    aspectRatio: "16 / 9",

    /** Cover image shown on the idle/launch screen. Replace /public/cover.jpg. */
    coverImage: "/images/ships3D-desc-1.jpeg",

    /** Age rating for the game. */
    ageRating: "Everyone",

    /** Attribution displayed below the game and in the footer. */
    sourceAttribution: "Game by Yp3d",
  },

  /** YouTube gameplay video section on the homepage. Set videoId to show. */
  youtube: {
    /** Whether to show the YouTube video section. */
    enabled: true,
    /** YouTube video ID (e.g. "dQw4w9WgXcQ"). Leave empty to hide. */
    videoId: "YCKH8XlXCjs",
  },

  theme: {
    /**
     * Bright & playful color palette.
     * Adjust per-game to match its visual style, but keep the overall bright tone.
     */
    primary: "#2a6370",
    secondary: "#3c7d89",
    background: "#f8f7f5",
    surface: "#efeae4",
    textDark: "#292524",
    fontHeading: "'Nunito', sans-serif",
    fontBody: "'Quicksand', sans-serif",
  },

  contact: {
    /** Contact email shown on /contact and in legal pages. */
    email: "contact@ships3d.xyz",
  },

  legal: {
    /** Last updated date for Privacy / Terms pages. */
    lastUpdated: "2026-07-10",
  },

  /** Google Search Console verification code. Leave empty to skip. */
  gscVerification: "",
} as const;

export type SiteConfig = typeof siteConfig;
