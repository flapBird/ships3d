import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";

const guide = getGuideById("game-modes")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const faq: GuideFaqItem[] = [
  {
    question: "What game modes are in Ships 3D?",
    answer:
      "The current browser build offers Team Flags and Trader Mode. Team Flags is the quicker team-combat mode; Trader Mode is the larger, more open-ended server option.",
  },
  {
    question: "Which Ships 3D mode is best for beginners?",
    answer:
      "Start with Team Flags. It gives you a clear objective and regular fights, which makes it easier to learn the helm, sails, and cannon loop.",
  },
  {
    question: "Do the controls change between modes?",
    answer:
      "No. Your character, stations, and controls work the same way. The mode changes the objective, pacing, and server size rather than the basic control scheme.",
  },
  {
    question: "Can I switch modes without restarting?",
    answer:
      "Choose the mode when you join a server. Switching modes usually means leaving the current session and joining a different server.",
  },
  {
    question: "How many players are in a match?",
    answer:
      "Standard battles support up to 20 players. Larger and more open modes can support bigger servers, and the actual population depends on the server you choose.",
  },
];

export default function GameModesPage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "team-flags", label: "Team Flags" },
        { id: "trader-mode", label: "Trader Mode" },
        { id: "comparison", label: "Side-by-side comparison" },
        { id: "which-mode", label: "Which mode should you play?" },
        { id: "mode-tips", label: "Tips for each mode" },
      ]}
      faq={faq}
    >
      <p>
        Ships 3D currently offers two ways to play: <strong>Team Flags</strong>{" "}
        and <strong>Trader Mode</strong>. They use the same ship controls and
        the same station system, but they produce very different sessions. If
        you have only tried one, the other is worth a look.
      </p>

      <h2 id="team-flags">Team Flags: the combat-first mode</h2>
      <p>
        Team Flags is the mode most players mean when they say &quot;Ships 3D&quot;.
        You join a team, fight over the objective, and score by sinking enemy
        ships and playing for the flag. Standard battles support up to 20
        players, which is enough to create several ship-to-ship fights without
        the server feeling empty.
      </p>
      <p>
        The clear objective is what makes Team Flags a good learning mode. You
        do not have to guess where the action is or what to do next. Join a
        server, take a station, and follow the fight. The pace is quicker than
        Trader Mode, so you get more repetitions of the helm-sail-cannon loop.
      </p>
      <ul>
        <li>
          <strong>Best for:</strong> new players, short sessions, cannon
          practice, and crew coordination.
        </li>
        <li>
          <strong>Watch out for:</strong> everyone abandoning the helm to chase
          a kill. A team with no one steering is a team that gets raked from the
          side.
        </li>
      </ul>

      <h2 id="trader-mode">Trader Mode: the larger, open-ended option</h2>
      <p>
        Trader Mode is the bigger sandbox. The current build describes it as a
        larger, more open-ended server experience rather than a short,
        objective-driven team match. Expect more room to sail, longer sessions,
        and less constant combat than Team Flags.
      </p>
      <p>
        That extra space is useful once you are comfortable with the controls.
        It gives you time to practise sail trimming, navigation, and station
        changes without a flag timer pushing you around. It also makes a crew
        more valuable: a ship with a helm, a sail handler, and a gunner can
        cover more ground than a solo player hopping between stations.
      </p>
      <ul>
        <li>
          <strong>Best for:</strong> longer sessions, exploration, and crews
          that want a quieter pace.
        </li>
        <li>
          <strong>Watch out for:</strong> drifting without a plan. The mode is
          open-ended, so your crew has to create its own objective.
        </li>
      </ul>

      <h2 id="comparison">Side-by-side comparison</h2>
      <div className="guide-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Team Flags</th>
              <th scope="col">Trader Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Objective</td>
              <td>Team fight and flag objective</td>
              <td>Open-ended, larger session</td>
            </tr>
            <tr>
              <td>Pace</td>
              <td>Faster, more combat</td>
              <td>Slower, more sailing</td>
            </tr>
            <tr>
              <td>Server size</td>
              <td>Up to 20 in standard battles</td>
              <td>Larger, open servers</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Learning and quick sessions</td>
              <td>Crews and longer sessions</td>
            </tr>
            <tr>
              <td>Stations</td>
              <td>Helm, sails, cannons</td>
              <td>Helm, sails, cannons</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="which-mode">Which mode should you play?</h2>
      <p>
        If you are new, play Team Flags until the controls feel automatic. If
        you have a friend and want to learn crew roles, Team Flags still works
        because the fights come to you. Move to Trader Mode when you want a
        longer session and you are comfortable keeping the ship moving without
        constant direction.
      </p>
      <p>
        Do not treat the choice as permanent. Both modes use the same ship and
        station system, so the skills transfer. The{" "}
        <Link href="/guides/how-to-play">how-to-play guide</Link> covers the
        shared controls, and the{" "}
        <Link href="/guides/crew-codes">crew code guide</Link> covers getting a
        friend onto your ship.
      </p>

      <h2 id="mode-tips">Tips for each mode</h2>
      <h3>Team Flags tips</h3>
      <ul>
        <li>
          Keep the objective in mind. Chasing a single enemy across the map is
          usually worse than holding a strong position near the fight.
        </li>
        <li>
          Fire in a broadside. The target should be beside the ship, not in
          front of it.
        </li>
        <li>
          Keep one crew member on the helm. A stationary or drifting ship is an
          easy target.
        </li>
      </ul>
      <h3>Trader Mode tips</h3>
      <ul>
        <li>
          Agree on a route or destination before you set sail. &quot;Open
          world&quot; can turn into &quot;sail in circles&quot; very quickly.
        </li>
        <li>
          Trim the sails for speed. The flags show the wind, and a correctly set
          sail stops flapping.
        </li>
        <li>
          Keep a lookout. Longer sessions mean more chances for another ship to
          catch you with your crew out of position.
        </li>
      </ul>
      <p>
        For the full station and progression reference, read the{" "}
        <Link href="/ships-3d-wiki">Ships 3D wiki</Link>. If you are still
        deciding whether to play at all, the{" "}
        <Link href="/ships-3d-unblocked">browser launch page</Link> covers the
        requirements and first-load behaviour.
      </p>
    </GuideLayout>
  );
}
