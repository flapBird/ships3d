import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";

const guide = getGuideById("games-like")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const faq: GuideFaqItem[] = [
  {
    question: "Is there a game exactly like Ships 3D?",
    answer:
      "Not really. Ships 3D's specific mix of first-person deck movement, shared stations, and crew codes is unusual. The alternatives below match the naval combat theme or the browser format, but most do not put several players on one ship.",
  },
  {
    question: "What is the closest browser alternative to Ships 3D?",
    answer:
      "Ships Battlefield 3D is the closest browser match for arcade naval combat. Fleet Battle is the better pick if you want a slower, turn-based Battleship-style game.",
  },
  {
    question: "Is World of Warships free?",
    answer:
      "World of Warships is free to play on PC, with optional purchases. It is a much larger game than Ships 3D and focuses on team battles with 20th-century warships.",
  },
  {
    question: "Which alternative is best for playing with friends?",
    answer:
      "Fleet Battle and Battle Fleet 2 are the easiest to recommend for friend groups because they are turn-based and do not require split-second crew coordination. Ships 3D itself is still the best fit if you want several players on one ship.",
  },
  {
    question: "Are these games available on mobile?",
    answer:
      "Naval Armada and King of Warship are mobile-friendly options. Ships 3D also runs in a mobile browser; see the mobile guide for setup.",
  },
];

export default function GamesLikePage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "browser", label: "Browser alternatives" },
        { id: "pc", label: "PC naval games" },
        { id: "mobile", label: "Mobile options" },
        { id: "comparison", label: "Comparison table" },
        { id: "which-one", label: "Which one should you try?" },
      ]}
      faq={faq}
    >
      <p>
        Ships 3D is unusual because you do not command a ship from above. You
        walk its deck, take a station, and share the work with other players.
        Most naval games do not do that. The alternatives below are grouped by
        what they actually offer, so you can pick the right kind of substitute
        instead of expecting a clone.
      </p>

      <h2 id="browser">Browser alternatives</h2>
      <h3>Ships Battlefield 3D</h3>
      <p>
        A browser-based arcade naval game with a campaign-style structure,
        cannon combat, and weapon unlocks. It is the closest match if you want
        another 3D ship game you can open in a tab. It is more of a
        command-the-ship arcade game than a crew simulation, so do not expect
        the same station split.
      </p>
      <p>
        <a
          href="https://www.crazygames.com/game/ships-battlefield-3d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Ships Battlefield 3D on CrazyGames
        </a>
      </p>

      <h3>Fleet Battle</h3>
      <p>
        Fleet Battle is a turn-based naval PvP game built around the classic
        Battleship formula, with 3D ship models and quick matches. It is a good
        change of pace if you like the naval theme but want something slower
        and more tactical than real-time cannon aiming.
      </p>
      <p>
        <a
          href="https://www.crazygames.com/game/fleet-battle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Fleet Battle on CrazyGames
        </a>
      </p>

      <h2 id="pc">PC naval games</h2>
      <h3>Battle Fleet 2</h3>
      <p>
        A turn-based naval tactics game with Pacific and Atlantic campaigns,
        3D ship models, and cross-platform multiplayer. If you want to plan
        broadsides and manoeuvres without real-time pressure, this is the
        natural step up from a browser game.
      </p>
      <p>
        <a
          href="https://store.steampowered.com/app/332490/Battle_Fleet_2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Battle Fleet 2 on Steam
        </a>
      </p>

      <h3>World of Warships</h3>
      <p>
        The big free-to-play option. World of Warships is a team-based PC game
        built around 20th-century warships, with a much larger progression
        system and a much longer learning curve than Ships 3D. It is the right
        choice if you want a long-term naval game rather than a quick browser
        session.
      </p>
      <p>
        <a
          href="https://worldofwarships.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          World of Warships official site
        </a>
      </p>

      <h2 id="mobile">Mobile options</h2>
      <h3>Naval Armada</h3>
      <p>
        A multiplayer warship game with fleet building and PvP battles, listed
        for Windows and mobile storefronts. It is closer to a mobile
        progression game than to Ships 3D&apos;s shared-station format.
      </p>
      <p>
        <a
          href="https://www.microsoft.com/en-as/p/naval-armada-naval-battles-on-ships/9nsr11ndqpg4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naval Armada on the Microsoft Store
        </a>
      </p>

      <h3>King of Warship: 10v10 Battle</h3>
      <p>
        A mobile naval game with 10v10 battles and a large roster of
        World-War-II-era warships. It is a team PvP game, but the combat is
        built around commanding a warship rather than crewing one with friends
        on deck.
      </p>
      <p>
        <a
          href="https://itunes.apple.com/us/app/%E5%B7%85%E5%B3%B0%E6%88%98%E8%88%B0-10v10%E6%B5%B7%E6%88%98%E5%AF%B9%E5%86%B3/id1181319953"
          target="_blank"
          rel="noopener noreferrer"
        >
          King of Warship on the App Store
        </a>
      </p>

      <h2 id="comparison">Comparison table</h2>
      <div className="guide-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Game</th>
              <th scope="col">Platform</th>
              <th scope="col">Style</th>
              <th scope="col">Closest to Ships 3D?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ships 3D</td>
              <td>Browser</td>
              <td>Real-time crew combat</td>
              <td>The original</td>
            </tr>
            <tr>
              <td>Ships Battlefield 3D</td>
              <td>Browser</td>
              <td>Arcade naval combat</td>
              <td>Theme and format</td>
            </tr>
            <tr>
              <td>Fleet Battle</td>
              <td>Browser</td>
              <td>Turn-based PvP</td>
              <td>Naval PvP</td>
            </tr>
            <tr>
              <td>Battle Fleet 2</td>
              <td>PC</td>
              <td>Turn-based tactics</td>
              <td>Naval tactics</td>
            </tr>
            <tr>
              <td>World of Warships</td>
              <td>PC</td>
              <td>Team warship combat</td>
              <td>Team naval battles</td>
            </tr>
            <tr>
              <td>Naval Armada</td>
              <td>Windows / mobile</td>
              <td>Fleet PvP</td>
              <td>Theme only</td>
            </tr>
            <tr>
              <td>King of Warship</td>
              <td>Mobile</td>
              <td>10v10 warship PvP</td>
              <td>Theme only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="which-one">Which one should you try?</h2>
      <p>
        If you want to stay in a browser, try Ships Battlefield 3D for arcade
        combat or Fleet Battle for a slower tactical match. If you want a PC
        game with more depth, Battle Fleet 2 is the gentler step and World of
        Warships is the long-term commitment. On mobile, Naval Armada and King
        of Warship cover the naval PvP niche.
      </p>
      <p>
        If the specific thing you liked was sharing a ship with friends, none
        of these replaces Ships 3D. Go back to the{" "}
        <Link href="/guides/crew-codes">crew code guide</Link>, get a friend
        onto your ship, and split the helm and cannons. The{" "}
        <Link href="/guides/game-modes">game modes guide</Link> explains which
        mode to pick for a short session and which one suits a longer crew
        run.
      </p>
    </GuideLayout>
  );
}
