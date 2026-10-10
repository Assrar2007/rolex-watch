"use strict";

window.VenturoCatalog = (() => {
    const catalog = {
        schemaVersion: 1,
        brand: "Venturo Chronométrie",
        currency: "INR",
        families: [
            { id: "air-king", name: "Air-King", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
                { id: "cosmograph-daytona", name: "Cosmograph Daytona", status: "reference-only", attribution: "Five sourced Rolex model references; no Venturo inventory" },
            { id: "datejust", name: "Datejust", status: "demo-reference", attribution: "Venturo project reference records" },
            { id: "lady-datejust", name: "Lady-Datejust", status: "reference-only", attribution: "Four linked current Rolex references sampled; no Venturo inventory" },
            { id: "day-date", name: "Day-Date", status: "demo-reference", attribution: "Venturo project reference records" },
            { id: "explorer", name: "Explorer", status: "reference-only", attribution: "Three Rolex references checked 9 October 2026; no Venturo inventory" },
            { id: "explorer-ii", name: "Explorer II", status: "reference-only", attribution: "Two current Rolex Explorer II references checked 9 October 2026; no Venturo inventory" },
            { id: "gmt-master-ii", name: "GMT-Master II", status: "reference-only", attribution: "Five Rolex model-page records checked 9 October 2026; no Venturo inventory" },
            { id: "land-dweller", name: "Land-Dweller", status: "reference-only", attribution: "Ten current Rolex model routes reviewed 10 October 2026; no Venturo inventory" },
            { id: "oyster-perpetual", name: "Oyster Perpetual", status: "reference-only", attribution: "Five size references reviewed on Rolex India 10 October 2026; no Venturo inventory" },
            { id: "sea-dweller", name: "Sea-Dweller", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "sky-dweller", name: "Sky-Dweller", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "submariner", name: "Submariner", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "yacht-master", name: "Yacht-Master", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "yacht-master-ii", name: "Yacht-Master II", status: "reference-only", attribution: "Rolex reference family; no Venturo record" }
        ],
        records: [
            {
                brand: "Venturo Chronométrie",
                family: "Datejust",
                canonicalId: "datejust",
                exactReference: null,
                variant: "Datejust 41 Mint Green",
                material: "Oystersteel and yellow gold",
                size: "41 mm",
                movement: "Calibre 3235",
                powerReserve: "70 hours",
                waterResistance: "100 m",
                price: 850000,
                currency: "INR",
                priceProvenance: "Project input; not verified official retail pricing",
                imageIds: ["hero4"],
                image: "assets/images/hero4.png",
                sourceUrls: [],
                contentStatus: "demo-reference",
                saleStatus: "demo-only",
                description: "A mint-green expression of the Datejust 41 profile, presented as a project reference record.",
                category: "classic",
                eyebrow: "DATEJUST 41",
                dial: "Mint green sunray",
                bracelet: "Jubilee five-piece links",
                badge: "Featured",
                storyHeadline: "A familiar profile, considered anew",
                storyLead: "The Datejust name and historical claims belong to Rolex; this page is an attributed project reference, not a Venturo manufacture claim.",
                storyBody: "The local record lists Calibre 3235, a 70-hour power reserve, a 41 mm case and an Oystersteel-and-yellow-gold material description. These are project inputs and are not independently verified retail specifications."
            },
            {
                brand: "Venturo Chronométrie",
                family: "Day-Date",
                canonicalId: "daydate",
                exactReference: null,
                variant: "Day-Date 40 Everose",
                material: "Everose gold",
                size: "40 mm",
                movement: "Calibre 3255",
                powerReserve: "70 hours",
                waterResistance: "100 m",
                price: 920000,
                currency: "INR",
                priceProvenance: "Project input; not verified official retail pricing",
                imageIds: ["hero2"],
                image: "assets/images/hero2.png",
                sourceUrls: [],
                contentStatus: "demo-reference",
                saleStatus: "demo-only",
                description: "An Everose-gold Day-Date 40 reference record for the Venturo catalog exercise.",
                category: "classic",
                eyebrow: "DAY-DATE 40",
                dial: "Warm rose sunray",
                bracelet: "President three-piece links",
                badge: "Featured",
                storyHeadline: "A day in the life, resolved in gold",
                storyLead: "The Day-Date is defined by its weekday aperture, highly legible dial and proud President bracelet. This page keeps that identity clearly attributed to the Rolex reference it studies.",
                storyBody: "The local record lists Calibre 3255, a 70-hour power reserve and a 40 mm Everose-gold case. Those values remain project inputs and are not independently verified retail specifications."
            },
            {
                brand: "Venturo Chronométrie",
                family: "Datejust",
                canonicalId: "datejust-rose",
                exactReference: null,
                variant: "Datejust 36 Everose Rolesor",
                material: "Everose gold and Oystersteel (project input; image match unverified)",
                size: "36 mm (project input; exact image match unverified)",
                movement: "Calibre 2236",
                powerReserve: "55 hours",
                waterResistance: "100 m",
                price: 980000,
                currency: "INR",
                priceProvenance: "Project input; not verified official retail pricing",
                imageIds: ["hero3"],
                image: "assets/images/hero3.png",
                sourceUrls: [],
                contentStatus: "demo-reference",
                saleStatus: "demo-only",
                description: "A Datejust 36 project reference study with a dark dial and warm rose-gold appearance; exact size and alloy match remain unverified.",
                category: "classic",
                eyebrow: "DATEJUST 36",
                dial: "Dark dial; exact finish unverified",
                bracelet: "Bracelet form visible in reference image; exact construction unverified",
                badge: "Featured",
                imageMatchStatus: "Hero3 visually shows a dark dial, date window, fluted bezel and rose-gold-tone bracelet; exact size and alloy are unverified.",
                storyHeadline: "Proportion, warmth and a darker dial",
                storyLead: "This Datejust 36 project record studies a dark dial and warm rose-gold appearance. The pictured reference remains attributed to Rolex, and the photograph does not establish the case diameter or exact alloy composition.",
                storyBody: "The catalog input names Datejust 36 Everose Rolesor and Calibre 2236, with a project price of INR 980000. Exact reference, case diameter, alloy composition and official retail data remain unverified.",
                galleryTitle: "A darker Datejust expression",
                galleryDescription: "Hero3 is retained as one inspected reference photograph. It visually agrees with the dark dial, date window and fluted-bezel direction of this project record, but its exact model, size and alloy are not verified.",
                galleryCaption: "Reference photograph: Rolex Datejust-style subject with dark dial and rose-gold-tone finish; source, exact reference and reuse permission are not verified. It is not presented as a Venturo-made watch.",
                featureTitle1: "Dark dial and date window",
                featureBody1: "The photograph visibly shows a dark dial with applied markers and a date window at 3 o’clock. This is a visual observation, not a claim about an exact production reference.",
                featureTitle2: "Fluted bezel language",
                featureBody2: "The bezel appears fluted in the inspected image. Rolex owns the product identity and history associated with this reference; Venturo makes no manufacture claim.",
                featureTitle3: "Warm metal appearance",
                featureBody3: "The case and bracelet read as rose-gold tone in the photograph. Exact Everose Rolesor composition and bracelet construction remain unverified rather than inferred from pixels.",
                contextHeading: "A proportion-led reference study",
                contextBody: "Rolex presents the Datejust family as a long-running design with a date display and multiple case, dial, bezel and bracelet combinations. This page uses that history only as attributed context. The local record’s 36 mm size, Everose Rolesor material and Calibre 2236 remain project inputs pending exact-reference verification.",
                referenceUrl: "https://www.rolex.com/en-in/watches/datejust"
            },
            {
                brand: "Rolex",
                family: "Air-King",
                canonicalId: "airking",
                exactReference: null,
                variant: "Air-King Oyster 40 mm",
                material: "Oystersteel (official family page description)",
                size: "40 mm (official family page description)",
                movement: "Not specified in the local reference record",
                powerReserve: null,
                waterResistance: null,
                price: null,
                currency: "INR",
                priceProvenance: "Unavailable; no Venturo inventory or official retail price claimed",
                imageIds: ["airking-user-provided"],
                image: "assets/media/air-king-user-provided.png",
                sourceUrls: ["https://www.rolex.com/en-in/watches/air-king"],
                contentStatus: "reference-only",
                saleStatus: "unavailable",
                description: "A clearly attributed Rolex Air-King reference entry focused on aviation-oriented legibility; it is not Venturo inventory.",
                category: "professional",
                eyebrow: "AIR-KING",
                dial: "Black dial with prominent minutes scale; exact current variant details require model-page verification",
                bracelet: "Oyster bracelet",
                badge: "Reference",
                imageMatchStatus: "User-provided Air-King photograph; exact reference and reuse permission are not independently verified.",
                storyHeadline: "Legibility shaped by flight",
                storyLead: "Rolex describes the Air-King as a professional watch whose prominent minutes scale echoes historic aviation watches and supports legibility in changing light.",
                storyBody: "The official family page presents an Air-King with a 40 mm Oystersteel case and highlights crown guard, self-winding mechanism, precision and Oyster bracelet features. Venturo does not claim manufacture, stock or retail availability.",
                galleryTitle: "Air-King reference photograph",
                galleryDescription: "The supplied Air-King photograph is used as reference media for the reversible detail sequence. Exact production reference and licensing remain user-provided assertions.",
                galleryCaption: "User-provided Rolex Air-King reference photograph; depicted watch remains attributed to Rolex and is not presented as Venturo manufacture or inventory.",
                featureTitle1: "Aviation-oriented scale",
                featureBody1: "The official Air-King family page describes a prominent minutes scale that echoes historic aviation watches and supports legibility.",
                featureTitle2: "Crown guard",
                featureBody2: "Rolex identifies the crown guard as a protective feature on the Air-King reference page. This is attributed Rolex feature context, not a Venturo engineering claim.",
                featureTitle3: "Oyster bracelet",
                featureBody3: "The official page describes the Oyster bracelet as a robust three-piece-link design. No local inventory or configuration is implied.",
                contextHeading: "A reference family with an aviation vocabulary",
                contextBody: "The Air-King name and history belong to Rolex. The current family page links its black dial and minutes scale to aviation-oriented legibility; this Venturo route presents only attributed reference research.",
                referenceUrl: "https://www.rolex.com/en-in/watches/air-king"
            },
            ...[
                { ref: "126500LN", route: "m126500ln-0001", id: "daytona-126500ln", material: "Oystersteel", dial: "White dial with black counter rings", bracelet: "Oyster bracelet", image: null },
                { ref: "126518LN", route: "m126518ln-0012", id: "daytona-126518ln", material: "18 ct yellow gold", dial: "Golden and bright black", bracelet: "Oysterflex bracelet", image: null },
                { ref: "126509", route: "m126509-0001", id: "daytona-126509", material: "18 ct white gold", dial: "Bright black and steel", bracelet: "Oyster bracelet", image: null },
                { ref: "126505", route: "m126505-0005", id: "daytona-126505", material: "18 ct Everose gold", dial: "Bright chocolate and black", bracelet: "Oyster bracelet", image: null },
                { ref: "126506", route: "m126506-0001", id: "daytona-126506", material: "950 platinum", dial: "Ice blue with chestnut-brown counter rings", bracelet: "Oyster bracelet", image: null }
            ].map(model => ({
                brand: "Rolex",
                family: "Cosmograph Daytona",
                canonicalId: model.id,
                exactReference: model.ref,
                variant: `Cosmograph Daytona Oyster 40 mm · ${model.ref}`,
                material: model.material,
                size: "40 mm",
                movement: "Calibre 4131; self-winding mechanical chronograph",
                powerReserve: "Approximately 72 hours",
                waterResistance: "100 m",
                price: null,
                currency: "INR",
                priceProvenance: "Not offered by Venturo; no Venturo price or availability claimed",
                imageIds: [],
                image: model.image,
                sourceUrls: [
                    `https://www.rolex.com/en-in/watches/cosmograph-daytona/${model.route}`,
                    "https://www.rolex.com/en-in/watches/cosmograph-daytona"
                ],
                sourceAccessed: "2026-10-08",
                contentStatus: "reference-only",
                saleStatus: "unavailable",
                description: `Rolex reference ${model.ref}: ${model.material}, 40 mm, with the Cosmograph Daytona chronograph. This is attributed reference information, not Venturo manufacture, stock or an offer for sale.`,
                category: "professional",
                eyebrow: `ROLEX REFERENCE ${model.ref}`,
                dial: model.dial,
                bracelet: model.bracelet,
                badge: "Rolex reference",
                imageMatchStatus: "No exact-variant photograph is integrated. The separately labelled 126528LN Commons image is not used as this model’s image.",
                storyHeadline: "Time measured against the circuit",
                storyLead: "Rolex introduced the Cosmograph Daytona in 1963 for motor-racing professionals. Its chronograph, three counters and tachymetric scale connect elapsed time with average speed.",
                storyBody: `Rolex lists reference ${model.ref} as a 40 mm Cosmograph Daytona in ${model.material}. The model page describes calibre 4131, an approximately 72-hour power reserve and 100 m water resistance. No Venturo stock or price is represented.`,
                galleryTitle: `Rolex ${model.ref} reference photography`,
                galleryDescription: "Exact-variant photography is unavailable here. The reference identifier links to the official Rolex model page; the family diagram is illustrative only.",
                galleryCaption: "Rolex model reference; no product photograph is supplied for this variant.",
                featureTitle1: "Three-counter chronograph",
                featureBody1: "The Rolex model page describes elapsed-time measurement through the central chronograph seconds hand, 30-minute counter and 12-hour counter.",
                featureTitle2: "Tachymetric scale",
                featureBody2: "The tachymetric bezel is used with elapsed time to read average speed over a measured distance. This description is attributed to Rolex.",
                featureTitle3: "Calibre 4131",
                featureBody3: "Rolex identifies calibre 4131 as the self-winding mechanical chronograph movement for this reference family.",
                contextHeading: "Built around elapsed time",
                contextBody: "Rolex’s Cosmograph Daytona story traces the family from its 1963 launch and its links to motor sport. The family identity, specifications and history on this page belong to Rolex; Venturo is presenting reference research only.",
                referenceUrl: `https://www.rolex.com/en-in/watches/cosmograph-daytona/${model.route}`,
                referenceOnly: true
            })),
            ...[
                { ref: "279160", route: "m279160-0013", variant: "Oystersteel · pink dial · Jubilee bracelet", material: "Oystersteel", dial: "Pink", dialDescription: "a pink dial", bracelet: "Jubilee, five-piece links", bezel: "Domed" },
                { ref: "279174", route: "m279174-0020", variant: "White Rolesor · white dial · Oyster bracelet", material: "White Rolesor (Oystersteel and white gold)", dial: "White", dialDescription: "a white dial", bracelet: "Oyster, three-piece solid links", bezel: "Fluted" },
                { ref: "279173", route: "m279173-0007", variant: "Yellow Rolesor · silver diamond-set dial · Jubilee bracelet", material: "Yellow Rolesor (Oystersteel and yellow gold)", dial: "Silver set with diamonds", dialDescription: "a silver dial set with diamonds", bracelet: "Jubilee, five-piece links", bezel: "Fluted" },
                { ref: "279459RBR", route: "m279459rbr-0001", variant: "18 ct white gold · diamond-paved dial · President bracelet", material: "18 ct white gold", dial: "Diamond-paved", dialDescription: "a diamond-paved dial", bracelet: "President, three-piece solid links, diamond-set", bezel: "Diamond-set" }
            ].map(model => ({
                brand: "Rolex",
                family: "Lady-Datejust",
                canonicalId: `lady-datejust-${model.ref.toLowerCase()}`,
                exactReference: model.ref,
                modelRoute: model.route,
                variant: `Lady-Datejust · ${model.variant}`,
                material: model.material,
                size: "28 mm",
                movement: "Calibre 2236 · perpetual, mechanical, self-winding",
                powerReserve: "Approximately 55 hours",
                waterResistance: "100 m",
                price: null,
                currency: "INR",
                priceProvenance: "Not offered by Venturo; Rolex retail pricing is not reproduced",
                imageIds: [],
                image: null,
                familyContextImage: "assets/media/lady-datejust-user-supplied.png",
                sourceUrls: [
                    `https://www.rolex.com/en-in/watches/lady-datejust/${model.route}`,
                    "https://www.rolex.com/en-in/watches/lady-datejust",
                    "https://www.rolex.com/en-in/watches/lady-datejust/features",
                    "https://www.rolex.com/en-in/watches/lady-datejust/inspiring-women"
                ],
                sourceAccessed: "2026-10-09",
                contentStatus: "reference-only",
                saleStatus: "unavailable",
                description: `Rolex Lady-Datejust reference ${model.ref}: 28 mm Oyster case in ${model.material}, with ${model.dialDescription} and a ${model.bracelet} bracelet. Attributed source data; not Venturo manufacture, stock or an offer for sale.`,
                category: "classic",
                eyebrow: `ROLEX REFERENCE ${model.ref}`,
                dial: model.dial,
                bracelet: model.bracelet,
                bezel: model.bezel,
                badge: "Rolex reference",
                imageMatchStatus: "User-supplied family hero image; exact-reference match is unverified, so model cards and configurations remain text-led.",
                storyHeadline: "Precision in a compact case",
                storyLead: "Rolex describes the Lady-Datejust as a 28 mm watch combining its date display, chronometric performance and a broad selection of dials, bezels and bracelets.",
                storyBody: `Rolex reference ${model.ref} is listed with calibre 2236, approximately 55 hours of power reserve and 100 m water resistance. These are attributed Rolex specifications, not Venturo product claims.`,
                galleryTitle: "Exact-model photography unavailable",
                galleryDescription: "Matching photography is unavailable for this exact Rolex reference; no substitute image is shown.",
                galleryCaption: "Exact-model photography is unavailable; no substitute image is shown.",
                featureTitle1: "28 mm Oyster case",
                featureBody1: "Rolex identifies 28 mm as the current Lady-Datejust case size and its smallest wristwatch with a date window.",
                featureTitle2: "Calibre 2236",
                featureBody2: "Rolex describes the self-winding mechanical calibre 2236 with date function and an approximately 55-hour power reserve.",
                featureTitle3: "A verified dial and bracelet pairing",
                featureBody3: `The official model page pairs ${model.dialDescription} with a ${model.bracelet} bracelet on reference ${model.ref}. The family image is not linked to this configuration.`,
                contextHeading: "An enduring date display, scaled to 28 mm",
                contextBody: "Rolex dates the Lady-Datejust to 1957. Its newsroom history records a 25 mm launch size and a move to 28 mm in 2015; current model pages show distinct material, dial and bracelet pairings.",
                referenceUrl: `https://www.rolex.com/en-in/watches/lady-datejust/${model.route}`,
                referenceOnly: true
            })),
            ...[
                { ref: "224270", route: "m224270-0001", size: "40 mm", material: "Oystersteel", dial: "Black dial with 3, 6 and 9 numerals and Chromalight display", bracelet: "Oyster bracelet", bezel: "Smooth Oystersteel" },
                { ref: "124270", route: "m124270-0001", size: "36 mm", material: "Oystersteel", dial: "Black dial with 3, 6 and 9 numerals and Chromalight display", bracelet: "Oyster bracelet", bezel: "Smooth Oystersteel" },
                { ref: "124273", route: "m124273-0001", size: "36 mm", material: "Yellow Rolesor (Oystersteel and yellow gold)", dial: "Black dial with 3, 6 and 9 numerals and Chromalight display", bracelet: "Oyster bracelet", bezel: "Yellow gold, smooth" }
            ].map(model => ({
                brand: "Rolex", family: "Explorer", canonicalId: `explorer-${model.ref}`, exactReference: model.ref, modelRoute: model.route,
                variant: `Explorer Oyster ${model.size} · ${model.ref}`, material: model.material, size: model.size,
                movement: "Calibre 3230 · perpetual, mechanical, self-winding", powerReserve: "Approximately 70 hours", waterResistance: "100 m",
                price: null, currency: "INR", priceProvenance: "Unavailable; no Venturo price or inventory claimed", imageIds: [], image: null,
                familyContextImage: "assets/media/explorer-user-supplied.png", archiveImage: "assets/media/explorer-114270-archive.png", sourceAccessed: "2026-10-09",
                sourceUrls: [`https://www.rolex.com/en-in/watches/explorer/${model.route}`, "https://www.rolex.com/en-in/watches/explorer", "https://www.rolex.com/en-in/watches/explorer/features", "https://www.rolex.com/en-in/watches/explorer/real-world-laboratory"],
                contentStatus: "reference-only", saleStatus: "unavailable",
                description: `Rolex Explorer reference ${model.ref}: ${model.size}, ${model.material}. Attributed Rolex reference information; not Venturo manufacture, stock or an offer for sale.`,
                category: "professional", eyebrow: `ROLEX REFERENCE ${model.ref}`, dial: model.dial, bracelet: model.bracelet, bezel: model.bezel, badge: "Rolex reference",
                imageMatchStatus: `No exact current reference ${model.ref} photograph is integrated. The separately labelled Explorer 114270 archive photo is older family context only.`,
                storyHeadline: "Legibility for the ground ahead",
                storyLead: "Rolex presents Explorer as a legibility-led Professional watch. Its black dial, 3-6-9 numerals and Chromalight display form the visual grammar of this verified reference set.",
                storyBody: `Rolex lists reference ${model.ref} as an Explorer ${model.size} in ${model.material}, with calibre 3230 and an approximately 70-hour power reserve. Exact current-variant photography is unavailable; no price or Venturo inventory is represented.`,
                galleryTitle: "Explorer archive reference", galleryDescription: "This is an older Explorer reference included only to illustrate the family’s visual history. It is not the selected current model and is not a functioning variant image.",
                galleryCaption: "Archive reference: Rolex Explorer 114270 (older generation), photo by Max3351, Wikimedia Commons, CC BY-SA 4.0. Not the selected current reference.",
                featureTitle1: "The 3-6-9 dial", featureBody1: "Rolex describes the Explorer dial’s numerals and Chromalight display as part of its focus on legibility in low light.",
                featureTitle2: "36 mm and 40 mm", featureBody2: "The sampled current model pages identify 36 mm and 40 mm case sizes. Reference 124273 pairs its 36 mm case with Yellow Rolesor.",
                featureTitle3: "Oyster construction", featureBody3: `The Rolex page for reference ${model.ref} lists a case in ${model.material} and a ${model.bracelet}; the linked official model page is the source for this record.`,
                contextHeading: "From high-altitude expeditions to a legibility icon",
                contextBody: "Rolex traces the Explorer’s presentation to the 1953 Everest ascent and describes the model as a watch shaped by exploration. Explorer is distinct from Explorer II: the sampled Explorer references use a smooth bezel and no orange 24-hour hand; Explorer II is a separate family with a graduated 24-hour bezel.",
                referenceUrl: `https://www.rolex.com/en-in/watches/explorer/${model.route}`, referenceOnly: true
            })),
            ...[
                { ref: "226570", route: "m226570-0001", dial: "White", canonical: "explorer-ii-226570-white", contrast: "Black-outlined Chromalight hour markers on a white dial" },
                { ref: "226570", route: "m226570-0002", dial: "Black", canonical: "explorer-ii-226570-black", contrast: "Chromalight hour markers on a black dial" }
            ].map(model => ({
                brand: "Rolex", family: "Explorer II", canonicalId: model.canonical,
                exactReference: model.ref, modelRoute: model.route,
                variant: `Explorer II 42 mm · ${model.dial} dial`,
                material: "Oystersteel", size: "42 mm",
                movement: "Calibre 3285 · perpetual, mechanical, self-winding, GMT function",
                powerReserve: "Approximately 70 hours", waterResistance: "100 m",
                price: null, currency: "INR", priceProvenance: "Unavailable; no Venturo price or inventory claimed",
                imageIds: [], image: null, familyContextImage: null,
                sourceAccessed: "2026-10-09",
                sourceUrls: [
                    `https://www.rolex.com/en-in/watches/explorer-ii/${model.route}`,
                    "https://www.rolex.com/en-in/watches/explorer-ii",
                    "https://www.rolex.com/en-in/watches/explorer-ii/features",
                    "https://www.rolex.com/en-in/watches/explorer-ii/real-world-laboratory",
                    "https://www.rolex.com/en-in/watches/explorer-ii/all-models"
                ],
                contentStatus: "reference-only", saleStatus: "unavailable",
                description: `Rolex Explorer II reference 226570: 42 mm Oystersteel case, ${model.dial.toLowerCase()} dial, fixed 24-hour graduated bezel and orange 24-hour hand. Reference information only; no Venturo manufacture, stock or offer for sale.`,
                category: "professional", eyebrow: `ROLEX REFERENCE 226570 · ${model.dial.toUpperCase()} DIAL`,
                dial: `${model.dial} dial · ${model.contrast} · orange 24-hour hand`,
                bracelet: "Oyster bracelet · Oysterlock clasp · Easylink 5 mm extension",
                bezel: "Fixed Oystersteel bezel, graduated to 24 hours",
                caseConstruction: "Monobloc middle case, screw-down case back and winding crown",
                crown: "Screw-down Twinlock double waterproofness system",
                crystal: "Scratch-resistant sapphire crystal with Cyclops lens over the date",
                functions: "Centre hour, minute and seconds hands; 24-hour display; second time zone with independent rapid-setting of the hour hand; instantaneous date; stop-seconds",
                precision: "-2/+2 seconds per day, after casing",
                oscillator: "Paramagnetic blue Parachrom hairspring; high-performance Paraflex shock absorbers",
                winding: "Bidirectional self-winding via Perpetual rotor",
                certification: "Superlative Chronometer: official chronometer certification and Rolex certification after casing",
                badge: "Rolex reference",
                imageMatchStatus: `Rolex model ${model.route} is verified, but exact-reference product photography is not cleared for reuse. No alternative watch image is presented.`,
                storyHeadline: "A second time scale, made legible",
                storyLead: "Explorer II pairs conventional hour and minute reading with an orange 24-hour hand and a fixed graduated bezel, helping distinguish day from night when the sun is not a reliable guide.",
                storyBody: `Rolex lists reference 226570 in Oystersteel with a ${model.dial.toLowerCase()} dial. Its independently adjustable local hour hand, date and 24-hour display are driven by calibre 3285. This page records Rolex-sourced specifications, not a Venturo product or offer.`,
                galleryTitle: "The 24-hour reading",
                galleryDescription: "A Venturo-made functional diagram explains the fixed 24-hour scale and separate 24-hour hand. It is schematic only and is not product photography or an exact variant image.",
                galleryCaption: "Original functional schematic · not a Rolex product image and not a model configuration.",
                featureTitle1: "One hand, one 24-hour circuit",
                featureBody1: "The dedicated orange hand completes one turn in 24 hours and points to the fixed bezel graduations, distinguishing a second time scale from the central 12-hour display.",
                featureTitle2: `${model.dial} dial · fixed 24-hour bezel`,
                featureBody2: `Rolex identifies this reference as a ${model.dial.toLowerCase()}-dial Explorer II. The bezel is fixed and graduated for the orange 24-hour hand; it does not rotate as a diver’s timing bezel.`,
                featureTitle3: "Calibre 3285 and date",
                featureBody3: "Rolex lists a GMT function, independent rapid-setting of the local hour hand, instantaneous date and approximately 70-hour power reserve for calibre 3285.",
                contextHeading: "Built for places without a clear day-night cue",
                contextBody: "Rolex dates the Explorer II introduction to 1971 and connects its 24-hour display to expeditions in caves and polar regions. The separately named Explorer II is distinguished by its fixed 24-hour graduated bezel, orange hand and date display.",
                referenceUrl: `https://www.rolex.com/en-in/watches/explorer-ii/${model.route}`,
                referenceOnly: true
            })),
            ...[
                { ref: "126710BLNR", route: "m126710blnr-0002", id: "gmt-master-ii-126710blnr-jubilee", material: "Oystersteel", bezel: "Blue and black", dial: "Black", bracelet: "Jubilee", image: null },
                { ref: "126710BLNR", route: "m126710blnr-0003", id: "gmt-master-ii-126710blnr-oyster", material: "Oystersteel", bezel: "Blue and black", dial: "Black", bracelet: "Oyster", image: null },
                { ref: "126713GRNR", route: "m126713grnr-0001", id: "gmt-master-ii-126713grnr-jubilee", material: "Yellow Rolesor (Oystersteel and yellow gold)", bezel: "Grey and black", dial: "Black", bracelet: "Jubilee", image: "assets/media/gmt-master-ii-126713grnr-commons.jpg" },
                { ref: "126711CHNR", route: "m126711chnr-0002", id: "gmt-master-ii-126711chnr-oyster", material: "Everose Rolesor (Oystersteel and Everose gold)", bezel: "Black and brown", dial: "Black", bracelet: "Oyster", image: null },
                { ref: "126720VTNR", route: "m126720vtnr-0001", id: "gmt-master-ii-126720vtnr-oyster", material: "Oystersteel", bezel: "Green and black", dial: "Black", bracelet: "Oyster", image: null, leftHanded: true }
            ].map(model => ({
                brand: "Rolex", family: "GMT-Master II", canonicalId: model.id, exactReference: model.ref, modelRoute: model.route,
                variant: `GMT-Master II ${model.ref} · ${model.bracelet} bracelet`, material: model.material, size: "40 mm",
                movement: "Calibre 3285 · perpetual, mechanical, self-winding, GMT function", powerReserve: "Approximately 70 hours", waterResistance: "100 m",
                price: null, currency: "INR", priceProvenance: "Unavailable; no Venturo price or inventory claimed", imageIds: model.image ? ["gmt-master-ii-126713grnr-commons"] : [], image: model.image,
                familyContextImage: "assets/media/gmt-master-ii-two-time-zones.svg", sourceAccessed: "2026-10-09",
                sourceUrls: [`https://www.rolex.com/en-in/watches/gmt-master-ii/${model.route}`, "https://www.rolex.com/en-in/watches/gmt-master-ii", "https://www.rolex.com/en-in/watches/gmt-master-ii/features", "https://www.rolex.com/en-in/watches/gmt-master-ii/time-zone-to-time-zone", "https://www.rolex.com/en-in/watches/gmt-master-ii/all-models"],
                contentStatus: "reference-only", saleStatus: "unavailable",
                description: `Rolex GMT-Master II ref. ${model.ref}: ${model.material}, 40 mm, black dial, ${model.bezel} two-colour rotatable 24-hour bezel and ${model.bracelet} bracelet.${model.leftHanded ? " Left-hand crown and date at 9 o’clock." : ""} Reference information only; no Venturo manufacture, stock or offer for sale.`,
                category: "professional", eyebrow: `ROLEX REFERENCE ${model.ref}`, dial: "Black dial", bracelet: `${model.bracelet} bracelet`, bezel: `${model.bezel} Cerachrom, rotatable 24-hour bezel`,
                functions: `Local hours, minutes and seconds; 24-hour display for a second time zone; independent rapid-setting of the local hour hand; instantaneous date; stop-seconds${model.leftHanded ? "; crown and date at 9 o’clock" : ""}`,
                imageMatchStatus: model.image ? "Exact reference image: 126713GRNR; photo by EMore98, Wikimedia Commons, CC BY-SA 4.0. Used only on this matching reference." : "No matching reference photograph cleared for this variant; the family function schematic is not a variant image.",
                storyHeadline: "Two time zones, read at a glance", storyLead: "The local hour hand tracks the wearer's time while the dedicated 24-hour hand reads a second zone against the rotatable, graduated bezel.",
                storyBody: `Rolex lists calibre 3285, approximately 70-hour reserve, 100 m water resistance, ${model.bezel} bezel and ${model.bracelet} bracelet for ref. ${model.ref}. Source pages checked 9 October 2026.`,
                galleryTitle: model.image ? "Rolex reference photograph · 126713GRNR" : "Reading two time zones", galleryDescription: model.image ? "A licensed photograph of the exact Rolex 126713GRNR reference. It is not a Venturo product image." : "Original explanatory diagram only; matching model photography is unavailable and no substitute watch image is shown.",
                galleryCaption: model.image ? "Rolex GMT-Master II ref. 126713GRNR · photo by EMore98, Wikimedia Commons, CC BY-SA 4.0. Source and licence linked." : "Original Venturo function schematic · not Rolex product photography or a specific model configuration.",
                featureTitle1: "Local time and home time", featureBody1: "The independently adjustable local hour hand moves in one-hour steps; the 24-hour hand continues to indicate a second time zone.",
                featureTitle2: model.bezel, featureBody2: `Rolex identifies a two-colour ${model.bezel} Cerachrom bezel graduated to 24 hours and rotatable in both directions.`,
                featureTitle3: "Calibre 3285", featureBody3: "Rolex lists a self-winding calibre 3285 with approximately 70 hours of power reserve for this reference.",
                contextHeading: "A watch shaped by global travel", contextBody: "Rolex dates the GMT-Master introduction to 1955 and the GMT-Master II name and independent hour-hand function to 1982. This page presents attributed reference research; Venturo does not manufacture, certify, stock or sell Rolex watches.",
                referenceUrl: `https://www.rolex.com/en-in/watches/gmt-master-ii/${model.route}`, referenceOnly: true, leftHanded: Boolean(model.leftHanded)
            })),
            ...[
                { ref: "127334", route: "m127334-0001", size: "40 mm", material: "Oystersteel and white gold", dial: "Intense white honeycomb motif", bezel: "Fluted", bracelet: "Flat Jubilee" },
                { ref: "127336", route: "m127336-0001", size: "40 mm", material: "Platinum", dial: "Ice blue honeycomb motif", bezel: "Fluted", bracelet: "Flat Jubilee" },
                { ref: "127286TBR", route: "m127286tbr-0001", size: "36 mm", material: "Platinum and diamonds", dial: "Ice blue honeycomb motif set with diamonds", bezel: "Set with diamonds", bracelet: "Flat Jubilee" },
                { ref: "127335", route: "m127335-0001", size: "40 mm", material: "18 ct Everose gold", dial: "Intense white honeycomb motif", bezel: "Fluted", bracelet: "Flat Jubilee" },
                { ref: "127285TBR", route: "m127285tbr-0002", size: "36 mm", material: "18 ct Everose gold and diamonds", dial: "Intense white honeycomb motif set with diamonds", bezel: "Set with diamonds", bracelet: "Flat Jubilee" },
                { ref: "127234", route: "m127234-0001", size: "36 mm", material: "Oystersteel and white gold", dial: "Intense white honeycomb motif", bezel: "Fluted", bracelet: "Flat Jubilee" },
                { ref: "127235", route: "m127235-0001", size: "36 mm", material: "18 ct Everose gold", dial: "Intense white honeycomb motif", bezel: "Fluted", bracelet: "Flat Jubilee" },
                { ref: "127386TBR", route: "m127386tbr-0001", size: "40 mm", material: "Platinum and diamonds", dial: "Ice blue honeycomb motif set with diamonds", bezel: "Set with diamonds", bracelet: "Flat Jubilee" },
                { ref: "127236", route: "m127236-0001", size: "36 mm", material: "Platinum", dial: "Ice blue honeycomb motif", bezel: "Fluted", bracelet: "Flat Jubilee" },
                { ref: "127385TBR", route: "m127385tbr-0003", size: "40 mm", material: "18 ct Everose gold and diamonds", dial: "Intense white honeycomb motif set with diamonds", bezel: "Set with diamonds", bracelet: "Flat Jubilee" }
            ].map(model => ({
                brand: "Rolex", family: "Land-Dweller", canonicalId: `land-dweller-${model.ref.toLowerCase()}`, exactReference: model.ref, modelRoute: model.route,
                variant: `Land-Dweller ${model.size} · ref. ${model.ref}`, material: model.material, size: model.size,
                movement: "Calibre 7135 · perpetual, mechanical, self-winding", powerReserve: "Approximately 66 hours", waterResistance: "100 m",
                price: null, currency: "INR", priceProvenance: "Unavailable; no Venturo price or inventory claimed", imageIds: [], image: null,
                familyContextImage: "assets/media/land-dweller-white-dial-commons.jpg", sourceAccessed: "2026-10-10",
                sourceUrls: [`https://www.rolex.com/en-in/watches/land-dweller/${model.route}`, "https://www.rolex.com/en-in/watches/land-dweller", "https://www.rolex.com/en-in/watches/land-dweller/features", "https://www.rolex.com/en-in/watches/land-dweller/all-models", "https://www.rolex.com/en-in/oyster-story/collection-shaped-by-innovation"],
                contentStatus: "reference-only", saleStatus: "unavailable", category: "classic", eyebrow: `ROLEX REFERENCE ${model.ref}`,
                description: `Rolex Land-Dweller reference ${model.ref}: ${model.size}, ${model.material}, ${model.dial.toLowerCase()}, ${model.bezel.toLowerCase()} bezel and Flat Jubilee bracelet. Reference information only; no Venturo manufacture, stock or offer for sale.`,
                dial: model.dial, bezel: `${model.bezel} bezel`, bracelet: "Flat Jubilee bracelet with concealed Crownclasp",
                functions: "Centre hour, minute and seconds hands; instantaneous date with rapid setting; stop-seconds",
                precision: "-2/+2 seconds per day, after casing", certification: "Superlative Chronometer certification",
                imageMatchStatus: `Rolex model route ${model.route} is verified. Matching current-reference photography is not cleared for reuse; the Commons dial close-up is family context only and is not mapped as model imagery.`,
                storyHeadline: "A new integrated profile", storyLead: "The Oyster case flows into a Flat Jubilee bracelet, while the honeycomb dial gives the surface a distinct geometric texture.",
                storyBody: `Rolex lists ref. ${model.ref} in ${model.size} with ${model.material}, a ${model.dial.toLowerCase()}, ${model.bezel.toLowerCase()} bezel and Flat Jubilee bracelet. Calibre 7135 beats at 5 Hz and uses the Dynapulse escapement. Sources checked 10 October 2026.`,
                galleryTitle: "A honeycomb dial detail", galleryDescription: "A licensed close-up from the Land-Dweller family; the exact model reference is not established. This image is not used to identify a selected model.",
                galleryCaption: "Family-context detail only · exact reference not verified · Verygoodlord, Wikimedia Commons, CC BY-SA 4.0; image unchanged.",
                featureTitle1: "Flat Jubilee and Oyster case", featureBody1: "Rolex presents a redesigned Oyster case that integrates visually with the Flat Jubilee bracelet.",
                featureTitle2: "Calibre 7135", featureBody2: "Rolex describes the high-frequency movement at 5 Hz, or 36,000 vibrations per hour, with the Dynapulse escapement.",
                featureTitle3: model.dial, featureBody3: `The official model listing identifies a ${model.dial.toLowerCase()} and ${model.bezel.toLowerCase()} bezel for ref. ${model.ref}.`,
                contextHeading: "An integrated design revisited", contextBody: "Rolex dates the Land-Dweller unveiling to 2025. Its Oyster Story places the integrated-bracelet design in a longer context, including the Rolex Datejust reference 1630 of 1974. This is attributed reference content; Venturo does not manufacture, certify, stock or sell Rolex watches.",
                referenceUrl: `https://www.rolex.com/en-in/watches/land-dweller/${model.route}`, referenceOnly: true
            })),
            ...[
                { ref: "276200", route: "m276200-0008", size: "28 mm", material: "Oystersteel", dial: "Lavender" },
                { ref: "277200", route: "m277200-0012", size: "31 mm", material: "Oystersteel", dial: "Pistachio" },
                { ref: "126000", route: "m126000-0016", size: "36 mm", material: "Oystersteel", dial: "Multicoloured Jubilee motif" },
                { ref: "134303", route: "m134303-0001", size: "41 mm", material: "Oystersteel and yellow gold", dial: "Slate" },
                { ref: "124200", route: "m124200-0007", size: "34 mm", material: "Oystersteel", dial: "Beige" }
            ].map(model => ({
                brand: "Rolex", family: "Oyster Perpetual", canonicalId: `oyster-perpetual-${model.ref.toLowerCase()}`, exactReference: model.ref, modelRoute: model.route,
                variant: `Oyster Perpetual ${model.size} · ref. ${model.ref}`, material: model.material, size: model.size,
                movement: ["28 mm", "31 mm", "34 mm"].includes(model.size) ? "Calibre 2232 · perpetual, mechanical, self-winding" : "Calibre 3230 · perpetual, mechanical, self-winding",
                powerReserve: ["28 mm", "31 mm", "34 mm"].includes(model.size) ? "Approximately 55 hours" : "Approximately 70 hours", waterResistance: "100 m",
                price: null, currency: "INR", priceProvenance: "Unavailable; no Venturo price or inventory claimed",
                imageIds: [], image: null,
                familyContextImage: "assets/media/oyster-perpetual-date-free.svg", sourceAccessed: "2026-10-10",
                sourceUrls: [`https://www.rolex.com/en-in/watches/oyster-perpetual/${model.route}`, "https://www.rolex.com/en-in/watches/oyster-perpetual", "https://www.rolex.com/en-in/watches/oyster-perpetual/features", "https://www.rolex.com/en-in/watches/oyster-perpetual/fulfilment-of-vision", "https://www.rolex.com/en-in/watches/oyster-perpetual/all-models"],
                contentStatus: "reference-only", saleStatus: "unavailable", category: "classic", eyebrow: `ROLEX REFERENCE ${model.ref}`,
                dial: model.dial, bracelet: "Oyster bracelet", bezel: "Domed bezel", functions: "Centre hour, minute and seconds hands; stop-seconds", certification: "Superlative Chronometer certification", precision: "-2/+2 seconds per day, after casing",
                description: `Rolex Oyster Perpetual ref. ${model.ref}: ${model.size}, ${model.material}, ${model.dial.toLowerCase()} dial and Oyster bracelet. Date-free three-hand reference content, not Venturo inventory.`,
                imageMatchStatus: "Rolex model route observed; exact-reference photo reuse permission not established for the selected dial. No substitute product image shown.",
                storyHeadline: "The date-free essentials", storyLead: "Three central hands keep this display direct: hours, minutes and seconds, without a date aperture.",
                storyBody: `Rolex lists five Oyster Perpetual sizes from 28 to 41 mm. This sampled reference is ${model.ref}, ${model.size}, ${model.material}, with a ${model.dial.toLowerCase()} dial. Checked 10 October 2026.`,
                galleryTitle: "Date-free three-hand layout",
                galleryDescription: "Original Venturo schematic of a date-free three-hand dial; not Rolex product photography or a model configuration.",
                galleryCaption: "Original schematic · not product photography or a selectable variant image.",
                featureTitle1: "Three central hands", featureBody1: "Rolex describes the display as sporting three central hands. There is no date aperture on the Oyster Perpetual.",
                featureTitle2: `${model.size} case`, featureBody2: `Rolex's overview lists five sizes from 28 to 41 mm. This reference is identified as ${model.size}.`,
                featureTitle3: "Oyster bracelet", featureBody3: "Rolex describes the Oyster bracelet as a three-piece-link metal bracelet.",
                contextHeading: "A direct descendant of the Oyster idea", contextBody: "Rolex traces the Oyster Perpetual to its 1926 Oyster and 1931 self-winding waterproof chronometer wristwatch. The current family continues as a date-free three-hand design across five sizes and varied dials. This is Rolex-attributed research; Venturo does not manufacture, certify, stock or sell Rolex watches.",
                referenceUrl: `https://www.rolex.com/en-in/watches/oyster-perpetual/${model.route}`, referenceOnly: true
            })),
        ],
        compatibilityAliases: {
            datejust: "datejust",
            daydate: "daydate",
            "datejust-rose": "datejust-rose",
            airking: "airking",
            "daytona-126500ln": "daytona-126500ln",
            "daytona-126518ln": "daytona-126518ln",
            "daytona-126509": "daytona-126509",
            "daytona-126505": "daytona-126505",
            "daytona-126506": "daytona-126506",
            "lady-datejust-279160": "lady-datejust-279160",
            "lady-datejust-279174": "lady-datejust-279174",
            "lady-datejust-279173": "lady-datejust-279173",
            "lady-datejust-279459rbr": "lady-datejust-279459rbr",
            "explorer-224270": "explorer-224270",
            "explorer-124270": "explorer-124270",
            "explorer-124273": "explorer-124273",
            "explorer-ii-226570-white": "explorer-ii-226570-white",
            "explorer-ii-226570-black": "explorer-ii-226570-black",
            "gmt-master-ii-126710blnr-jubilee": "gmt-master-ii-126710blnr-jubilee",
            "gmt-master-ii-126710blnr-oyster": "gmt-master-ii-126710blnr-oyster",
            "gmt-master-ii-126713grnr-jubilee": "gmt-master-ii-126713grnr-jubilee",
            "gmt-master-ii-126711chnr-oyster": "gmt-master-ii-126711chnr-oyster",
            "gmt-master-ii-126720vtnr-oyster": "gmt-master-ii-126720vtnr-oyster",
            "land-dweller-127334": "land-dweller-127334", "land-dweller-127336": "land-dweller-127336",
            "land-dweller-127286tbr": "land-dweller-127286tbr", "land-dweller-127335": "land-dweller-127335",
            "land-dweller-127285tbr": "land-dweller-127285tbr", "land-dweller-127234": "land-dweller-127234",
            "land-dweller-127235": "land-dweller-127235", "land-dweller-127386tbr": "land-dweller-127386tbr",
            "land-dweller-127236": "land-dweller-127236", "land-dweller-127385tbr": "land-dweller-127385tbr",
            "oyster-perpetual-276200": "oyster-perpetual-276200", "oyster-perpetual-277200": "oyster-perpetual-277200", "oyster-perpetual-126000": "oyster-perpetual-126000", "oyster-perpetual-134303": "oyster-perpetual-134303", "oyster-perpetual-124200": "oyster-perpetual-124200",
            skydweller: "datejust-rose",
            seadweller: "daydate"
        }
    };

    function get(id) {
        const canonicalId = catalog.compatibilityAliases[String(id || "").toLowerCase()];
        return catalog.records.find(record => record.canonicalId === canonicalId) || null;
    }

    function money(record) {
        if (record.price == null) return "Unavailable";
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: record.currency,
            maximumFractionDigits: 0
        }).format(record.price);
    }

    function renderCollection() {
        const grid = document.querySelector("[data-catalog-grid]");
        if (!grid) return;

        grid.innerHTML = catalog.records.map(record => `
            <div class="product-card glass hover-card reveal" data-product="${record.canonicalId}" data-category="${record.category}">
                    <button class="wishlist-btn" data-id="${record.canonicalId}" aria-label="Save ${record.variant} to Wishlist">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <div class="product-card-thumb">
                    ${record.image
                        ? `<img src="${record.image}" alt="${record.brand} ${record.variant} reference image">`
                        : `<div class="browse-media-unavailable" role="img" aria-label="${record.variant} reference photography unavailable">Reference image unavailable</div>`}
                </div>
                <h3>${record.variant}</h3>
                <span class="product-card-tag">${record.eyebrow}</span>
                <span class="product-card-price">${record.saleStatus === "unavailable" ? "Not available from Venturo" : money(record)}</span>
                <div class="product-card-actions">
                    <span class="view-details-hint">Tap for details</span>
                </div>
            </div>
            <div class="product-details" id="${record.canonicalId}">
                ${record.image
                    ? `<img src="${record.image}" class="product-img" alt="${record.brand} ${record.variant} reference image">`
                    : `<div class="browse-media-unavailable product-img" role="img" aria-label="${record.variant} reference photography unavailable">Reference image unavailable</div>`}
                <p>${record.description}</p>
                <ul>
                    <li>Movement: ${record.movement}</li>
                    <li>Power reserve: ${record.powerReserve}</li>
                    <li>Case: ${record.size}, ${record.material}</li>
                    <li>Water resistance: ${record.waterResistance}</li>
                </ul>
                <div class="details-cta-group">
                    ${record.saleStatus === "unavailable" ? `<span class="reference-only-label">Reference only · not available from Venturo</span>` : `<button class="add-cart-btn" data-id="${record.canonicalId}" aria-label="Add ${record.variant} to cart"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button>`}
                    <a href="watch.html?product=${record.canonicalId}" class="discover-model-btn">
                        <span>Full Specification</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `).join("");

        if (typeof window.initProductCards === "function") window.initProductCards();
        document.dispatchEvent(new CustomEvent("venturo:catalog-rendered"));
    }

    document.addEventListener("DOMContentLoaded", renderCollection);
    return { ...catalog, get, money, renderCollection };
})();
