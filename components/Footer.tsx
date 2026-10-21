import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const guideLinks = [
  { href: "/guides/how-to-play", label: "How to Play" },
  { href: "/guides/beginner-tips", label: "Beginner Tips" },
  { href: "/guides/crew-codes", label: "Crew Codes" },
  { href: "/guides/game-modes", label: "Game Modes" },
  { href: "/ships-3d-wiki", label: "Ships 3D Wiki" },
  { href: "/ships-3d-unblocked", label: "Unblocked / Browser Help" },
];

const siteLinks = [
  { href: "/#play", label: "Play" },
  { href: "/guides", label: "All Guides" },
  { href: "/ships-3d-mobile", label: "Mobile" },
  { href: "/games-like-ships-3d", label: "Games Like Ships 3D" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-heading text-lg font-extrabold tracking-tight transition-colors hover:text-cyan-200"
            >
              {siteConfig.siteName}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
              A focused browser home for Ships 3D, with controls, crew codes,
              game modes, and practical guides for new players.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-5 text-white/35">
              Game by Yp3d / ASDF Games. This site is an independent fan project
              and is not affiliated with the developer or CrazyGames.
            </p>
          </div>

          <nav aria-label="Guides">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/35">
              Guides
            </p>
            <ul className="mt-4 space-y-3">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/35">
              Site
            </p>
            <ul className="mt-4 space-y-3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} {siteConfig.siteName}. All game
          trademarks and assets belong to their respective owners.
        </div>
      </div>
    </footer>
  );
}
