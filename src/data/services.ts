import type { Bi } from '../i18n';

export interface Service {
  id: string;
  n: string;
  icon: string; // inline SVG path(s), 24x24 viewBox, stroke-based
  title: Bi;
  short: Bi;
  deliverables: Bi<string[]>;
  projects: string[]; // project slugs as proof
}

export const services: Service[] = [
  {
    id: 'web',
    n: '01',
    icon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8M12 18v3"/>',
    title: { en: 'Websites & Web Apps', ar: 'المواقع وتطبيقات الويب' },
    short: {
      en: 'Fast, bilingual sites in Astro, Next.js or WordPress — designed to rank and built to convert.',
      ar: 'مواقع سريعة ثنائية اللغة بـ Astro أو Next.js أو WordPress — مصمّمة لتتصدّر ومبنية لتحوّل الزوار إلى عملاء.',
    },
    deliverables: {
      en: ['UX & UI design', 'Arabic RTL + English', 'Lighthouse 90+ performance', 'CMS or e-commerce', 'Analytics & tracking setup'],
      ar: ['تصميم تجربة وواجهة المستخدم', 'عربي RTL + إنجليزي', 'أداء Lighthouse ‏90+', 'نظام إدارة محتوى أو متجر', 'إعداد التحليلات والتتبّع'],
    },
    projects: ['alsakr-online', 'nexumotion', 'alsakr-conveying', 'walaa-3d'],
  },
  {
    id: 'seo',
    n: '02',
    icon: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M8 11h6M11 8v6"/>',
    title: { en: 'SEO & Content Engines', ar: 'السيو ومحركات المحتوى' },
    short: {
      en: 'Technical SEO, programmatic pages and AI-assisted content factories with human review.',
      ar: 'سيو تقني، وصفحات برمجية، ومصانع محتوى مدعومة بالذكاء الاصطناعي مع مراجعة بشرية.',
    },
    deliverables: {
      en: ['Technical audit & fixes', 'Keyword & competitor research', 'Schema / structured data', 'Content pipeline with QA gate', 'Search Console reporting'],
      ar: ['تدقيق تقني وإصلاحات', 'بحث كلمات مفتاحية ومنافسين', 'بيانات منظّمة Schema', 'خط إنتاج محتوى مع بوابة جودة', 'تقارير Search Console'],
    },
    projects: ['seo-content-factory', 'alsakr-online'],
  },
  {
    id: 'automation',
    n: '03',
    icon: '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 6h10M6 8l5 8M18 8l-5 8"/>',
    title: { en: 'Automation & AI Systems', ar: 'الأتمتة وأنظمة الذكاء الاصطناعي' },
    short: {
      en: 'n8n workflows, AI agents, chatbots, scrapers and ERP integrations that remove manual work.',
      ar: 'مسارات n8n، ووكلاء ذكاء اصطناعي، وروبوتات محادثة، وأدوات جمع بيانات، وربط ERP لإلغاء العمل اليدوي.',
    },
    deliverables: {
      en: ['Process mapping', 'n8n workflows with retries & alerts', 'AI agents with fallbacks', 'ERPNext integration', 'Telegram / WhatsApp approval gates'],
      ar: ['رسم العمليات', 'مسارات n8n مع إعادة المحاولة والتنبيهات', 'وكلاء ذكاء اصطناعي مع بدائل', 'ربط ERPNext', 'بوابات موافقة عبر تيليجرام وواتساب'],
    },
    projects: ['ops-monitor', 'ai-sales-widget', 'erpnext-alsakr', 'scraping-engine'],
  },
  {
    id: 'leads',
    n: '04',
    icon: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
    title: { en: 'Lead Generation & CRM', ar: 'توليد العملاء وإدارة العلاقات' },
    short: {
      en: 'Find, qualify and follow up with B2B leads — scraping, AI scoring and WhatsApp outreach.',
      ar: 'ابحث عن العملاء المحتملين وأهّلهم وتابعهم — جمع بيانات وتقييم بالذكاء الاصطناعي وتواصل عبر واتساب.',
    },
    deliverables: {
      en: ['Lead sourcing & enrichment', 'BANT scoring', 'WhatsApp sequences', 'Pipeline & appointment booking', 'Human-in-the-loop approvals'],
      ar: ['مصادر العملاء وإثراء البيانات', 'تقييم BANT', 'تسلسلات واتساب', 'مسار المبيعات وحجز المواعيد', 'موافقات بشرية'],
    },
    projects: ['qualifay', 'scraping-engine'],
  },
  {
    id: 'social',
    n: '05',
    icon: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r=".6"/>',
    title: { en: 'Social Media & Content Creation', ar: 'السوشيال ميديا وصناعة المحتوى' },
    short: {
      en: 'Content systems that write, design and schedule posts — you approve from your phone.',
      ar: 'أنظمة محتوى تكتب وتصمّم وتجدول المنشورات — وأنت توافق من هاتفك.',
    },
    deliverables: {
      en: ['Content pillars & calendar', 'Post & reel production', 'Auto-publishing (Postiz)', 'Approval via Telegram', 'Monthly performance report'],
      ar: ['محاور وتقويم المحتوى', 'إنتاج منشورات وريلز', 'نشر تلقائي (Postiz)', 'موافقة عبر تيليجرام', 'تقرير أداء شهري'],
    },
    projects: ['social-autopilot'],
  },
  {
    id: 'ads',
    n: '06',
    icon: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/>',
    title: { en: 'Advertising', ar: 'الإعلانات' },
    short: {
      en: 'Meta and Google campaigns tied to real tracking, landing pages and follow-up — not vanity clicks.',
      ar: 'حملات Meta وGoogle مرتبطة بتتبّع حقيقي وصفحات هبوط ومتابعة — لا نقرات استعراضية.',
    },
    deliverables: {
      en: ['Campaign strategy', 'Pixel & conversion tracking', 'Landing pages', 'Creative testing', 'Spend vs. sales reporting'],
      ar: ['استراتيجية الحملات', 'إعداد البكسل وتتبّع التحويلات', 'صفحات هبوط', 'اختبار التصميمات', 'تقارير الإنفاق مقابل المبيعات'],
    },
    projects: ['alsakr-analytics'],
  },
  {
    id: 'brand',
    n: '07',
    icon: '<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>',
    title: { en: 'Branding', ar: 'الهوية والعلامة التجارية' },
    short: {
      en: 'Positioning, naming, identity and messaging — in two languages, from the same idea.',
      ar: 'التموضع والتسمية والهوية والرسائل — بلغتين، ومن الفكرة نفسها.',
    },
    deliverables: {
      en: ['Positioning & messaging', 'Logo & identity system', 'Colour & type tokens', 'Bilingual tone of voice', 'Brand guidelines'],
      ar: ['التموضع والرسائل', 'الشعار ونظام الهوية', 'ألوان وخطوط موحّدة', 'نبرة صوت بلغتين', 'دليل الهوية'],
    },
    projects: ['walaa-3d', 'alsakr-conveying'],
  },
  {
    id: 'analytics',
    n: '08',
    icon: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    title: { en: 'Analytics & Dashboards', ar: 'التحليلات ولوحات البيانات' },
    short: {
      en: 'Sales, ads and operations data in one place — with a daily report that tells you what changed.',
      ar: 'بيانات المبيعات والإعلانات والتشغيل في مكان واحد — مع تقرير يومي يخبرك بما تغيّر.',
    },
    deliverables: {
      en: ['Data source mapping', 'Dashboards', 'Automated daily / weekly reports', 'Alerts on anomalies', 'KPI definitions'],
      ar: ['ربط مصادر البيانات', 'لوحات بيانات', 'تقارير يومية وأسبوعية تلقائية', 'تنبيهات عند الشذوذ', 'تعريف مؤشرات الأداء'],
    },
    projects: ['alsakr-analytics', 'ops-monitor'],
  },
];
