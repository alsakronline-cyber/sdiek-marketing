import type { Bi } from '../i18n';

/**
 * Third-party sites from the Awwwards nominees list (fetched 2026-10-09).
 * These are NOT Sdiek work — they are always shown with the studio credit and links.
 * `takeaway` = what Mohamed would apply for his own clients.
 */
export interface Inspiration {
  slug: string;
  title: string;
  studio: string;
  url: string;
  awwwards: string;
  image: string;
  field: Bi;
  takeaway: Bi;
}

const aw = (s: string) => `https://www.awwwards.com/sites/${s}`;

export const inspiration: Inspiration[] = [
  {
    slug: 'alpeniq', title: 'ALPENIQ', studio: 'ALPENIQ', url: 'https://alpeniq.ch/', awwwards: aw('alpeniq'), image: 'alpeniq.webp',
    field: { en: 'Tech group · Switzerland', ar: 'مجموعة تقنية · سويسرا' },
    takeaway: {
      en: 'Selling services as connected layers, not a menu — the same story I tell with "one system".',
      ar: 'بيع الخدمات كطبقات مترابطة لا كقائمة — القصة نفسها التي أرويها بـ«نظام واحد».',
    },
  },
  {
    slug: 'rogers-obrien', title: "Rogers-O'Brien Construction", studio: 'Hart Studio', url: 'https://r-o.com/', awwwards: aw('rogers-obrien-construction'), image: 'rogers-obrien.webp',
    field: { en: 'Construction · B2B', ar: 'مقاولات · B2B' },
    takeaway: {
      en: 'Proof that a construction company can feel premium: culture and people up front, projects as stories.',
      ar: 'دليل أن شركة مقاولات يمكن أن تبدو متميّزة: الثقافة والناس أولًا، والمشاريع كقصص.',
    },
  },
  {
    slug: 'olympic-subsea', title: 'Olympic Subsea', studio: 'KIND', url: 'https://www.olympic.no/', awwwards: aw('olympic-subsea'), image: 'olympic-subsea.webp',
    field: { en: 'Maritime · Industrial rebrand', ar: 'بحري · إعادة هوية صناعية' },
    takeaway: {
      en: 'Film-led hero and numbered chapters — a calm way to present heavy industrial capability.',
      ar: 'واجهة يقودها الفيلم وفصول مرقّمة — طريقة هادئة لعرض قدرات صناعية ثقيلة.',
    },
  },
  {
    slug: 'cognichip', title: 'Cognichip ACI', studio: 'FullNodeNate', url: 'https://cognichip.ai/', awwwards: aw('cognichip-aci-enterprise'), image: 'cognichip.webp',
    field: { en: 'AI · Semiconductors', ar: 'ذكاء اصطناعي · أشباه موصلات' },
    takeaway: {
      en: 'Making an abstract AI product visible with one strong visual metaphor.',
      ar: 'جعل منتج ذكاء اصطناعي مجرّد مرئيًا عبر استعارة بصرية واحدة قوية.',
    },
  },
  {
    slug: 'teatika', title: 'Teatika', studio: 'Teatika', url: 'https://teatika.com/', awwwards: aw('teatika'), image: 'teatika.webp',
    field: { en: 'Real-time 3D for products', ar: '3D لحظي للمنتجات' },
    takeaway: {
      en: 'Configurators sell technical products — the idea behind my product-configurator study below.',
      ar: 'أدوات التخصيص تبيع المنتجات الفنية — الفكرة وراء دراسة أداة تخصيص المنتج أدناه.',
    },
  },
  {
    slug: 'asklex', title: 'AskLex — Journey', studio: 'Developer Office', url: 'https://asklex.law/journey/', awwwards: aw('asklex'), image: 'asklex.webp',
    field: { en: 'Legal AI · Storytelling', ar: 'ذكاء قانوني · سرد قصصي' },
    takeaway: {
      en: 'A scroll-driven journey that turns history into a product pitch — inspiration for my order-journey study.',
      ar: 'رحلة يقودها التمرير تحوّل التاريخ إلى عرض منتج — مصدر إلهام دراسة رحلة الطلب.',
    },
  },
  {
    slug: 'wiemer', title: 'Wiemer', studio: 'Double Play', url: 'https://www.wiemer.store/', awwwards: aw('wiemer'), image: 'wiemer.webp',
    field: { en: 'Furniture · E-commerce', ar: 'أثاث · تجارة إلكترونية' },
    takeaway: {
      en: 'Product photography and white space doing the selling — less UI, more product.',
      ar: 'تصوير المنتج والمساحات البيضاء هي التي تبيع — واجهة أقل ومنتج أكثر.',
    },
  },
  {
    slug: 'type-something', title: 'Type Something', studio: 'hmmh Poland', url: 'https://typesomething.co/', awwwards: aw('type-something'), image: 'type-something.webp',
    field: { en: 'AI website builder', ar: 'منشئ مواقع بالذكاء الاصطناعي' },
    takeaway: {
      en: '"Skip the CMS, just chat" — a clear one-line promise for an AI product.',
      ar: '«تجاوز نظام إدارة المحتوى، فقط تحدّث» — وعد واضح في سطر واحد لمنتج ذكاء اصطناعي.',
    },
  },
  {
    slug: 'hart-studio', title: 'Hart Studio', studio: 'Hart Studio', url: 'https://madebyhart.com/', awwwards: aw('hart-studio'), image: 'hart-studio.webp',
    field: { en: 'Studio portfolio', ar: 'معرض أعمال استوديو' },
    takeaway: {
      en: 'A studio site that leads with thinking, not decoration — the tone I aim for.',
      ar: 'موقع استوديو يبدأ بالتفكير لا بالزخرفة — النبرة التي أسعى إليها.',
    },
  },
  {
    slug: 'santal', title: 'SANTAL', studio: 'The First The Last', url: 'https://santalarch.com/', awwwards: aw('santal'), image: 'santal.webp',
    field: { en: 'Architecture studio', ar: 'استوديو معماري' },
    takeaway: {
      en: '"Bold presence, quiet execution" — giant type with a strict grid and almost nothing else.',
      ar: '«حضور جريء وتنفيذ هادئ» — خط ضخم مع شبكة صارمة وتقريبًا لا شيء آخر.',
    },
  },
];
