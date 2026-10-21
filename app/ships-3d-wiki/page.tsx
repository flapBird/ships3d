import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

const guide = getGuideById("wiki")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const faq: GuideFaqItem[] = [
  {
    question: "Is this the official Ships 3D wiki?",
    answer:
      "No. This is an independent reference compiled from the current browser build, in-game instructions, and public game listings. Ships 3D is developed by Yp3d / ASDF Games, and this site is not affiliated with the developer.",
  },
  {
    question: "Who made Ships 3D?",
    answer:
      "Ships 3D was developed by Yp3d, also listed as ASDF Games. It was released for browsers in May 2022.",
  },
  {
    question: "Is Ships 3D pay-to-win?",
    answer:
      "The game can be played for free. Battles earn levels and gold that can be spent on ship and cannon upgrades. Positioning and crew coordination remain more important than raw upgrades.",
  },
  {
    question: "Does Ships 3D have clans?",
    answer:
      "Yes. The game includes a friends list, clan listings, and clan chat. Crew codes are the usual way to get friends onto the same ship for a session.",
  },
  {
    question: "How many players can be on a ship?",
    answer:
      "A ship can be crewed by several players, and standard battles support up to 20 players. The exact crew limit and server population depend on the current build and server.",
  },
];

const atAGlance = [
  ["Developer", "Yp3d / ASDF Games"],
  ["Browser release", "May 2022"],
  ["Platform", "Desktop, tablet, and mobile browsers"],
  ["Price", "Free to play"],
  ["Standard battle size", "Up to 20 players"],
  ["Modes", "Team Flags, Trader Mode"],
  ["Stations", "Helm, sails, cannons"],
  ["Solo support", "Helper Bot"],
  ["Crew", "Crew / ship codes, friends, clans"],
];

export default function WikiPage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "overview", label: "Overview" },
        { id: "stations", label: "Ship stations" },
        { id: "sailing", label: "Wind and sailing" },
        { id: "combat", label: "Combat and cannons" },
        { id: "progression", label: "Levels, gold, upgrades" },
        { id: "modes", label: "Game modes" },
        { id: "crew", label: "Crews, clans, chat" },
        { id: "controls", label: "Controls" },
        { id: "scope", label: "Reference scope" },
      ]}
      faq={faq}
    >
      <p>
        This page is a reference for the systems that make Ships 3D work: the
        three ship stations, wind and sail handling, cannon combat, progression,
        modes, and crew tools. It is written for players who want to understand
        the game rather than just launch it.
      </p>

      <h2 id="overview">Overview</h2>
      <div className="guide-table-wrap">
        <table>
          <tbody>
            {atAGlance.map(([label, value]) => (
              <tr key={label}>
                <th scope="row" className="w-48">
                  {label}
                </th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Ships 3D is a first-person multiplayer naval game. You control a sailor
        on deck rather than the ship as a single unit. The ship moves because
        someone is at the helm and the sails are set; it fights because someone
        is on a cannon. That division of labour is the core of the game.
      </p>

      <h2 id="stations">Ship stations</h2>
      <h3>Helm</h3>
      <p>
        The helm controls the ship&apos;s heading. Use the movement keys while
        at the helm to steer. The helm is also the station that decides whether
        the cannons have a shot: a target in front of the bow is not a target
        for a broadside.
      </p>

      <h3>Sails</h3>
      <p>
        The sails convert wind into speed. The flags on the ship show the wind
        direction. Adjust the sail angle according to the points of sail shown
        in the in-game instructions. A correctly trimmed sail stops flapping;
        a flapping sail is a sign that you are losing speed.
      </p>

      <h3>Cannons</h3>
      <p>
        Cannons are operated one at a time. Walk to a cannon, interact with it,
        aim with the mouse, and fire with left click. The ship needs to be
        aligned so the target is in the cannon&apos;s arc. Coordinated fire
        from several cannons is much more effective than scattered shots.
      </p>

      <h2 id="sailing">Wind and sailing</h2>
      <p>
        Sailing is the part new players skip, and it is the part that decides
        who controls the fight. The wind direction is shown by the flags on the
        ship. The sail angle needs to match the wind for the ship to make good
        speed; the in-game points-of-sail instructions explain the angles.
      </p>
      <ul>
        <li>
          <strong>Check the flags</strong> before you adjust the sail. The wind
          is not always coming from the direction you expect.
        </li>
        <li>
          <strong>Watch the sail</strong> after you set it. When it stops
          flapping, it is trimmed correctly.
        </li>
        <li>
          <strong>Do not ignore speed.</strong> A slow ship cannot choose its
          fights, and a ship that cannot choose its fights is usually the one
          that gets sunk.
        </li>
      </ul>

      <h2 id="combat">Combat and cannons</h2>
      <p>
        A cannon fires from the side of the ship. The practical combat loop is:
        line up the broadside from the helm, leave the helm on a stable course,
        take a cannon, aim, fire, and return before the ship drifts. If the
        target is not in your arc, the correct response is to steer, not to
        fire at nothing.
      </p>
      <p>
        Crews get more value from focused fire than from individual heroics.
        Two cannons hitting the same target at the same time can decide a fight
        before the enemy can turn. The{" "}
        <Link href="/guides/crew-codes">crew code guide</Link> covers the role
        split that makes this work in practice.
      </p>

      <h2 id="progression">Levels, gold, and upgrades</h2>
      <p>
        Playing battles earns levels and gold. Gold can be spent on ship and
        cannon upgrades. The game does not require upgrades to participate, but
        they improve your performance once you understand the station loop.
      </p>
      <p>
        Spend currency on the role you actually play. If you spend most of your
        time on cannons, cannon upgrades matter more than cosmetic changes or
        general ship upgrades. If you are the permanent helm player, speed and
        handling are the useful direction. Upgrades do not compensate for
        leaving the helm unattended or sailing with a flapping sail.
      </p>

      <h2 id="modes">Game modes</h2>
      <p>
        <strong>Team Flags</strong> is the faster team-combat mode, with a
        clear objective and regular fights. <strong>Trader Mode</strong> is the
        larger, more open-ended server option, better suited to longer sessions
        and crews that want more room to sail. The{" "}
        <Link href="/guides/game-modes">full mode comparison</Link> covers pace,
        server size, and which mode suits new players.
      </p>

      <h2 id="crew">Crews, clans, and chat</h2>
      <p>
        Ships 3D supports a friends list, clan listings, and clan chat. For
        short sessions, a crew code is the quickest way to get friends onto the
        same ship. The code is copied from the in-game menu and entered on the
        server selection screen; some builds call it a ship code.
      </p>
      <p>
        The <strong>Helper Bot</strong> is the solo player&apos;s substitute
        crewmate. It can steer, set sails, and fire cannons, and it yields a
        station when you take over. Use it to learn one job at a time rather
        than trying to operate every station yourself.
      </p>

      <h2 id="controls">Controls</h2>
      <div className="guide-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Input</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <kbd>W A S D</kbd>
              </td>
              <td>Move around the deck; steer while at the helm</td>
            </tr>
            <tr>
              <td>
                <kbd>Mouse</kbd>
              </td>
              <td>Look around and aim a cannon</td>
            </tr>
            <tr>
              <td>
                <kbd>Left click</kbd>
              </td>
              <td>Fire the cannon you are operating</td>
            </tr>
            <tr>
              <td>
                <kbd>F</kbd>
              </td>
              <td>Interact with the helm, sails, or a cannon</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Mobile devices use touch controls instead. The game is playable in
        portrait, but landscape mode and fullscreen are strongly recommended.
        See the <Link href="/ships-3d-mobile">mobile guide</Link> for setup.
      </p>

      <h2 id="scope">Reference scope</h2>
      <p>
        This wiki is independent. It is based on the current browser build and
        public game listings as of {siteConfig.content.updated}. It does not
        publish invented stat tables for individual ships or cannons; those
        numbers can change between updates and should be checked in-game.
      </p>
      <p>
        For a step-by-step introduction, start with the{" "}
        <Link href="/guides/how-to-play">controls and how-to-play guide</Link>.
        For launch problems, use the{" "}
        <Link href="/ships-3d-unblocked">browser launch guide</Link>.
      </p>
    </GuideLayout>
  );
}
