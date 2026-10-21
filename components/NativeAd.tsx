"use client";

import { useEffect, useRef } from "react";

const AD_SCRIPT_SRC =
  "https://bauval.org/21/b45e58b1d96637fc0a1489082c27cde0";
const AD_CONTAINER_ID = "container-b45e58b1d96637fc0a1489082c27cde0";

interface NativeAdProps {
  className?: string;
}

export default function NativeAd({ className = "" }: NativeAdProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Re-append the script on every mount so the ad also fills its slot after
    // client-side route changes (the vendor script only runs once per load).
    const script = document.createElement("script");
    script.src = AD_SCRIPT_SRC;
    script.async = true;
    script.dataset.cfasync = "false";
    mount.appendChild(script);

    return () => {
      script.remove();
      containerRef.current?.replaceChildren();
    };
  }, []);

  return (
    <aside
      className={`mx-auto w-full max-w-3xl ${className}`}
      aria-label="Advertisement"
    >
      <p className="mb-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-text-dark/35">
        Advertisement
      </p>
      <div
        ref={mountRef}
        className="overflow-hidden rounded-2xl border border-text-dark/10 bg-white p-2 shadow-sm"
      >
        <div
          ref={containerRef}
          id={AD_CONTAINER_ID}
          className="min-h-[120px] w-full"
        />
      </div>
    </aside>
  );
}
