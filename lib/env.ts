/**
 * Environment variables — read from process.env at build time.
 * Prefixed with NEXT_PUBLIC_ so they are available on both server and client.
 */
export const env = {
  /** Google Analytics 4 measurement ID. If empty, GA is skipped. */
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",

  /** Google AdSense client ID (e.g. "ca-pub-xxxxxxxxxxxxxx"). If empty, ads are hidden. */
  adsenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",

  /** Whether AdSense ads should be shown. */
  adsEnabled: !!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
};
