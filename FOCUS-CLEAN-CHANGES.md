# Focus Clean Buildout — Change Notes (June 2026)

This changeset makes the **3-Hour Focus Clean** the site's front-door / signature
service across the whole site. Brand voice, design tokens, URL conventions, and
schema patterns all match the existing site. No new dependencies.

## New pages (2)

| URL | File | Purpose |
|---|---|---|
| `/services/focus-clean` | `services/focus-clean.html` | **Indexable SEO anchor.** Full service page (Service+Offer, BreadcrumbList, FAQPage schema). Ranks organically for Focus Clean / flat-rate queries. Primary CTA → `/focus-clean` (the ad LP, where the booking embed + pixel live). |
| `/blog/what-house-cleaners-charge-west-valley` | `blog/what-house-cleaners-charge-west-valley.html` | **LLM-citable pricing comparison.** Directly answers "what do cleaners charge in my area" for the West Valley, with a comparison table and FAQPage schema. Places the Focus Clean honestly inside the real market range. |

## Site-wide components added

- **Announcement bar** — slim indigo bar above the sticky header on every standard
  page, linking to `/services/focus-clean`. Dismissible (remembers via
  `localStorage` key `spotlessAnnounceDismissed`).
  **Intentionally absent on 3 pages:** `services/focus-clean.html`,
  `focus-clean.html` (ad LP, no-exit), and `booking-confirmed.html` — i.e. the
  pages where promoting the Focus Clean to someone already on/past it is redundant.
- **Services dropdown** — "3-Hour Focus Clean" added as the featured first item
  (lavender dot, bold). `aria-current` set on the service page itself.
- **Footer** — "Focus Clean" added as the first item in the Services column.
- **Homepage signature band** — `focus-hero-band` section inserted right before the
  services preview ("Home of the 3-Hour Focus Clean").
- **In-page callout** (`focus-callout`) — added to the 5 other service pages and all
  17 service-area pages, immediately above the interlink block.
  The **six 55+/active-adult area pages** (Sun City, Sun City West, Corte Bella,
  The Grand, Sun City Festival, Trilogy at Vistancia) use a budget-emphasis variant
  ("a fixed number that doesn't move with your home's size … easy to plan around on
  a fixed budget"). All others use the generic variant.

## Files modified

- `css/style.css` — appended Focus Clean component styles (announcement bar,
  featured dropdown item, homepage band, callout). Brand tokens only. 1428 → 1550 lines.
- `js/main.js` — appended announcement-bar dismiss handler. 100 → 114 lines.
- `sitemap.xml` — added `/services/focus-clean` (0.9) and the pricing blog post (0.7);
  **removed** `/focus-clean` (the ad LP is now noindexed).
- `focus-clean.html` (ad LP) — `robots` changed to **`noindex,follow`** so it stops
  competing with the new service page for organic queries. Still fully functional as
  the paid-traffic destination (embed + pixel unchanged).
- **All HTML pages** — cache-bust query bumped `?v=20260520` → `?v=20260615` on the
  `style.css` and `main.js` references (required because CSS/JS changed).

## Pricing shown on-site (content decision)

Flat **$150** one-time, recurring ladder **$135 monthly / $127.50 bi-weekly /
$120 weekly**. The **$50-off first-clean discount is NOT on the site** — it lives only
in the Meta ads and the `/focus-clean` ad landing page (cold-traffic hook).

## Deploy

Static site — drop the contents over the existing repo and push (GitHub → Netlify).
No build step. After deploy: resubmit `sitemap.xml` in Search Console and request
indexing for the two new URLs.

## Two things to confirm (see knowledge-doc update)

1. **Guarantee wording.** The new service page FAQ deliberately does *not* assert a
   satisfaction/service-recovery guarantee (that wording was still unconfirmed). The
   ad LP still carries its "make it right on the spot" line. Confirm the wording you
   want and we'll align both.
2. **CTA routing.** Organic visitors who click "Book the Focus Clean" on the service
   page are sent to `/focus-clean` (the LP) so their bookings flow through the page
   where the Meta Pixel Purchase event fires. Flag if you'd rather route them to
   `/booking` instead.

---

## Photo additions (follow-on)

Curated from four job batches (~40 source photos → 11 used). Consent confirmed by
owner. All optimized to site standard (long edge ≤1600px, EXIF stripped, JPEG + WebP,
explicit width/height, descriptive non-city alt text).

**New before/after pairs** (the gap the site never had):
- **Deep Cleaning page** — new "Before & After" section: refrigerator shelf
  (`fridge-shelf-before/after`) and toilet (`toilet-before/after`). Also added two
  landscape afters to its gallery: `master-bathroom-after`, `master-bathroom-sink-after`.
- **Move-In/Move-Out page** — new "Before & After" section beside the gallery:
  kitchen sink (`kitchen-sink-before/after`).
- **Focus Clean ad LP** — before/after pair added to the proof strip:
  `fridge-door-before/after`.
- **Focus Clean service page** — gallery now uses `garden-tub-after` (unique shot) in
  place of a reused tub photo.

New CSS: `.spotless-ba` before/after component (labeled Before/After badges, brand
tokens). style.css 1550 → 1586 lines.

**Set aside** (documented for the record): the entire booking-#7 set (cluttered /
PII risk: framed wall photos + vanity mirror), the orphan bathtub "before" (no matching
after), and the redundant Wittmann toilet. **Still missing across all batches:**
crew-at-work / action shots — worth capturing next.

**Pre-existing (not introduced here):** 7 pages reference `/images/og-default.png`,
which doesn't exist. Their social-share cards have no image until a 1200×630
`og-default.png` is added.
