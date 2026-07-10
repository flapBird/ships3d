import { env } from "@/lib/env";
import Script from "next/script";

interface AdSlotProps {
  type: "sidebar" | "rectangle" | "banner";
  className?: string;
}

/**
 * AdSlot — renders AdSense ad units when the env has an AdSense client ID.
 *
 * Set NEXT_PUBLIC_ADSENSE_CLIENT_ID in your .env.local to activate ads.
 * Ad units use automatic size matching when possible.
 */
export default function AdSlot({ type, className = "" }: AdSlotProps) {
  if (!env.adsEnabled) return null;

  const sizeStyles = {
    sidebar: "w-[160px] min-h-[600px]",
    rectangle: "w-[300px] h-[250px]",
    banner: "w-full h-[90px]",
  };

  return (
    <div
      className={`${sizeStyles[type]} border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={env.adsenseClientId}
        data-ad-slot="0000000000"
        data-ad-format={type === "banner" ? "horizontal" : "rectangle"}
        data-full-width-responsive="true"
      />
      <Script id={`adsbygoogle-init-${type}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}
