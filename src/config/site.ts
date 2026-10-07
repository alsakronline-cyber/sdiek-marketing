// Single source for brand + contact details.
// Anything marked TODO is listed in docs/MISSING.md — replace before launch.

export const site = {
  name: 'Sdiek Marketing',
  short: 'Sdiek',
  founder: 'Mohamed Ramadan',
  founderAr: 'محمد رمضان',
  foundingYear: 2026,
  location: { en: 'Cairo, Egypt · Working worldwide', ar: 'القاهرة، مصر · نعمل مع العالم' },
  areaServed: ['EG', 'SA', 'AE', 'KW', 'QA', 'OM', 'BH', 'JO', 'Worldwide'],

  // TODO: real contact details
  email: 'hello@sdiekmarketing.com',
  phone: '+20 100 000 0000',
  phoneHref: '+201000000000',
  whatsapp: '201000000000', // digits only, international format

  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL || '',

  // TODO: real handles. Empty string = hidden.
  social: {
    // Left empty on purpose: guessed handles could point at someone else's account.
    linkedin: '',
    instagram: '',
    x: '',
    tiktok: '',
    youtube: '',
    facebook: '',
    github: 'https://github.com/alsakronline-cyber',
  },
} as const;

export type SocialKey = keyof typeof site.social;

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
