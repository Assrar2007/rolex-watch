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
