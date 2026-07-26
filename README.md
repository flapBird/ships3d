# Ships 3D

> **Play online at [ships3d.xyz](https://ships3d.xyz/)**

Ships 3D is a multiplayer naval combat game — you steer a warship, fire cannons at real players, and coordinate with your crew to dominate the open sea. This repository is the game site built around it: a fast, focused web wrapper that puts the game front and center with zero clutter.

The game itself was developed by [Yp3d](https://yp3d.com/) (ASDF Games). This site provides a clean embed with a low-friction player experience, supporting desktop and mobile browsers alike.

---

## Features

- **Instant play** — no account, no download, just a click
- **Cover screen** — idle launch image with a Play button, transitions into the live game
- **Game toolbar** — Like / Dislike, Reload, and Fullscreen directly below the game
- **Multiplayer ready** — supports Crew Codes, clans, and public servers
- **Dark header** with site logo and navigation
- **About, Contact, Privacy & Terms** pages
- **YouTube gameplay video** section on the homepage (configurable)
- **Google AdSense** support (script loaded from environment variables; ad units off by default)
- **Google Analytics** support (configurable via environment variables)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Fonts | Nunito (headings) + Quicksand (body) — Google Fonts |
| Hosting | [Vercel](https://vercel.com/) |
| Game Embed | iframe / Unity WebGL |

---

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy Policy page
│   ├── terms/              # Terms & Conditions page
│   ├── layout.tsx          # Root layout (header, footer, scripts)
│   ├── page.tsx            # Homepage — game embed + introduction content
│   ├── globals.css         # Global styles (body, hero gradient, blobs)
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── GameEmbed.tsx       # Game iframe with cover screen, toolbar, fullscreen
│   ├── Hero.tsx            # Hero section wrapping the game embed
│   ├── Header.tsx          # Sticky site header
│   ├── Footer.tsx          # Footer with legal links
│   ├── SidebarLayout.tsx   # Content layout wrapper
│   ├── AdSlot.tsx          # Ad placement (currently returns null)
│   ├── LegalPage.tsx       # Reusable legal page layout
│   └── SchemaMarkup.tsx    # JSON-LD structured data injection
├── lib/
│   ├── site.config.ts      # Single source of truth for site config
│   ├── env.ts              # Environment variable helpers (GA, AdSense)
│   └── seo.ts              # Metadata & JSON-LD builders
├── public/                 # Static assets (images, favicons, etc.)
└── ...config files
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Configuration

All site content lives in **`lib/site.config.ts`**:

- Site name, domain, game name
- Game embed URL and aspect ratio
- Theme colors
- Contact email
- YouTube video ID
- Google Search Console verification code

Sensitive credentials like Google Analytics ID and AdSense client ID are read from environment variables (see `.env.example`):

```bash
cp .env.example .env.local
```

Then fill in your IDs:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxx
```

### Replace Placeholder Assets

| File | Purpose |
|---|---|
| `public/cover.jpg` | Game cover / launch screen image |
| `public/og-image.png` | Social sharing image (1200x630) |
| `public/favicon.ico` | Browser tab icon |
| `public/favicon.png` | PNG icon used in header |
| `public/favicon.svg` | SVG vector icon |
| `public/images/ships3d-battle-screenshot.jpg` | Gameplay screenshot 1 |
| `public/images/ships3d-gameplay-controls.jpg` | Gameplay screenshot 2 |

---

## Deployment

This project is designed to deploy on **Vercel**:

1. Push the repo to GitHub
2. In Vercel, create a new project and import the repository
3. Vercel auto-detects Next.js — leave the default settings
4. Add environment variables (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_ADSENSE_CLIENT_ID`)
5. Bind your custom domain under **Domains**
6. Deploy

### Environment Variables

Set these in your Vercel project settings (or `.env.local` for local development):

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | No | Google AdSense publisher ID |

---

## Credits

- **Game** — Ships 3D by [Yp3d](https://yp3d.com/) / ASDF Games
- **Site** — built on [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com/)

---

## License

All rights reserved. This project is proprietary — the code is provided for transparency and collaboration, not for redistribution.
