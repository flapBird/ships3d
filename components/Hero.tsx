import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section id="play" className="hero-gradient relative scroll-mt-24 overflow-hidden px-4 pb-8 pt-6 sm:pb-10 sm:pt-8">
      <div className="ocean-glow ocean-glow--left" aria-hidden="true" />
      <div className="ocean-glow ocean-glow--right" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <GameEmbed />
      </div>
    </section>
  );
}
