import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";

const guide = getGuideById("beginner-tips")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const faq: GuideFaqItem[] = [
  {
    question: "Are there Ships 3D hacks or cheats?",
    answer:
      "There is no legitimate cheat mode for the browser game. Sites promising free gold, upgrades, or aimbots are usually scams or malware. The reliable way to improve is to practise the helm, sail, and cannon loop.",
  },
  {
    question: "What is the best ship in Ships 3D?",
    answer:
      "There is no single best ship for every player. Upgrades help, but positioning and a crew that communicates matter more than the ship itself. Spend gold on the role you actually play instead of chasing a meta.",
  },
  {
    question: "Should beginners play solo or with a crew?",
    answer:
      "Start solo with the Helper Bot to learn one station, then invite one friend and split the helm and cannons. A two-player crew is much easier to coordinate than a full ship.",
  },
  {
    question: "How long does it take to get good?",
    answer:
      "Most players need a few sessions to stop fighting the controls. The biggest jump comes when you learn to keep the enemy on your broadside and stop leaving the helm unattended in combat.",
  },
];

export default function BeginnerTipsPage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "ship-is-a-platform", label: "1. The ship is a platform" },
        { id: "broadside", label: "2. Think in broadsides" },
        { id: "wind", label: "3. Trim the sails" },
        { id: "helm", label: "4. Do not abandon the helm" },
        { id: "range", label: "5. Pick your shots" },
        { id: "helper-bot", label: "6. Use the Helper Bot deliberately" },
        { id: "mode", label: "7. Start in Team Flags" },
        { id: "roles", label: "8. Split crew roles" },
        { id: "team", label: "9. Do not solo-chase" },
        { id: "upgrades", label: "10. Upgrades are not positioning" },
      ]}
      faq={faq}
    >
      <p>
        Ships 3D punishes players who treat it like a normal vehicle combat
        game. You are not driving a tank with a cannon attached; you are one
        person on a boat that needs several jobs done at once. These are the
        ten mistakes that keep new players at the bottom of the scoreboard.
      </p>

      <h2 id="ship-is-a-platform">1. Stop treating the ship as one unit</h2>
      <p>
        The helm, sails, and cannons are separate jobs in separate places. If
        you try to do all three at once, you will spend the match running
        across the deck while the ship sails in a straight line toward
        nothing. Pick one station, do it well for a stretch, then move.
      </p>

      <h2 id="broadside">2. Think in broadsides, not crosshairs</h2>
      <p>
        Cannons fire from the side of the ship. The most common beginner
        mistake is pointing the bow at an enemy and expecting to shoot it. Line
        the ship up so the target is beside you, then take a cannon. If you
        cannot see the target from the cannon, the helm needs to turn first.
      </p>

      <h2 id="wind">3. Trim the sails instead of holding full speed</h2>
      <p>
        The flags on the ship show the wind direction, and the sail needs to be
        set at the right angle to use it. Watch the sail: when it is trimmed
        correctly, it stops flapping. A badly trimmed sail makes you slow,
        which means the enemy chooses when and where to fight.
      </p>
      <p>
        The in-game instructions include the points of sail. Read them once,
        then practise setting the sail from a few different headings. It is a
        small skill that pays off in every match.
      </p>

      <h2 id="helm">4. Do not abandon the helm in a fight</h2>
      <p>
        A crew that all runs to the cannons leaves the ship turning in a
        circle or sailing straight into the enemy. Before you leave the helm,
        set a course that will keep you roughly parallel to the target. Then
        take your shots and go back before the ship drifts.
      </p>

      <h2 id="range">5. Pick shots you can actually land</h2>
      <p>
        Firing at a distant ship with no line is just noise. Close the gap,
        align the broadside, and fire when the target is in your arc. One
        coordinated volley at the right moment is better than ten shots fired
        while running between stations.
      </p>

      <h2 id="helper-bot">6. Use the Helper Bot as a crewmate, not a crutch</h2>
      <p>
        The Helper Bot can steer, set sails, and fire cannons. That is useful
        when you are learning, but it is also useful when you want to focus on
        one job. Let it hold the helm while you practise cannons, then take the
        helm back when you are ready. The bot gives up a station when you
        interact with it.
      </p>

      <h2 id="mode">7. Learn in Team Flags before Trader Mode</h2>
      <p>
        Team Flags gives you a clear objective and a steady stream of fights,
        which is the fastest way to learn the combat loop. Trader Mode is
        larger and more open-ended; save it for when you can sail and shoot
        without thinking about the controls. The{" "}
        <Link href="/guides/game-modes">game mode comparison</Link> explains
        the trade-off.
      </p>

      <h2 id="roles">8. Split crew roles instead of stacking one station</h2>
      <p>
        If you are playing with friends, assign jobs before you join. A simple
        two-player split is helm and cannons; a three-player crew can add
        sails. Use the{" "}
        <Link href="/guides/crew-codes">crew code guide</Link> to get everyone
        onto the same ship, and use voice chat for callouts because the in-game
        chat is easy to miss during a fight.
      </p>

      <h2 id="team">9. Do not chase a single enemy across the map</h2>
      <p>
        A lone chase usually ends with your ship exposed to the rest of the
        enemy team. Stay near your teammates, focus on the same target, and let
        the enemy come into your broadside. If you are alone, use the Helper
        Bot and play more defensively rather than hunting kills.
      </p>

      <h2 id="upgrades">10. Upgrades do not fix bad positioning</h2>
      <p>
        Gold and levels can improve your ship and cannons, but a stronger ship
        sailing sideways is still a target. Learn the station loop first, then
        spend currency on the role you actually play. A basic ship with a
        coordinated crew will beat an upgraded ship with nobody at the helm.
      </p>

      <div className="guide-note">
        <strong>One-session practice plan:</strong> spend ten minutes on the
        helm, ten minutes trimming sails, and ten minutes on a cannon. Do that
        once and your next match will feel completely different.
      </div>

      <p>
        If you have not played yet, start with the{" "}
        <Link href="/guides/how-to-play">controls walkthrough</Link>. If you
        want the full reference for stations and progression, use the{" "}
        <Link href="/ships-3d-wiki">Ships 3D wiki</Link>.
      </p>
    </GuideLayout>
  );
}
