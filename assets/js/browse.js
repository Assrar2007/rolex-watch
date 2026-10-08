"use strict";

(() => {
    const catalog = window.VenturoCatalog;
    if (!catalog) return;

    const accessories = [
        { name: "Venturo travel pouch", type: "Accessory reference", status: "Not available", note: "No approved Venturo accessory record supplied.", image: "assets/media/watchmaker-cc0.webp" },
        { name: "Care cloth", type: "Care accessory reference", status: "Not available", note: "Accessory data and supplier provenance are pending.", image: "assets/media/watchmaker-cc0.webp" }
    ];
    const themes = [
        { name: "Classic proportions", description: "Project records with classic category data.", ids: ["datejust", "daydate", "datejust-rose"] },
        { name: "Everose studies", description: "Records whose material data includes Everose gold.", ids: ["daydate", "datejust-rose"] },
        { name: "Reference families", description: "Attributed Rolex family navigation with no Venturo inventory claim.", ids: [] }
    ];

    function values(key) {
        return [...new Set(catalog.records.map(record => record[key]))].sort();
    }

    function queryState() {
        const params = new URLSearchParams(location.search);
        return {
            family: params.get("family") || "",
            material: params.get("material") || "",
            size: params.get("size") || "",
            sort: params.get("sort") || "featured"
        };
    }

    function updateUrl(state) {
        const params = new URLSearchParams();
        Object.entries(state).forEach(([key, value]) => {
            if (value && value !== "featured") params.set(key, value);
        });
        history.replaceState(null, "", `${location.pathname}${params.toString() ? `?${params}` : ""}`);
    }

    function option(select, value, label) {
        const item = document.createElement("option");
        item.value = value;
        item.textContent = label || value;
        select.appendChild(item);
    }

    function card(record) {
        const media = record.image
            ? `<img src="${record.image}" alt="${record.brand} ${record.variant} reference image" loading="lazy">`
            : `<div class="browse-media-unavailable" role="img" aria-label="Exact-variant photography unavailable">Exact-variant photography unavailable</div>`;
        const specs = [record.exactReference ? `Ref. ${record.exactReference}` : "", record.size, record.material, record.movement].filter(value => value && !value.startsWith("Not specified")).join(" · ");
        return `<article class="browse-model-card">
            ${media}
            <div><button class="daytona-favourite wishlist-btn" data-id="${record.canonicalId}" aria-label="Save Rolex reference ${record.exactReference} to Venturo favourites">Save to favourites</button>
            <span>${record.eyebrow}</span><h3>${record.variant}</h3>
            <p>${specs || "Reference specifications unavailable"}</p>
            <strong>${record.saleStatus === "unavailable" ? "Reference only · no Venturo price" : catalog.money(record)}</strong>
            <a href="watch.html?product=${record.canonicalId}">View specification</a></div>
        </article>`;
    }

    function initCollection() {
        const grid = document.querySelector("[data-catalog-grid]");
        const controls = document.querySelector("[data-browse-controls]");
        if (!grid || !controls) return;
        const state = queryState();
        const selects = {
            family: controls.querySelector('[data-filter="family"]'),
            material: controls.querySelector('[data-filter="material"]'),
            size: controls.querySelector('[data-filter="size"]'),
            sort: controls.querySelector("[data-sort]")
        };
        values("family").forEach(value => option(selects.family, value));
        values("material").forEach(value => option(selects.material, value));
        values("size").forEach(value => option(selects.size, value));
        Object.entries(selects).forEach(([key, select]) => { select.value = state[key]; });

        function render() {
            const current = Object.fromEntries(Object.entries(selects).map(([key, select]) => [key, select.value]));
            let records = catalog.records.filter(record =>
                (!current.family || record.family === current.family) &&
                (!current.material || record.material === current.material) &&
                (!current.size || record.size === current.size)
            );
            if (current.sort === "name-asc") records.sort((a, b) => a.variant.localeCompare(b.variant));
            if (current.sort === "price-asc") records.sort((a, b) => a.price - b.price);
            if (current.sort === "price-desc") records.sort((a, b) => b.price - a.price);
            grid.querySelectorAll(".product-card, .product-details").forEach(element => { element.hidden = true; });
            records.forEach(record => {
                const cardElement = grid.querySelector(`.product-card[data-product="${record.canonicalId}"]`);
                if (cardElement) cardElement.hidden = false;
            });
            const count = document.querySelector("[data-result-count]");
            if (count) count.textContent = `${records.length} ${records.length === 1 ? "model" : "models"} found`;
            const empty = document.querySelector("[data-no-results]");
            if (empty) empty.hidden = records.length !== 0;
            updateUrl(current);
        }
        Object.values(selects).forEach(select => select.addEventListener("change", render));
        window.addEventListener("popstate", () => {
            const restored = queryState();
            Object.entries(selects).forEach(([key, select]) => { select.value = restored[key]; });
            render();
        });
        controls.querySelector("[data-reset-filters]")?.addEventListener("click", () => {
            Object.entries(selects).forEach(([key, select]) => { select.value = key === "sort" ? "featured" : ""; });
            render();
        });
        render();
    }

    function initFamilyCards() {
        const target = document.querySelector("[data-family-grid]");
        if (!target) return;
        target.innerHTML = catalog.families.map(family => `<a class="family-card ${family.status}" href="${family.id === "air-king" ? "air-king.html" : family.id === "cosmograph-daytona" ? "cosmograph-daytona.html" : `finder.html?family=${encodeURIComponent(family.name)}`}">
            <span>${family.status === "reference-only" ? "Reference only" : "Project records"}</span>
            <h3>${family.name}</h3><p>${family.attribution}</p>
        </a>`).join("");
    }

    function initDaytonaFamily() {
        const target = document.querySelector("[data-daytona-models]");
        if (!target) return;
        const records = catalog.records.filter(record => record.family === "Cosmograph Daytona");
        target.innerHTML = records.map(record => `<article class="browse-model-card daytona-model-card">
            <div class="browse-media-unavailable" role="img" aria-label="Exact-variant Rolex reference photograph unavailable">Exact-variant photograph unavailable</div>
            <div><button class="daytona-favourite wishlist-btn" data-id="${record.canonicalId}" aria-label="Save Rolex reference ${record.exactReference} to Venturo favourites"><i class="fa-regular fa-heart" aria-hidden="true"></i><span>Save to favourites</span></button>
            <span>${record.eyebrow}</span><h3>${record.variant}</h3>
            <p>Rolex reference ${record.exactReference} · ${record.size} · ${record.material} · ${record.movement}</p>
            <p class="browse-source-date">Rolex source checked ${record.sourceAccessed || "date unavailable"}</p>
            <strong>Reference only · no Venturo inventory or price</strong>
            <a href="watch.html?product=${record.canonicalId}">Open attributed reference detail</a>
            <a href="${record.referenceUrl}" target="_blank" rel="noopener noreferrer">Check the Rolex model page <span aria-hidden="true">↗</span></a></div>
        </article>`).join("");
    }

    function initStandalone() {
        const target = document.querySelector("[data-browse-page]");
        if (!target) return;
        const type = target.dataset.browsePage;
        if (type === "finder") {
            const grid = target.querySelector("[data-finder-results]");
            const params = queryState();
            let records = catalog.records.filter(record => !params.family || record.family === params.family);
            target.querySelector("[data-finder-count]").textContent = `${records.length} supported project records`;
            grid.innerHTML = records.length ? records.map(card).join("") : `<p class="browse-empty">No supported records match this family. Reference-only families do not create invented inventory.</p>`;
        }
        if (type === "new") {
            const grid = target.querySelector("[data-finder-results]");
            grid.innerHTML = `<p class="browse-empty">No project record has a documented introduction date yet. New-watch membership remains incomplete.</p>`;
        }
        if (type === "accessories") {
            target.querySelector("[data-finder-results]").innerHTML = accessories.map(item => `<article class="browse-model-card accessory-card"><img src="${item.image}" alt="Editorial watchmaker context for accessory research"><div><span>${item.type}</span><h3>${item.name}</h3><p>${item.note}</p><strong>${item.status}</strong></div></article>`).join("");
        }
        if (type === "themes") {
            target.querySelector("[data-finder-results]").innerHTML = themes.map(theme => `<article class="browse-model-card"><div><span>Theme</span><h3>${theme.name}</h3><p>${theme.description}</p><strong>${theme.ids.length ? `${theme.ids.length} project records` : "Reference navigation only"}</strong></div></article>`).join("");
        }
        if (type === "daytona-family") initDaytonaFamily();
    }

    document.addEventListener("DOMContentLoaded", () => {
        initCollection();
        initFamilyCards();
        initStandalone();
        initDaytonaFamily();
    });
})();
