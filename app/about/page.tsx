import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <p className="section-kicker">About this website</p>
      <h1 className="font-heading text-3xl font-black text-text-dark sm:text-4xl">
        About {siteConfig.siteName}
      </h1>
      <div className="mt-6 space-y-5 text-base leading-8 text-text-dark/75 sm:text-lg">
        <p>
          ships3d.xyz is an independent fan site focused on making Ships 3D easy
          to launch and understand. It combines the embedded browser game with a
          concise controls guide, feature overview, and answers to common questions.
        </p>
        <p>
          Ships 3D was developed by <strong>Yp3d / ASDF Games</strong> and was
          listed for browser release in May 2022. Its crew-based controls let
          several players share a ship, while a Helper Bot supports solo players.
        </p>
        <p>
          This website is not affiliated with or endorsed by Yp3d, ASDF Games, or
          CrazyGames. The game, trademarks, logos, and game assets belong to their
          respective owners. The embedded game is served by its original provider.
        </p>
        <p>
          If you find incorrect information or have trouble launching the game,
          please use the Contact page so we can review it.
        </p>
      </div>
    </div>
  );
}
