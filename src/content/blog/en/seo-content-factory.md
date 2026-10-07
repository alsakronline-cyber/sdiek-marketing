---
title: How to build an SEO content factory for a 39,000-product catalogue
description: Ten n8n workflows, one strict style guide and a human review step. A practical blueprint for industrial and e-commerce brands with more products than writers.
date: 2026-09-04
lang: en
key: content-factory
tags: [SEO, n8n, e-commerce, industrial]
readingMinutes: 8
---

Al Sakr Online sells genuine industrial automation parts — SICK, Siemens, ABB, Schneider, WAGO, Festo and more — with a catalogue of **39,000+ products**. No content team on earth writes good pages for that many SKUs by hand, in two languages.

So we didn't. We built a factory.

## The principle: engineer-to-engineer

Before any workflow, we wrote the rules. Industrial buyers are engineers. They want part numbers, specifications, compatibility and stock, not adjectives.

- Factual, precise, helpful. Never fluffy.
- **Banned words**: "cutting-edge", "state-of-the-art", "revolutionary", "best prices", "100% guarantee".
- **Allowed**: "in stock", "certified parts", "tested", "compatible with".
- CTAs in Title Case: *Request a Quote*, *Talk to an Engineer*, *Download Datasheet*.
- English first, then Arabic, never the other way round.

Those rules live in one file that every AI prompt reads. That's what keeps 10 workflows sounding like one brand.

## The ten workflows

| # | Workflow | Job |
|---|---|---|
| 01 | Keyword discovery | Find part-number and problem queries with real demand |
| 02 | Competitor intel | See who ranks and what they cover |
| 03 | Content generation | Draft articles and product copy from the rules |
| 04 | QA check | Reject drafts that break rules, miss specs or are too thin |
| 05 | WordPress publisher | Push to WordPress as **draft**, with categories and tags |
| 06 | Social automation | Turn published articles into social posts |
| 07 | SEO monitoring | Track rankings and Search Console changes |
| 08 | Internal linking | Link articles ↔ products ↔ brand pages |
| 09 | Product enrichment | Improve product pages with structured specs |
| 10 | Reporting | Weekly summary of what was produced and what moved |

## Draft-first, always

Every net-new article is saved as a **draft** and reviewed by someone technical before it goes live. Product-page enrichments are different: once they pass automated QA consistently, they can publish automatically. Knowing which content needs a human — and which doesn't — is most of the design work.

## Internal linking is the multiplier

A 39,000-page site lives or dies on internal links. Workflow 08 links every new article to the exact products and brand pages it mentions, and adds the article back onto those product pages. Each new article strengthens dozens of existing pages.

## What it takes to copy this

You don't need 39,000 products to benefit. The same structure works for a 300-product store or a service business with 20 location pages:

1. Write the style rules **first**.
2. Automate research and drafting.
3. Put an automatic QA gate and a human review step before anything is public.
4. Automate the boring SEO hygiene: categories, tags, schema, internal links.
5. Report weekly, in plain language.

If your catalogue is bigger than your content team, [let's talk for 30 minutes](../../book/).
