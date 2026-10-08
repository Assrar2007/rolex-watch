# Venturo Chronometrie implementation brief

## Stage 1 contract

This document is the persistent project contract for the Venturo Chronometrie
coverage work. The current stage is inventory and baseline only. It does not
redesign or expand the site.

### Product and attribution rules

- Implement original Venturo UI, copy, and equivalent page types. Rolex-specific
  products, history, people, affiliations, photography, and links remain
  accurately attributed reference material; they must never be presented as
  Venturo inventions, ambassadors, or retailers.
- Do not fabricate products, specifications, prices, reviews, physical stores,
  certifications, or company history. Clearly distinguish real catalog data
  from demo/reference records.
- Existing `assets/images/*.png` files have no recorded provenance or license.
  They are therefore blocked for any future public reuse until their permission
  and source are recorded. Reference photographs must be labelled Rolex, and
  must not be relabelled as Venturo-manufactured watches.
- Keep existing valid URLs with explicit aliases and one canonical catalog.
- Normal browser scrolling, reversible desktop scenes, mobile natural flow,
  reduced-motion fallback, and readable content without animation are required.
- Preserve current working interactions and repair only confirmed defects.
- No push, deployment, live purchase, or external form submission.

### Stage handoff rules

Every stage must record changed files, tested routes, screenshots, remaining
blockers, and an updated `docs/handoff.md` and coverage matrix. All coverage
rows must eventually be verified. Blocked assets, data, and integrations must
remain visibly incomplete in the report. Observed browser behavior must be
reported separately from source inference.

## Current repository inventory

- Branch: `main`; baseline commit before this stage: `f9e2c20`.
- Working tree was clean at the start of this stage.
- Architecture: static HTML/CSS/JavaScript; no package manifest or build system.
- Existing entry pages: `index.html`, `collection.html`, `watch.html`.
- Existing catalog: `assets/data/watches.json`, currently three records:
  `daydate`, `skydweller`, and `seadweller`. The catalog contains Rolex names
  and must be treated as reference/demo data until it is replaced or clearly
  attributed.
- Active page CSS: `assets/css/style.css`, `assets/css/components.css`,
  `assets/css/animations.css`, and `assets/css/responsive.css`.
- Active page JavaScript: `assets/js/main.js`, `assets/js/search.js`,
  `assets/js/wishlist.js`, and `assets/js/cart.js`. Root-level `main.js`,
  `search.js`, `style.css`, `components.css`, and `responsive.css` are tracked
  legacy copies and should not be edited or removed without confirming their
  consumers.
- Images currently present: `hero1.png`, `hero2.png`, `hero3.png`,
  `hero4.png`, and `welcome-back.png`. No video, font, or image license record
  is present.
- External imports observed in all three pages: Font Awesome 6.7.2,
  AOS 2.3.4, and Swiper 11 from public CDNs. These are runtime dependencies,
  not local assets.

## Hosting and reproducible run command

- Published base path: `https://assrar2007.github.io/rolex-watch/`.
- Local canonical base path: `http://127.0.0.1:4173/` when serving the
  repository root. GitHub Pages aliases must retain `/rolex-watch/`; relative
  URLs should remain valid under both bases.
- Reproducible local run command (Python 3.14.6 was available):

  ```powershell
  & 'c:\python314\python.exe' -m http.server 4173 --bind 127.0.0.1
  ```

  Then open `http://127.0.0.1:4173/index.html`.
- A local HTTP `200` response was verified with `curl`. The integrated browser
  could not attach to loopback in this environment, so the saved app baselines
  were captured from the published mirror, which exposes the same current
  static build. This limitation is recorded rather than treated as local
  browser verification.

## Baseline evidence

- `scratch/baseline-desktop.png`: published Venturo homepage, 1440x900 viewport,
  full-page capture.
- `scratch/baseline-phone.png`: published Venturo homepage, 390x844 viewport,
  full-page capture.
- `scratch/reference-about-desktop.png`: Rolex About page with the live menu
  open; captured to inspect the reference navigation composition.
- Published browser observation: the current app exposes a three-slide
  homepage, collection link, three watch query states, search, wishlist,
  cart, about/contact copy, and footer links. The cart checkout button is
  present but no external submission was performed.
- Live reference observation: Rolex India navigation exposes watch families,
  new watches, finder, configurator, watchmaking, Oyster Story and film,
  About/History, sports and arts, buying/service, locators, language,
  accessibility, media, social, and legal links. The complete inventory is in
  `docs/reference-coverage.csv`.
- Source inference is limited to route names and source inspection. A route
  marked `not-visited` or `blocked` is not verified.

## URL and catalog policy

The future Venturo canonical catalog must be a single structured data source.
The existing `watch.html?product=<id>` query states remain explicit aliases
until a route migration is implemented and tested. Any new clean routes must
redirect or resolve to the same canonical record, not duplicate product data.
Rolex reference records may be retained only as clearly labelled reference
records; they cannot be represented as Venturo products.

## Asset and integration register

| Item | Current state | Permission/source decision |
|---|---|---|
| `assets/images/hero1.png` through `hero4.png` | Present, provenance unknown | Blocked for new public use |
| `assets/images/welcome-back.png` | Present, provenance unknown | Blocked for new public use |
| Font Awesome CDN | Imported by pages | Keep only while CDN dependency is acceptable; record license/source before bundling |
| AOS CDN | Imported by pages | Verify reduced-motion behavior before retaining |
| Swiper CDN | Imported by pages | Verify actual usage before retaining |
| Rolex media and product photography | Reference-only | Attribute Rolex; do not reuse without permission/license |
| Retailer, service, purchase and form integrations | Not implemented | Must remain visibly unavailable; no submissions in this project |

