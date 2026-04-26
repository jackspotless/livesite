# Spotless House Cleaning — Website

Static HTML/CSS website for **Spotless House Cleaning**, family-owned in Surprise, AZ.

**Production URL:** https://spotlesshousecleaningaz.com
**Phone:** (623) 321-4966
**Email:** support@spotlesshousecleaningaz.com

---

## What's in this repo

```
spotless-house-cleaning/
├── index.html                 # Homepage
├── about.html                 # About / family story
├── contact.html               # Contact + form (Netlify)
├── booking.html               # Booking Koala iframe
├── thank-you.html             # Form submission landing
├── 404.html                   # Page not found
├── privacy.html               # Privacy policy
├── terms.html                 # Terms of service
├── robots.txt                 # Search engine directives
├── sitemap.xml                # XML sitemap (24 URLs)
├── netlify.toml               # Netlify deployment config
├── README.md                  # This file
│
├── css/
│   └── style.css              # Global stylesheet
├── js/
│   └── main.js                # Mobile nav toggle
├── images/                    # Logos and brand assets
│
├── services/
│   ├── index.html
│   ├── residential-cleaning.html
│   ├── deep-cleaning.html
│   ├── move-in-move-out-cleaning.html
│   ├── short-term-rental-cleaning.html
│   └── recurring-residential-cleaning.html
│
├── service-areas/
│   ├── index.html
│   ├── surprise.html
│   ├── peoria.html
│   ├── goodyear.html
│   ├── litchfield-park.html
│   ├── glendale.html
│   ├── buckeye.html
│   ├── verrado.html
│   ├── avondale.html
│   ├── waddell.html
│   └── el-mirage.html
│
└── blog/
    ├── index.html
    └── deep-cleaning-vs-standard-cleaning-surprise-az.html
```

**Total:** 24 pages of content. ~30,000 words.

---

## Tech stack

- **Pure static HTML/CSS/JS** — no build step, no framework, no dependencies.
- **Netlify-ready** — deploy by connecting the GitHub repo to Netlify and pointing it at the root.
- **Booking Koala iframe** — the booking form is embedded on `/booking.html`. Nothing special needed.
- **Netlify Forms** — the contact form on `/contact.html` uses Netlify's built-in form handling. Form submissions arrive in the Netlify dashboard and (optionally) by email.

---

## Local development

This is a static site. Any local web server works:

```bash
# Python 3
python3 -m http.server 8000

# Or Node
npx http-server -p 8000
```

Then open http://localhost:8000.

To make changes: edit the HTML files directly. There's no build step.

---

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import existing project → GitHub → select repo.**
3. Build settings: leave blank (no build command). Publish directory: `.`
4. Click Deploy.
5. Set up the custom domain in **Domain settings → Add custom domain** → `spotlesshousecleaningaz.com`. Netlify will guide DNS setup.
6. SSL is automatic (Let's Encrypt).
7. **Enable form notifications:** Site settings → Forms → Form notifications → Add notification → Email → enter `support@spotlesshousecleaningaz.com`.

The `netlify.toml` file in the root handles redirects, headers, and caching.

---

## Things to review before launch

A few things were filled in with reasonable defaults but **need owner review**:

### 1. Privacy Policy & Terms of Service — VERBATIM from live source (do not modify)
`privacy.html` and `terms.html` contain the live verbatim legal text. **Do not modify the legal content** — these are tied to third-party tools (Stripe, Google Analytics, Google Ads, Twitter, Facebook for privacy; subscription/payment processors for terms) and changes could break those integrations' compliance. Only the wrapper template (header, footer, fonts) is templated; every word of the legal text is preserved from the source.

Three placeholder tokens in the original Terms source (`COMPANY`, `STATE`, `Phone Number`) were filled in with the correct values per Jack's confirmation: "Spotless House Cleaning LLC" (3 instances), "Arizona" (1 instance), and "(623) 321-4966" (2 instances). If Jack wants to update the live legal pages elsewhere with the same fixes, that's a separate decision he should make about his master legal documents.

### 2. Service area boundaries
The site lists 10 cities. If the actual service area changes (you add or drop cities), update these places:
- Footer "Service Areas" links in every HTML file
- Homepage `index.html` city pills section
- `service-areas/index.html` card grid
- `sitemap.xml`
- The areaServed JSON-LD on each city page
- The interlink blocks at the bottom of each service page

### 3. Pricing language
The pages reference "10-20% recurring discount" as a typical range. **If you have specific pricing tiers, replace these with your actual numbers.** Search for "10-20%" across the codebase.

### 4. Social profiles in homepage JSON-LD
The homepage's `HouseCleaningService` schema lists Instagram and Google Maps URLs in `sameAs`. **Verify these are correct** and add other social profiles (Facebook, Yelp, etc.) as you set them up.

### 5. OG image
Pages reference `/images/og-default.png` as the default Open Graph image — but this file doesn't yet exist. **Create a 1200×630px social-share image** featuring the wordmark on the cream background and place it at `images/og-default.png`. Without this, social shares will show no image.

### 6. Content updates
A few things will need updating after launch:
- **Reviews:** Once you have Google Business Profile reviews, consider adding a testimonials section to the homepage and an `aggregateRating` schema property.
- **Founding date:** All pages list `2026` as the founding year. Adjust if this changes.
- **Blog cadence:** Plan to publish 1-2 posts per quarter at minimum to keep the blog from looking abandoned.

---

## Brand guidelines (quick reference)

**Colors:**
- Deep Indigo `#2D294E` — primary text, dark sections
- Lavender Mist `#B19CD9` — accents, highlights
- Crisp Cream `#FAF9F6` — main background

**Fonts:**
- Display: **Archivo** (headings)
- Body: **Inter** (paragraphs, UI)

**Logo usage:**
- Header navigation: wordmark only (no mascot)
- Hero: Dash mascot as a quality seal
- Footer: full lockup

---

## Schema / SEO notes

- Every page has appropriate JSON-LD: `HouseCleaningService` (homepage), `Service` (service pages), `BreadcrumbList` (every page), `FAQPage` (most pages).
- The business identity is anchored at `https://spotlesshousecleaningaz.com/#business` — city pages reference this via `parentOrganization`.
- Sitemap lists all 24 pages with appropriate priorities.
- `robots.txt` allows full crawling and points to the sitemap.
- All canonical URLs are set.
- Open Graph and Twitter Cards configured on every page.

---

## Built by Baseline SEO

Every page footer includes a small "Created by Baseline SEO" attribution linking to baseline-seo.com. This is standard on all Baseline builds.

---

## Questions / changes

Questions about the build or changes you'd like made: email or text the developer (you know who you are).

For ongoing edits, the simplest workflow is to make changes directly in GitHub (web editor) — Netlify will auto-deploy on commit.
