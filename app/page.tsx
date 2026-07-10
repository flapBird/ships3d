import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />
      <SidebarLayout>
       {/* Game introduction content */}
       <section className="space-y-8">
          {/* ── Game Introduction ── */}
         <div>
           <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              What is Ships 3D?
           </h2>
           <p className="text-text-dark/70 leading-relaxed mb-4">
              Ships 3D is a multiplayer naval combat game that runs right in your browser — no download, no hassle. You pilot a warship across an open 3D ocean, facing real players from all over the world. Each session drops roughly 20 players into the same waters, and special modes can push that to 60 or even 90. The action is fast: you steer, angle your hull, and fire broadsides at enemy ships while cannonballs kick up spray and splinters fly across the deck.
           </p>
           <p className="text-text-dark/70 leading-relaxed mb-4">
              What sets Ships 3D apart from traditional naval games is that each ship has multiple stations — the helm, the sails, the cannons — and you can walk around your vessel, pressing F to interact with each station. Too much to handle alone? A Helper Bot can take the wheel or man the guns, so solo players can still hold their own. Got a friend? Share a Crew Code and they'll spawn onto your ship — you steer, they shoot. The coordination makes a huge difference.
           </p>
           <p className="text-text-dark/70 leading-relaxed">
              Bottom line: Ships 3D is the kind of game you click and start playing in seconds. Easy to learn, but winning takes real teamwork. Whether you have 10 minutes during lunch or a whole evening to squad up with friends, just open your browser and set sail.
           </p>
         </div>

          {/* ── Image placeholder 1 ── */}
         <img
           src="/images/ships3D-desc-1.jpeg"
            alt="Ships 3D gameplay screenshot showing multiple warships exchanging cannon fire on the open sea, with water splashes and explosion effects"
           className="w-full rounded-xl shadow-lg"
         />

          {/* ── How to Play ── */}
         <div>
           <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              How to Play Ships 3D
           </h2>
           <p className="text-text-dark/70 leading-relaxed mb-4">
              You spawn on an open ocean map next to your chosen ship. To win, you need to control your ship's movement and positioning while lining up shots at enemy vessels. Beyond cannons, the game also gives you muskets and swords for close-quarters boarding action. The best way to play Ships 3D is with a crew — one person steers, another fires, someone keeps lookout. That said, you can absolutely go it alone with the Helper Bot backing you up.
           </p>
           <h3 className="font-heading font-bold text-lg text-text-dark mb-2 mt-6">
              Keyboard Controls
           </h3>
           <div className="overflow-x-auto mb-6">
             <table className="w-full text-sm text-text-dark/70 border-collapse">
               <thead>
                 <tr className="bg-surface border-b border-text-dark/10">
                    <th className="text-left py-2 px-3 font-semibold">Key</th>
                    <th className="text-left py-2 px-3 font-semibold">Action</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-text-dark/5">
                   <td className="py-2 px-3 font-mono">WASD / Arrow Keys</td>
                    <td className="py-2 px-3 font-mono">WASD / Arrow Keys</td>
                    <td className="py-2 px-3">Move / Steer</td>
                 </tr>
                 <tr className="border-b border-text-dark/5">
                   <td className="py-2 px-3 font-mono">Mouse move</td>
                    <td className="py-2 px-3 font-mono">Mouse move</td>
                    <td className="py-2 px-3">Look around / Aim</td>
                 </tr>
                 <tr className="border-b border-text-dark/5">
                   <td className="py-2 px-3 font-mono">Left mouse click</td>
                    <td className="py-2 px-3 font-mono">Left mouse click</td>
                    <td className="py-2 px-3">Fire cannons</td>
                 </tr>
                 <tr className="border-b border-text-dark/5">
                   <td className="py-2 px-3 font-mono">F</td>
                    <td className="py-2 px-3">Interact with helm, sails, cannons, flags</td>
                 </tr>
                 <tr className="border-b border-text-dark/5">
                   <td className="py-2 px-3 font-mono">Tab</td>
                    <td className="py-2 px-3">Switch view (first-person / third-person) / manage ship features</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <h3 className="font-heading font-bold text-lg text-text-dark mb-2">
              Touchscreen Controls
           </h3>
           <p className="text-text-dark/70 leading-relaxed mb-4">
              Ships 3D works on phones and tablets too. The game automatically adapts to touch with virtual joysticks and on-screen buttons — same controls, same gameplay. Just tap to fire and steer.
           </p>
           <h3 className="font-heading font-bold text-lg text-text-dark mb-2 mt-6">
              Game Modes
           </h3>
           <p className="text-text-dark/70 leading-relaxed">
              Ships 3D has two main modes. <strong>Team Flags</strong> is a classic team battle — two crews fight for control of the flag, pure coordination and firepower. <strong>Trader Mode</strong> is a massive 90-player economy mode where you trade goods, escort convoys, and battle rival merchants on the high seas. It's more strategic and a lot more chaotic. Both modes earn you gold and XP to upgrade your ship and cannons.
           </p>
         </div>

          {/* ── Image placeholder 2 ── */}
         <img
           src="/images/ships3D-desc-2.jpeg"
            alt="Ships 3D in-game interface showing helm, sail, and cannon interaction prompts alongside keyboard control hints"
           className="w-full rounded-xl shadow-lg"
         />

          {/* ── Key Features ── */}
         <div>
           <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              Key Features
           </h2>
           <ul className="space-y-4 text-text-dark/70 leading-relaxed">
             <li>
                <strong className="text-text-dark font-semibold">· Realistic sailing physics.</strong>
                Your ship isn't just a box sliding on water — wind direction, sail positioning, and hull angle all affect speed and turning radius. Learn to use the wind, and your aim will thank you.
             </li>
             <li>
                <strong className="text-text-dark font-semibold">· Cooperative crew play.</strong>
                Share a Crew Code and friends join your ship in seconds. One steers, another fires — good coordination beats random players every time. The Helper Bot can fill any empty station too.
             </li>
             <li>
                <strong className="text-text-dark font-semibold">· Ship and weapon upgrades.</strong>
                Sink enemies to earn gold, then spend it on upgrades — faster speed, stronger hulls, bigger cannons. The higher your level, the more firepower you bring to the fight.
             </li>
             <li>
                <strong className="text-text-dark font-semibold">· Clans and friends list.</strong>
                Built-in clan system lets you create or join a crew and play with the same squad regularly. There's also a friends list so you don't need to share codes every time.
             </li>
             <li>
                <strong className="text-text-dark font-semibold">· Free to play, works everywhere.</strong>
                Play on PC, Mac, phone, or tablet — all through the browser. No installs, no fees, no barrier to entry.
             </li>
           </ul>
         </div>

          {/* ── FAQ ── */}
         <div>
           <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
              FAQ
           </h2>
           <div className="space-y-5">
             <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Is Ships 3D free to play?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Yes, completely free. No payment, no premium currency, no "play 10 minutes then hit a paywall" nonsense. Just open your browser and play.
               </p>
             </div>
             <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Can I play Ships 3D with friends?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Yes. Generate a Crew Code in-game and share it with friends — they'll join your ship and take a station. You steer while they fire, or swap roles. Way more effective than sailing solo.
               </p>
             </div>
             <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Can I play Ships 3D on mobile?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Absolutely. Ships 3D runs on phones and tablets with full touch controls — virtual joysticks and on-screen buttons. Aiming is a bit trickier on a small screen compared to a mouse, but it's perfectly fine for Trader Mode or casual matches.
               </p>
             </div>
             <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  What game modes are available?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Two main modes: <strong>Team Flags</strong> — capture-the-flag naval battles that reward coordination and aggression, and <strong>Trader Mode</strong> — a 90-player economy mode focused on trading, escorting, and merchant warfare. Both support ship and weapon upgrades.
               </p>
             </div>
             <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Is Ships 3D hard to learn?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Not at all. WASD to steer, mouse to aim, left-click to fire — you'll get the hang of it in 10 minutes. The tricky part is coordinating with your crew, like angining the hull just right so your gunner can hit the enemy's exposed side. There's also a tutorial mission that walks you through everything.
               </p>
             </div>
             <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Do I need to download Ships 3D?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  Nope. Ships 3D is a pure web game built on Unity WebGL. It runs entirely in your browser — no installation, no disk space used, and it works on practically any device with a modern browser.
               </p>
             </div>
             <div>
               <h3 className="font-heading font-semibold text-lg text-text-dark mb-1">
                  Is it fun playing alone?
               </h3>
               <p className="text-text-dark/70 leading-relaxed">
                  It can be! The Helper Bot fills in as your AI crewmate, handling the helm or cannons while you focus on the other. Plus every server is full of real players, so you'll run into action fast. Once you're comfortable, join a clan and you'll have a regular crew in no time.
               </p>
             </div>
           </div>
          </div>
        </section>

        {/* ── YouTube Gameplay Video ── */}
        {siteConfig.youtube.enabled && siteConfig.youtube.videoId && (
          <section className="my-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-3">
                Ships 3D Gameplay Video
              </h2>
              <p className="text-text-dark/70 leading-relaxed mb-4">
                Watch how the battles unfold — this video walks through the basics of sailing,
                cannon aiming, crew coordination, and what to expect in Team Flags and Trader Mode.
              </p>
              <div className="relative w-full rounded-xl2 overflow-hidden shadow-lg bg-gray-100" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${siteConfig.youtube.videoId}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Ships 3D Gameplay Video"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        )}

        {/* Bottom banner ad */}
        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
