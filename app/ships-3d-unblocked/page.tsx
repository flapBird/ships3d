import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { type GuideFaqItem } from "@/components/GuideLayout";
import { getGuideById } from "@/lib/guides";
import { buildGuideMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

const guide = getGuideById("unblocked")!;

export const metadata: Metadata = buildGuideMetadata(guide);

const faq: GuideFaqItem[] = [
  {
    question: "Is Ships 3D unblocked?",
    answer:
      "Ships 3D runs in a normal browser tab, so it does not need an installer or admin rights. Whether it opens depends on the network you are using. If a school or work network blocks the game host, this site cannot override that restriction.",
  },
  {
    question: "Do I need to download Ships 3D?",
    answer:
      "No. The game runs in the browser. The first launch still downloads game files into the browser cache, which is why it can take a few seconds before the deck appears.",
  },
  {
    question: "Why is the game stuck on loading?",
    answer:
      "The first load is the slowest. Wait for the game files to download, check that WebGL is enabled, and disable extensions that block scripts or iframes. A reload often fixes a stalled loader.",
  },
  {
    question: "Can I play Ships 3D on a school Chromebook?",
    answer:
      "The game can run in a modern Chromebook browser, but the network may still block the game host. Use a device and network you are allowed to use; this site does not provide a bypass.",
  },
  {
    question: "Does Ships 3D work on mobile data?",
    answer:
      "Yes, if the browser and device support the game. A stable connection helps because the first load downloads the game assets. Landscape mode is recommended.",
  },
];

export default function UnblockedPage() {
  return (
    <GuideLayout
      guide={guide}
      toc={[
        { id: "what-unblocked-means", label: "What unblocked means here" },
        { id: "launch", label: "How to launch it" },
        { id: "requirements", label: "Browser requirements" },
        { id: "download", label: "Is there a download?" },
        { id: "fixes", label: "If it will not load" },
        { id: "network", label: "School and work networks" },
      ]}
      faq={faq}
    >
      <p>
        People search for &quot;Ships 3D unblocked&quot; because they want to
        play the game in a browser without installing anything. That part is
        accurate: Ships 3D is a browser game. It does not require an app store
        download or a desktop installer, and it runs inside a normal tab on a
        modern device.
      </p>
      <p>
        What this page cannot do is bypass a network administrator. If your
        school, workplace, or ISP blocks the game host, the restriction is
        outside this site&apos;s control. Use a network and device you are
        permitted to use.
      </p>

      <h2 id="what-unblocked-means">What &quot;unblocked&quot; means here</h2>
      <p>
        &quot;Unblocked&quot; usually means the game is playable without a
        separate download, installer, or launcher. Ships 3D fits that
        description: you open a page, press play, and the game loads in the
        browser. There is no EXE, APK, or Steam client involved for the browser
        version.
      </p>
      <p>
        The game still needs an internet connection and access to its own
        servers. A game that is unblocked in the &quot;no install&quot; sense
        can still be blocked by a firewall. Those are two different problems.
      </p>

      <h2 id="launch">How to launch Ships 3D</h2>
      <ol>
        <li>
          Open the <Link href="/#play">Ships 3D play page</Link> on this site.
        </li>
        <li>
          Press the <strong>Play Now</strong> button on the cover screen. The
          game loads inside the page.
        </li>
        <li>
          Wait for the first load. The game has to fetch its assets and start
          the 3D scene; a few seconds is normal on a first visit.
        </li>
        <li>
          Enter a username and choose a server. Team Flags is the easiest mode
          for a first session.
        </li>
        <li>
          Use the fullscreen button for a larger view, especially if the page
          is crowded with other content.
        </li>
      </ol>
      <p>
        If the cover screen loads but the game does not, the issue is usually
        the game connection rather than this page. The fixes below cover the
        common cases.
      </p>

      <h2 id="requirements">Browser requirements</h2>
      <ul>
        <li>
          <strong>A modern browser.</strong> Current Chrome, Edge, Firefox, or
          Safari on desktop is the safest choice.
        </li>
        <li>
          <strong>WebGL enabled.</strong> This is a 3D game; if hardware
          acceleration or WebGL is disabled, the game may show a blank canvas.
        </li>
        <li>
          <strong>A stable connection.</strong> The first load downloads game
          assets. A slow connection makes the loading screen longer, not
          necessarily broken.
        </li>
        <li>
          <strong>A mouse is recommended.</strong> Aiming cannons with a mouse
          is much easier than using a trackpad. Mobile touch controls work, but
          desktop is the better first experience.
        </li>
      </ul>

      <h2 id="download">Is there a Ships 3D download?</h2>
      <p>
        The browser version does not require a download from this site. It is
        loaded from the game provider when you press play. If you see a site
        offering a &quot;Ships 3D download&quot; for your PC, be careful: the
        official browser game is played in the browser, and unrelated
        installers are a common way to distribute unwanted software.
      </p>
      <p>
        The first launch does download game data into your browser cache. That
        is why the loading screen exists and why the second visit is usually
        faster. Clearing your browser cache can make the next launch slow
        again.
      </p>

      <h2 id="fixes">If it will not load</h2>
      <ul>
        <li>
          <strong>Reload the page once.</strong> A stalled first fetch is the
          most common cause; the reload button in the game toolbar does the
          same thing without refreshing the whole site.
        </li>
        <li>
          <strong>Turn off script or iframe blockers.</strong> Extensions that
          block third-party scripts can prevent the game from starting.
        </li>
        <li>
          <strong>Enable WebGL and hardware acceleration.</strong> Check your
          browser settings, then restart the browser.
        </li>
        <li>
          <strong>Try a different browser.</strong> If Chrome fails, try Edge or
          Firefox. This separates a browser-specific issue from a network
          issue.
        </li>
        <li>
          <strong>Use fullscreen.</strong> Some browsers handle the game canvas
          better in fullscreen, and it removes page-level distractions.
        </li>
        <li>
          <strong>Check the network.</strong> If the game frame never loads and
          other sites work, the game host may be unreachable from your network.
        </li>
      </ul>

      <h2 id="network">School and work networks</h2>
      <p>
        If you are on a managed network, the administrator decides which game
        hosts are reachable. This site cannot change that. The honest options
        are to use a device and network you are allowed to use, or to ask the
        administrator whether the game is permitted.
      </p>
      <p>
        The same advice applies at home if a parental control or DNS filter is
        active. The game itself is a normal browser game; the restriction is
        applied by the network, not by this page.
      </p>
      <p>
        For phone-specific setup, see{" "}
        <Link href="/ships-3d-mobile">Ships 3D on mobile</Link>. For the
        controls and first-match walkthrough, see{" "}
        <Link href="/guides/how-to-play">how to play</Link>. The{" "}
        <Link href="/ships-3d-wiki">wiki</Link> covers the game systems, and{" "}
        {siteConfig.siteName} is an independent fan site.
      </p>
    </GuideLayout>
  );
}
