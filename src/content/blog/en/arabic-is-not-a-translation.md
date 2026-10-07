---
title: "Arabic is not a translation: building bilingual sites that rank in both languages"
description: Most bilingual sites in MENA are an English site with Arabic poured on top. Here is how I build Arabic and English as two first-class experiences — layout, typography, URLs and SEO.
date: 2026-09-18
lang: en
key: arabic-seo
tags: [SEO, Arabic, i18n, web design]
readingMinutes: 7
---

Open ten "bilingual" company sites in Egypt or the Gulf and you will find the same thing: a well-designed English site, and an Arabic version where the menu is mirrored, half the buttons are still in English and the page title says *Home | Company*.

Google notices. So do customers.

Every site I ship — Al Sakr Conveying, NutraSakr, NexuMotion, this one — treats Arabic as a **first-class language**, not a translation pass. Here is the checklist.

## 1. Design RTL from day one

Mirroring an LTR layout at the end always breaks something. Instead:

- Use **CSS logical properties** everywhere: `margin-inline-start`, `padding-inline`, `inset-inline-end`. Never `left` and `right` for layout.
- Flip only what has direction: arrows, progress bars, carousels, timelines. Don't flip logos, phone numbers, code or charts.
- Put `dir="ltr"` on things that must stay left-to-right inside Arabic text: phone numbers, emails, part numbers, prices.

## 2. Give Arabic its own typography

Latin display fonts with an Arabic fallback look broken. Pick an Arabic family that matches the brand's personality — on this site that's **IBM Plex Sans Arabic** for text and **Aref Ruqaa** for calligraphic accents — and tune it separately:

- Larger line-height (Arabic needs ~1.6–1.8 for body text).
- No letter-spacing — it breaks the joins between letters.
- No uppercase transforms (Arabic has no case).
- Animate Arabic **by word**, never by letter — splitting letters breaks the script.

## 3. Separate URLs, real hreflang

- `/en/...` and `/ar/...` — one URL per language, never a cookie or JS toggle.
- Every page declares `hreflang="en"`, `hreflang="ar"` and an `x-default`.
- The sitemap lists both languages.
- `lang` and `dir` on the `<html>` tag change per page.

## 4. Write Arabic, don't translate it

Search behaviour is different. An Egyptian engineer might search "سعر حساس سيك" while their English-speaking colleague searches "SICK photoelectric sensor price". Literal translation targets neither.

- Do keyword research **in Arabic**, including the transliterated brand names people actually type.
- Use Modern Standard Arabic for pages and articles; light Egyptian warmth is fine in CTAs and social captions.
- Write unique Arabic titles and meta descriptions — never the English ones run through a translator.

## 5. Handle Arabic search inside the site

If the site has search, normalise Arabic: treat أ / إ / آ / ا as the same letter, ة and ه, ى and ي, and strip diacritics. That's why the Effat commerce platform uses Meilisearch with Arabic normalisation instead of plain database search.

## 6. Test like a native user

Read every Arabic page on a phone, out loud. If a sentence sounds like a translation, rewrite it.

## The payoff

Arabic search results are far less competitive than English ones in most B2B niches. A properly built Arabic version is often the fastest SEO win a MENA business can get.

Want an audit of your Arabic site? [Book a free 30-minute call](../../book/).
