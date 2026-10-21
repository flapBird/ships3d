import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";

const guide = getGuideById("crew-codes")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const faq: GuideFaqItem[] = [
  {
    question: "How do I invite a friend in Ships 3D?",
    answer:
      "Open the in-game menu on your ship, copy the crew or ship code, and send it to your friend. They enter the code on the server selection screen before joining. The exact label can differ between builds, but the flow is the same.",
  },
  {
    question: "Where do I enter a Ships 3D crew code?",
    answer:
      "The code field is on the server selection screen. If you cannot see it, check that you are on the server list rather than already inside a match.",
  },
  {
    question: "Can I play with more than one friend?",
    answer:
      "Yes. A ship can hold a crew, and the code is the usual way to get everyone onto the same vessel. Larger groups should assign stations before joining so nobody fights over the helm.",
  },
  {
    question: "Does the crew code expire?",
    answer:
      "Treat the code as temporary and tied to that ship or session. If it stops working, generate a fresh code from the in-game menu and send the new one.",
  },
  {
    question: "Can I use a crew code on mobile?",
    answer:
      "Yes, mobile players can join a crew, but copying and pasting a code is easier on desktop. This site does not run the game server, so it cannot generate or recover codes.",
  },
];

export default function CrewCodesPage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "what-it-is", label: "What a crew code is" },
        { id: "invite", label: "Invite a friend" },
        { id: "roles", label: "Split the stations" },
        { id: "communication", label: "Communication" },
        { id: "troubleshooting", label: "If the code fails" },
      ]}
      faq={faq}
    >
      <p>
        Ships 3D is built around a simple idea: one ship, several jobs, real
        people. A crew code is how you get those people onto the same vessel
        instead of scattering across a public server. This guide covers the
        invite flow and the role split that makes a small crew effective.
      </p>

      <h2 id="what-it-is">What a crew code is</h2>
      <p>
        A crew code is a short, unique code attached to a ship or session. You
        copy it from the in-game menu and send it to a friend; they enter it on
        the server selection screen. Some builds label it a{" "}
        <strong>ship code</strong> rather than a crew code, so look for either
        label.
      </p>
      <p>
        The code is not a password for your account, and it does not give
        access to your progress. It is simply an invite to the same vessel.
        Treat it like a temporary room code: share it with people you want on
        the ship and generate a new one if it stops working.
      </p>

      <h2 id="invite">Invite a friend, step by step</h2>
      <ol>
        <li>
          Launch Ships 3D and get into a server. Pick a mode and a server with
          room for your group.
        </li>
        <li>
          Open the in-game menu and copy the crew or ship code. On desktop this
          is a quick copy-and-paste; on mobile, long-press the code or use the
          game&apos;s share option if one is available.
        </li>
        <li>
          Send the code to your friend through your normal chat app. Do not
          post it publicly if you want a private session.
        </li>
        <li>
          Your friend opens the server selection screen, pastes the code into
          the code field, and joins. They should land on your ship rather than
          spawning elsewhere.
        </li>
        <li>
          If the ship is full or the server has filled up, move to a less busy
          server and generate a new code.
        </li>
      </ol>

      <div className="guide-note">
        <strong>Before you invite:</strong> decide who is doing which job.
        Joining first and arguing about the helm later is how a crew ends up
        drifting in circles.
      </div>

      <h2 id="roles">Split the stations</h2>
      <p>
        A ship has three useful jobs: helm, sails, and cannons. You do not need
        a full crew to benefit from a split, but you do need one person to own
        each job for a stretch of the fight.
      </p>
      <div className="guide-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Crew size</th>
              <th scope="col">Suggested split</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 players</td>
              <td>
                One on the helm and sails, one on the cannons. The helm player
                calls the turn and keeps the broadside lined up.
              </td>
            </tr>
            <tr>
              <td>3 players</td>
              <td>
                One helm, one sails, one cannons. Rotate if someone wants to
                practise a different station.
              </td>
            </tr>
            <tr>
              <td>Solo</td>
              <td>
                Use the Helper Bot for the stations you are not using. Learn one
                job at a time rather than sprinting between all three.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The helm player should not abandon the wheel just because a target
        appears. It is better to hold a steady course and let the cannon player
        fire than to leave the ship turning while everyone chases a shot. The{" "}
        <Link href="/guides/how-to-play">controls guide</Link> explains the
        station interactions in detail.
      </p>

      <h2 id="communication">Communication that actually helps</h2>
      <p>
        The game includes chat, clan chat, and a friends list, but text chat is
        easy to miss during a fight. If you are playing seriously, use a voice
        call outside the game.
      </p>
      <ul>
        <li>
          <strong>Call the turn before you make it.</strong> &quot;Turning
          starboard, guns ready&quot; is more useful than turning silently.
        </li>
        <li>
          <strong>Call the target, not the emotion.</strong> &quot;Enemy on our
          left, close range&quot; helps; &quot;help!&quot; does not.
        </li>
        <li>
          <strong>Say when you leave a station.</strong> If the helm player
          goes to a cannon, someone else needs to know the wheel is free.
        </li>
        <li>
          <strong>Keep the crew small while learning.</strong> Two or three
          players is enough to learn the rhythm; a large crew adds coordination
          cost before it adds fun.
        </li>
      </ul>

      <h2 id="troubleshooting">If the code fails</h2>
      <ul>
        <li>
          <strong>Check the screen.</strong> The code belongs on the server
          selection screen, not inside an active match.
        </li>
        <li>
          <strong>Generate a fresh code.</strong> Session codes can become
          stale if the ship or server changes. Copy a new one from the in-game
          menu.
        </li>
        <li>
          <strong>Check the server.</strong> A full or shutting-down server can
          reject new crew members even with a valid code.
        </li>
        <li>
          <strong>Check the build.</strong> Both players should be on the same
          current version. If one person is on an old cached build, reload the
          page and try again.
        </li>
        <li>
          <strong>Try desktop first.</strong> Copying and pasting is more
          reliable with a mouse and keyboard. Once the crew is together, mobile
          players can join normally.
        </li>
      </ul>
      <p>
        If you are still stuck, the{" "}
        <Link href="/ships-3d-unblocked">browser launch guide</Link> covers
        loading problems, and the{" "}
        <Link href="/ships-3d-mobile">mobile guide</Link> covers phone-specific
        issues.
      </p>
    </GuideLayout>
  );
}
