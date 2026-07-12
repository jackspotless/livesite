# Service scope accuracy fix — July 2026

Cross-checked all three cleaning-tier pages against your three cleaner checklists
(Standard Clean / 12 tasks, Deep Clean / 21 tasks, Move-In/Move-Out / 30 tasks) and
fixed everywhere the site's copy didn't match.

## The core problem

The Deep Cleaning page's "What's included" list — and several other pages that
echoed the same phrase — claimed things that are actually Move-In/Move-Out
exclusives: inside the oven, inside the refrigerator, interior window panes/sills,
inside vanity/under-sink cabinets, and closet drawer interiors. The site was also
internally inconsistent about it — one paragraph called those items "included,"
another called them "add-ons," and a third implied even Deep Clean itself doesn't
include them and you need to book Deep Clean to get them (which wasn't true either).

Per your direction: **each tier's included scope is exactly its checklist.**
Anything from a higher checklist is available as an itemized, separately-priced
add-on on a lower tier — never bundled in for free.

## Files changed (7)

### `services/deep-cleaning.html`
- Rewrote "What's included" to match the 21-task Deep Clean checklist exactly.
  Removed: inside oven, inside refrigerator, window sills/tracks/interior windows,
  under-sink cabinet, closet floors, dresser/desk drawers — none of these are on
  the Deep Clean checklist.
- Added a new "Available add-ons" note explaining those items can be added
  individually, priced separately, pointing to the Move-In/Move-Out page.
- Fixed the intro paragraph, meta description, JSON-LD `description`, page lede,
  and the "How is deep cleaning different" FAQ (both visible copy and JSON-LD) —
  all previously said "inside appliances" as if oven/fridge were included.
- Updated the pricing paragraph's add-on list to include "inside the oven"
  alongside the fridge/windows/garage add-ons already mentioned there.

### `services/residential-cleaning.html`
- Fixed "What's not in the price" paragraph — previously implied booking Deep
  Cleaning gets you oven/fridge/windows. Now correctly separates "full-home
  baseboards/vents/fans = Deep Cleaning's scope" from "oven/fridge/windows =
  itemized add-ons available on any tier."
- Fixed the "standard vs. deep" FAQ (visible + JSON-LD) to match.

### `services/move-in-move-out-cleaning.html`
- Made the medicine cabinet its own line item under Bathrooms (checklist calls
  it out separately; page previously folded it into a generic "cabinets and
  drawers" line).
- Fixed the "Do you clean inside the refrigerator and oven?" FAQ (visible +
  JSON-LD) — previously said those are "deep-clean add-ons" for occupied homes.
  Corrected to say they're add-ons available on any service, not specific to
  booking a deep clean.

### `services/index.html` and `index.html` (homepage)
- Fixed the Deep Cleaning teaser card copy on both — same "inside appliances"
  overstatement, one-line fix on each.

### `blog/deep-cleaning-vs-standard-cleaning-surprise-az.html`
- This post had the exact same overstated Deep Clean breakdown as the old
  service page (oven, fridge, windows, under-sink cabinet all listed as
  included). Rewrote the "What deep cleaning adds" section to match the
  corrected checklist, fixed the TLDR callout, the transitional paragraph
  before it, and a photo caption that said "Inside appliances" over a photo
  that's actually just a microwave.

### `blog/what-house-cleaners-charge-west-valley.html`
- Fixed the Deep Clean row of the pricing comparison table — same overstatement,
  now notes oven/fridge as separate add-ons.

## What did NOT need changes

- `services/recurring-residential-cleaning.html` — already matched the Standard
  Clean checklist cleanly.
- `services/move-in-move-out-cleaning.html`'s main included list — already
  correctly scoped to the 30-task checklist (this was the one page getting it
  right already).
- `blog/move-in-cleaning-checklist-west-valley.html` — mentions of "inside
  appliances" there are accurate since it's specifically about move-in cleaning.

## Not touched — flagging for you

Short-Term Rental and Focus Clean pages weren't checked against a cleaner
checklist since you didn't provide one for those tiers. If you have (or want to
build) a checklist for either, send it over and I'll run the same pass.

## Deploy notes

All 7 changes are content-only — no CSS/JS touched, so no cache-bust version bump
needed. Drop these files into the matching paths in your repo and push:

```
index.html
services/index.html
services/deep-cleaning.html
services/residential-cleaning.html
services/move-in-move-out-cleaning.html
blog/deep-cleaning-vs-standard-cleaning-surprise-az.html
blog/what-house-cleaners-charge-west-valley.html
```

All JSON-LD blocks validated as parseable JSON after edits. Every FAQ answer that
was corrected in visible copy was also corrected in its matching JSON-LD entry
so they stay in sync (per QA checklist — schema must match visible content).

## Suggested QA after deploy

- Re-run Google's Rich Results Test on `deep-cleaning`, `residential-cleaning`,
  and `move-in-move-out-cleaning` to confirm FAQPage schema still validates.
- Spot-check the Deep Cleaning page's new "Available add-ons" copy reads the
  way you want — I wrote it generically ("note what you'd like added when you
  book and we'll quote it") since I don't have your actual add-on price list.
