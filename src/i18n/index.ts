import { en } from './en';
import { ar } from './ar';
import type { Lang } from '../lib/url';

export const dict = { en, ar };
export const t = (lang: Lang) => dict[lang];

/** Pick the language variant of a bilingual field. */
export type Bi<T = string> = { en: T; ar: T };
export const pick = <T>(v: Bi<T>, lang: Lang): T => v[lang];
