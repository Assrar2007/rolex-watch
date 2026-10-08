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
            { id: "lady-datejust", name: "Lady-Datejust", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "day-date", name: "Day-Date", status: "demo-reference", attribution: "Venturo project reference records" },
            { id: "explorer", name: "Explorer", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "explorer-ii", name: "Explorer II", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "gmt-master-ii", name: "GMT-Master II", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "land-dweller", name: "Land-Dweller", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
            { id: "oyster-perpetual", name: "Oyster Perpetual", status: "reference-only", attribution: "Rolex reference family; no Venturo record" },
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
            }))
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
