# Stage 2 handoff

## Delivered

- Stage 1 contract and reference inventory remain in
  [`implementation-brief.md`](./implementation-brief.md) and
  [`reference-coverage.csv`](./reference-coverage.csv).
- Replaced the mixed catalog with one schema-backed three-record catalog:
  Datejust 41 Mint Green, Day-Date 40 Everose, and Datejust 36 Everose
  Rolesor. Exact references remain `null`; prices are labelled project inputs.
- Added explicit compatibility aliases for legacy `skydweller` and `seadweller`
  query IDs without creating false Sky-Dweller or Sea-Dweller Venturo records.
- Made collection rendering, detail rendering, cart identity, and wishlist
  identity use canonical records. Removed ratings/reviews and the absent
  `hero6.png` reference.
- Repaired duplicate collection-card initialization so one click opens one
  detail panel, and added a cart drawer to the detail page.
- Replaced unsupported manufacture, warranty, and certification claims with a
  project-reference disclaimer.

## Observed behavior versus inference

Observed browser behavior: the local collection rendered all three canonical
records; the Classic filter remained usable; the Datejust detail deep link
rendered the corrected variant, calibre, and price; an unknown product fell
back to Datejust; and legacy Sky-Dweller/Sea-Dweller IDs resolved through the
explicit compatibility map. Wishlist state stored the canonical `datejust`
ID. Cart and wishlist test state was restored after verification.

Source inference: exact references, official pricing, image permissions,
retailer/service data, and manufacture/certification claims remain unverified.
Legacy aliases preserve navigation compatibility only; they are not genuine
Sky-Dweller or Sea-Dweller catalog records.

## Verification and blockers

- `node --check` passed for `assets/js/catalog.js`, `assets/js/main.js`,
  `assets/js/cart.js`, and `assets/js/wishlist.js`.
- Local HTTP 200 verified for `index.html`, `collection.html`, `watch.html`,
  and `assets/data/watches.json`.
- Browser verified collection rendering, filtering, deep links, unknown-ID
  fallback, canonical detail identity, wishlist identity, one-click detail
  expansion, and cart display/removal identity.
- No external checkout or form submission was performed.
- Existing image provenance/licenses remain unknown and block public reuse.
- Exact references and official retail pricing are intentionally unverified.
- Catalog records are demo/reference data, not sale inventory.
- Existing baseline screenshots remain in `scratch/baseline-desktop.png`,
  `scratch/baseline-phone.png`, and `scratch/reference-about-desktop.png`.
- Stage 2 route captures were saved as
  `scratch/stage2-collection-desktop.png` and
  `scratch/stage2-collection-phone.png`.

## Next stage

Use the matrix as the source of truth. Capture repaired route screenshots at
desktop and phone sizes, then continue with the next page-family implementation
only after asset licensing and catalog provenance decisions are recorded.

## Stage 3 media sourcing handoff

### Delivered

- Added [`media-manifest.json`](./media-manifest.json) and
  [`image-sources.md`](./image-sources.md), plus the local media README.
- Researched the official Rolex Datejust 41 reference page
  `m126300-0020` for identity only. No Rolex image was downloaded or
  hotlinked because reuse permission was not established.
- Downloaded the Wikimedia Commons `Watchmaker.jpg` source by BfW, verified
  its CC0 1.0/public-domain metadata, and converted it to local WebP with a
  JPEG fallback.
- Integrated the CC0 image into the homepage watchmaking story card.
- Inspected `hero4.png`: its single-photo Rolex Datejust composition was
  preserved, not replaced.
- Retained the existing local `assets/video/showcase.mp4`; it is available
  locally but remains provenance-blocked.

### Stage 3 verification

- Browser confirmed the integrated external image loads at its expected
  448x293 dimensions with no broken image elements.
- HTTP 200 verified for the local WebP, JPEG fallback, video, and manifest.
- Media manifest validation passed with 8 entries and one integrated external
  asset.
- Saved screenshot: `scratch/stage3-watchmaking-desktop.png`.
- The browser reported aborted video requests during page loading; this is
  consistent with the existing autoplay/scroll video behavior, not a missing
  local file. The video endpoint itself returned HTTP 200.

### Remaining media blockers

- The inherited product images and showcase video have unknown provenance and
  remain blocked or retained-but-blocked.
- No permitted exact Venturo product photographs, Rolex product photographs,
  accessory set, or film poster was acquired.
- Official Rolex media remains research-only and is not integrated.

## Stage 4 global design system and navigation handoff

### Delivered

- Expanded the shared CSS contract with Venturo tokens for ink, green, gold,
  paper, mist, borders, muted text, content widths, spacing, layers, motion,
  shadows and radius.
- Added shared visible-focus rules, skip links, reduced-motion fallback,
  breadcrumbs on collection/detail, and model subnavigation on detail routes.
- Wrapped page content in semantic `main` landmarks and added consistent
  footer targets across home, collection and detail.
- Added modal coordination between menu and search. Opening one closes the
  other; both overlays now restore focus, trap keyboard focus, set background
  content inert, and lock page scrolling. Escape closes the active overlay.
- Kept all local links pointed at existing pages or anchors; incomplete
  reference families remain documented in the coverage matrix rather than
  receiving fabricated routes.

### Stage 4 verification

- `node --check` passed for `assets/js/main.js` and `assets/js/search.js`.
- HTTP 200 verified for the three entry routes and their active shell assets.
- Browser verified the home menu at desktop size, search open/close, Escape
  behavior, focus return, menu/search mutual exclusion, collection
  breadcrumbs, detail breadcrumbs/model links, and phone-width natural flow.
- Saved screenshots:
  - `scratch/stage4-watch-desktop.png`
  - `scratch/stage4-collection-phone.png`
- Test cart and wishlist state remained empty; no checkout, form submission,
  deployment, or external write was performed.

### Remaining blockers

- Full reference route families (finder, configurator, accessories, service,
  legal, region and article children) are still pending implementation.
- Existing inherited product imagery/video remains provenance-blocked.
- The footer still contains placeholder-style legal anchor destinations until
  approved Venturo legal pages exist; this remains visible in the matrix.
- No user-facing region selector or accessibility settings toggle has been
  fabricated; reduced motion is supported through the browser preference.

## Stage 5 homepage campaign and hero handoff

### Delivered

- Reworked the homepage opening into a full-width semantic campaign hero with
  three corrected catalog identities: Datejust 41, Day-Date 40, and Datejust
  36. Each slide now has a matching image alt description, original editorial
  copy, and its canonical `watch.html?product=` destination.
- Replaced background-only hero media with real image elements and careful
  cover cropping. Removed the full-page loader so the initial title remains
  readable while assets load.
- Added accessible previous/next controls, selectable campaign tabs, and a
  pause/play control. Reduced-motion preference starts the campaign paused.
- Added a concise watchmaking transition with original copy and an existing
  collection/about entry point. Existing video scrolling behavior remains
  bounded by the current section implementation; no scroll snapping was added.
- Kept the existing local hero assets in their reference/demo role. Their
  provenance remains blocked and is not represented as cleared Venturo media.

### Stage 5 verification

- `node --check assets/js/main.js` passed and Problems reported no errors in
  the homepage HTML, JavaScript or CSS files.
- HTTP 200 verified for `index.html`, all three hero images and
  `assets/video/showcase.mp4`.
- Browser verified initial Datejust state, Datejust 36 tab selection, pause
  state, campaign control accessibility names, matching CTA destinations,
  back-compatible detail URLs, and responsive rendering at 1440, 1024 and
  390 pixel widths.
- Reduced-motion emulation was verified: the hero remains on the initial slide
  and rotation is paused without hiding the title or CTA.
- Saved screenshots:
  - `scratch/stage5-home-desktop.png`
  - `scratch/stage5-home-tablet.png`
  - `scratch/stage5-home-phone.png`
- No checkout, form submission, deployment or external write was performed.

### Remaining blockers

- Existing hero and story-card imagery remains provenance-blocked pending
  permission or replacement with cleared media.
- The existing homepage video is locally available but retained as
  provenance-blocked; it is not presented as licensed Venturo footage.
- Full campaign/article route families remain pending in the coverage matrix.

## Stage 6 video and reversible storytelling handoff

### Delivered

- Kept the homepage hero slider separate from the storytelling scene.
- Replaced the active one-time/threshold storytelling behavior with one bounded
  sticky scene whose CSS state is driven by a single normalized
  `--story-progress` value. Scroll direction therefore reverses the heading and
  card states deterministically, including after resize and restored/deep-link
  scroll.
- The desktop sequence is video first, then the heading, then cards 1, 2 and 3
  at separated progress intervals before the scene releases to the following
  section.
- Added meaningful links for each story card, a local poster, video fallback
  text, and a play/pause control. Playback is controlled independently from
  scroll progress and is paused when the video leaves the viewport.
- Below the desktop breakpoint and with reduced motion, cards and video use
  natural vertical flow with static readable content and no sticky animation.

### Stage 6 verification

- `node --check assets/js/main.js` passed; Problems reported no errors in the
  homepage HTML, JavaScript or storytelling CSS.
- HTTP 200 verified for `index.html`, `assets/video/showcase.mp4`, and the
  local poster image.
- Browser verified:
  - Video-first deep-link entry at `#storytelling`
  - Three story-card links and accessible video control
  - Scroll state sampling at scene start, card thresholds and exit
  - Reverse/updated scroll state using the same progress calculation
  - Mobile natural-flow rendering
  - Reduced-motion static fallback
  - Video pause/play behavior and autoplay rejection handling
- Saved captures:
  - `scratch/stage6-story-start.png`
  - `scratch/stage6-story-0-05-wide.png`
  - `scratch/stage6-story-0-38-wide.png`
  - `scratch/stage6-story-0-58-wide.png`
  - `scratch/stage6-story-0-8-wide.png`
  - `scratch/stage6-story-0-98-wide.png`

### Remaining blockers

- `showcase.mp4`, the poster inherited from the project image set, and the
  story-card images remain provenance-blocked. They are retained locally for
  demo/reference continuity and are not described as cleared Venturo media.
- Exact workshop, movement and manufacturing media still requires approved
  sources and factual Venturo content.

## Stage 7 Welcome Back and homepage completion handoff

### Delivered

- Completed the post-story homepage transition with a full-width Welcome Back
  photographic composition using the retained local image as a clearly labelled
  reference photograph.
- Preserved the requested original labels: “Resume your visit”, “Welcome back”
  and “Continue browsing”.
- Kept the CTA as a real accessible link to `collection.html`; no recently
  viewed state or fabricated browsing history was added.
- Removed decorative rounded framing from the composition and retained the
  light editorial surface rather than introducing a navy border.
- Added a graceful image-load failure state that hides the failed image and
  keeps the copy and collection gateway usable.
- Preserved meaningful homepage About and Contact anchors, the story-card
  approach links, collection continuation, and footer transition.
- Ensured story-card links are keyboard reachable only after reveal on desktop,
  and remain available in natural mobile/reduced-motion flow.

### Stage 7 verification

- Browser verified the Welcome Back composition and exact CTA labels at 360,
  390, 768 and 1440 pixel widths.
- Verified the CTA resolves to `collection.html`, receives keyboard focus, and
  exposes the Venturo gold focus outline.
- Simulated image failure with a missing local source. The image was hidden and
  an explanatory fallback remained visible with the collection CTA.
- Verified the post-story section exists after the bounded scene and no new
  pinned content was introduced over About, Contact or the footer.
- Saved screenshots:
  - `scratch/stage7-welcome-360.png`
  - `scratch/stage7-welcome-390.png`
  - `scratch/stage7-welcome-768.png`
  - `scratch/stage7-welcome-1440.png`
- No recently viewed records, checkout, form submission, deployment or
  external write was performed.

### Remaining blockers

- `welcome-back.png` and inherited story imagery remain provenance-blocked.
  The composition labels the image as reference media and does not claim
  Venturo manufacture or ownership.
- Approved standalone About, Contact and legal pages remain pending; current
  anchors are preserved as meaningful legacy gateways.

## Stage 8 collection, finder, new watches and accessories handoff

### Delivered

- Added a data-driven family hub to `collection.html` covering the inventoried
  watch families. Reference-only Rolex family names are explicitly labelled and
  do not create Venturo inventory.
- Replaced the old category-only filter behavior with composed catalog filters
  derived from canonical data: family, material and size.
- Added supported sorting by featured order, name, price ascending and price
  descending, plus result count, reset, zero-results messaging and URL state.
- Preserved quick specification/detail actions for the three canonical project
  records.
- Added standalone route templates:
  - `finder.html`
  - `new-watches.html`
  - `accessories.html`
  - `themes.html`
- Added separate accessory records and explicit unavailable/provenance copy.
  Accessories do not reuse watch movement, size or price specifications.
- Added theme membership data derived from the catalog, with reference-only
  membership clearly distinguished.
- Added the shared `browse.js` renderer for family cards, filter state,
  finder results, new-watch incomplete state, accessories and themes.

### Stage 8 verification

- `node --check` passed for `catalog.js` and `browse.js`; Problems reported no
  errors in all new route templates.
- HTTP 200 verified for collection, finder, new watches, accessories, themes
  and the browse script.
- Browser verified:
  - Three canonical model cards
  - Family/material/size options derived from actual data
  - Composed family + size filtering
  - Zero results and reset
  - URL-persisted family/sort state
  - Name sorting
  - Finder Datejust result count and card identity
  - Explicit incomplete new-watches state
  - Separate accessory cards and unavailable status
  - Theme membership counts
- Saved screenshot:
  - `scratch/stage8-collection-filters.png`
- No purchase, external form submission, deployment or fabricated stock data
  was introduced.

### Remaining blockers

- Additional Venturo records, documented introduction dates, approved accessory
  data and licensed browse imagery are not available.
- Audience facets requested by the reference site are not added because the
  canonical catalog has no audience field.
- Individual clean family URL pages remain represented through the family hub
  and finder query states until approved family content exists.

## Stage 9 Datejust 41 Mint Green detail handoff

### Delivered

- Corrected `watch.html?product=datejust` to use the canonical Datejust 41 Mint
  Green record everywhere. Stale Day-Date IDs, Calibre 3255 copy and unsupported
  manufacture-style wording were removed from the opening and specification
  defaults.
- Kept one master `hero4.png` photograph for the opening composition and the
  supporting gallery view. The image is labelled as a Rolex reference subject
  with unresolved local provenance and permission; it is not presented as a
  Venturo-made watch.
- Replaced the previous GSAP detail scrub with a bounded, deterministic native
  scroll controller. On desktop, the same image translates progressively,
  introduction copy fades, and the story overlay enters over the lower visual
  region. The state is calculated from scroll position so it can reconstruct
  when scrolling upward.
- Added readable addressable sections:
  - `#specs` reference record
  - `#gallery` one-photo gallery
  - `#features` material/dial/bezel/bracelet design notes
  - `#story` attributed Rolex history/design context
  - `#related` other models and editorial navigation
- Added real actions for add to cart, save to wishlist, enquiry gateway and
  collection/model navigation.
- Kept mobile and reduced-motion layouts in natural document flow without a
  pinned animation.

### Stage 9 verification

- Browser observed the corrected title, Datejust 41 identity, Calibre 3235,
  project price, canonical `datejust` cart/wishlist IDs, all addressable
  sections, and no stale `daydate` action IDs.
- Browser verified the cart action creates a Datejust 41 Mint Green line item;
  test local storage was cleared afterward.
- Browser verified phone-width natural flow at 390px, reduced-motion rendering,
  visible CTA focus, image completion and the full gallery/context/related
  structure.
- Browser verified desktop initial, middle and reverse scroll state captures
  after the native controller was installed.
- Static diagnostics reported no errors; `node --check assets/js/main.js` and
  `git diff --check` passed.
- Screenshots:
  - `scratch/stage9-datejust-top.png`
  - `scratch/stage9-datejust-mid.png`
  - `scratch/stage9-datejust-end.png`
  - `scratch/stage9-datejust-phone.png`

### Remaining blockers

- `hero4.png` still has unknown source/permission and remains blocked for
  public clearance in the media register.
- The exact reference, official retail price and some technical details remain
  unverified project inputs; the page labels them accordingly.
- No permitted additional Datejust gallery photographs or licensed movement
  imagery were acquired, so the gallery intentionally uses one master image
  rather than fabricating multiple views.
- Enquiry is an internal link to the existing contact gateway; no external form
  or purchase submission is enabled.

## Stage 10 Day-Date 40 Everose detail handoff

### Delivered

- Converted the shared watch detail shell to a routed Day-Date experience for
  `watch.html?product=daydate` while preserving the canonical catalog and the
  compatibility aliases already in place.
- Updated the Day-Date product record in the shared catalog to use the
  correct `daydate` canonical ID, the Everose 40 mm profile, and product-specific
  story copy that is distinct from the Datejust green campaign.
- Switched the detail page to the warm metal/slate visual treatment for the
  Day-Date route while keeping the same single-image scroll hero system used by
  the shared watch experience.
- Replaced the static default text with Day-Date-specific title, product copy,
  technical profile and gallery copy; the base route now reads as a Day-Date
  reference record rather than a Datejust landing page.
- Verified the browser route resolves to `Day-Date 40 Everose` after script
  execution and confirms the canonical `daydate` cart/wishlist IDs.
- Kept the history/context language explicitly attributed to Rolex while
  avoiding any claim that Venturo manufactured or sells the pictured watch.

### Stage 10 verification

- Browser verified the route `http://127.0.0.1:4173/watch.html?product=daydate`
  loads with the updated title, `Day-Date 40 Everose` headline, project price,
  daydate story copy, and canonical cart/wishlist product IDs.
- Browser verified legacy alias compatibility still resolves through the
  canonical map: `?product=skydweller` loads the Datejust 36 record and
  `?product=seadweller` resolves to the Day-Date record as expected.
- JavaScript validation passed via `node --check` for both catalog and main JS.
- Browser screenshot captured for the Day-Date route after script execution.
- No checkout, purchase, deployment or external form submission was performed.

### Remaining blockers

- The product imagery for the Day-Date route still uses the local reference
  image set (`hero2.png`) and remains provenance-blocked until a permitted,
  accurately attributed source is confirmed.
- The Day-Date page continues to present project inputs as demo/reference data,
  not official authoritative Rolex specifications or retail pricing.
- No licensed Day-Date accessory or additional movement/gallery photography has
  been acquired, so the implementation intentionally keeps the page honest and
  limited to the approved shared product-study structure.

## Stage 11 Datejust 36 Everose Rolesor detail handoff

### Delivered

- Implemented `watch.html?product=datejust-rose` as a distinct Datejust family
  variant using the canonical `datejust-rose` record and `hero3.png`.
- Inspected hero3 visually: it shows a dark dial, date window, fluted-looking
  bezel and warm rose-gold-tone case/bracelet. The page does not claim that the
  image proves a 36 mm case, exact Everose Rolesor composition or exact
  bracelet construction.
- Added variant-specific story, gallery, feature, attributed-context and
  related-model content. Day-Date weekday, President bracelet and diving
  language are not reused.
- Added dynamic gallery/image captions and feature/context fields to the shared
  detail renderer, preserving the same cart, wishlist and enquiry surfaces.
- Kept the compatibility map intact: `skydweller` continues to resolve to the
  canonical `datejust-rose` record and does not create a Sea-Dweller record.
- Added a rose/slate visual treatment for the route and retained natural,
  non-pinned behavior for mobile and reduced-motion presentation.
- Corrected the shared scroll initializer so `datejust-rose` joins the same
  desktop reversible image-scroll scene as Datejust 41 and Day-Date 40.

### Stage 11 verification

- Browser verified the direct route at
  `http://127.0.0.1:4173/watch.html?product=datejust-rose`.
- Browser verified the rendered title, `Datejust 36 Everose Rolesor` headline,
  hero3 image, Calibre 2236 project input, uncertainty labels, gallery copy,
  attributed Datejust link, and canonical `datejust-rose` cart/wishlist IDs.
- Browser verified add-to-cart and save actions created the canonical
  `datejust-rose` entries; test localStorage state was cleared afterward.
- Browser verified the `skydweller` legacy alias resolves to Datejust 36 and
  verified 390px reduced-motion natural flow with no scroll-pinned class.
- After the scroll correction, desktop browser verification confirmed the
  route receives the bounded scroll class, translates hero3 during downward
  scroll, and returns the image to its initial transform when scrolling back
  to the top.
- `node --check` passed for the updated catalog and main JavaScript.
- HTTP 200 verified for the route, `hero3.png`, and the catalog JSON.
- Screenshots captured:
  - `scratch/stage11-datejust36-desktop.png`
  - `scratch/stage11-datejust36-phone.png`

### Remaining blockers

- `hero3.png` remains an inherited image with unknown source and permission;
  it is retained as blocked reference media and is not described as cleared
  Venturo or Rolex production media.
- The exact reference, case diameter, alloy composition, bracelet construction,
  official technical details and retail price remain unverified project inputs.
- No additional permitted Datejust 36 gallery or movement image was acquired,
  so the page intentionally uses one inspected master photograph.

## Stage 12-01 Air-King family handoff

### Delivered

- Added the data-driven `Air-King` reference family and canonical
  `airking` record without changing the legacy aliases for the three featured
  project records.
- Added the family landing route
  [`air-king.html`](../air-king.html), an Air-King model/reference card,
  attributed family copy, feature links, related navigation, finder entry and
  local configurator entry.
- Added the reference detail state at `watch.html?product=airking` using the
  shared detail shell. It is explicitly reference-only and has no add-to-cart
  action or inventory claim.
- Added `configure.html?product=airking` as a local-only, non-commerce
  configurator state. It records exploration labels only and does not quote,
  order or submit data.
- Updated collection/finder rendering to support a reference record with no
  price and no image without broken-image substitution.
- Added an explicit blocked-media treatment for the Air-King family and
  documented the official reference observations in `docs/image-sources.md` and
  `docs/media-manifest.json`. The JSON catalog is synchronized with the
  in-memory record and includes the canonical `airking` alias.
- Replaced the earlier user-supplied Air-King photograph with the new
  wide-format composition at `assets/media/air-king-user-provided.png`.
  The image is shown directly beneath the Air-King Oyster 40 mm model text
  on the family page and routed through the same single-image reversible
  desktop scroll sequence as the three existing watch records. Mobile and
  reduced-motion modes retain natural document flow.
- Removed the stale Air-King blocked-media hero override so the supplied
  photograph is visible in the large opening hero, matching the other three
  watch detail pages. Added Air-King to the shared model subnavigation.

### Browser observations

- The official Air-King page was inspected in the browser. Visible content
  identified “Air-King”, “Oyster, 40 mm, Oystersteel”, a black dial with a
  prominent minutes scale, and feature links for crown guard, self-winding
  mechanism, precision and Oyster Bracelet.
- The local family page, finder query, configurator route and detail route were
  browser-verified at desktop and phone widths.
- Captured `scratch/stage12-01-air-king-family-desktop.png`,
  `scratch/stage12-01-air-king-family-phone.png`,
  `scratch/stage12-01-air-king-detail-desktop.png` and
  `scratch/stage12-01-air-king-detail-phone.png`.
- The detail route selected canonical `airking`, displayed the attributed
  reference-only state, loaded the supplied image, and did not expose
  cart/inventory controls.
- Desktop verification confirmed the supplied image is loaded and the
  reversible scene activates at wide width; reduced-motion verification
  disables the scene while retaining the readable image.
- Rechecked the opening hero after removing the stale override: the image
  is visible, rendered as a block image, and the unavailable-media overlay is
  absent.
- Keyboard focus reached the skip link and family controls. Reduced-motion
  emulation preserved the natural readable detail state, and the
  reference-media placeholder remained readable instead of showing an
  unrelated watch image.
- No purchase, checkout, external form submission, deployment or push was
  performed.

### Stage 12-01 blockers

- The inspected family page did not expose an exact current model/reference
  identifier in the available text, so exactReference remains unknown.
- The supplied image's exact production reference and public reuse rights are
  not independently verified. It is recorded as user-provided and must remain
  attributed to Rolex; confirm rights before deployment.
- Official retail price, complete variant matrix and additional model pages
  remain unavailable and are not fabricated.

## Stage 12-02 Cosmograph Daytona family handoff

### Delivered

- Added the canonical Rolex reference family page at
  [`cosmograph-daytona.html`](../cosmograph-daytona.html), with chronograph
  function and motorsport context, the official features/history links, related
  source links, and local finder/reference-explorer entry points.
- Added five reference-only model records with exact Rolex identities and local
  detail states: 126500LN, 126518LN, 126509, 126505 and 126506. New canonical
  IDs are `daytona-126500ln`, `daytona-126518ln`, `daytona-126509`,
  `daytona-126505` and `daytona-126506`; existing featured IDs and the legacy
  `skydweller`/`seadweller` aliases were preserved.
- Added a text-only Daytona reference explorer in
  [`configure.html`](../configure.html). Selecting a record opens its matching
  detail route; unavailable imagery is not simulated. Generic unrelated
  configurator controls are hidden for this family.
- Added an original chronograph schematic and sourced one Wikimedia Commons
  CC BY-SA 4.0 photo of separate reference 126528LN. It appears on the family
  page and as the opening image on the shared Daytona detail layout, with a
  visible caption that names the photographed reference and says the selected
  model is not shown. The schematic stays in the gallery as a function
  illustration. Source/license details and use limits are in
  `docs/image-sources.md` and `docs/media-manifest.json`.
- Added a 960x910 crop of the licensed source for the detail hero so the watch
  enters the opening frame on narrow screens; the full source remains on the
  family story section. The crop retains the same CC BY-SA 4.0 credit.
- Updated catalogue/detail/finder/wishlist behavior for unpriced Rolex
  reference records. No cart, stock, or Venturo sale is claimed.
- Added explicit local-only favourite buttons to all five family model cards.
  Each button stores the record's canonical Daytona ID and keeps the Rolex
  reference-only attribution visible.
- Aligned the detail hero to the existing watch-page format: a shorter
  Cosmograph Daytona heading, reference eyebrow, readable dark photo scrim,
  family-photo credit, matching content width and existing specs/story/gallery
  sections. The opening description and caption both distinguish the photo's
  126528LN identity from the selected model reference.
- Rebuilt the family landing from scratch to match the image-led neighboring
  family pages: a cinematic credited hero, five data-driven reference cards,
  chronograph function copy, a motorsport timeline and a related-tools rail.
  The family photo remains context-only; exact variant cards remain text-led.

### Browser observations

- Inspected the official Rolex India family overview, features page, “Born to
  race” story, all-models page and representative model routes for references
  126500LN, 126518LN, 126509, 126505 and 126506. The official model references
  and technical claims were reviewed on 8 October 2026. The 2026 Rolesium
  announcement was linked as a source story because its exact reference was
  not exposed; no selectable model was invented for it.
- Local browser verified the family landing, five individual detail deep links,
  finder query and reference-explorer query. Each detail showed the requested
  reference identity and attributed specifications, with no purchase/stock
  controls. The finder showed all five records. The explorer selected 126506
  from its query and linked to the matching detail; its other, unrelated
  configurator controls were removed from the Daytona state.
- Follow-up local browser review confirmed the revised Daytona hero and shared
  specifications, schematic gallery, feature, attributed-context and related
  link sections at desktop width and the narrow in-app viewport. The 126528LN
  photo and credit appear in the hero; all five selected-reference states keep
  their own identity and the warning that this family image is not that model.
- Controlled browser verification passed at 1440x900 and 390x844. Saved
  screenshots are `scratch/stage12-03-daytona-desktop.png` and
  `scratch/stage12-03-daytona-phone.png`.
- The rebuilt family page loads the credited 126528LN image, renders five
  reference cards and six related links, and keeps its image-led hero distinct
  from exact model imagery.
- All five family cards expose distinct favourite buttons. Clicking the first
  stored canonical ID `daytona-126500ln`; keyboard focus reached its accessible
  name. Reduced-motion emulation reported no hero animation and no horizontal
  overflow was present at 390px.
- `git diff --check`, JSON parsing for the catalogue/media manifest, and
  `node --check` for the changed JavaScript passed. The inline configurator
  script was exercised in the browser. No push or deployment was performed.

### Stage 12-02 restart verification

- The earlier Daytona page pass was replaced in place rather than carried
  forward as a new family route. The landing now cache-busts its browse script,
  shows the `2026-10-08` Rolex source date on each of the five data-driven
  cards, and keeps the official related rail to observed overview, feature,
  story and all-models routes.
- Browser verification was repeated on 8 October 2026 at desktop and phone
  widths. The family hero image loaded at 390px, the page had no horizontal
  overflow, reduced-motion emulation remained readable, and keyboard focus
  reached the Home link. Finder returned all five references and its favourite
  control persisted `daytona-126500ln` in `venturoWishlist` after the missing
  wishlist script was wired in. The explorer selected `daytona-126506` and
  opened its matching detail route; the detail retained the 126528LN
  family-context warning and five related links.
- The retained evidence captures are
  `scratch/stage12-03-daytona-desktop.png` and
  `scratch/stage12-03-daytona-phone.png`; the restart-specific source-date
  and favourite checks were recorded from the live browser run above.
  Validation passed with `node --check` for the changed JavaScript and
  `git diff --check`.

### Stage 12-02 blockers

- Exact-variant licensed/model-matched photography is unavailable for the five
  selectable records; cards use explicit placeholders and detail galleries use
  an original schematic, not a visual configuration. The opening photo is a
  separately identified family-context reference.
- The Le Mans 126528LN photo documents a different reference and remains
  limited to its visibly attributed family-context use under CC BY-SA 4.0.
- Official retail prices and some complete variant availability are unknown
  and omitted. The records remain Rolex reference research, not Venturo
  inventory.

Stop here after this stage. Do not begin the next family until the blockers
above are addressed.

## Prompt 12-03 — Lady-Datejust family handoff

### Delivered

- Added a Lady-Datejust family landing page at `lady-datejust.html` with an
  evergreen-and-cream treatment, licensed historical family-context image,
  history notes, sourced product context, related links, finder and a
  text-only reference explorer.
- Added four data-driven Rolex reference records with separate canonical IDs:
  `lady-datejust-279160`, `lady-datejust-279174`, `lady-datejust-279173`, and
  `lady-datejust-279459rbr`. Their exact model identities and sampled
  material/dial/bracelet pairings come from the individual Rolex India pages.
  The records include 28 mm cases, calibre 2236, approximately 55-hour power
  reserve and 100 m water resistance as shown on the inspected model pages.
  No price or Venturo stock claim is included.
- Added matching family-specific detail states in the shared watch layout.
  Each state identifies its selected reference, displays the exact-model
  photograph-unavailable notice and uses a separately identified 1987 image
  only in the historical gallery context. Unavailable dial/bracelet imagery
  does not function as visual configuration.
- Connected the family route to the catalogue, local finder, favourites,
  selected-reference explorer and Rolex source pages. Legacy featured-card
  canonical identities and aliases were preserved.
- Added attribution, creator and CC BY-SA 4.0 license details for the 1987
  Wikimedia Commons image in `docs/image-sources.md` and
  `docs/media-manifest.json`.
- Updated `docs/reference-coverage.csv` with the family, four detail routes,
  finder, explorer, verification evidence and open blockers.

### Sources and verification

- Rolex India routes inspected in the browser on 9 October 2026:
  [family overview](https://www.rolex.com/en-in/watches/lady-datejust),
  [features](https://www.rolex.com/en-in/watches/lady-datejust/features),
  [Inspiring women](https://www.rolex.com/en-in/watches/lady-datejust/inspiring-women),
  [all models](https://www.rolex.com/en-in/watches/lady-datejust/all-models),
  and model pages for 279160, 279174, 279173 and 279459RBR. Rolex’s newsroom
  history page was also reviewed for the 1957 introduction and 2015 move from
  25 mm to 28 mm.
- Local browser checks passed for the family landing, each of the four card
  clicks and direct detail routes, finder query, explorer preselection, and
  family/source links. Each selected detail had its matching canonical ID and
  reference text; cart and enquiry actions were hidden, price read “Not
  offered,” and the exact-model image placeholder was present.
- Desktop browser visual review: 1440x900; document width 1432 px, no
  horizontal overflow. Phone visual review: 390x844; document width 382 px,
  all four cards within the 390 px viewport, historical image loaded at
  1280 px. Keyboard focus reached the Home link. The favourite button toggled
  active and restored to its initial state. Finder returned four references;
  explorer preselected reference 279173 and linked to its matching detail.
- **Screenshot evidence:** desktop and phone screenshots were displayed and
  visually reviewed during the browser run at those viewport sizes. The
  available browser screenshot interface returned an in-chat preview but did
  not expose a supported file-export operation; the attempted headless browser
  capture also did not produce image files. No screenshot file is claimed or
  linked from this handoff.
- Reduced-motion support is declared in `assets/css/lady-datejust.css`, but
  the available browser controls did not expose a reduced-motion preference
  override, so preference emulation remains unverified.

### Files changed

`lady-datejust.html`; `assets/css/lady-datejust.css`;
`assets/js/catalog.js`; `assets/data/watches.json`; `assets/js/browse.js`;
`assets/js/main.js`; `watch.html`; `configure.html`;
`assets/media/lady-datejust-1987-commons.jpg`;
`docs/image-sources.md`; `docs/media-manifest.json`;
`docs/reference-coverage.csv`; and this handoff.

### Blockers and stage boundary

- Matching, rights-cleared photographs for the four current model references
  were not found. Their cards and details use explicit placeholders; the
  licensed 1987 photograph is historical family context only.
- Rolex’s all-models page showed 56 records; this implementation verifies four
  representative references rather than transcribing every listing.
- No retail prices are shown. Screenshot export and live reduced-motion
  emulation remain unverified as described above.
- No commit, push or deployment was performed. Stop after this family; do not
  begin the next stage.


### Follow-up removal — 9 October 2026

- Removed the historical 1987 photo, its caption and Commons source link from the Lady-Datejust landing page. Detail states no longer show it in the gallery and now state that no substitute image is shown. The hero uses a gradient.
- Updated catalogue text, coverage, media manifest and image-source notes to remove the photo from the site experience.
- The image file remains at `assets/media/lady-datejust-1987-commons.jpg` but is no longer referenced by page or catalogue code. Deleting it was blocked by filesystem approval policy.


### User-supplied Lady-Datejust hero image — 9 October 2026

- Added `assets/media/lady-datejust-user-supplied.png` to the Lady-Datejust family landing hero and the shared Lady-Datejust detail hero. It follows the existing watch-detail image-led layout and displays the same four reference detail states.
- The image is user-supplied and its exact Rolex model/reference could not be verified. It is clearly labelled as family-level context, not mapped to an individual card, dial, bracelet or configurator selection. Exact-reference cards remain text-led.
- The prior 1987 Commons image remains unreferenced; the new image replaces it visually without restoring that historical caption/source block.

- Browser recheck after integration: the supplied 1672x941 PNG loaded in the family hero and all four Lady-Datejust detail heroes. Desktop (1440x900) and phone (390x844) had no horizontal overflow; the 279173 phone detail kept its selected model ID and the image caption identifies it as user-supplied family context, not an exact-reference match.
