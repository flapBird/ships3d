import Image from "next/image";
import AdSlot from "@/components/AdSlot";
import Hero from "@/components/Hero";
import SchemaMarkup from "@/components/SchemaMarkup";
import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ path: "/" });

const controls = [
  ["WASD", "Move around and steer while at the helm"],
  ["Mouse", "Look around and aim"],
  ["Left click", "Fire while operating a cannon"],
  ["F", "Interact with the helm, sails, and cannons"],
];

const features = [
  {
    title: "Crew-based combat",
    text: "Share a crew code so friends can join the same ship and split responsibility for steering, sails, and cannons.",
    icon: "⚓",
  },
  {
    title: "Helper Bot",
    text: "Playing alone is possible: a Helper Bot can take over a ship station while you focus on another role.",
    icon: "🤖",
  },
  {
    title: "Ship upgrades",
    text: "Earn levels and gold during battles, then improve your ship and cannons for stronger performance.",
    icon: "🛠",
  },
  {
    title: "Multiple game modes",
    text: "Choose Team Flags for team battles or Trader Mode for a larger, more open-ended server experience.",
    icon: "🚩",
  },
  {
    title: "Friends and clans",
    text: "The game includes a friends list plus clan listings and clan chat for finding a regular crew.",
    icon: "👥",
  },
  {
    title: "Browser and mobile",
    text: "Ships 3D is available in modern desktop and mobile browsers. Landscape mode is recommended on phones.",
    icon: "🌐",
  },
];

const faqs = [
  {
    question: "Is Ships 3D free to play?",
    answer:
      "Yes. You can launch and play the browser version for free. The embedded game is operated by its original provider, so its account options and in-game features may change over time.",
  },
  {
    question: "Do I need to download the game?",
    answer:
      "No standalone installation is required. Your browser will still download and cache game files when it launches, so the first load can take a few seconds.",
  },
  {
    question: "Can I play with friends?",
    answer:
      "Yes. Create or share a crew code in the game so friends can join your ship. Coordinating the helm and cannons is one of the main parts of the experience.",
  },
  {
    question: "Can I play on a phone or tablet?",
    answer:
      "Mobile browser support is available, but the interface is much clearer in landscape orientation. Use the fullscreen button when your browser supports it.",
  },
  {
    question: "Do I need an account?",
    answer:
      "You can begin by entering a username. The game also offers register and sign-in options if you want to use its account features.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mx-auto max-w-3xl" aria-labelledby="about-game">
          <p className="section-kicker">About the game</p>
          <h1 id="about-game" className="section-title">
            What is Ships 3D?
          </h1>
          <div className="mt-5 space-y-4 text-base leading-8 text-text-dark/75 sm:text-lg">
            <p>
              Ships 3D is an online naval combat game built around shared ship controls.
              Instead of controlling everything from a single screen, you move around the
              deck and interact with the helm, sails, and cannons. Standard battles can
              include up to 20 players, while larger modes support bigger servers.
            </p>
            <p>
              The game was developed by Yp3d / ASDF Games and was listed for browser release
              in May 2022. You can play solo with a Helper Bot or invite friends using a crew
              code. This website is an independent fan site and does not claim ownership of
              the game.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={siteConfig.game.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-extrabold text-white hover:bg-secondary"
            >
              Developer game page
            </a>
            <a
              href="https://www.crazygames.com/game/ships-3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-text-dark/15 bg-white px-5 text-sm font-extrabold text-text-dark hover:border-primary/40 hover:text-primary"
            >
              Game details and release info
            </a>
          </div>
        </section>

        <figure className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
          <Image
            src="/images/ships3D-desc-2.jpeg"
            alt="Ships 3D cannon view during a Team Flags battle, with enemy ships, team scores, and firing controls visible"
            width={1888}
            height={874}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto w-full"
          />
          <figcaption className="px-5 py-3 text-sm text-white/65">
            Operating a cannon during a large Team Flags match.
          </figcaption>
        </figure>

        <section id="how-to-play" className="mx-auto mt-20 max-w-5xl scroll-mt-24" aria-labelledby="how-heading">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Quick start</p>
              <h2 id="how-heading" className="section-title">
                How to play
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-text-dark/75 sm:text-lg">
                Start by entering a username and choosing a game mode. Once you are on a
                ship, use nearby stations instead of trying to control everything at once.
                Keep your broadside lined up with opponents and coordinate shots with your crew.
              </p>

              <div className="mt-7 rounded-2xl border border-amber-900/10 bg-amber-50 p-5">
                <p className="font-extrabold text-amber-950">Beginner tip</p>
                <p className="mt-1 text-sm leading-6 text-amber-950/75">
                  Start with the Helper Bot enabled. Learn one station at a time, then invite
                  a friend when you are comfortable steering or aiming.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-text-dark/10 bg-white shadow-sm">
              <div className="border-b border-text-dark/10 px-5 py-4 sm:px-6">
                <h3 className="font-heading text-xl font-black text-text-dark">Keyboard controls</h3>
              </div>
              <div className="divide-y divide-text-dark/10">
                {controls.map(([key, action]) => (
                  <div key={key} className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:px-6">
                    <kbd className="w-fit rounded-lg border border-text-dark/10 bg-background px-2.5 py-1 font-mono text-sm font-bold text-primary shadow-sm">
                      {key}
                    </kbd>
                    <p className="text-sm leading-6 text-text-dark/70">{action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-20 scroll-mt-24" aria-labelledby="features-heading">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Why it stands out</p>
            <h2 id="features-heading" className="section-title">
              Built for a real crew
            </h2>
            <p className="mt-4 text-base leading-7 text-text-dark/70 sm:text-lg">
              The most interesting part of Ships 3D is not a single weapon or ship class;
              it is the way several players share one vessel.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-text-dark/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-xl" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3 className="mt-5 font-heading text-xl font-black text-text-dark">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-dark/70">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto mt-20 max-w-3xl scroll-mt-24" aria-labelledby="faq-heading">
          <p className="section-kicker">Common questions</p>
          <h2 id="faq-heading" className="section-title">
            Ships 3D FAQ
          </h2>
          <div className="mt-7 divide-y divide-text-dark/10 overflow-hidden rounded-3xl border border-text-dark/10 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 py-1 sm:px-6">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-lg font-extrabold text-text-dark">
                  {faq.question}
                  <span className="text-2xl font-light text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-5 text-sm leading-7 text-text-dark/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {siteConfig.youtube.enabled && siteConfig.youtube.videoId && (
          <section className="mx-auto mt-20 max-w-4xl" aria-labelledby="video-heading">
            <div className="text-center">
              <p className="section-kicker">Watch before you play</p>
              <h2 id="video-heading" className="section-title">
                Ships 3D gameplay
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-dark/70">
                See how ship stations, crew coordination, and cannon combat work in a full match.
              </p>
            </div>
            <div className="relative mt-7 aspect-video w-full overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${siteConfig.youtube.videoId}`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Ships 3D gameplay video"
                loading="lazy"
              />
            </div>
          </section>
        )}

        <AdSlot type="banner" className="my-8" />
      </div>
    </>
  );
}
