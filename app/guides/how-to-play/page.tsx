import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";

const guide = getGuideById("how-to-play")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const controls = [
  ["W A S D", "Walk around the deck. At the helm, steer the ship."],
  ["Mouse", "Look around the deck and aim a cannon."],
  ["Left click", "Fire the cannon you are operating."],
  ["F", "Interact with the helm, sails, or a cannon."],
];

const faq: GuideFaqItem[] = [
  {
    question: "What are the controls in Ships 3D?",
    answer:
      "Use WASD to move around the deck and steer at the helm, the mouse to look and aim, left click to fire a cannon, and F to interact with the helm, sails, and cannons.",
  },
  {
    question: "Is Ships 3D free to play?",
    answer:
      "Yes. The browser version is free to launch. The game is operated by its original developer, so account options and in-game features can change over time.",
  },
  {
    question: "Do I need to download Ships 3D?",
    answer:
      "No. It runs in a modern desktop or mobile browser. The first launch still downloads and caches game files, which is why it can take a few seconds.",
  },
  {
    question: "Can I play Ships 3D alone?",
    answer:
      "Yes. Solo players can use the Helper Bot to handle stations they are not using. You can also invite friends with a crew code.",
  },
  {
    question: "How many players are in a match?",
    answer:
      "Standard battles support up to 20 players. Larger or more open modes can support bigger servers, and the exact population depends on the server you join.",
  },
];

export default function HowToPlayPage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "before-you-start", label: "Before your first match" },
        { id: "controls", label: "Ships 3D controls" },
        { id: "stations", label: "The three ship stations" },
        { id: "first-match", label: "Your first match" },
        { id: "solo-or-crew", label: "Solo or with a crew" },
        { id: "next-steps", label: "What to practice next" },
      ]}
      faq={faq}
    >
      <p>
        Ships 3D is not a game where you command a ship from a bird&apos;s-eye
        view. You control a sailor on deck, walk from station to station, and
        work the helm, sails, and cannons. That is why the first match can feel
        chaotic: the ship only moves well when someone is actually doing each
        job.
      </p>
      <p>
        This walkthrough covers the controls, the three stations, and a
        sensible first match. For the wider system reference, see the{" "}
        <Link href="/ships-3d-wiki">Ships 3D wiki</Link>. If you already know
        the basics and want to stop making beginner mistakes, read the{" "}
        <Link href="/guides/beginner-tips">Ships 3D tips guide</Link>.
      </p>

      <h2 id="before-you-start">Before your first match</h2>
      <p>
        Ships 3D runs in a browser on desktop, tablet, and mobile. There is no
        installer. The first load can take a few seconds because the game
        downloads its assets and starts a WebGL scene; later loads are usually
        faster once the browser has cached them.
      </p>
      <ul>
        <li>
          <strong>Use a desktop browser for your first session.</strong> A
          mouse makes aiming much easier, and the fullscreen button gives you a
          cleaner view of the deck.
        </li>
        <li>
          <strong>Enter a username.</strong> You can start as a guest. The game
          also offers registration and sign-in options if you want account
          features.
        </li>
        <li>
          <strong>Pick a beginner-friendly server.</strong> Servers with the
          Helper Bot enabled are easier to learn on because the bot can keep
          the ship moving while you practice one station.
        </li>
        <li>
          <strong>Choose a mode.</strong> Team Flags is the quicker,
          combat-focused option. Trader Mode is the larger, more open-ended
          one. The <Link href="/guides/game-modes">mode comparison</Link> covers
          the difference in detail.
        </li>
      </ul>

      <h2 id="controls">Ships 3D controls</h2>
      <div className="guide-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Input</th>
              <th scope="col">What it does</th>
            </tr>
          </thead>
          <tbody>
            {controls.map(([key, action]) => (
              <tr key={key}>
                <td>
                  <kbd>{key}</kbd>
                </td>
                <td>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The important habit is <strong>F</strong>. Walking up to a station is
        not enough; you have to interact with it to take control. When you
        leave a station, the Helper Bot can take it over again if it is enabled
        on that server.
      </p>
      <p>
        On a phone or tablet, the game shows touch controls instead. The
        interface is much clearer in landscape orientation, and the fullscreen
        button is worth using. See{" "}
        <Link href="/ships-3d-mobile">Ships 3D on mobile</Link> for setup and
        performance tips.
      </p>

      <h2 id="stations">The three ship stations</h2>
      <h3>Helm: point the ship</h3>
      <p>
        The helm is where you steer. At the helm, WASD controls the ship&apos;s
        direction. The helm is also where you line up a broadside: a cannon
        does not fire forward like a rifle, so you want the side of the ship
        facing the target.
      </p>

      <h3>Sails: give the ship speed</h3>
      <p>
        Sails set the angle of the sail to the wind. The flags on the ship show
        which way the wind is blowing. Adjust the sail angle according to the
        points of sail shown in the in-game instructions; when the sail is set
        correctly, it stops flapping. A sail set at a poor angle leaves you
        slow and easy to chase.
      </p>

      <h3>Cannons: do the damage</h3>
      <p>
        Walk to a cannon, press <kbd>F</kbd>, aim with the mouse, and fire with
        left click. You cannot fire while sprinting around the deck, so the
        useful loop is: set the ship on a good line, leave the helm, take a
        cannon, fire, then return to the helm before the ship drifts off
        course.
      </p>

      <div className="guide-note">
        <strong>Beginner tip:</strong> do not try to run every station at once.
        Pick the helm for a minute, then stay on a cannon for a few shots. The
        Helper Bot can cover the station you leave, and your accuracy will
        improve faster than if you sprint between all three.
      </div>

      <h2 id="first-match">Your first match, step by step</h2>
      <ol>
        <li>
          Launch the game and enter a username. Choose Team Flags for your
          first session.
        </li>
        <li>
          Join a server with Helper Bots enabled. If the server list is busy,
          pick one with a moderate population rather than the fullest server.
        </li>
        <li>
          Walk to the helm and press <kbd>F</kbd>. Turn the ship so the side
          with the cannons faces the enemy.
        </li>
        <li>
          Set the sail angle. Watch the flags and the sail itself: a correctly
          trimmed sail stops flapping.
        </li>
        <li>
          Leave the helm, take a cannon, and fire when the target is in your
          arc. Do not chase a single enemy while exposing your other side.
        </li>
        <li>
          Return to the helm before the ship drifts. A ship with no helmsman
          is a free target, even if its cannons are loaded.
        </li>
      </ol>

      <h2 id="solo-or-crew">Solo or with a crew</h2>
      <p>
        Solo play is supported. The Helper Bot can steer, set sails, and fire
        cannons, and it gives up a station when you take control. That makes it
        possible to learn one role at a time without leaving the ship
        completely unattended.
      </p>
      <p>
        With friends, the game becomes a coordination game. One player can
        hold the helm, another can trim sails, and a third can stay on the
        cannons. You invite friends with the ship&apos;s crew code; the{" "}
        <Link href="/guides/crew-codes">crew code guide</Link> walks through
        the invite flow and role splits. A crew does not need a full roster,
        though: two players covering helm and cannons already work better than
        two solo players on the same ship.
      </p>

      <h2 id="next-steps">What to practice next</h2>
      <p>
        Once you can steer without running aground and fire without losing the
        helm, practice three things: keeping the target on your broadside,
        trimming the sail for speed, and switching stations before the ship
        drifts. Those habits matter more than unlocking equipment.
      </p>
      <p>
        Gold and levels earned in battles can be spent on ship and cannon
        upgrades, but upgrades do not fix bad positioning. A well-aimed
        broadside from a basic ship usually beats a costly ship sailing
        sideways to the enemy. For the full system overview, read the{" "}
        <Link href="/ships-3d-wiki">Ships 3D wiki</Link>.
      </p>
    </GuideLayout>
  );
}
