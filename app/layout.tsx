import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site.config";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  ...buildMetadata({ path: "/" }),
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
    <html lang="en" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className="font-body text-text-dark antialiased">
        <Header />
        <main>{children}</main>
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
