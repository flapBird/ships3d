export const guideCategories = [
  "Getting started",
  "Game systems",
  "Help & alternatives",
] as const;

export type GuideCategory = (typeof guideCategories)[number];

export interface GuideMeta {
  id: string;
  href: string;
  title: string;
  seoTitle: string;
  description: string;
  category: GuideCategory;
  readingTime: string;
  featured: boolean;
  related: string[];
}

export const guides: GuideMeta[] = [
  {
    id: "how-to-play",
    href: "/guides/how-to-play",
    title: "Ships 3D Controls and How to Play",
    seoTitle: "Ships 3D Controls & How to Play (Beginner Guide)",
    description:
      "A practical walkthrough of Ships 3D: controls, the helm, sails, cannons, the Helper Bot, and your first match.",
    category: "Getting started",
    readingTime: "8 min read",
    featured: true,
    related: ["beginner-tips", "crew-codes", "game-modes"],
  },
  {
    id: "beginner-tips",
    href: "/guides/beginner-tips",
    title: "Ships 3D Tips: 10 Beginner Mistakes to Avoid",
    seoTitle: "Ships 3D Tips: 10 Beginner Mistakes to Avoid",
    description:
      "Practical Ships 3D tips for new players: wind, broadsides, station switching, Helper Bot use, and crew roles.",
    category: "Getting started",
    readingTime: "7 min read",
    featured: true,
    related: ["how-to-play", "crew-codes", "wiki"],
  },
  {
    id: "crew-codes",
    href: "/guides/crew-codes",
    title: "Ships 3D Crew Codes: How to Play With Friends",
    seoTitle: "Ships 3D Crew Codes: How to Play With Friends",
    description:
      "How Ships 3D crew codes work, how to invite friends to your ship, and how to split helm, sail, and cannon roles.",
    category: "Getting started",
    readingTime: "6 min read",
    featured: true,
    related: ["how-to-play", "game-modes", "beginner-tips"],
  },
  {
    id: "game-modes",
    href: "/guides/game-modes",
    title: "Ships 3D Game Modes: Team Flags vs Trader Mode",
    seoTitle: "Ships 3D Game Modes: Team Flags vs Trader Mode",
    description:
      "Compare Ships 3D's Team Flags and Trader Mode, including pace, server size, and which mode suits new players.",
    category: "Game systems",
    readingTime: "6 min read",
    featured: true,
    related: ["how-to-play", "crew-codes", "wiki"],
  },
  {
    id: "wiki",
    href: "/ships-3d-wiki",
    title: "Ships 3D Wiki: Ships, Cannons, Stations & Progression",
    seoTitle: "Ships 3D Wiki: Ships, Cannons, Stations & Progression",
    description:
      "An independent Ships 3D reference covering stations, wind and sails, cannons, upgrades, modes, crews, and controls.",
    category: "Game systems",
    readingTime: "10 min read",
    featured: true,
    related: ["how-to-play", "game-modes", "beginner-tips"],
  },
  {
    id: "unblocked",
    href: "/ships-3d-unblocked",
    title: "Ships 3D Unblocked: Play in Your Browser",
    seoTitle: "Ships 3D Unblocked – Play Free in Your Browser",
    description:
      "Play Ships 3D in a browser with no download. Requirements, first-load tips, and fixes for common launch problems.",
    category: "Help & alternatives",
    readingTime: "6 min read",
    featured: true,
    related: ["mobile", "how-to-play", "games-like"],
  },
  {
    id: "mobile",
    href: "/ships-3d-mobile",
    title: "Ships 3D on Mobile: Controls, Landscape & Performance",
    seoTitle: "Ships 3D on Mobile: Controls, Landscape & Fixes",
    description:
      "How to play Ships 3D on a phone or tablet: landscape mode, fullscreen, touch controls, and performance fixes.",
    category: "Help & alternatives",
    readingTime: "5 min read",
    featured: false,
    related: ["unblocked", "how-to-play", "crew-codes"],
  },
  {
    id: "games-like",
    href: "/games-like-ships-3d",
    title: "Games Like Ships 3D: 6 Naval Games to Try Next",
    seoTitle: "Games Like Ships 3D: 6 Naval Games to Try Next",
    description:
      "Six naval combat games like Ships 3D, from browser battles to mobile and PC warship games, with platforms and style.",
    category: "Help & alternatives",
    readingTime: "7 min read",
    featured: false,
    related: ["unblocked", "game-modes", "wiki"],
  },
];

export function getGuideById(id: string) {
  return guides.find((guide) => guide.id === id);
}

export function getRelatedGuides(guide: GuideMeta) {
  return guide.related
    .map((id) => getGuideById(id))
    .filter((item): item is GuideMeta => Boolean(item));
}

export const guideGroups = guideCategories.map((category) => ({
  category,
  guides: guides.filter((guide) => guide.category === category),
}));

export const featuredGuides = guides.filter((guide) => guide.featured);
