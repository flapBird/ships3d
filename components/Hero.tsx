import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-8 pb-6 sm:pt-12 sm:pb-8 px-4">
      {/* Floating blob decorations */}
      <div className="blob-decoration blob-decoration--1" />
      <div className="blob-decoration blob-decoration--2" />
      <div className="blob-decoration blob-decoration--3" />

     <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* SEO H1 — hidden visually, read by search engines and screen readers */}
        <h1 className="sr-only">Play Ships 3D Online Free — Multiplayer Naval Battle Game</h1>

       {/* Game embed (idle launch screen visible immediately) */}
       <GameEmbed />
     </div>
    </section>
  );
}
