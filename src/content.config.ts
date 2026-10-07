import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'ar']),
    /** Shared key that links the EN and AR versions of the same article. */
    key: z.string(),
    tags: z.array(z.string()).default([]),
    readingMinutes: z.number().default(5),
  }),
});

export const collections = { blog };
