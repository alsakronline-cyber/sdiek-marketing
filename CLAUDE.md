# CLAUDE.md — Sdiek Marketing

Personal-brand + studio site for **Sdiek Marketing**, founded by **Mohamed Ramadan**.
Bilingual (English LTR / Arabic RTL), built with **Astro**, light gray + blue, motion-heavy.

> Status: **v1 built** (2026-10-07). Open items live in [`docs/MISSING.md`](docs/MISSING.md) — check it before shipping.

---

## 1. Brand

| Item | Decision |
|---|---|
| Name | **Sdiek Marketing** (wordmark: `sdiek` lowercase + `MARKETING` mono caps) |
| Founder | Mohamed Ramadan |
| Model | **"Solo founder, studio output."** One accountable builder, systems that work like a team. Copy uses **"I"** for relationship & accountability (about, consultation, founder notes) and **"we / the studio"** only for the system of tools, agents and partners. Never pretend to be a 50-person agency. |
| Tagline (EN) | **Marketing that runs itself.** |
| Tagline (AR) | **تسويق يعمل من تلقاء نفسه.** |
| One-liner | I design, build and automate the websites, content engines and AI systems that bring B2B, e-commerce and personal brands their customers — and keep doing it while you sleep. |
| Positioning | Marketer who can code. Where agencies hand you a deck and devs hand you a repo, Sdiek hands you a **running system**: site + SEO + content + automation + ads + data, wired together. |
| Proof pillars | 1) Real shipped sites (live URLs). 2) Real running systems (n8n, scraping, ERP, analytics). 3) Industrial/B2B depth (39k+ SKU catalogue, Arabic-first). |
| Audience | Industrial / B2B manufacturers & distributors · e-commerce stores · small businesses · personal brands & creators. Egypt + MENA first, remote worldwide. |
| Primary CTA | **Book a free 30-minute consultation** (`/book`) |
| Secondary CTAs | WhatsApp · Email · Contact form · Phone |

### Logo
`public/logo.svg` / `src/components/Logo.astro`. Mark = an **S drawn as a workflow connector**: two nodes (circles) joined by an S-curve — "input → system → output". Blue node top-left, ink node bottom-right. Works at 16px (favicon).

### Colour tokens (single source: `src/styles/tokens.css`)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#E9ECF1` | page background (light gray) |
| `--surface` | `#F5F6F9` | cards |
| `--surface-2` | `#DDE2EA` | wells |
| `--ink` | `#0B1424` | text, dark sections |
| `--muted` | `#586378` | secondary text |
| `--line` | `#C6CDD8` | borders |
| `--line-blue` | `rgb(42 91 255 / .28)` | construction lines |
| `--blue` | `#2A5BFF` | primary / CTAs / links |
| `--blue-bright` | `#14A8FF` | signals, highlights, gradients |
| `--blue-deep` | `#0A2A8F` | hover, dark accents |

Light theme only (brief: "light in both gray and blue"). Dark `--ink` bands are allowed for contrast sections.

### Type
- Display: **Inter Tight** (variable), UPPERCASE, tight tracking — neo-grotesk.
- Script accent: **Pinyon Script** (EN) / **Aref Ruqaa** (AR) — one word at a time, in blue, never body text.
- Body: **Inter** (variable). Labels / numbers: **JetBrains Mono**.
- Arabic (text): **IBM Plex Sans Arabic** — no uppercase, no letter-spacing, animate by word only.
All self-hosted via `@fontsource*`.

### Design language (v2 — 2026-10-08 declutter pass)
Started from the meermohsin.me structure; v2 removed visual noise after feedback that v1 was "too crowded".
- **Calm by default**: one idea per section, generous whitespace, sentence-case body copy (uppercase only for short headings/labels), no decorative construction lines, no grain, no giant logo mark.
- **Chrome**: single header row (logo · 5 links · language · *Book a call*), turns into a frosted pill after 40px of scroll and inverts over `[data-dark]` sections. No fixed bottom bar.
- **Motion kept, but subtle**: preloader counter (once per session), cursor ring with labels, faint blue mouse trail, split-text and fade reveals, magnetic buttons, hover lift on cards. Everything off under `prefers-reduced-motion`.
- **Home order**: hero (headline + script word, lead, 2 CTAs, blue "system" panel) → 4-stat proof row → 6 featured project cards → manifesto → services grid (4×2) → process (5 steps, ink) → journal cards → closing CTA → footer.
- The logo mark appears only at logo size (header, footer, favicon, curtain).

### Voice
- Confident, concrete, engineer-to-founder. Show the system, name the tool, give the number.
- Short sentences. Verbs first. No "cutting-edge", "revolutionary", "synergy", "world-class", "guaranteed results".
- Arabic: MSA for pages and blog; light Egyptian warmth allowed in CTAs/social only. Arabic is written natively, never word-for-word.
- **Never invent facts**: no fake metrics, fake clients or fake testimonials presented as real. Any number on the site must be traceable to a project file or live site. Unverified claims go into `docs/MISSING.md`, not into copy.

---

## 2. Services (order = priority on the site)
1. **Websites & Web Apps** — Astro / Next.js / WordPress-WooCommerce, bilingual AR/EN, Lighthouse 90+.
2. **SEO & Content Engines** — technical SEO, programmatic pages, AI-assisted content factories.
3. **Automation & AI Systems** — n8n workflows, AI agents/chatbots, scraping, ERP (ERPNext) integration.
4. **Lead Generation & CRM** — lead scraping, qualification, WhatsApp outreach, pipelines.
5. **Social Media & Content Creation** — content systems, auto-publishing with approval gates.
6. **Advertising** — Meta / Google ads, tracking, landing pages, reporting.
7. **Branding** — identity, positioning, messaging.
8. **Analytics & Dashboards** — sales/ads/ops data in one view.

Offer: **free 30-min consultation** → proposal. No public pricing.

---

## 3. Portfolio
Single source: `src/data/projects.ts` (bilingual). Categories: `web`, `system`, `automation`, `lab`.
Screenshots of live sites: `npm run shots` (puppeteer-core + local Chrome) → `public/work/*.webp`.
Non-web systems are illustrated by the animated **FlowDiagram** component built from each project's `flow` array — never with fake UI screenshots.

| Slug | Project | Type | Live |
|---|---|---|---|
| alsakr-online | Al Sakr Online — industrial e-commerce | web | alsakronline.com |
| nexumotion | NexuMotion — automation parts (Next.js) | web | nexumotion.com |
| iconic-mach | Iconic Mach Engineering | web | iconicmach.com |
| alsakr-conveying | Al Sakr Conveying — video-first Astro | web | alsakronline-cyber.github.io |
| walaa-3d | Walaa 3D Animation | web | walaa3d.studio |
| nutrasakr | NutraSakr corporate site | web | nutrasakr.com |
| effat | Effat Group commerce platform | web | in development |
| qualifay | Qualifay — AI lead-gen + WhatsApp CRM SaaS | system | private beta |
| erpnext-alsakr | ERPNext for Al Sakr | system | internal |
| alsakr-analytics | Al Sakr analytics system | system | internal |
| scraping-engine | Scraping & market-intel engine | system | internal |
| seo-content-factory | SEO content factory (10 n8n workflows) | automation | internal |
| social-autopilot | Social autopilot (Postiz + Telegram approval) | automation | internal |
| ops-monitor | Ops health monitor & daily report | automation | internal |
| ai-sales-widget | AI sales assistant widget | automation | live on alsakronline.com |
| jarvis | Jarvis — voice AI ops assistant | lab | personal |
| video-factory | Automated video factory | lab | R&D |

**Lab page** (`/lab/`): (1) coded concept studies in `src/components/studies/` — our own code, each labelled "Concept study — not a client project" and crediting the site that inspired the idea; (2) inspiration board from `src/data/inspiration.ts` — third-party Awwwards nominees, always with studio credit + live + Awwwards links (`npm run shots -- --inspiration`). **Never move third-party sites into `projects.ts` or present them as Sdiek work.**

Testimonials: `src/data/testimonials.ts`. Only entries with `approved: true` render. Drafts are templates to send to the client for sign-off.

---

## 4. Tech

| Layer | Choice |
|---|---|
| Framework | Astro 7, static output, zero UI framework (vanilla TS islands) |
| i18n | Routes `/en/...` and `/ar/...`; `/` redirects by `Accept-Language`-free JS fallback to `/en/`. Strings in `src/i18n/*.ts`. `hreflang` + `x-default` on every page |
| Content | Content collections: `src/content/blog/{en,ar}/*.md` |
| SEO | `@astrojs/sitemap`, canonical, OG/Twitter, JSON-LD (`Person`, `Organization`/`ProfessionalService`, `WebSite`, `CreativeWork`, `BlogPosting`, `BreadcrumbList`) |
| Motion | `src/scripts/motion.ts`: custom cursor + magnetic buttons, hero node-network canvas (mouse-reactive), letter-split reveals, 3D tilt, cursor-follow preview images, scroll reveals, marquee, scroll progress. **All motion off under `prefers-reduced-motion`** and the cursor is disabled on touch |
| Forms | `PUBLIC_FORM_ENDPOINT` (n8n webhook) → JSON POST; fallback `mailto:` |
| Booking | `PUBLIC_BOOKING_URL` (Cal.com / Calendly) embedded on `/book`; fallback = request form + WhatsApp |
| Deploy | GitHub repo; GitHub Pages workflow in `.github/workflows/deploy.yml`. Set `PUBLIC_SITE_URL` (+ base path) per host |

### Rules
- All internal links go through `u()` in `src/lib/url.ts` (handles base path).
- Every user-facing string exists in both `en` and `ar`. RTL uses logical CSS properties (`margin-inline`, `inset-inline`) — never `left/right` for layout.
- Performance budget: Lighthouse ≥ 90 mobile. Canvas pauses off-screen; images WebP with width/height; no JS framework.
- **Never commit secrets.** No SSH keys, server IPs, `.env`, tokens. Contact details come from `src/config/site.ts`.

## 5. Commands
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run shots      # refresh live-site screenshots
```
