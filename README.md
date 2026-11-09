# Nifty Games Studios website

Portfolio and freelance site for **Nifty Games Studios**, live at <https://niftygamesstudios.in>.

Built with [Astro](https://astro.build) as a fully static site (plain CSS, almost no JavaScript), deployed to GitHub Pages by GitHub Actions.

## Run it

Needs Node.js 22+.

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the built dist/ locally
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup in the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The custom domain is kept in `public/CNAME` (`niftygamesstudios.in`), so it ships with every build.

## Where things live

| What | Where |
|---|---|
| Contact links (email, Fiverr, Instagram), GA4 ID, logo path | `src/config/site.ts` |
| All game data (grid, filters, game pages) | `src/data/games.json` |
| Game screenshots | `public/images/games/<slug>.webp` |
| Services, testimonials, skills, process | `src/data/content.ts` |
| Devlog posts | `src/content/devlog/*.md` |
| Colours, fonts, shared styles | `src/styles/global.css` |
| Logo | `public/assets/logo.png` |

## Add your real contact links, logo and analytics

1. **Contact links:** open `src/config/site.ts` and Email, Fiverr and Instagram are set. Change them there if they ever move. Anything that still contains `YOUR_` is hidden or shown as "Link coming soon", so the site never shows a broken link.
2. **Logo:** replace `public/assets/logo.png` with your logo (square, at least 256×256). To use an SVG, add `public/assets/logo.svg` and change `logo` in `site.ts` to `'/assets/logo.svg'`. Also replace `public/favicon.png` (48×48) and `public/apple-touch-icon.png` (180×180), then run `node scripts/make-og.mjs` to rebuild the social share image.
3. **Google Analytics (GA4):** `analytics.ga4Id` in `site.ts` holds the Measurement ID (currently set). Set it to `''` to remove analytics completely. When it's set, visitors see a short consent notice, and GA only loads after they click **Allow analytics**. A "Cookie settings" link in the footer lets them change their mind.

## Add a game

Add an object to `src/data/games.json`:

```json
{
  "slug": "my-new-game",
  "title": "My New Game",
  "status": "Released",
  "platforms": ["WebGL"],
  "category": "Typing / Arcade",
  "engine": "Unity",
  "itch_url": "https://nifty-games.itch.io/my-new-game",
  "source": "itch",
  "tags": ["Typing"],
  "description": "One or two honest sentences about the game.",
  "description_status": "owner"
}
```

- `slug` becomes the URL: `/games/my-new-game/`.
- `status` must be one of `Released`, `In development`, `Prototype`.
- `category` can combine categories with ` / `. Each part becomes a filter button.
- `description_status`: anything starting with `draft` shows a **Details coming soon** note. Use any other value (e.g. `"owner"`) once the description is final.
- Optional: `"image": "/images/games/my-new-game.webp"` with `"image_orientation": "landscape"` or `"portrait"`. Without an image, a branded placeholder cover is generated automatically.
- Optional: `"featured": true` puts it on the home page; `"jam"` and `"coauthor"` show on the game page.
- Not on itch? Set `"itch_url": null` and `"needs_link": true`. The game is listed (and counted) with no outbound button.

To turn a PNG or JPG screenshot into an optimized WebP, use any image tool (for example squoosh.app). About 960 px wide is enough.

## Add a devlog post

1. Copy `src/content/devlog/_TEMPLATE.md` to a new file, for example `src/content/devlog/2026-12-01-first-post.md`. Files that start with `_` are ignored.
2. Fill in the front matter (`title`, `description`, `pubDate`, `tags`) and set `draft: false`.
3. Write the post in Markdown below it. Put images in `public/images/devlog/`.
4. Commit and push to `main`. The post appears at `/devlog/2026-12-01-first-post/`, and the "First post coming soon" message disappears.

## Rules this site follows

- Nothing playable is embedded. Games link out to itch.io.
- No prices or rates anywhere.
- All text meets WCAG AA contrast. Bright cyan is only used on dark backgrounds.
- No secrets in the repo. The GA4 Measurement ID is public by design, so it's fine in `site.ts`.
