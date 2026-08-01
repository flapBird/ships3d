import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site.config";
import { env } from "@/lib/env";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={nunito.variable}
      style={
        {
          "--color-primary": siteConfig.theme.primary,
          "--color-secondary": siteConfig.theme.secondary,
          "--color-background": siteConfig.theme.background,
          "--color-surface": siteConfig.theme.surface,
          "--color-text-dark": siteConfig.theme.textDark,
        } as CSSProperties
      }
    >
      <body className="font-body text-text-dark antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-3 font-bold text-slate-950 shadow-xl transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Google AdSense — injected in <head> when client ID is set */}
        {env.adsenseClientId && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${env.adsenseClientId}`}
            strategy="beforeInteractive"
            crossOrigin="anonymous"
          />
        )}

        {/* Google Analytics 4 — only injected when gaId is set */}
        {env.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${env.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${env.gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
