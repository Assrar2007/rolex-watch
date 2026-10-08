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


User-supplied Lady-Datejust family image: `assets/media/lady-datejust-user-supplied.png`, 1672×941, copied unchanged from the image attachment in the user request on 9 October 2026. It is used only as family-level hero context; no exact reference is identified, and it is not shown as a configured variant.
