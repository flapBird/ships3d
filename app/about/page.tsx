import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        About {siteConfig.siteName}
      </h1>
     <div className="space-y-4 text-text-dark/80 leading-relaxed">
       <p>
          ships3d.xyz is a no-fuss browser gaming site built around one thing:
          <strong> Ships 3D</strong>, a multiplayer naval combat game that puts you
          behind the wheel of a warship in real-time sea battles. No downloads, no
          sign-ups, no hidden fees — just click Play and you are in the water.
       </p>
       <p>
          Ships 3D was created by <strong>Yp3d</strong> (also known as ASDF Games),
          the same team behind Tanks 3D and Redcoats.io. It first sailed onto the
          web in 2021 and has been gaining steam ever since. The game runs on Unity
          WebGL, which means it plays smoothly in Chrome, Firefox, Safari, or Edge
          on any desktop or mobile device.
       </p>
       <p>
          What makes Ships 3D stand out in the crowded .io space is how much it
          rewards teamwork. Sure, you can sail solo with the Helper Bot handling
          one station, but the real fun starts when you share a Crew Code with
          friends and divvy up the roles — helm, sails, cannons — across a single
          ship. Add in ship upgrades, clan battles, and a 90-player Trader Mode,
          and there is enough depth here to keep you coming back.
        </p>
        <p>
          This site exists to give Ships 3D players a clean, fast loading page
          where the game is front and center. We keep ads minimal, content
          straightforward, and everything else out of your way. If you have
          feedback or run into issues, head over to the Contact page and let us
          know.
        </p>
     </div>
    </div>
  );
}
