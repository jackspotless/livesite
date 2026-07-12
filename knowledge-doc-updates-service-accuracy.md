# Knowledge-doc updates — Service page accuracy fix (July 2026)

Paste these deltas into the matching project-knowledge files.

---

## content-decisions.md

- **Cleaning-tier scope is now checklist-locked.** Jack provided three cleaner
  checklists (Standard Clean/12 tasks, Deep Clean/21 tasks, Move-In/Move-Out/30
  tasks) as the source of truth for what each tier includes. Rule going forward:
  **each tier's "What's included" content must match its checklist exactly.**
  Anything from a higher tier's checklist that isn't in the current tier's
  checklist is available only as an itemized, separately-priced add-on — never
  bundled into the base price of a lower or middle tier, and never implied to be
  included just because a higher tier is booked.
- **Add-on model clarified:** oven interior, refrigerator/freezer interior,
  interior window panes/sills, vanity/medicine cabinet interiors, and closet
  interiors (all Move-In/Move-Out-exclusive tasks) can be added a la carte to
  *either* Standard or Deep Clean, itemized and priced separately. They are not
  automatically included just because a customer books Deep Clean instead of
  Standard.
- Fixed a site-wide copy pattern where "inside appliances" was used loosely to
  describe Deep Cleaning's scope, when only the microwave interior is actually
  part of Deep Clean's base scope. Corrected on: `services/deep-cleaning.html`,
  `services/residential-cleaning.html`, `services/index.html`, homepage
  `index.html`, and two blog posts (`deep-cleaning-vs-standard-cleaning-surprise-az`,
  `what-house-cleaners-charge-west-valley`).

## open-items.md

### Completed this session
- ✅ Cross-checked `residential-cleaning`, `recurring-residential-cleaning`,
  `deep-cleaning`, and `move-in-move-out-cleaning` service pages against Jack's
  three cleaner checklists.
- ✅ Rewrote Deep Cleaning's "What's included" to match the 21-task checklist
  exactly; added a new "Available add-ons" note pointing to Move-In/Move-Out
  for anything beyond that.
- ✅ Fixed internal contradiction where Deep Cleaning's included-list, its own
  pricing paragraph, and the Residential page's pricing paragraph gave three
  different answers about whether oven/fridge interior and window cleaning were
  included, add-on, or unavailable.
- ✅ Fixed FAQ answers (visible copy + matching JSON-LD) on `deep-cleaning.html`,
  `residential-cleaning.html`, and `move-in-move-out-cleaning.html` that
  overstated or inconsistently described Deep Clean's scope.
- ✅ Fixed Deep Cleaning teaser card copy on the Services hub and homepage.
- ✅ Fixed the deep-vs-standard blog post, which had the exact same overstated
  scope list as the old Deep Cleaning page (same fix pattern applied).
- ✅ Fixed the pricing-comparison blog post's Deep Clean table row.
- ✅ Made "inside of medicine cabinet" an explicit line item on the
  Move-In/Move-Out page (checklist calls it out separately from vanity cabinets).

### New — pending
- [ ] **No cleaner checklist yet for Short-Term Rental or Focus Clean.** Those
  two service pages weren't audited this round since there's no checklist to
  check them against. If Jack wants the same accuracy pass on those, need
  checklists first.
- [ ] **Add-on pricing copy is generic.** The new "Available add-ons" note on
  Deep Cleaning says to "note what you'd like added when you book and we'll
  quote it" — doesn't reference specific prices since none were provided. If
  Jack wants actual per-task add-on prices surfaced on the page (rather than
  quote-on-request), that's a follow-up.
