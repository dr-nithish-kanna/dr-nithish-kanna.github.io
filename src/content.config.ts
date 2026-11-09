import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per post in src/content/devlog/.
// Files starting with "_" (like _TEMPLATE.md) are ignored.
const devlog = defineCollection({
  loader: glob({ base: './src/content/devlog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { devlog };
