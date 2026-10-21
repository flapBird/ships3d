import Link from "next/link";
import NativeAd from "@/components/NativeAd";
import SchemaMarkup from "@/components/SchemaMarkup";
import { getRelatedGuides } from "@/lib/guides";
import type { GuideMeta } from "@/lib/guides";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export interface GuideFaqItem {
  question: string;
  answer: string;
}

interface GuideLayoutProps {
  guide: GuideMeta;
  toc?: { id: string; label: string }[];
  faq?: GuideFaqItem[];
  children: React.ReactNode;
}

export default function GuideLayout({
  guide,
  toc,
  faq,
  children,
}: GuideLayoutProps) {
  const related = getRelatedGuides(guide);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: guide.href },
  ];

  return (
    <>
      <SchemaMarkup
        jsonLd={buildArticleJsonLd({
          headline: guide.title,
          description: guide.description,
          path: guide.href,
          publishedTime: siteConfig.content.updated,
          modifiedTime: siteConfig.content.updated,
        })}
      />
      <SchemaMarkup jsonLd={buildBreadcrumbJsonLd(breadcrumbs)} />
      {faq && faq.length > 0 && (
        <SchemaMarkup jsonLd={buildFaqJsonLd(faq)} />
      )}

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs font-bold text-text-dark/50"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/guides" className="transition-colors hover:text-primary">
            Guides
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-text-dark/70">{guide.title}</span>
        </nav>

        <header className="mt-6 max-w-4xl">
          <p className="section-kicker">{guide.category}</p>
          <h1 className="font-heading text-3xl font-black tracking-tight text-text-dark sm:text-4xl lg:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-text-dark/70 sm:text-lg">
            {guide.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold text-text-dark/45">
            <span>Updated {siteConfig.content.updated}</span>
            <span aria-hidden="true">•</span>
            <span>{guide.readingTime}</span>
            <span aria-hidden="true">•</span>
            <span>Independent fan guide</span>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="min-w-0">
            <div className="guide-content">{children}</div>

            <NativeAd className="mt-12" />

            {faq && faq.length > 0 && (
              <section className="mt-12" aria-labelledby="guide-faq">
                <h2
                  id="guide-faq"
                  className="font-heading text-2xl font-black text-text-dark"
                >
                  Frequently asked questions
                </h2>
                <div className="mt-4 divide-y divide-text-dark/10 overflow-hidden rounded-3xl border border-text-dark/10 bg-white">
                  {faq.map((item) => (
                    <details key={item.question} className="group px-5 py-1 sm:px-6">
                      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-extrabold text-text-dark">
                        {item.question}
                        <span
                          className="text-xl font-light text-primary transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <p className="max-w-2xl pb-5 text-sm leading-7 text-text-dark/70">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-10 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Ready to sail?
              </p>
              <h2 className="mt-2 font-heading text-2xl font-black">
                Play Ships 3D free in your browser
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                No download. Pick a mode, take a station, and join a crew.
              </p>
              <Link
                href="/#play"
                className="mt-5 inline-flex min-h-12 items-center rounded-full bg-cyan-300 px-6 text-sm font-extrabold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Play Ships 3D
              </Link>
            </div>

            <section className="mt-10" aria-labelledby="related-guides">
              <h2
                id="related-guides"
                className="font-heading text-2xl font-black text-text-dark"
              >
                Related guides
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group rounded-2xl border border-text-dark/10 bg-white p-4 shadow-sm transition hover:border-primary/30 hover:shadow-md"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                      {item.category}
                    </p>
                    <p className="mt-1 font-heading text-base font-black text-text-dark group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-text-dark/45">
                      {item.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <p className="mt-8 text-xs leading-5 text-text-dark/40">
              Ships 3D is developed by Yp3d / ASDF Games. This is an independent
              guide based on the current browser build; game mechanics can
              change between updates.
            </p>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-3xl border border-text-dark/10 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                  Play now
                </p>
                <p className="mt-2 font-heading text-xl font-black text-text-dark">
                  Ships 3D
                </p>
                <p className="mt-1 text-sm leading-6 text-text-dark/60">
                  Free multiplayer naval combat in your browser.
                </p>
                <Link
                  href="/#play"
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-extrabold text-white transition-colors hover:bg-secondary"
                >
                  Play the game
                </Link>
              </div>

              {toc && toc.length > 0 && (
                <nav
                  className="rounded-3xl border border-text-dark/10 bg-white p-5 shadow-sm"
                  aria-label="On this page"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-text-dark/40">
                    On this page
                  </p>
                  <ul className="mt-3 space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm font-semibold leading-5 text-text-dark/65 transition-colors hover:text-primary"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className="rounded-3xl border border-text-dark/10 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-text-dark/40">
                  Guide library
                </p>
                <p className="mt-2 text-sm leading-6 text-text-dark/60">
                  Controls, crew codes, modes, mobile help, and more.
                </p>
                <Link
                  href="/guides"
                  className="mt-3 inline-block text-sm font-extrabold text-primary transition-colors hover:text-secondary"
                >
                  All guides <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
