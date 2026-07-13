"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
 const [like, setLike] = useState<"up" | "down" | null>(null);
  const [gameState, setGameState] = useState<"idle" | "loading" | "playing">("idle");
 const [isFullscreen, setIsFullscreen] = useState(false);

  // Track fullscreen state changes
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  // Loading timer — brief transition before showing the iframe
  useEffect(() => {
    if (gameState === "loading") {
      const timer = setTimeout(() => setGameState("playing"), 600);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  const handleReload = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = siteConfig.game.embedUrl;
      setGameState("idle");
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.requestFullscreen();
    }
  }, []);

  const handleExitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, []);

  const aspectRatio = siteConfig.game.aspectRatio;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Game iframe */}
      <div
        ref={containerRef}
        className="relative w-full rounded-xl2 overflow-hidden shadow-lg bg-gray-100"
        style={{ aspectRatio }}
      >
        {/* ── Idle: Launch screen with Play button ── */}
        {gameState === "idle" && (
          <div
            className="absolute inset-0 bg-cover bg-center flex items-center justify-center z-10"
            style={{
              backgroundImage: `url(${siteConfig.game.coverImage})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Play button */}
            <button
              onClick={() => setGameState("loading")}
              className="relative z-10 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-xl px-10 py-4 rounded-full shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Now
            </button>
          </div>
        )}

       {/* ── Loading: Spinner ── */}
       {gameState === "loading" && (
          <div
            className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center gap-4 z-10"
            style={{
              backgroundImage: `url(${siteConfig.game.coverImage})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Spinner */}
            <div className="relative z-10">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
            <p className="relative z-10 text-white/80 text-sm font-medium">
              Loading {siteConfig.game.name}...
            </p>
         </div>
        )}

        {/* ── Playing: iframe ── */}
        {gameState === "playing" && (
        <iframe
          ref={iframeRef}
          src={siteConfig.game.embedUrl}
          className="absolute inset-0 w-full h-full"
          style={{ aspectRatio }}
          allow="autoplay; fullscreen; clipboard-read; clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
          title={siteConfig.game.name}
          loading="eager"
        />
        )}
      </div>

      {/* Toolbar: like, dislike, reload, fullscreen */}
      <div className="flex items-center justify-end gap-1 mt-2">
        <button
          onClick={() => setLike(like === "up" ? null : "up")}
          className={`p-2 rounded-lg transition-colors ${
            like === "up"
              ? "text-primary bg-primary/10"
              : "text-text-dark/40 hover:text-text-dark/70 hover:bg-gray-100"
          }`}
          aria-label="Like"
          title="Like"
        >
          <svg className="w-5 h-5" fill={like === "up" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 0 1-1.423-.23l-3.114-1.04a4.5 4.5 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.96 8.96 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
          </svg>
        </button>
        <button
          onClick={() => setLike(like === "down" ? null : "down")}
          className={`p-2 rounded-lg transition-colors ${
            like === "down"
              ? "text-primary bg-primary/10"
              : "text-text-dark/40 hover:text-text-dark/70 hover:bg-gray-100"
          }`}
          aria-label="Dislike"
          title="Dislike"
        >
          <svg className="w-5 h-5" fill={like === "down" ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.367 13.75c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.5 4.5 0 0 0-.322 1.672v1.623a.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282m0 0H7.284c-1.026 0-1.945-.694-2.054-1.715a12 12 0 0 1-.068-1.285 11.95 11.95 0 0 1 2.649-7.521c.388-.482.987-.729 1.605-.729h3.244c.48 0 .957.08 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.454m-10.598 9.75c-.083-.205-.173-.405-.27-.602-.197-.4.078-.898.523-.898h.908c.889 0 1.713.518 1.972 1.368a12 12 0 0 1 .521 3.507c0 1.553-.295 3.036-.831 4.398-.269.649-1.049 1.102-1.882 1.102H5.903c-.472 0-.745-.556-.5-.96a8.96 8.96 0 0 0 1.302-4.665c0-1.194-.232-2.333-.654-3.375Z" />
          </svg>
        </button>

        <span className="w-px h-5 bg-gray-200 mx-1" />

        <button
          onClick={handleReload}
          className="p-2 rounded-lg text-text-dark/40 hover:text-text-dark/70 hover:bg-gray-100 transition-colors"
          aria-label="Reload Game"
          title="Reload Game"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
        <button
          onClick={isFullscreen ? handleExitFullscreen : handleFullscreen}
          className="p-2 rounded-lg text-text-dark/40 hover:text-text-dark/70 hover:bg-gray-100 transition-colors"
          aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {isFullscreen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
