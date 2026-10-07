# What's missing / needs your confirmation

Everything below is either a placeholder in the code or a claim I reconstructed from project files
and could not verify. Nothing here blocks the build, but **fix the 🔴 items before you share the site publicly**.

## 🔴 Contact & identity (placeholders on the live site)
| Item | Where | Current value |
|---|---|---|
| Business email | `src/config/site.ts → email` | `hello@sdiekmarketing.com` (domain not owned yet?) |
| Phone + WhatsApp number | `site.ts → phone, phoneHref, whatsapp` | `+20 100 000 0000` (fake) |
| Social handles (LinkedIn, Instagram, X, TikTok, YouTube, Facebook) | `site.ts → social` | empty → hidden. Only GitHub shows. |
| Domain | `.env → PUBLIC_SITE_URL` | `sdiekmarketing.com` assumed |
| Booking link (Cal.com / Calendly) | `.env → PUBLIC_BOOKING_URL` | empty → /book shows a request form instead |
| Form webhook (n8n) | `.env → PUBLIC_FORM_ENDPOINT` | empty → form opens the visitor's email app |
| Portrait photo of you | `src/pages/[lang]/about.astro` | logo mark used instead |
| What does "Sdiek" mean? | About page / brand story | not answered — a one-line origin story helps memorability |

## 🟠 Testimonials (you asked for generated ones)
I did **not** publish invented testimonials. Fake reviews presented as real customers break consumer-protection
rules (e.g. the US FTC's 2024 fake-review rule; Egypt's Consumer Protection Law 181/2018 on misleading ads) and
are a reputational risk if a client or competitor notices.

Instead, `src/data/testimonials.ts` holds **4 draft quotes** written for real projects (Al Sakr Online, Walaa 3D,
Al Sakr Conveying, NutraSakr). Send each draft to the person, let them edit, then set `approved: true` and add their
name. The testimonials section appears automatically once at least one is approved. Several of these are
your own / family businesses — those approvals can happen today.

## 🟠 Project facts to confirm (marked `verify: true` in `src/data/projects.ts`)
| Project | What I need |
|---|---|
| **Iconic Mach Engineering** | Did you build it from scratch? Stack (CMS/framework)? Year? |
| **ERPNext for Al Sakr** | No ERPNext files on this machine. Confirm modules used, hosting, integrations, and any numbers (items, users, quotations/month). |
| **Al Sakr Analytics** | Reconstructed from the Meta Ads CSVs + invoice summaries in `Business Model Canvas/` and `sheets/`. Confirm the tools (Looker Studio? Sheets? custom dashboard?) and what it reports. |
| **Effat Group** | No live URL found (`effatgroup.com` doesn't resolve). Add the URL when it launches, or a staging screenshot. |
| **Qualifay** | Shown as "Private beta". Add a public URL + screenshots when ready. |
| All | Any real results: traffic growth, leads/month, hours saved, posts automated, revenue influenced. **Numbers sell portfolios** — add them to each project's `outcome`. |

## 🟡 Nice to have
- Screenshots / short screen recordings of the n8n workflows, Qualifay dashboard, ERPNext and analytics dashboards (blur client data). They'd replace the animated flow diagrams on those case studies.
- Logos of the client brands (with permission) for a "trusted by" strip.
- Arabic slugs for Arabic blog posts (currently share the English slug so the language switcher maps 1:1).
- Background sound toggle like the reference site — skipped on purpose (hurts conversions and accessibility); easy to add if you want it.

## 🔒 Security note (outside this project)
- `qualifay` is a **public** GitHub repo and its `CLAUDE.md` contains the server IP, SSH port and service map. Consider making the repo private or removing those lines from history.
- `ssh-key-2026-03-05.key` (a private key) is copied into ~8 project folders. It is **not** in any git repo I checked, and this project's `.gitignore` blocks `*.key`, but keep it out of synced folders.
