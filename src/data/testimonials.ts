import type { Bi } from '../i18n';

/**
 * Testimonials render ONLY when `approved: true`.
 *
 * The drafts below are templates to send to each client: "Here's a draft of what I understood
 * you'd say — edit anything, then reply OK." Once the person approves (keep their message),
 * set `approved: true` and fill `name`. Publishing invented quotes as if real clients said them
 * is misleading to buyers and illegal in many markets, so drafts never ship.
 */
export interface Testimonial {
  project: string; // project slug
  approved: boolean;
  name: Bi; // real person, filled after approval
  role: Bi;
  quote: Bi;
}

export const testimonials: Testimonial[] = [
  {
    project: 'alsakr-online',
    approved: false,
    name: { en: '', ar: '' },
    role: { en: 'Management, Al Sakr Online', ar: 'الإدارة، الصقر أونلاين' },
    quote: {
      en: 'Mohamed didn’t just redesign our store — he connected it to everything behind it. Products, Arabic, SEO and follow-ups now run as one system instead of ten spreadsheets.',
      ar: 'محمد لم يُعِد تصميم متجرنا فقط — بل ربطه بكل ما خلفه. المنتجات والعربية والسيو والمتابعات أصبحت تعمل كنظام واحد بدل عشرة جداول.',
    },
  },
  {
    project: 'walaa-3d',
    approved: false,
    name: { en: 'Walaa Ramadan', ar: 'ولاء رمضان' },
    role: { en: '3D Product Animator, Walaa 3D', ar: 'مصمّمة رسوم ثلاثية الأبعاد، Walaa 3D' },
    quote: {
      en: 'He understood my positioning better than I could explain it. The site finally looks like the quality of my work.',
      ar: 'فهم تموضعي أفضل مما كنت أستطيع شرحه. أخيرًا أصبح الموقع يعكس جودة أعمالي.',
    },
  },
  {
    project: 'alsakr-conveying',
    approved: false,
    name: { en: '', ar: '' },
    role: { en: 'Al Sakr Conveying', ar: 'الصقر لأنظمة النقل والسيور' },
    quote: {
      en: 'Our factory videos were sitting on a phone. Now they are the first thing clients see — in Arabic and English.',
      ar: 'كانت فيديوهات المصنع على الهاتف فقط. الآن هي أول ما يراه العملاء — بالعربية والإنجليزية.',
    },
  },
  {
    project: 'nutrasakr',
    approved: false,
    name: { en: '', ar: '' },
    role: { en: 'NutraSakr', ar: 'نيوترا صقر' },
    quote: {
      en: 'Distributors abroad take us seriously from the first click. The site is fast, clear and bilingual.',
      ar: 'الموزّعون في الخارج يأخذوننا بجدية من أول نقرة. الموقع سريع وواضح وبلغتين.',
    },
  },
];

export const approvedTestimonials = testimonials.filter((t) => t.approved && t.name.en);
