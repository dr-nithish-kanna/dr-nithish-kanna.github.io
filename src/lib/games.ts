import raw from '../data/games.json';

export type GameStatus = 'Released' | 'In development' | 'Prototype';

export interface Game {
  slug: string;
  title: string;
  status: GameStatus;
  platforms: string[];
  category: string;
  engine: string;
  itch_url: string | null;
  source: 'itch' | 'old-site';
  tags: string[];
  description: string;
  description_status: string;
  jam?: string;
  coauthor?: string;
  image?: string;
  image_orientation?: 'landscape' | 'portrait';
  featured?: boolean;
  needs_link?: boolean;
  note?: string;
  [key: string]: unknown;
}

export const games = raw as Game[];

/** Descriptions still marked as drafts get a "Details coming soon" treatment. */
export const needsDetails = (g: Game) => g.description_status.startsWith('draft');

/** Has a working outbound itch.io link. */
export const hasItchLink = (g: Game) => Boolean(g.itch_url) && !g.needs_link;

/** "Typing / Racing" -> ["Typing", "Racing"] */
export const categoriesOf = (g: Game) => g.category.split('/').map((c) => c.trim());

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/** Category filter options, most common first. */
export const allCategories = (() => {
  const counts = new Map<string, number>();
  for (const g of games) for (const c of categoriesOf(g)) counts.set(c, (counts.get(c) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([name, count]) => ({ name, count }));
})();

export const statusOrder: GameStatus[] = ['Released', 'In development', 'Prototype'];
export const allStatuses = statusOrder
  .map((name) => ({ name, count: games.filter((g) => g.status === name).length }))
  .filter((s) => s.count > 0);

export const featuredGames = games.filter((g) => g.featured);

export const relatedGames = (g: Game, n = 3) => {
  const cats = new Set(categoriesOf(g));
  return games
    .filter((o) => o.slug !== g.slug)
    .map((o) => ({ o, score: categoriesOf(o).filter((c) => cats.has(c)).length }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.o);
};

export const stats = {
  total: games.length,
  onItch: games.filter(hasItchLink).length,
  released: games.filter((g) => g.status === 'Released').length,
  platforms: [...new Set(games.flatMap((g) => g.platforms))],
};
