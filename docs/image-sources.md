# Image and media sources

## Integrated reusable asset

### Watchmaker at work

- Local files: `assets/media/watchmaker-cc0.webp` and
  `assets/media/watchmaker-cc0.jpg`
- Source page: [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Watchmaker.jpg)
- Source file: `https://upload.wikimedia.org/wikipedia/commons/0/0a/Watchmaker.jpg`
- Creator: BfW
- Subject: modern watchmaker at work
- License: CC0 1.0 / public-domain dedication
- Permission basis: the Commons API metadata identifies the file as CC0,
  with no attribution required.
- Attribution retained in the manifest and UI alt text even though CC0 does
  not require it.
- Verified dimensions: 448x293 pixels; WebP conversion is 448x293.
- Focal point: center.
- Intended section: homepage “Art of Watchmaking” story card.
- It is editorial workshop context, not a Venturo product, Rolex product, or
  claim about a particular movement.

## Research-only official reference

The [official Rolex Datejust 41 page](https://www.rolex.com/watches/datejust/m126300-0020)
was opened/researched to identify the exact reference `m126300-0020` and confirm
that official model media exists. Rolex media remains research-only because no
reuse permission was established. It is not downloaded, hotlinked, or
integrated. Any Rolex photograph in the inherited project files remains
honestly described as Rolex/reference media and is blocked for public reuse.

## Inherited project assets

`hero1.png`, `hero2.png`, `hero3.png`, `hero4.png`, `welcome-back.png`, and
`assets/video/showcase.mp4` are retained because existing composition and
interaction depend on them. Their creator, source, license, and permission
basis are unknown. They are marked blocked or retained-but-blocked in
`docs/media-manifest.json`; they must not be treated as cleared production
media. `hero4.png` was visually inspected and its single-photo Rolex Datejust
composition was preserved as requested.

## Missing or blocked media

- No permitted exact Venturo product photographs were found in this stage.
- No permitted Rolex product photograph was found for implementation; official
  pages are attribution/reference sources only.
- No licensed film poster or accessory set was acquired.
- No media is hotlinked. The only newly sourced external asset is downloaded
  into the repository and has a local WebP fallback to JPEG.

### Air-King reference media

- Official reference page: `https://www.rolex.com/en-in/watches/air-king`
- Observed identity: Air-King, Oyster 40 mm, Oystersteel; black dial with a
  prominent minutes scale and an Oyster bracelet.
- Observed feature links: crown guard, self-winding mechanism, precision and
  Oyster Bracelet.
- No exact current model/reference identifier was exposed in the inspected
  family-page text, so `exactReference` remains unknown.
- The project user supplied `assets/media/air-king-user-provided.png`
  for the Air-King family card and scroll sequence. Its dimensions are
  recorded in `docs/media-manifest.json`. It is recorded in
  `docs/media-manifest.json` as user-provided with rights pending. The image
  remains attributed to Rolex and is not presented as Venturo manufacture or
  inventory. Confirm public reuse permission before deployment.


### Cosmograph Daytona family research and media

Official Rolex India pages were inspected on 8 October 2026:

- Family overview: <https://www.rolex.com/en-in/watches/cosmograph-daytona>.
  It describes the Cosmograph Daytona as launched in 1963, shows the family
  presentation, and links to its features, story and model selector.
- Features: <https://www.rolex.com/en-in/watches/cosmograph-daytona/features>.
  Observed topics include calibre 4131, the chronograph counters, tachymetric
  scale, Cerachrom bezel and Oysterflex bracelet.
- Motorsport story: <https://www.rolex.com/en-in/watches/cosmograph-daytona/beyond-the-racetrack>.
  Observed historical milestones include Daytona Speedway's 1959 opening,
  the 1963 Cosmograph launch, later chronograph movement updates and the 2023
  calibre 4131 generation.
- Current model listing: <https://www.rolex.com/en-in/watches/cosmograph-daytona/all-models>.
  The listing exposed 47 results. This implementation samples five exact,
  linked model references rather than claiming to reproduce all 47 variants.
- Exact model pages checked: m126500ln-0001, m126518ln-0012,
  m126509-0001, m126505-0005, and m126506-0001. The five detail links
  and access date are stored per record in assets/data/watches.json.
- 2026 announcement: <https://www.rolex.com/en-in/watches/new-watches/cosmograph-daytona>.
  The overview describes a new Rolesium combination of Oystersteel and
  platinum, but no exact reference was visible in the inspected overview;
  it is linked as a story and not made a selectable model record.

The original Daytona diagram at assets/media/daytona-chronograph-diagram.svg
is a Venturo-made schematic of chronograph counters and pushers, not product
photography, an exact model rendering, or a selectable visual configuration.

The one integrated photograph is assets/media/daytona-126528ln-commons.jpg.
Its Wikimedia Commons page identifies the subject as a Rolex Le Mans Daytona
reference 126528LN, credits Verygoodlord, gives the photograph date as
20 November 2024, and licenses it CC BY-SA 4.0. It appears as a credited
family-context image on the family page and as the opening editorial image on
Daytona detail pages. The visible caption identifies 126528LN and states that
the selected reference is not shown. It is not represented as one of the five
current model cards or as their model photography.
Source page: <https://commons.wikimedia.org/wiki/File:Rolex_Le_Mans_Daytona_126528LN.jpg>.
The original source image is not hotlinked. The family page uses the local
960x1440 Commons derivative; the detail hero uses
`assets/media/daytona-126528ln-hero.jpg`, a 960x910 crop taken from x=0,
y=260 of that source. Both files keep the visible credit and CC BY-SA 4.0
license terms recorded in the media manifest.

Exact-variant photographs for the five listed model references were not
cleared, so their cards use a text status and their detail galleries use a
generic chronograph schematic. The detail-page hero uses the distinct,
explicitly captioned 126528LN family-context photograph. Rolex product
photography remains limited to this licensed reference image.


### Lady-Datejust family research and media (9 October 2026)

Official Rolex India pages were followed from the watch-family hub in the browser:

- Family overview: <https://www.rolex.com/en-in/watches/lady-datejust>. It describes the family as introduced in 1957, with a current 28 mm case, and links to Features, Inspiring women and all models.
- Features: <https://www.rolex.com/en-in/watches/lady-datejust/features>. Verified 28 mm Oyster case, calibre 2236, a broad range of bezels/dials/bracelets, and feature sections for the date display, President bracelet and movement.
- Story: <https://www.rolex.com/en-in/watches/lady-datejust/inspiring-women>. The current overview links to this attributed Rolex story. The chronology is additionally checked against the Rolex newsroom family history below.
- Current model listing: <https://www.rolex.com/en-in/watches/lady-datejust/all-models>. Browser showed 56 results and filters for materials, domed/fluted/gem-set bezels, Oyster/President/Jubilee bracelets, and light/coloured/dark/gem-set/diamond-paved dials. This stage samples four verified references; it does not claim to reproduce all 56 listings.
- Representative individual model routes opened successfully: `m279160-0013` (ref. 279160; Oystersteel, pink dial, Jubilee bracelet), `m279174-0020` (ref. 279174; White Rolesor, white dial, Oyster bracelet), `m279173-0007` (ref. 279173; Yellow Rolesor, silver diamond-set dial, Jubilee bracelet), and `m279459rbr-0001` (ref. 279459RBR; 18 ct white gold, diamond-paved dial and President bracelet). Each route and access date are stored in `assets/data/watches.json`. No price is copied into the Venturo reference record.
- Rolex newsroom history: <https://newsroom.rolex.com/watches/oyster-collection/lady-datejust>. It says the Lady-Datejust launched at 25 mm in 1957 and increased to 28 mm in 2015; it also describes the Oyster, Jubilee and President families and calibre 2236.

Retired contextual photograph: `assets/media/lady-datejust-1987-commons.jpg` is no longer displayed or referenced by the Lady-Datejust pages as of 9 October 2026. The local file remains in the repository because file deletion was blocked; it is unreferenced by site code. Provenance retained for audit: <https://commons.wikimedia.org/wiki/File:Rolex_watch_ladies_Datejust_1987.jpg> identifies the 1987 Rolex ladies Datejust photo by Jonathan Mauer and its CC BY-SA 4.0 license.

Exact-current-reference Rolex photographs were not cleared for reuse. The user supplied a separate Lady-Datejust family image now used on family and detail heroes; its precise model/reference is unverified, so model cards and configuration states remain text-led. Prices remain omitted.


User-supplied Lady-Datejust family image: `assets/media/lady-datejust-user-supplied.png`, 1671×941, copied unchanged from the image attachment in the user request on 9 October 2026. It is used only as family-level hero context; no exact reference is identified, and it is not shown as a configured variant.


### Explorer family research and image sourcing (9 October 2026)

Rolex India routes followed from <https://www.rolex.com/en-in/watches>: <https://www.rolex.com/en-in/watches/explorer>, /features, /real-world-laboratory, /all-models, and model pages m224270-0001, m124270-0001, m124273-0001. The current sample identifies references 224270 (40 mm Oystersteel), 124270 (36 mm Oystersteel), and 124273 (36 mm Yellow Rolesor). Specs and family history remain attributed to Rolex; prices are not reproduced. Accessed 9 October 2026.

The family context image is the older Explorer 114270 by Max3351, dated 23 April 2024 on the file page and licensed CC BY-SA 4.0: <https://commons.wikimedia.org/wiki/File:Rolex_Oyster_Perpetual_Explorer_Ref._114270_Cal._3130.png>. Local 960×1275 derivative: ssets/media/explorer-114270-archive.png; visible attribution and a direct license link are present. It is explicitly labelled older-generation family context and never mapped to a current model.

Exact current-reference photos for 224270, 124270 and 124273 were not cleared. Cards use visible photo-unavailable states; the licensed archive photo is not presented as a selected model. Explorer II photos and mixed-watch photos were excluded. The Explorer / Explorer II distinction is linked to Rolex’s separate Explorer II overview.

User-supplied Explorer family image: `assets/media/explorer-user-supplied.png`, 1671×941, copied unchanged from the user attachment on 9 October 2026. The user requested it for the Explorer page. The exact model/reference and creator are unverified; visible copy identifies it as family context only, and it is not mapped to any current reference card/configuration. The licensed 114270 Commons photo remains separately labelled archive history in the lower story section.


### Explorer II family research and media (9 October 2026)

Rolex India pages were followed from <https://www.rolex.com/en-in/watches>: family overview <https://www.rolex.com/en-in/watches/explorer-ii>, Features <https://www.rolex.com/en-in/watches/explorer-ii/features>, the “A real-world laboratory” story <https://www.rolex.com/en-in/watches/explorer-ii/real-world-laboratory>, and All models <https://www.rolex.com/en-in/watches/explorer-ii/all-models>. The model-card routes were opened directly: white dial m226570-0001 and black dial m226570-0002. Both identify Rolex reference 226570, Explorer II Oyster, 42 mm, Oystersteel. The model accordions were checked for case, movement, bracelet, dial and certification on both routes, accessed 9 October 2026.

Rolex model pages list a fixed 24-hour graduated bezel, Twinlock crown, sapphire crystal with Cyclops date lens, 100 m water resistance, calibre 3285 with GMT function and independent rapid-setting hour hand, approximately 70-hour power reserve, Oystersteel Oyster bracelet with Oysterlock/Easylink, and Superlative Chronometer certification. White and black are the verified dial descriptions. Rolex's family overview connects the orange 24-hour hand and bezel to distinguishing day from night and dates the Explorer II to 1971. All product identity and specifications remain Rolex-attributed research content; local records have no price or inventory.

No exact-current-reference photograph with verified reuse permission was found in the external image search. Official Rolex product images are research-only and were not downloaded, hotlinked or integrated. `assets/media/explorer-ii-24-hour-diagram.svg` is original Venturo project vector artwork: a functional explanation of the fixed 24-hour scale and dedicated hand, explicitly captioned as schematic rather than Rolex product photography or a variant image. It is used for family and detail context only. Exact product gallery photography remains blocked.

User-supplied Explorer II family image: `assets/media/explorer-ii-user-supplied.png`, 952×755, copied unchanged from the attachment supplied on 9 October 2026. It is now the landing-page hero context and is explicitly captioned as user-supplied family imagery; its exact model/reference and dial variant are not verified. It is not mapped to either current 226570 dial card, detail state or text-only selector. Creator/license remain unknown; integration is based on the user's request for local project use, and broader reuse rights are not claimed. The separate original 24-hour schematic remains in the lower explanatory section and shared detail gallery.

## GMT-Master II family (Prompt 12-06; reviewed 9 October 2026)

Official Rolex India source pages inspected in browser: [family overview](https://www.rolex.com/en-in/watches/gmt-master-ii), [features](https://www.rolex.com/en-in/watches/gmt-master-ii/features), [time-zone story](https://www.rolex.com/en-in/watches/gmt-master-ii/time-zone-to-time-zone), [all models](https://www.rolex.com/en-in/watches/gmt-master-ii/all-models), and representative model pages for references 126710BLNR, 126713GRNR, 126711CHNR and 126720VTNR. Five local model-page records include the two bracelet configurations listed under 126710BLNR. Source access date: 2026-10-09.

### Media evidence

- `assets/media/gmt-master-ii-two-time-zones.svg` is an original Venturo function diagram (local hour hand, 24-hour hand and rotatable 24-hour scale). It is not a product rendering or variant image.
- `assets/media/gmt-master-ii-126713grnr-commons.jpg` is the exact Rolex 126713GRNR reference photographed by EMore98 on Wikimedia Commons. The Commons file page lists CC BY-SA 4.0. The detail and matching card include attribution plus the source/license link. It is not reused for other variants.
- Matching, permission-cleared photographs for 126710BLNR, 126711CHNR and 126720VTNR were not established. Those cards and details therefore show the function diagram and explicitly label it as non-product schematic media.

Source record: https://commons.wikimedia.org/wiki/File:Rolex_GMT-Master_II_ref._126713GRNR.jpg

## Land-Dweller family (Prompt 12-07; reviewed 10 October 2026)

Rolex India pages followed from the watches hub: [family overview](https://www.rolex.com/en-in/watches/land-dweller), [features](https://www.rolex.com/en-in/watches/land-dweller/features), [all models](https://www.rolex.com/en-in/watches/land-dweller/all-models), and representative model routes 127334 and 127234. The overview and feature content identify the 2025 launch, Flat Jubilee bracelet, integrated Oyster case, calibre 7135, honeycomb dial and available 36/40 mm sizes. The ten currently listed model routes and exact references are recorded in the catalog, each linked to its source route. Rolex's Oyster Story links the contemporary design to the earlier Datejust ref. 1630 (1974).

### Media evidence

- `assets/media/land-dweller-white-dial-commons.jpg` is an unchanged 3000×3726 Wikimedia Commons image by Verygoodlord, own work, dated 3 April 2025 and licensed CC BY-SA 4.0. The source page confirms attribution and share-alike terms: https://commons.wikimedia.org/wiki/File:Cadran_d%27une_Rolex_Land_Dweller_blanche.jpg. The landing and detail states use it only as family-context dial detail with visible creator/license attribution and a notice that the exact reference is unverified. It is never assigned to a selected model, card, or selectable configuration.
- Model cards use an original abstract honeycomb motif, explicitly captioned as not product photography or a variant image. No exact-current-reference Rolex image is integrated because official Rolex photography is not cleared for reuse and no other exact-route image with a compatible license was established.

### Source notes

Rolex model sources describe calibre 7135, 5 Hz / 36,000 vibrations per hour, the Dynapulse escapement, approximately 66-hour reserve, 100 m water resistance, Flat Jubilee and concealed folding Crownclasp. The family overview's prices are intentionally omitted; no Venturo price or inventory is represented. Source access date: 2026-10-10.


## Oyster Perpetual family (Prompt 12-08; reviewed 10 October 2026)

Rolex India pages followed from its watches hub: [Oyster Perpetual overview](https://www.rolex.com/en-in/watches/oyster-perpetual), [features](https://www.rolex.com/en-in/watches/oyster-perpetual/features), [fulfilment of a vision story](https://www.rolex.com/en-in/watches/oyster-perpetual/fulfilment-of-vision), and [all models](https://www.rolex.com/en-in/watches/oyster-perpetual/all-models). Representative model pages verified in browser: 124200 (34 mm, Oystersteel, beige dial), 126000 (36 mm, Oystersteel, multicoloured Jubilee motif dial), 277200 (31 mm, Oystersteel, pistachio dial), and 276200 (28 mm, Oystersteel, lavender dial). The family overview and Features page list sizes 28, 31, 34, 36 and 41 mm; reference 134303 (41 mm, Oystersteel and yellow gold, slate dial) appeared in the live All Models list, and its linked route is used for the fifth size record. Source access date: 2026-10-10.

`assets/media/oyster-perpetual-124200-commons.jpg` is an unchanged 840×1298 Commons photograph by EMore98, dated 31 October 2024 and licensed CC BY-SA 4.0. Source page: https://commons.wikimedia.org/wiki/File:Rolex_Oyster_Perpetual_34_ref._124200_con_bracciale_Oyster_e_lunetta_liscia.jpg. The photo shows ref. 124200 with a black dial, while the sampled model route m124200-0007 shows beige. To avoid suggesting a dial match, this photo is family-context only on the landing page; it is not on that model card, selected detail or configurator.

`assets/media/oyster-perpetual-date-free.svg` is original Venturo project artwork showing the date-free three-hand concept; it is labelled schematic and not product imagery. Exact-current-reference photos with cleared reuse permission were not established for the selected five records. No model photos are substituted.

## User-supplied family hero images (10 October 2026)

The user supplied four images in this order for local use: Oyster Perpetual, Land-Dweller, GMT-Master II and Cosmograph Daytona. They were copied unchanged to `assets/media/oyster-perpetual-user-hero.png` (1672×941), `assets/media/land-dweller-user-hero.png` (1672×941), `assets/media/gmt-master-ii-user-hero.png` (1672×941) and `assets/media/cosmograph-daytona-user-hero.png` (1671×941). These images lead the corresponding family landing pages and their scroll scenes. Their creator, licence and exact model/reference identity were not supplied or independently verified. They are family presentation images only: no selected model card, detail variant, finder result or configurator option claims to show the exact reference using them. Local project use follows the user's explicit request; broader reuse rights are not claimed.

The existing licensed Commons images remain in lower, visibly attributed family context sections. Their source links and licences remain beside the pictures. The exact-reference photo and original diagrams in cards/details keep their existing, limited roles.
