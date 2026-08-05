# Deploy notes — Paige (Merchynt) widgets, August 4, 2026

## What changed

### Reviews widget
Added to **8 pages**: homepage + all 6 service pages (residential-cleaning,
deep-cleaning, move-in-move-out-cleaning, short-term-rental-cleaning,
recurring-residential-cleaning, focus-clean).

- Homepage placement: directly below the trust-strip, above the Focus Clean
  signature band (i.e. "just under hero," per Paige's own placement guidance).
- Service page placement: directly below the page-header (breadcrumb/H1/lede/seal),
  above the existing body content.
- Pulls live from `localmarketingmanager.com/api/reviews/...` (Merchynt's Paige
  platform — confirmed legitimate, this is their actual API domain).
- iframe is `loading="lazy"` so it doesn't compete with LCP.
- Section heading: "What people are saying" (plain, matches site voice — no
  claims made about star ratings since GBP review count is still low).

### Recent Posts widget ("Latest from our Google Business Profile")
Added to **homepage only**, at the very bottom, above the Final CTA (per Paige's
own placement guidance: "very bottom of homepage, like a Recent updates section").

- Deliberately **not** added to `/focus-clean` or `/booking-confirmed` — this
  widget links back to the GBP profile, which is exactly the kind of exit those
  two pages are built to avoid.
- Background left as default (white), not cream-warm — the FAQ section directly
  above and the Final CTA directly below are both already cream-warm; matching
  that would have produced three consecutive same-background sections with no
  visual break.

### Image widget ("Fresh from our Google Business Profile")
Added as a **new section** on 2 pages only, per explicit decision NOT to replace
any existing curated photos:
- Homepage: below the existing "Recent jobs across the West Valley" photo strip
- Services hub (`/services/`): below the existing "From kitchens to bathrooms to
  living rooms" photo strip

Existing curated photo integration (32 pages: hero, 5 service galleries, 17
service-area inline figures, 3 blog posts) is untouched. See open items for the
tradeoff reasoning (iframe content isn't indexed as page content / loses the
per-page narrative-fit curation the existing photos were built around).

## What was NOT added (yet)
- **Schema markup widget** — intentionally skipped. Site already runs a more
  complete, hand-built schema layer (per-page geo, parentOrganization,
  FAQPage, BreadcrumbList across 40 pages). Paige's schema widget is
  homepage-only and would need to replace the existing set entirely
  ("only one primary set of schema per Paige on a website" — Merchynt's own
  docs). Not worth the downgrade.
- **Recent Posts widget** — not requested yet. If added later: homepage bottom
  only, and explicitly NOT on `/focus-clean` or `/booking-confirmed` (those two
  pages are intentionally stripped of every outbound/off-page link; Recent Posts
  links back to GBP, which breaks that).
- **FAQ widget** — not requested yet. Site already has a hand-written FAQ with
  its own FAQPage schema on the homepage; adding Paige's would duplicate/conflict.

## Technical notes
- No CSS or JS files were modified — pure HTML insertion, same pattern as the
  Tawk.to chat rollout (July 29, 2026). Cache-bust versions unchanged
  (`?v=20260703` CSS / `?v=20260623` JS).
- Delivered via idempotent script `add_paige_widgets.py` (re-runnable, guarded
  by `<!-- === paige-*-widget:start/end === -->` marker comments — same pattern
  as `add_customer_login.py` and `add_tawk_widget.py`).
- `/focus-clean` (ad landing page) and `/booking-confirmed` were left untouched
  entirely — no widgets added there in this pass.

## Post-deploy QA
- [ ] Visit homepage — confirm Reviews widget renders below trust-strip, Image
      widget renders below "Recent jobs" strip
- [ ] Visit each of the 6 service pages — confirm Reviews widget renders below
      the page-header
- [ ] Visit `/services/` — confirm Image widget renders below the existing
      photo strip
- [ ] Resize browser window on a page with the Reviews widget — confirm it
      re-paginates (1 review under 450px width, up to 5 at 1144px+)
- [ ] Run PageSpeed Insights on homepage — confirm the two new iframes (lazy
      loaded) don't drag LCP below 90
- [ ] Confirm neither widget appears on `/focus-clean` or `/booking-confirmed`

## Homepage H1 update (separate from widgets, same deploy)
Old: "A spotless home, every visit. That's the deal." — pure tagline, no keyword
or location signal.
New: "House Cleaning in Surprise, AZ — A Spotless Home, Every Visit" — carries
the primary keyword + flagship location while keeping the original tagline
intact as the second half. Matches the `<title>`/`og:title` pattern already in
place ("House Cleaning in Surprise, AZ | Spotless House Cleaning") and the
naming convention used on the 12 service-area pages.

Prompted by a Paige "Website Recommendations" audit suggesting a fully
keyword-stuffed H1 (8 comma-separated service synonyms, no sentence). That
version was rejected as a low-quality-content pattern under Google's current
helpful-content guidance; this is the middle path — real keyword + location,
still a real sentence in Jack's voice. Page title and meta description
recommendations from the same audit were also reviewed and rejected (title
recommendation ran ~115 chars, well past the 50-60 char display limit; meta
description recommendation read as a keyword fragment list, not a sentence).

Lede directly below the H1 already carries "House cleaning" + "West Valley,"
so no redundancy was introduced.

## Open decision carried over
`/focus-clean` currently has no real testimonials (flagged in open items as the
"biggest remaining conversion lever" — the page explicitly avoids fabricated
social proof). The Reviews widget now live elsewhere pulls real GBP reviews and
could resolve that gap directly on the funnel page too — but that page is
deliberately exit-stripped, so this needs a explicit go-ahead before adding
rather than assuming it belongs there. Flagged as an open item, not yet added.
