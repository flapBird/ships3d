import Link from "next/link";
import GuideCard from "@/components/GuideCard";
import NativeAd from "@/components/NativeAd";
import SchemaMarkup from "@/components/SchemaMarkup";
import { guideGroups, guides } from "@/lib/guides";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Ships 3D Guides & Tutorials",
  description:
    "Ships 3D guides for controls, crew codes, game modes, mobile play, and naval combat tips. Start with the beginner walkthrough.",
  path: "/guides",
});

const startHere = guides.find((guide) => guide.id === "how-to-play");

export default function GuidesPage() {
  return (
    <>
      <SchemaMarkup
        jsonLd={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-bold text-text-dark/50"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-text-dark/70">Guides</span>
        </nav>

        <header className="mt-6 max-w-3xl">
          <p className="section-kicker">Ships 3D guide library</p>
          <h1 className="font-heading text-4xl font-black tracking-tight text-text-dark sm:text-5xl">
            Learn the ship, then take the sea
          </h1>
          <p className="mt-4 text-base leading-8 text-text-dark/70 sm:text-lg">
            Ships 3D is easy to launch and awkward to learn in your first
            match. These guides cover the controls, the three ship stations,
            crew codes, game modes, and the fixes that get a stubborn browser
            build running.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#play"
              className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-extrabold text-white transition-colors hover:bg-secondary"
            >
              Play Ships 3D
            </Link>
            {startHere && (
              <Link
                href={startHere.href}
                className="inline-flex min-h-11 items-center rounded-full border border-text-dark/15 bg-white px-5 text-sm font-extrabold text-text-dark transition-colors hover:border-primary/40 hover:text-primary"
              >
                Start with the basics
              </Link>
            )}
          </div>
        </header>

        {startHere && (
          <section className="mt-10 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  New to the game?
                </p>
                <h2 className="mt-3 font-heading text-2xl font-black sm:text-3xl">
                  Start with the control and station walkthrough
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                  Learn how the helm, sails, and cannons fit together before
                  you join a live match. It is the fastest way to stop running
                  between stations and start hitting broadsides.
                </p>
                <Link
                  href={startHere.href}
                  className="mt-5 inline-flex min-h-11 items-center rounded-full bg-cyan-300 px-5 text-sm font-extrabold text-slate-950 transition-colors hover:bg-cyan-200"
                >
                  Read the beginner guide
                </Link>
              </div>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-white/45">Platform</dt>
                  <dd className="mt-1 font-extrabold text-white">Browser</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-white/45">Price</dt>
                  <dd className="mt-1 font-extrabold text-white">Free</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-white/45">Players</dt>
                  <dd className="mt-1 font-extrabold text-white">Up to 20</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-white/45">Crew</dt>
                  <dd className="mt-1 font-extrabold text-white">Codes</dd>
                </div>
              </dl>
            </div>
          </section>
        )}

        <div className="mt-12 space-y-12">
          {guideGroups.map((group) => (
            <section key={group.category} aria-labelledby={group.category}>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="section-kicker">{group.category}</p>
                  <h2
                    id={group.category}
                    className="font-heading text-2xl font-black text-text-dark sm:text-3xl"
                  >
                    {group.category}
                  </h2>
                </div>
                <span className="text-xs font-bold text-text-dark/35">
                  {group.guides.length}{" "}
                  {group.guides.length === 1 ? "guide" : "guides"}
                </span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.guides.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <NativeAd className="mt-14" />

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-text-dark/40">
          {siteConfig.siteName} is an independent fan site. Guides are based on
          the current browser build and can lag behind game updates.
        </p>
      </div>
    </>
  );
}
