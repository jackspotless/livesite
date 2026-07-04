# Deploy Notes — Homepage Lead-Capture Form (July 3, 2026)

## What changed

**`index.html`**
- Hero section restructured from a single content column into a two-column
  grid (`hero-inner--with-form`): existing hero copy/CTAs on the left, a new
  compact lead-capture card on the right.
- New Netlify form: `homepage-lead`
  - Fields: Full name, Phone, Email, City (select — matches the 12-city nav
    list), Message (optional textarea)
  - Honeypot: `netlify-honeypot="bot-field"` + hidden `bot-field` input,
    per current Netlify spam-filter docs
  - Hidden `source: Homepage hero` field, so submissions are identifiable
    if `leads@` ever receives forms from more than one place
  - `action="/thank-you"` — reuses the existing thank-you page, no new page
    needed
  - Separate `name` attribute from the existing `contact` form, so Netlify
    treats them as distinct forms with independently configurable
    notifications
- Cache-bust bumped: `style.css?v=20260703`

**`css/style.css`**
- New rules added (search `hero-inner--with-form`, `hero-lead-card`,
  `hero-lead-field`): two-column hero grid, card styling, 2-column field
  grid inside the form (Name+Phone / Email+City paired, Message and submit
  full-width), select/textarea styling to match existing input treatment.
- No existing rules modified or removed — this is additive.

**Site-wide**
- `style.css?v=20260703` cache-bust bump applied to **all 41 HTML files**
  (previously only `index.html` had the new version during preview). This
  was necessary because `style.css` is one shared file — every page needs
  the fresh cache-bust to guarantee they pick up the new CSS rather than a
  stale cached copy. No page other than `index.html` uses the new classes,
  so this is a no-op for them beyond the fresh fetch.

## Scope check against Baseline non-negotiables
- ✅ No `.html` URLs introduced (form `action` is extensionless `/thank-you`)
- ✅ Cache-bust bumped on every CSS reference
- ✅ No `<svg>` added in this change (N/A)
- ✅ No copy touching family anonymization, privacy/terms, or B2B framing
- ✅ Form copy avoids gating pricing — fine print explicitly points back to
  the Instant Quote flow as the primary path

## What you still need to do (outside this zip)
1. **Create `leads@spotlesshousecleaningaz.com`** as a Gmail group.
2. **Netlify → Project configuration → Notifications → Emails and webhooks
   → Form submission notifications → Add notification**, scoped to the
   `homepage-lead` form, pointed at `leads@spotlesshousecleaningaz.com`.
3. Form detection is already enabled on your site (confirmed) — no action
   needed there.
4. Optional/later: GoHighLevel routing via Netlify's outgoing-webhook →
   GHL inbound-webhook trigger, if you confirm "LC Premium Triggers &
   Actions" is available on your GHL account. Not required for this form
   to work — email notification is fully functional on its own.

## How to deploy
Replace the contents of your GitHub repo with these files (or just the
changed ones: `index.html`, `css/style.css`, plus every other `.html` file
since they all got the cache-bust bump) and push to `main`. Netlify
auto-deploys from there. After deploy:
- Hard-refresh the homepage in incognito, confirm the form renders and the
  version in view-source shows `?v=20260703`
- Submit a real test lead, confirm it lands in Netlify's Forms dashboard
  and (once notification is configured) in `leads@`
