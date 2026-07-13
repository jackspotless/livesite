# Site restore — July 13, 2026

## What happened
The last deploy (from the "service scope accuracy fix" delivery) replaced the
entire `/services/` and `/blog/` folders with only the files that were changed
in that delivery, rather than adding/updating those files alongside what was
already there. That deleted 7 files that were never meant to be touched:

- `blog/index.html` (blog hub page)
- `blog/move-in-cleaning-checklist-west-valley.html`
- `blog/short-term-rental-cleaning-west-valley.html`
- `services/focus-clean.html`
- `services/recurring-residential-cleaning.html`
- `services/short-term-rental-cleaning.html`
- `services/short-term-rental-cleaning/scottsdalerentals.html`

This is why `/services/focus-clean` and `/services/short-term-rental-cleaning`
were 404ing, and `/blog/` had no index.

## What this zip contains
Your current live site (with the accuracy fixes already deployed) plus all 7
missing files restored from the last known-good full-site backup. Confirmed:

- All 41 pages present, matching the original site structure
- Cache-bust versions match exactly (`style.css?v=20260703`, `main.js?v=20260623`)
  — no mismatch between restored files and the rest of the site, no version
  bump needed
- Zero JSON-LD errors across every page
- Zero stray `.html` internal links
- Every internal link to the three restored service pages now resolves

Also removed two stray files that ended up committed into the site root by
accident during the last delivery (`README.md` and
`knowledge-doc-updates-service-accuracy.md`) — these were internal delivery
notes, not meant to be part of the live site, and would have been publicly
fetchable at spotlesshousecleaningaz.com/README.md since Netlify publishes the
whole repo root.

## For next time
When I hand you a partial-file fix (just the pages that changed), please add/
replace those specific files in your existing repo rather than swapping out
the whole `/services/` or `/blog/` folder for what's in the zip — the zip only
ever contains what changed, not a full mirror of the site, unless I say
otherwise. Happy to always call this out explicitly in the README going
forward, and I'll do that from now on regardless.

## Recommended after deploy
- Hard-refresh `/services/focus-clean` and `/services/short-term-rental-cleaning`
  in incognito to confirm they're live again
- Spot-check `/blog/` to confirm all 4 posts appear
- Re-run Rich Results Test on the 3 restored service pages if you want to
  double check schema
