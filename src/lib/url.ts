export type Lang = 'en' | 'ar';
export const langs: Lang[] = ['en', 'ar'];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Base-aware internal URL. `u('/en/work/')` -> `/sub-path/en/work/` */
export function u(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

/** Localised route: `l('ar', '/work/')` -> `/ar/work/` (base-aware). */
export const l = (lang: Lang, path = '/') => u(`/${lang}${path === '/' ? '/' : path}`);

/** Swap the language segment of the current pathname. */
export function swapLang(pathname: string, to: Lang): string {
  const stripped = pathname.slice(BASE.length) || '/';
  const rest = stripped.replace(/^\/(en|ar)(?=\/|$)/, '');
  return u(`/${to}${rest || '/'}`);
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'ar' : 'en');
export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
