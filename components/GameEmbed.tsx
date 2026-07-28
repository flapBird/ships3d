"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site.config";

type GameState = "idle" | "loading" | "playing" | "error";

export default function GameEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const readyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [gameState, setGameState] = useState<GameState>("idle");
  const [loadKey, setLoadKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);

  const clearTimers = useCallback(() => {
    if (readyTimerRef.current) clearTimeout(readyTimerRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    setCanFullscreen(Boolean(containerRef.current?.requestFullscreen));

    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      clearTimers();
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [clearTimers]);

  const startGame = useCallback(() => {
    clearTimers();
    setGameState("loading");
    setLoadKey((current) => current + 1);

    timeoutRef.current = setTimeout(() => {
      setGameState((current) => (current === "loading" ? "error" : current));
    }, 15000);
  }, [clearTimers]);

  const handleIframeLoad = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // The provider's HTML loads before its WebGL scene is ready. Keeping the
    // branded loader briefly avoids showing a confusing white canvas.
    readyTimerRef.current = setTimeout(() => {
      setGameState("playing");
    }, 1800);
  }, []);

  const handleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (containerRef.current?.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      }
    } catch {
      setCanFullscreen(false);
    }
  }, []);

  const showIframe = gameState !== "idle";

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div
        ref={containerRef}
        className="game-shell relative w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl shadow-slate-950/35 sm:rounded-3xl"
        style={{ aspectRatio: siteConfig.game.aspectRatio }}
      >
        <Image
          src={siteConfig.game.coverImage}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />

        {showIframe && (
          <iframe
            key={loadKey}
            src={siteConfig.game.embedUrl}
            className="absolute inset-0 z-10 h-full w-full bg-slate-100"
            allow="autoplay; fullscreen; clipboard-read; clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
            referrerPolicy="strict-origin-when-cross-origin"
            title={siteConfig.game.name}
            loading="eager"
            onLoad={handleIframeLoad}
            onError={() => setGameState("error")}
          />
        )}

        {gameState === "idle" && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/55">
            <button
              type="button"
              onClick={startGame}
              className="inline-flex min-h-14 items-center gap-3 rounded-full bg-cyan-300 px-8 text-lg font-black text-slate-950 shadow-xl transition hover:bg-cyan-200 hover:shadow-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:px-10 sm:text-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Now
            </button>
          </div>
        )}

        {gameState === "loading" && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-slate-950/80 text-white backdrop-blur-sm"
            role="status"
            aria-live="polite"
          >
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-cyan-300" />
            <div className="text-center">
              <p className="font-bold">Loading {siteConfig.game.name}…</p>
              <p className="mt-1 text-xs text-white/60">The first launch can take a few seconds.</p>
            </div>
          </div>
        )}

        {gameState === "error" && (
          <div
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/90 px-6 text-center text-white"
            role="alert"
          >
            <p className="font-heading text-xl font-black">The game is taking longer than expected.</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/65">
              Check your connection or try loading the game again.
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-5 min-h-11 rounded-full bg-cyan-300 px-6 font-extrabold text-slate-950 hover:bg-cyan-200"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      <div className="mt-2 flex min-h-11 items-center justify-between gap-3">
        <p className="text-left text-xs font-semibold text-white/60 sm:text-sm">
          Tip: use fullscreen for the clearest controls.
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={startGame}
            disabled={gameState === "idle" || gameState === "loading"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-white/60 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Reload game"
            title="Reload game"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992m0 0V4.356m0 4.992-3.181-3.182a8.25 8.25 0 1 0 2.134 7.969M7.977 14.652H2.985m0 0v4.992m0-4.992 3.181 3.182" />
            </svg>
          </button>
          {canFullscreen && (
            <button
              type="button"
              onClick={handleFullscreen}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                {isFullscreen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9H4.5M9 9V4.5M9 9 3.75 3.75M9 15H4.5M9 15v4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      <p className="mt-1 text-center text-xs leading-5 text-cyan-100/70 sm:hidden">
        On a phone, rotate to landscape and use fullscreen for a larger game view.
      </p>
    </div>
  );
}
