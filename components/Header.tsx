import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const navLinks = [
  { href: "/#play", label: "Play" },
  { href: "/#how-to-play", label: "How to Play" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.siteName} home`}>
          <img
            src="/favicon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20"
          />
          <span className="font-heading text-lg font-extrabold tracking-tight transition-colors group-hover:text-cyan-200">
            {siteConfig.siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#play"
          className="inline-flex min-h-11 items-center rounded-full bg-cyan-300 px-4 text-sm font-extrabold text-slate-950 transition-colors hover:bg-cyan-200 sm:hidden"
        >
          Play
        </Link>
      </div>
    </header>
  );
}
