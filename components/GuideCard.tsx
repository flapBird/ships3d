import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";

interface GuideCardProps {
  guide: GuideMeta;
  className?: string;
}

export default function GuideCard({ guide, className = "" }: GuideCardProps) {
  return (
    <Link
      href={guide.href}
      className={`group flex h-full flex-col rounded-3xl border border-text-dark/10 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-black uppercase tracking-[0.16em] text-primary">
          {guide.category}
        </span>
        <span className="text-xs font-bold text-text-dark/35">
          {guide.readingTime}
        </span>
      </div>
      <h3 className="mt-4 font-heading text-xl font-black leading-7 text-text-dark transition-colors group-hover:text-primary">
        {guide.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-text-dark/65">
        {guide.description}
      </p>
      <span className="mt-5 text-sm font-extrabold text-primary">
        Read guide <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
