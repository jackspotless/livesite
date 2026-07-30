# Deploy Notes — Tawk.to Live Chat Widget (July 29, 2026)

## What changed
Added the Tawk.to live chat widget to every page on the site (43 HTML files).
The snippet is inserted immediately before `</body>`, wrapped in marker
comments (`<!-- Start of Tawk.to Script -->` / `<!-- End of Tawk.to Script -->`)
so a future automated pass can detect it's already present and skip re-inserting.

## Scope
**All 43 pages**, including the two conversion-funnel pages that are normally
kept lean (`/focus-clean` ad landing page and `/booking-confirmed`). This was
a deliberate choice — a chat widget doesn't create a navigation "exit" the way
a header link does, so it was included everywhere rather than excluded from
the funnel pages the way the Customer Login link was.

## What did NOT change
- No changes to `css/style.css` or `js/main.js` — this is a third-party
  `<script>` tag only.
- **No cache-bust version bump.** Netlify's 1-year cache header (`netlify.toml`)
  only applies to `/css/*`, `/js/*`, and `/images/*`. HTML files aren't
  covered by that rule, so there's no stale-cache risk here — visitors get
  the widget on their next normal page load.
- No other markup, schema, or copy touched on any page.

## Script details
- Widget ID: `6a6af53231d0d81d4b5d41c6/1juosrjaf`
- Loads async, appended dynamically via JS — does not block render or hurt
  PageSpeed/LCP.

## Verification performed before packaging
- Confirmed every HTML file had exactly one `</body>` tag before inserting
  (no risk of double-insertion or wrong placement).
- Confirmed no pre-existing Tawk.to script on any page.
- Spot-checked `index.html`, `focus-clean.html`, and `booking-confirmed.html`
  after insertion — snippet lands cleanly, `</html>` still closes correctly.
- Confirmed exactly 43 files modified, 0 unintended files touched (verified
  via `git status`).

## Still to do (on Jack's side, in the Tawk.to dashboard)
- Set business hours / away messages if desired
- Configure any pre-chat form or department routing
- Consider muting the widget on mobile if it visually competes with the
  sticky mobile Book/Call bar on `/focus-clean` — worth a quick visual
  check after deploy, easy to adjust via Tawk.to's own widget settings if so
