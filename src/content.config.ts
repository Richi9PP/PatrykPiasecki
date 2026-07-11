import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case-study projects. Each markdown file in src/content/projects/ becomes
// a /work/<slug> page, following Problem → Solution → Stack → Outcome.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    tags: z.array(z.string()),
    metric: z.string(),
    role: z.string(),
    year: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
