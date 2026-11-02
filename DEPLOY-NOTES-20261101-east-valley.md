# East Valley / 101 corridor expansion — Nov 1, 2026

Adds 12 service-area pages covering Arcadia north to Carefree, and updates every
page that lists service areas. Built on the repo as of the Aug 27 commit ("quote page
add"). If anything was deployed outside GitHub since then, tell Claude before
replacing the repo.

## New pages (12)

**Cities (in the nav under "East Valley"):**
- `/service-areas/scottsdale` — full city, links to its 6 neighborhood pages
- `/service-areas/paradise-valley`
- `/service-areas/cave-creek` (covers Tatum Ranch and Dove Valley Ranch in-page)
- `/service-areas/carefree`

**Neighborhoods (Place schema with containedInPlace):**
- `/service-areas/arcadia` (Phoenix) — **also in nav**, see decisions
- `/service-areas/desert-ridge` (Phoenix) — **also in nav**, see decisions
- `/service-areas/mccormick-ranch` (Scottsdale)
- `/service-areas/gainey-ranch` (Scottsdale)
- `/service-areas/kierland` (Phoenix + Scottsdale)
- `/service-areas/grayhawk` (Scottsdale)
- `/service-areas/dc-ranch` (Scottsdale, includes Silverleaf)
- `/service-areas/troon` (Scottsdale, Troon Village + Troon North)

All pages are 800+ words of visible content and follow the goodyear.html template:
5 FAQs with FAQPage schema, BreadcrumbList (neighborhoods include the parent city
crumb), HouseCleaningService with parentOrganization, GA4, NAP footer, Baseline
credit, Tawk, extensionless URLs throughout.

## Site-wide changes

- **Service Areas nav dropdown** is now two columns: West Valley (12) and East
  Valley (6). On mobile they stack, and the open dropdown's max height is raised so
  nothing gets clipped. Applies to all 39 pages that carry the dropdown, plus the 12 new ones.
- **CSS:** new `/* === nav-areas-two-col (Nov 2026) === */` block appended to
  style.css. **Cache-bust bumped site-wide `?v=20260703` → `?v=20261101`.**
- **Footer** "Service Area" blurb and brand line now mention the East Valley;
  Scottsdale added to the footer Service Areas column.
- **Homepage:** area-pills heading and lede updated (also fixes the stale "ten West
  Valley cities"), 6 East Valley pills added, and 6 entries added to areaServed schema.
  Hero and H1 unchanged, so Surprise stays the primary target.
- **Service-areas hub:** new "East Valley" section with 4 city cards and 8 community
  cards; the existing grids are now labeled West Valley.
- **Service pages (6):** each "We provide X in ..." sentence now continues "...in
  the West Valley, and in Scottsdale, Paradise Valley, Arcadia, Desert Ridge, Cave
  Creek, and Carefree in the East Valley."
- **sitemap.xml:** +12 URLs (48 total).

## Content decisions (please confirm)

1. **Arcadia and Desert Ridge are in the nav and service-page links**, even though
   they're neighborhoods. Neither has a parent city page (there's no Phoenix page),
   so without this they'd only be linked from the hub.
2. **No staffing or scheduling details on any page.** Per Jack (Nov 1): no mention of
   the East Valley cleaner, routing, set days, or appointment-time promises.
3. **Carefree is a standard service-area page,** with no office address and no
   second LocalBusiness entity. If the Carefree suite is active, that becomes an office
   page later.
4. Windows: pages say interior and accessible door glass only, no exterior or high
   windows. Pest treatment is described as a separate service.
5. Photos reuse existing job photos with location-neutral captions. Swap in East
   Valley job photos once you have them.

## Jack's to-do after deploy

- [ ] **Booking Koala: add the East Valley ZIPs**, or the quote form may reject them:
  85018, 85050, 85054, 85250, 85251, 85253, 85254, 85255, 85257, 85258, 85259,
  85260, 85262, 85266, 85331, 85377
- [ ] Hard-refresh and confirm `style.css?v=20261101` loads and the two-column dropdown appears
- [ ] GSC: resubmit sitemap.xml. Request indexing for Scottsdale, Paradise Valley,
  Arcadia, and Desert Ridge first
- [ ] Rich Results Test on 2–3 new URLs
- [ ] Optional: add the East Valley cities to the Surprise GBP's service-area list
