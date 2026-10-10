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


## Prompt 12-04 — Explorer family (9 October 2026)

### Delivered

- Added the canonical `/explorer.html` reference-family page under the Venturo shell, with a family-specific muted alpine/graphite palette, model navigation, legibility and exploration editorial, three current model cards, Rolex source links, history context, finder/configurator/favourite entry points, and an Explorer II distinction link.
- Added canonical data records `explorer-224270`, `explorer-124270` and `explorer-124273` to `assets/js/catalog.js` and synchronized `assets/data/watches.json`. The records preserve the observed Rolex refs and model route codes (`m224270-0001`, `m124270-0001`, `m124273-0001`), source-access date 2026-10-09, verified size/material/dial/bracelet pairings, calibre 3230, approximately 70-hour reserve and 100 m water resistance. Prices and inventory remain unavailable.
- Wired the Explorer family card, shared `watch.html` details, finder filter and a text-only configurator with preselection and detail links. Added the Explorer entry to shared model navigation. No Explorer visual configuration or image switching is offered.
- Added one CC BY-SA 4.0 archive image of older Rolex Explorer reference 114270 (Max3351, photograph dated 23 April 2024), used only for labelled family-history context. Its attribution, source and license link are visible on the family/detail page and documented in the media manifest and image-sources file. It is not mapped to current model cards or selected variant imagery.
- Updated this handoff, source/asset documentation and the Explorer coverage rows in `docs/reference-coverage.csv`.

### Rolex source review

On 9 October 2026, the browser followed Rolex India’s `/watches` entry to the Explorer family overview, then the actual Features, “A real-world laboratory”, All models and current model pages. The observed model routes were `m224270-0001` (40 mm Oystersteel), `m124270-0001` (36 mm Oystersteel) and `m124273-0001` (36 mm Yellow Rolesor). The Explorer II overview was also inspected to establish the separate family distinction. Retail prices were visible on Rolex pages but were not copied into the project.

### Local verification

- JavaScript syntax checks passed for `catalog.js`, `browse.js` and `main.js`; JSON parsing confirmed the three new canonical records and aliases.
- Browser verified `/explorer.html`, the three direct `watch.html?product=explorer-*` states and their selected IDs/references/source URLs, the family finder returning exactly three Explorer records, and configurator preselection for 124273 plus changing to 124270 and updating the matching detail link.
- The detail state hides cart controls, shows “Not offered” for Venturo price, and labels the older archive image as not depicting the selected current reference. Related family, finder, reference selector, Rolex features/story/model and Explorer II links render in the detail tree.
- Favourite toggle was activated and reset. Keyboard Tab reached the Home navigation link. The page stylesheet contains a `prefers-reduced-motion: reduce` rule; the browser session did not expose a preference override, so reduced-motion emulation itself remains unverified.
- Desktop viewport 1440×900: 3 cards, archive image loaded, document width 1432 px (no horizontal overflow). Phone viewport 390×844: 3 cards, archive image loaded, document width 382 px (no horizontal overflow). Desktop and phone screenshots were captured and visually reviewed in the browser run. The screenshot interface returned in-chat previews but did not expose a supported file-export path, so no screenshot files are linked from this handoff.

### Blockers and stage boundary

- Exact current-reference images for 224270, 124270 and 124273 were not found with cleared reuse rights. Cards intentionally remain text-led; the older 114270 photo is clearly labelled as historic context only.
- Reduced-motion preference emulation and screenshot file export remain unverified/unsupported in the available browser interface.
- No commit, push or deployment was performed. Explorer is the only family implemented in this stage; stop here before the next family.

### Files changed

`explorer.html`; `assets/css/explorer.css`; `assets/js/catalog.js`; `assets/data/watches.json`; `assets/js/browse.js`; `assets/js/main.js`; `configure.html`; `watch.html`; `assets/media/explorer-114270-archive.png`; `docs/image-sources.md`; `docs/media-manifest.json`; `docs/reference-coverage.csv`; and this handoff.

### Explorer image-led presentation follow-up — 9 October 2026

- Updated the Explorer family opening to match the established family-page treatment: shared-style top bar and family navigation, full-width image hero, left-aligned title/content overlay, CTA entry points, and a reversible desktop scroll-pinned/zoomed image reveal. Phone and reduced-motion modes remain natural-flow with the motion effect disabled.
- Added the user-provided Explorer image as `assets/media/explorer-user-supplied.png` and documented its source and user authorization in the media manifest. Visible copy says “User-supplied family image · exact model/reference not verified”; it is used only as family context, never as a current selected-model photo. The Commons 114270 image remains credited in the historical context section and detail gallery.
- Shared Explorer detail heroes now use the user-supplied family image with the same exact-reference caveat; galleries keep the older 114270 archive photo separately captioned.
- Browser review confirmed the image loads, the title/actions remain legible, family model cards and detail routes remain below the hero, and the user-provided image is not presented as a verified reference. Phone layout has no horizontal overflow. Reduced-motion behavior is implemented by the matchMedia fallback and CSS, but browser preference emulation remains unavailable.
- The browser screenshot previews were reviewed for desktop and phone. Screenshot file export remains unavailable in the active browser interface.

- Final browser recheck after the supplied image integration: the 1671×941 image loads in the family hero and reference 124273 detail hero; the detail caption explicitly says the exact model/reference is not verified. The 114270 archive photo remains in a separate, credited history/gallery state.
- Desktop 1440×900 measured 1432 px document width with the pinned hero enabled; phone 390×844 measured 382 px document width with natural scrolling and the scroll indicator hidden. The scroll indicator reached the pinned story state on desktop; the phone effect stays unpinned. Detail state still resolves to Explorer 124273 and matching Rolex source URL.


## Prompt 12-05 — Explorer II family (9 October 2026)

### Delivered

- Added `/explorer-ii.html` under the Venturo family shell with Explorer II-specific blue-grey and orange accents, an accessible family nav and breadcrumbs, the fixed 24-hour display explanation, attributed Rolex history/features, related Explorer link, and finder, reference selector and favourite entry points.
- Added canonical records `explorer-ii-226570-white` and `explorer-ii-226570-black`. Both identify Rolex reference 226570, 42 mm Oystersteel, calibre 3285, approximately 70-hour reserve, 100 m water resistance, Oyster bracelet, and the official model route codes `m226570-0001` and `m226570-0002`. White/black dial descriptions remain separate; prices and Venturo inventory are omitted. Existing featured-card legacy aliases remain unchanged.
- Added a local-only text reference selector with deep-link preselection and matching detail links; the selector never switches imagery. Finder returns exactly the two Explorer II records. Favourite buttons use the existing local wishlist behavior and were toggled twice to restore the original state.
- Added `assets/media/explorer-ii-24-hour-diagram.svg`, original project vector artwork explaining a fixed 24-hour scale and separate hand. It is visibly described as a functional schematic, never as Rolex photography or exact-variant imagery. Added the manifest entry and sourcing notes. No matching exact-reference photograph with verified reuse permission was found; Rolex imagery remains research-only.
- Shared detail states now show the selected black/white dial, reference 226570, the shared schematic, attributed specifications and story text, a keyboard-operable disclosure with further Rolex model-page technical data, matching source/model links, and no cart or offer controls. Added Explorer II to the shared detail navigation and family-card mapping.
- Updated Explorer II rows in `docs/reference-coverage.csv` for the landing, both model details, finder and configurator.

### Rolex source review

On 9 October 2026, the browser followed the Explorer II entry from Rolex India’s watches hub to its overview, Features, “A real-world laboratory” story, All models and the live model-card routes. Both individual routes loaded: <https://www.rolex.com/en-in/watches/explorer-ii/m226570-0001> (white dial) and <https://www.rolex.com/en-in/watches/explorer-ii/m226570-0002> (black dial). The technical accordions on each page were opened for the case, movement, bracelet, dial and certification. They confirm a fixed 24-hour graduated bezel, Twinlock crown, sapphire crystal with Cyclops date lens, 100 m water resistance, calibre 3285/GMT functions, approximately 70-hour reserve, Oystersteel Oyster bracelet with Oysterlock/Easylink, Chromalight and Superlative Chronometer certification. The overview/story attributes the family’s 24-hour hand and bezel to day/night distinction and dates the family to 1971. Rolex model prices were not copied.

### Local verification

- `node --check` passed for `assets/js/catalog.js`, `assets/js/browse.js` and `assets/js/main.js`. Python JSON parsing passed for the synchronized watch data and media manifest; the coverage CSV parsed to 103 rows; `git diff --check` passed.
- Browser verified `http://127.0.0.1:4173/explorer-ii.html`, exactly two family cards, both direct `watch.html?product=explorer-ii-226570-{white,black}` routes, selected canonical IDs and dial descriptions, matching schematic source, no cart controls, and local related links.
- Finder query `finder.html?family=Explorer%20II` showed exactly two records. Configurator query preselected black; switching to white changed the selected ID, summary and matching detail link without changing any imagery. Favourite behavior toggled and returned to its starting state. Keyboard Tab reached the skip-to-content link; Enter opened the model technical disclosure.
- Desktop 1440×900 and phone 390×844 were visually reviewed. The phone used one model-card column and no horizontal page overflow (382 px document width in a 390 px viewport); desktop also fit within its viewport (1432 px document width at the checked desktop state). The Explorer II stylesheet includes a `prefers-reduced-motion` fallback, but the browser session offered no preference override, so actual reduced-motion emulation remains unverified.
- **Screenshot evidence:** desktop and phone browser captures were displayed and visually reviewed. As in prior stages, the browser screenshot interface did not expose a supported file-export operation; no screenshot path is claimed. Persistent screenshot export remains blocked by this tool limitation.

### Blockers and stage boundary

- Exact-current-reference Rolex product photos for both dial routes remain unavailable for integration because reuse rights could not be verified. The original diagram is not a substitute product image and does not visualize a selectable variant.
- Reduced-motion preference emulation and persistent screenshot file export remain unverified/unsupported in this browser session.
- No commit, push or deployment was performed. Explorer II is the only family implemented in this stage; stop before the next family.

### Files changed for this stage

`explorer-ii.html`; `assets/css/explorer-ii.css`; `assets/media/explorer-ii-24-hour-diagram.svg`; `assets/js/catalog.js`; `assets/data/watches.json`; `assets/js/browse.js`; `assets/js/main.js`; `configure.html`; `watch.html`; `docs/image-sources.md`; `docs/media-manifest.json`; `docs/reference-coverage.csv`; and this handoff.

### User-supplied Explorer II image and scroll treatment follow-up — 9 October 2026

- Added the user attachment unchanged as `assets/media/explorer-ii-user-supplied.png` (952×755) and used it in the family landing hero. The visible caption and image alt text say the exact model/reference and dial variant are unverified. The photo is not mapped to either 226570 dial card, detail state or selector. The image manifest and image-source notes record its unknown creator and licence and limit the stated permission basis to the user's request for local project use.
- Reworked the family hero to match the other reference-family pages: a desktop pinned, scroll-driven image zoom/reveal, fading opening copy and later story panel. Phone/tablet and reduced-motion CSS use natural flow/static imagery. The 24-hour schematic remains in its explanatory section and is still described as a functional illustration, not product photography.
- Browser verification at 1440×900 confirmed the local image loaded at its natural 952×755 dimensions, desktop document width was 1432 px, the desktop pinned state became active, the image transform changed on scroll, and the story panel was revealed. Returning to the page top reverses the scroll progression. At 390×844, the hero returned to natural flow, the story overlay was hidden, image loaded, and document width was 382 px (no horizontal overflow). Reduced-motion CSS/JS fallback is present; browser preference emulation was not available in this session.
- Desktop and phone captures were reviewed in-browser. The active browser exposes no supported screenshot-file export, so there is no persistent screenshot path to record. No browser console errors were reported during the review.
- Updated `docs/reference-coverage.csv` and `docs/media-manifest.json` to record the family image and keep the two selectable references text-only.
- Exact-current-reference product photos for the two variants remain unavailable for integration with verified reuse permission. No commit, push or deployment was performed.

### Follow-up files

`explorer-ii.html`; `assets/css/explorer-ii.css`; `assets/js/explorer-ii-scroll.js`; `assets/media/explorer-ii-user-supplied.png`; `docs/image-sources.md`; `docs/media-manifest.json`; `docs/reference-coverage.csv`; and this handoff.

## Prompt 12-06 — GMT-Master II family (9 October 2026)

### Delivered

- Added `gmt-master-ii.html` using the shared Venturo shell and a family-specific steel/ceramic palette, function-led hero, original two-time-zone diagram, Rolex-attributed history/features, related Explorer II link, model cards, finder, text-only configurator and favourites.
- Added five canonical reference records: 126710BLNR with Jubilee and Oyster bracelet source pages; 126713GRNR Jubilee; 126711CHNR Oyster; and left-hand 126720VTNR Oyster. Each links to its observed Rolex model route and records source access as 2026-10-09.
- Added matching reference detail states, technical profile text, related links and exact-media attribution handling. The licensed 126713GRNR photograph is shown only for that reference. The other four cards use an original functional diagram, labelled as a schematic and not a configuration image.
- Added a text-only configurator that preselects the requested canonical record, updates a source-data summary and links to its detail route. Reference records remain excluded from Venturo cart/price/inventory claims.
- Added the GMT-Master II CSS and reversible desktop scroll-story behavior; phone and reduced-motion rules retain a static/natural-flow presentation.
- Updated catalog JSON, media manifest, source ledger and coverage matrix.

### Reference and media sources

Browser inspected the Rolex India family overview, Features, Time zone to time zone, All models, and representative model pages for 126710BLNR, 126713GRNR, 126711CHNR and 126720VTNR. Exact observed source routes are recorded in each catalog entry and `docs/reference-coverage.csv`. Family facts include the two-zone hand/bezel reading, 1982 independent-hour-hand update, 24-hour bezel, calibre 3285, approximately 70-hour reserve and 100 m water resistance, attributed to Rolex.

The 126713GRNR photograph is by EMore98, Wikimedia Commons, CC BY-SA 4.0. Visible attribution and a link to the Commons source/license are supplied. The original SVG diagram is not a Rolex image. Matching licensed current-reference photographs remain unavailable for the other references.

### Verification

- Browser verified local family at `http://127.0.0.1:4173/gmt-master-ii.html`, detail routes for all five canonical records, family finder (`finder.html?family=GMT-Master%20II`) and configurator with 126711CHNR query preselection.
- Desktop layout reviewed at 1071 px viewport; scrolling changed the hero transform and revealed the story panel, and scrolling back to the top reversed the state. The 390 × 844 phone layout was reviewed and measured at 382 px document width (no horizontal overflow). All five cards and ten card links render; the exact 126713GRNR photograph loads at 1200 px natural width.
- Each deep link selected its matching canonical record and title. 126713GRNR showed the matching photograph; other four showed the original schematic. Reference details hid cart/enquiry and price claims, and had family/finder/configurator/official-source related links.
- Keyboard check moved from the skip link to the menu link with Tab. Favourite toggled on and off; the test state was removed. Console error log was empty.
- Reduced-motion CSS fallback and script preference branch are present; browser-level reduced-motion emulation was not available in the current UI harness. Screenshots were inspected inline at desktop and phone sizes, but the UI capture did not provide a persistent file path. No push, deployment or commit performed.

### Blockers

- Exact current-reference photography with reusable terms was not located for 126710BLNR, 126711CHNR or 126720VTNR; original diagram is explanatory only.
- No persistent screenshot file path is available from the browser capture tool; desktop and phone screenshots were reviewed inline.

### Files

`gmt-master-ii.html`; `assets/css/gmt-master-ii.css`; `assets/js/gmt-master-ii-scroll.js`; `assets/media/gmt-master-ii-two-time-zones.svg`; `assets/media/gmt-master-ii-126713grnr-commons.jpg`; `assets/js/catalog.js`; `assets/js/browse.js`; `assets/js/main.js`; `assets/data/watches.json`; `configure.html`; `watch.html`; `docs/media-manifest.json`; `docs/image-sources.md`; `docs/reference-coverage.csv`; `docs/handoff.md`.

## Prompt 12-07 — Land-Dweller family (10 October 2026)

### Delivered

- Added `land-dweller.html` and `assets/css/land-dweller.css` with the Venturo site shell, a family-specific cream/steel palette, source-attributed family-context hero, overview, technical and historical story sections, ten current reference cards, family navigation, finder/configurator links, and local favourite actions.
- Added ten canonical Rolex reference records under the distinct `land-dweller-*` identity in `assets/js/catalog.js` and synchronized `assets/data/watches.json`. Each record includes the official model route, reference, 36/40 mm case, material, dial, bezel, Flat Jubilee bracelet, calibre 7135, approximately 66-hour reserve and 100 m water resistance. Prices and inventory remain unavailable. Existing legacy aliases remain unchanged.
- The shared detail route now resolves all ten canonical IDs. It shows selected reference text/specifications, a technical disclosure, Rolex source links, related family/finder/configurator links and no cart or price offer. A licensed Commons dial close-up is described as family context with exact reference unverified; it is not mapped as a selected-model photo or visual configuration. Model cards use an original abstract motif with an explicit not-product-image caption.
- Added the text-only Land-Dweller selector at `configure.html?family=land-dweller`; query preselection and selection changes update reference summary and deep link without changing imagery. Finder filtering returns the ten reference records.
- Added `assets/media/land-dweller-white-dial-commons.jpg` with unchanged file bytes and recorded the source, license, attribution and family-context-only usage in `docs/media-manifest.json` and `docs/image-sources.md`.
- Updated family navigation in `watch.html` and collection family-card routing in `assets/js/browse.js`. Updated all Land-Dweller coverage rows to match verification status.

### Rolex reference review

On 10 October 2026, followed Land-Dweller from Rolex India’s watches hub and inspected its overview, Features, All models and Oyster Story pages. The All models page exposed ten current model routes. Direct model pages for refs. 127334 (40 mm Oystersteel/white gold) and 127234 (36 mm Oystersteel/white gold) were inspected. Rolex sources describe the 2025 introduction, integrated Oyster case and Flat Jubilee, calibre 7135, 5 Hz/36,000 vph, Dynapulse escapement, approximately 66-hour reserve, 100 m water resistance, 36/40 mm sizes, and the listed fluted/diamond-set bezels and dials. History links the design story with Datejust ref. 1630 (1974). No Rolex prices were copied.

### Local verification

- `node --check` passed for `assets/js/catalog.js`, `assets/js/browse.js` and `assets/js/main.js`; JSON parsing passed for the synchronized catalog and media manifest; `git diff --check` passed. CSV parsing exposed four malformed rows that were already present outside this stage (coverage records 14, 25, 82 and 115); each Land-Dweller row has the expected ten fields. Those other family rows were left untouched to preserve scope.
- Browser opened all ten local detail links from family cards; each route resolved to the corresponding selected canonical ID and exact reference heading. Ref. 127234's model detail showed its selected 36 mm case, Oystersteel/white-gold identity, dial, bezel, Flat Jubilee, movement, water resistance and source links. The family-context image caption/alt text explicitly says it does not verify the selected model.
- Finder displayed ten Land-Dweller records. Configurator preselected ref. 127385TBR from the URL; switching to ref. 127234 changed the summary and detail link, with no imagery switching. Favourite action toggled on and back off. Keyboard Tab reached the skip-to-content link.
- Desktop Chrome capture at 1536×900 and phone capture at 390×844 were visually reviewed. Document widths were 1528 px desktop and 382 px phone; the phone layout had no horizontal overflow and showed the family cards as one column. Hero image loaded in both viewports.
- The family landing is static/natural-flow and does not add a scroll animation. Reduced-motion CSS fallback is present. This session did not expose a browser preference emulation control, so the reduced-motion setting itself was not switched. Browser screenshots were captured and reviewed inline; no supported operation exposed a persistent screenshot export path, so no screenshot file path is claimed.
- No commit, push or deployment was performed.

### Remaining blockers

- Exact-current-reference product photography with verified reuse permission remains unavailable. The Commons photograph is a family-context close-up only, credited to Verygoodlord under CC BY-SA 4.0 with source and license links. Cards use non-photographic abstract artwork and the selector is text-only.
- Browser preference emulation for reduced motion and screenshot-file export were unavailable in this session; responsive layout and static motion-safe behavior were otherwise checked.

### Files changed for this stage

`land-dweller.html`; `assets/css/land-dweller.css`; `assets/media/land-dweller-white-dial-commons.jpg`; `assets/js/catalog.js`; `assets/data/watches.json`; `assets/js/browse.js`; `assets/js/main.js`; `configure.html`; `watch.html`; `docs/image-sources.md`; `docs/media-manifest.json`; `docs/reference-coverage.csv`; and this handoff.

Stop after Land-Dweller; do not begin the next family in this stage.


## Prompt 12-08 — Oyster Perpetual family (10 October 2026)

### Delivered

- Added `oyster-perpetual.html` and `assets/css/oyster-perpetual.css` under the Venturo shell. The family page explains the date-free three-hand layout, links to Rolex overview/features/history/All models, and offers family-specific cards, finder/configurator entry points, favourites and a Datejust related link.
- Added five separate canonical Rolex reference records, keeping the existing featured-card identity and legacy aliases intact: ref. 276200 (28 mm, Oystersteel, lavender); 277200 (31 mm, Oystersteel, pistachio); 124200 (34 mm, Oystersteel, beige); 126000 (36 mm, Oystersteel, multicoloured Jubilee motif); and 134303 (41 mm, Oystersteel and yellow gold, slate). Their observed Rolex route codes are recorded in the catalog and coverage matrix. Calibre/reserve, case, dial, bracelet and attributed technical facts are included where source pages confirmed them. No price or Venturo stock claim is shown.
- Shared detail rendering selects the canonical record from its deep link and uses an original date-free three-hand schematic, explicitly not product photography. Finder returns the five records. The configurable control is text-only; selection updates its reference summary and detail link without implying the unavailable image changes. Local favourites work; reference-only details suppress offer/cart claims.
- Added a Wikimedia Commons photo of Oyster Perpetual ref. 124200 (black dial), by EMore98, CC BY-SA 4.0. It is used only as a clearly credited family-context photo; it does not stand in for the selected beige-dial model or appear as a working variant image. Asset evidence and usage limits are in `docs/media-manifest.json` and `docs/image-sources.md`.
- Updated `docs/reference-coverage.csv` with the landing page, five model references, features, history, finder and configurator verification and remaining blockers.

### Rolex source review

On 10 October 2026, followed Oyster Perpetual from Rolex India’s watches index to the family overview, Features, All models, “The fulfilment of a vision,” and five representative model routes. The official references and dials were confirmed at `m276200-0008`, `m277200-0012`, `m124200-0007`, `m126000-0016` and `m134303-0001`. The Features page identifies five sizes (28, 31, 34, 36 and 41 mm), three central hands, date-free design, Oyster case/bracelet and movement distinctions. The opened history story displays a timeline including 1910, 1926, 1931, 2020 and 2026; its 2026 entry describes centenary yellow Rolesor references in 31, 36 and 41 mm. Rolex page content is represented as attributed research; official prices were not copied.

### Local verification

- `node --check` passed for `assets/js/catalog.js`, `assets/js/browse.js` and `assets/js/main.js`; catalog and media-manifest JSON parsing passed; `git diff --check` passed. Existing unrelated malformed rows remain in the coverage CSV; the new 12-08 rows have the expected 10 columns.
- Browser verified the five landing cards and all five `watch.html?product=oyster-perpetual-{reference}` deep links. Each showed the matching reference heading/canonical identity, date-free diagram alt text, no offer state, and a related Datejust link. The local family route showed its licensed photo, attribution, source link, five cards, and correct finder/configurator/collection/Datejust links.
- Finder showed five family records. Text-only configurator preselection, summary and detail link were verified; it does not change imagery. Favourite state was toggled on and off to restore the original state. Keyboard Tab reached the skip-to-content link.
- Desktop (1536×900) and phone (390×844) captures were visually reviewed. The measured page widths were 1528 px and 382 px respectively, with no horizontal overflow; phone cards stack in one column. The hero photo and all five schematic assets loaded. A fresh session viewport is currently 319 px wide, so the 1536/390 measurements refer to the earlier recorded test capture.
- The page adds no scroll-driven animation; shared reduced-motion styles are present. The browser UI did not expose a preference override, so reduced-motion emulation was not switched. Desktop and phone screenshots were captured and reviewed inline, but no supported screenshot-file export path was exposed; no persistent screenshot path is claimed.
- No commit, push or deployment was performed. No unrelated family files were intentionally reverted.

### Blockers and stage boundary

- Exact current-model variant photography with verified reuse permission was unavailable for the five selected records. The Commons photo is only family context and the original SVG is only a function diagram; neither is presented as selected-variant photography. Variant imagery remains unavailable in finder/configurator states.
- Reduced-motion preference emulation and persistent screenshot-file export are unavailable in this browser session. The static behavior and responsive layout were reviewed.
- Stop after Oyster Perpetual. No next family was started.

### Files changed for this stage

`oyster-perpetual.html`; `assets/css/oyster-perpetual.css`; `assets/media/oyster-perpetual-date-free.svg`; `assets/media/oyster-perpetual-124200-commons.jpg`; `assets/js/catalog.js`; `assets/data/watches.json`; `assets/js/browse.js`; `assets/js/main.js`; `configure.html`; `watch.html`; `docs/image-sources.md`; `docs/media-manifest.json`; `docs/reference-coverage.csv`; and this handoff.

## Four user-supplied family hero images and scroll presentation (10 October 2026)

The user supplied four distinct wide photographs in order for Oyster Perpetual, Land-Dweller, GMT-Master II and Cosmograph Daytona. Each unchanged file now leads its corresponding family landing page. The four pages share the Datejust-inspired header, breadcrumb, family links, opening hero and reversible scroll story, while keeping their own palette, technical copy, source-backed model cards, related links and finder/configurator entry points. Desktop scroll translates the image upward and reveals the family story; phone and reduced-motion layouts use a readable natural flow. Existing licensed photographs remain in lower credited figures.

Files for this follow-up: `assets/media/oyster-perpetual-user-hero.png`, `assets/media/land-dweller-user-hero.png`, `assets/media/gmt-master-ii-user-hero.png`, `assets/media/cosmograph-daytona-user-hero.png`, `assets/css/reference-family-scroll.css`, `assets/js/reference-family-scroll.js`, the four named family HTML pages, `docs/media-manifest.json`, `docs/image-sources.md`, `docs/reference-coverage.csv`, and this handoff. Earlier unrelated working changes were preserved.

Browser review: all four local family routes were opened at 1280×720 and 390×844; each hero loaded and the body had no horizontal overflow. Desktop scroll position was sampled at start, middle and story reveal; the image moved upward and the family story became visible. Phone layout stacked the hero image, introduction and story without a pinned scroll scene. The model-card counts remained Oyster 5, Land 10, GMT 5 and Daytona 5. Browser screenshots were visually reviewed inline; this browser surface did not provide a persistent export path, so no screenshot filename is claimed. Reduced-motion behavior is implemented as a static CSS/JS branch; browser preference emulation was unavailable for direct switching.

Media limit: the supplied images have no independently verified creator, licence or exact reference identity. They are used as family presentation only, never as selectable variant photography. Exact-model image gaps already recorded in this handoff remain. No commit, push or deployment was performed in this follow-up.
