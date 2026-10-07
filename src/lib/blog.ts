import { getCollection } from 'astro:content';
import type { Lang } from './url';

export async function postsFor(lang: Lang) {
  const all = await getCollection('blog', (p) => p.data.lang === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** URL slug = file name without the language folder. */
export const postSlug = (id: string) => id.split('/').pop()!.replace(/\.md$/, '');

export const fmtDate = (d: Date, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
