// Capture above-the-fold screenshots -> public/work/*.webp (portfolio) or public/inspiration/*.webp
// Usage: npm run shots [slug...]   |   npm run shots -- --inspiration [slug...]
// Uses the locally installed Chrome/Edge via puppeteer-core (no browser download).
import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'node:fs';

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
if (!executablePath) throw new Error('No Chrome/Edge found. Set CHROME_PATH.');

const work = [
  ['alsakr-online', 'https://alsakronline.com'],
  ['nexumotion', 'https://nexumotion.com'],
  ['iconic-mach', 'https://iconicmach.com/en/'],
  ['alsakr-conveying', 'https://alsakronline-cyber.github.io/'],
  ['walaa-3d', 'https://walaa3d.studio'],
  ['nutrasakr', 'https://nutrasakr.com'],
];
// Third-party Awwwards nominees for the credited inspiration board (src/data/inspiration.ts)
const inspiration = [
  ['alpeniq', 'https://alpeniq.ch/'],
  ['rogers-obrien', 'https://r-o.com/'],
  ['olympic-subsea', 'https://www.olympic.no/'],
  ['cognichip', 'http://cognichip.ai/'],
  ['teatika', 'https://teatika.com/'],
  ['asklex', 'https://asklex.law/journey/'],
  ['wiemer', 'https://www.wiemer.store/'],
  ['type-something', 'https://typesomething.co/'],
  ['hart-studio', 'https://madebyhart.com/'],
  ['santal', 'https://santalarch.com/'],
];
const args = process.argv.slice(2);
const isInspo = args.includes('--inspiration');
const only = args.filter((a) => !a.startsWith('--'));
const shots = isInspo ? inspiration : work;
const outDir = isInspo ? 'public/inspiration' : 'public/work';
mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--hide-scrollbars'] });
for (const [slug, url] of shots) {
  if (only.length && !only.includes(slug)) continue;
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    // let hero videos/animations settle, dismiss nothing (no consent clicking)
    await new Promise((r) => setTimeout(r, isInspo ? 12000 : 3500)); // heavy WebGL sites need longer
    // Hide cookie/consent overlays visually for the screenshot (never accepts anything).
    await page.evaluate(() => {
      document.querySelectorAll('body *').forEach((el) => {
        const sig = `${el.id} ${el.className}`.toLowerCase();
        if (/cookie|consent|gdpr|cmplz|cky-|privacy-banner/.test(sig)) el.style.setProperty('display', 'none', 'important');
        const pos = getComputedStyle(el).position;
        if ((pos === 'fixed' || pos === 'sticky') && el.getBoundingClientRect().height < innerHeight * 0.6
            && /cookie|ملفات تعريف الارتباط|ملفات الارتباط/i.test(el.textContent || '')) el.style.setProperty('display', 'none', 'important');
      });
      window.scrollTo(0, 0);
      document.scrollingElement.scrollLeft = document.documentElement.dir === 'rtl' ? 0 : 0;
    });
    await new Promise((r) => setTimeout(r, 300));
    await page.screenshot({ path: `${outDir}/${slug}.webp`, type: 'webp', quality: isInspo ? 70 : 82, captureBeyondViewport: false });
    console.log('✓', slug);
  } catch (e) {
    console.log('✗', slug, e.message);
  }
  await page.close();
}
await browser.close();
