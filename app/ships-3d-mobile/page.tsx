import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";

const guide = getGuideById("mobile")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const faq: GuideFaqItem[] = [
  {
    question: "Does Ships 3D work on phones?",
    answer:
      "Yes. The game supports mobile browsers, but the interface is much easier to use in landscape orientation. Rotate the phone and use the fullscreen button if your browser supports it.",
  },
  {
    question: "Are the controls different on mobile?",
    answer:
      "The game uses touch controls on mobile instead of the desktop keyboard and mouse layout. The stations and jobs are the same: helm, sails, and cannons.",
  },
  {
    question: "Why is Ships 3D slow on my phone?",
    answer:
      "It is a 3D browser game, so older devices and background apps can struggle. Close other tabs, use a modern browser, and prefer Wi-Fi for the first load.",
  },
  {
    question: "Can I use a crew code on mobile?",
    answer:
      "Yes, but copying and pasting is easier on desktop. If the code field is hard to use on your phone, join from a desktop first or send the code to a friend who can enter it for you.",
  },
  {
    question: "Is there a Ships 3D mobile app?",
    answer:
      "The browser version is the one this site hosts. If a mobile app is offered by the developer or a portal, check its official listing rather than a third-party APK site.",
  },
];

export default function MobilePage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "setup", label: "Set up your phone" },
        { id: "controls", label: "Touch controls" },
        { id: "performance", label: "Performance tips" },
        { id: "crew", label: "Crew play on mobile" },
        { id: "fixes", label: "Common fixes" },
      ]}
      faq={faq}
    >
      <p>
        Ships 3D is playable on phones and tablets, but mobile is not simply a
        smaller desktop experience. The deck is a 3D space, the stations are
        small targets, and the on-screen controls take up part of the screen.
        A little setup makes a big difference.
      </p>

      <h2 id="setup">Set up your phone</h2>
      <ol>
        <li>
          <strong>Rotate to landscape.</strong> The game is much clearer with
          the phone held horizontally. Portrait mode leaves too little room for
          the deck and the touch controls.
        </li>
        <li>
          <strong>Use fullscreen.</strong> The fullscreen button below the game
          removes the page around the canvas and gives you more room to aim.
        </li>
        <li>
          <strong>Close background apps.</strong> A 3D browser game is heavier
          than a simple puzzle game. Freeing memory helps on older phones.
        </li>
        <li>
          <strong>Use Wi-Fi for the first load.</strong> The game downloads its
          assets on first launch. After that, the browser cache usually makes
          repeat visits faster.
        </li>
      </ol>

      <h2 id="controls">Touch controls</h2>
      <p>
        The game switches to touch controls when it detects a mobile device.
        The controls are grouped around the screen, and the exact layout can
        change between builds. The jobs are unchanged: move to a station,
        interact with it, and steer, trim, or fire.
      </p>
      <p>
        Two habits make mobile play easier. First, use a secure grip: you will
        be holding the device in landscape for a whole match. Second, take
        stations one at a time. Jumping between the helm and the cannons is
        harder on a touchscreen than with a keyboard.
      </p>

      <h2 id="performance">Performance tips</h2>
      <ul>
        <li>
          <strong>Use a current browser.</strong> Chrome, Safari, and Firefox
          on recent iOS or Android versions are the safest choices.
        </li>
        <li>
          <strong>Turn off battery saver.</strong> Some phones throttle the
          browser when battery saver is on, which makes the game stutter.
        </li>
        <li>
          <strong>Reduce heat.</strong> If the phone is already warm, the game
          may drop frames. Let it cool and try again.
        </li>
        <li>
          <strong>Stay close to the router.</strong> Packet loss on a weak
          connection feels like laggy steering and missed shots.
        </li>
        <li>
          <strong>Try a tablet.</strong> A larger screen makes the stations and
          cannons easier to target without changing the game itself.
        </li>
      </ul>

      <h2 id="crew">Crew play on mobile</h2>
      <p>
        Mobile players can join a crew with the same crew code used on desktop.
        The practical problem is copying the code: it is easier to send it from
        a desktop or paste it from a messaging app. Once you are on the ship,
        the role split is identical to desktop: one player on the helm, one on
        sails, and one on cannons if you have enough people.
      </p>
      <p>
        See the <Link href="/guides/crew-codes">crew code guide</Link> for the
        invite flow and a suggested role split.
      </p>

      <h2 id="fixes">Common fixes</h2>
      <ul>
        <li>
          <strong>Blank canvas:</strong> reload the page, update the browser,
          and make sure WebGL/hardware acceleration is enabled.
        </li>
        <li>
          <strong>Game frame will not load:</strong> switch from mobile data to
          Wi-Fi and try again. The first load is the most demanding.
        </li>
        <li>
          <strong>Touch controls feel cramped:</strong> use fullscreen and
          landscape; if the device is small, a tablet is much more comfortable.
        </li>
        <li>
          <strong>Game is slow:</strong> close other tabs, turn off battery
          saver, and try a different browser.
        </li>
      </ul>
      <p>
        If the page itself will not load, the{" "}
        <Link href="/ships-3d-unblocked">browser launch guide</Link> covers
        script blockers, WebGL, and network restrictions. For the basics of
        each station, read{" "}
        <Link href="/guides/how-to-play">how to play Ships 3D</Link>.
      </p>
    </GuideLayout>
  );
}
