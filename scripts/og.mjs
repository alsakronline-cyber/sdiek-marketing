// Render the 1200x630 social share image -> public/og.png
import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const executablePath = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].filter(Boolean).find((p) => existsSync(p));

const mark = (fill, node) => `<svg viewBox="0 0 48 48" width="100%" height="100%"><path d="M34 11.5c-3-2.6-6.4-3.5-10-3.5-6 0-10 3.2-10 8s4 7 10 8 10 3.2 10 8-4 8-10 8c-3.6 0-7-.9-10-3.5" fill="none" stroke="${fill}" stroke-width="4.4" stroke-linecap="round"/><circle cx="35.5" cy="11" r="5" fill="${node}"/><circle cx="12.5" cy="37" r="5" fill="${fill}"/><circle cx="35.5" cy="11" r="1.8" fill="#e9ecf1"/></svg>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;700&family=Pinyon+Script&family=JetBrains+Mono&display=swap" rel="stylesheet">
<style>
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#e9ecf1;font-family:'Inter Tight',sans-serif;color:#0b1424;position:relative;overflow:hidden}
.strip{position:absolute;left:0;top:70px;bottom:150px;width:600px;background:#2a5bff}
.lines{position:absolute;inset:0}
.lines line{stroke:rgba(42,91,255,.28);stroke-width:1}
.rail{position:absolute;top:150px;left:-40px;white-space:nowrap;font-size:190px;font-weight:500;letter-spacing:-10px;text-transform:uppercase;line-height:1}
.rail .w{color:#fff;clip-path:inset(0 calc(100% - 640px) 0 0);position:absolute;left:0;top:0}
.mark{position:absolute;left:470px;top:110px;width:270px;height:270px;filter:drop-shadow(0 30px 30px rgba(11,20,36,.25))}
.name{position:absolute;left:48px;bottom:50px;font-size:64px;letter-spacing:-3px;font-weight:500;text-transform:uppercase;line-height:.9}
.script{font-family:'Pinyon Script';color:#2a5bff;font-size:56px;position:absolute;right:56px;bottom:56px}
.top{position:absolute;left:48px;top:24px;font:13px 'JetBrains Mono';letter-spacing:3px;text-transform:uppercase}
.top b{color:#2a5bff}
</style></head><body>
<svg class="lines" viewBox="0 0 1200 630"><line x1="600" y1="0" x2="1200" y2="630"/><line x1="1200" y1="0" x2="600" y2="630"/><line x1="900" y1="0" x2="900" y2="630"/></svg>
<div class="strip"></div>
<div class="top"><b>●</b> sdiek marketing · websites · seo · automation · ai</div>
<div class="rail">Marketing that runs<span class="w">Marketing that runs</span></div>
<div class="mark">${mark('#0b1424', '#2a5bff')}</div>
<div class="name">Sdiek Marketing</div>
<div class="script">runs itself</div>
</body></html>`;

const browser = await puppeteer.launch({ executablePath, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.screenshot({ path: 'public/og.png', type: 'png' });
await browser.close();
console.log('✓ public/og.png');
