"use strict";

/*=========================================================
  VENTURO CHRONOMÉTRIE
  SEARCH.JS - Luxury Search Interface
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initSearch();

});

/*=========================================================
 INITIALIZE SEARCH & OVERLAY
=========================================================*/

function initSearch() {

    const searchInput = document.getElementById("searchInput");
    const searchTriggerBtn = document.getElementById("searchTriggerBtn");
    const closeSearchBtn = document.getElementById("closeSearchBtn");
    const searchOverlay = document.getElementById("searchOverlay");
    const shortcutLinks = document.querySelectorAll(".shortcut-link");
    const cards = document.querySelectorAll(".product-card");

    if (!searchInput) return;

    const panel = document.querySelector("#searchOverlay .search-overlay-panel");
    let restoreFocus = searchTriggerBtn;

    function setBackgroundInert(isInert) {
        document.querySelectorAll("body > *").forEach(element => {
            if (element.id !== "searchOverlay" && element.id !== "navOverlay") {
                element.inert = isInert;
            }
        });
    }

    function trapFocus(event) {
        if (event.key !== "Tab" || !searchOverlay.classList.contains("open") || !panel) return;
        const focusable = panel.querySelectorAll("a[href], button:not([disabled]), input, [tabindex]:not([tabindex='-1'])");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    createNoResultMessage();
    createSuggestionBox();

    // Open Search Overlay
    function openSearch() {

        if (!searchOverlay) return;

        document.dispatchEvent(new CustomEvent("venturo:close-menu"));
        restoreFocus = document.activeElement || searchTriggerBtn;
        searchOverlay.classList.add("open");
        searchOverlay.setAttribute("aria-hidden", "false");

        if (searchTriggerBtn) {

            searchTriggerBtn.setAttribute("aria-expanded", "true");

        }

        document.body.classList.add("search-open");
        setBackgroundInert(true);

        setTimeout(() => {

            searchInput.focus();

        }, 120);

    }

    // Close Search Overlay
    function closeSearch() {

        if (!searchOverlay) return;

        searchOverlay.classList.remove("open");
        searchOverlay.setAttribute("aria-hidden", "true");

        if (searchTriggerBtn) searchTriggerBtn.setAttribute("aria-expanded", "false");

        document.body.classList.remove("search-open");
        setBackgroundInert(false);
        (restoreFocus || searchTriggerBtn).focus();

        const box = document.getElementById("searchSuggestions");
        if (box) {

            box.style.display = "none";

        }

    }

    if (searchTriggerBtn) {

        searchTriggerBtn.addEventListener("click", openSearch);

    }

    document.addEventListener("venturo:close-search", closeSearch);
    document.addEventListener("keydown", trapFocus);

    if (closeSearchBtn) {

        closeSearchBtn.addEventListener("click", closeSearch);

    }

    // Close when clicking outside the panel on the overlay
    if (searchOverlay) {

        searchOverlay.addEventListener("click", e => {

            if (e.target === searchOverlay) {

                closeSearch();

            }

        });

    }

    // Close on Escape key press
    document.addEventListener("keydown", e => {

        if (e.key === "Escape" && searchOverlay && searchOverlay.classList.contains("open")) {

            closeSearch();

        }

    });

    // Close on Shortcut click
    shortcutLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeSearch();

        });

    });

    // Live search input
    searchInput.addEventListener("input", () => {

        const keyword = searchInput.value.trim().toLowerCase();

        performSearch(keyword);
        updateSuggestions(keyword, closeSearch);

    });

    searchInput.addEventListener("focus", () => {

        searchInput.parentElement.classList.add("focused");

    });

    searchInput.addEventListener("blur", () => {

        searchInput.parentElement.classList.remove("focused");

    });

    // Press Enter to submit search & view results
    searchInput.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            const val = searchInput.value.trim();

            if (val) {

                saveSearch(val);

                const productsSection = document.getElementById("products");

                if (productsSection) {

                    productsSection.scrollIntoView({

                        behavior: "smooth"

                    });

                }

                closeSearch();

            }

        }

    });

}

/*=========================================================
 SEARCH FILTERING FUNCTION
=========================================================*/

function performSearch(keyword) {

    const cards = document.querySelectorAll(".product-card");
    const noResult = document.getElementById("no-result");

    if (!cards.length) return;

    let visibleCount = 0;

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(keyword)) {

            card.style.display = "";
            card.classList.add("search-match");
            visibleCount++;

        }

        else {

            card.style.display = "none";
            card.classList.remove("search-match");

        }

    });

    if (keyword === "") {

        cards.forEach(card => {

            card.style.display = "";

        });

        if (noResult) {

            noResult.style.display = "none";

        }

        return;

    }

    if (noResult) {

        if (visibleCount === 0) {

            noResult.style.display = "block";

        }

        else {

            noResult.style.display = "none";

        }

    }

}

/*=========================================================
 NO RESULT MESSAGE
=========================================================*/

function createNoResultMessage() {

    if (document.getElementById("no-result")) return;

    const section = document.querySelector(".products-section");
    if (!section) return;

    const message = document.createElement("div");

    message.id = "no-result";

    message.innerHTML = `
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>No Watches Found</h3>
        <p>Try searching for Day-Date, Sky-Dweller, or Sea-Dweller.</p>
    `;

    message.style.display = "none";
    message.style.textAlign = "center";
    message.style.padding = "40px";

    section.appendChild(message);

}

/*=========================================================
 SEARCH HISTORY
=========================================================*/

const MAX_HISTORY = 5;

function saveSearch(keyword) {

    if (!keyword) return;

    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];

    history = history.filter(item => item !== keyword);
    history.unshift(keyword);

    if (history.length > MAX_HISTORY) {

        history.pop();

    }

    localStorage.setItem(

        "searchHistory",
        JSON.stringify(history)

    );

}

/*=========================================================
 SEARCH SUGGESTIONS
=========================================================*/

const watchNames = [

    "Day-Date",
    "Sky-Dweller",
    "Sea-Dweller"

];

function getSuggestions(text) {

    return watchNames.filter(item =>

        item.toLowerCase().includes(text.toLowerCase())

    );

}

function createSuggestionBox() {

    if (document.getElementById("searchSuggestions")) return;

    const container = document.querySelector(".search-box");
    if (!container) return;

    const box = document.createElement("div");

    box.id = "searchSuggestions";
    box.className = "search-suggestions";

    container.appendChild(box);

}

function updateSuggestions(keyword, closeSearchFn) {

    const searchInput = document.getElementById("searchInput");
    const box = document.getElementById("searchSuggestions");

    if (!box || !searchInput) return;

    box.innerHTML = "";

    if (keyword.length === 0) {

        box.style.display = "none";
        return;

    }

    const list = getSuggestions(keyword);

    if (list.length === 0) {

        box.style.display = "none";
        return;

    }

    list.forEach(item => {

        const div = document.createElement("div");

        div.className = "suggestion-item";
        div.innerText = item;

        div.onclick = () => {

            searchInput.value = item;
            performSearch(item.toLowerCase());
            box.style.display = "none";

            const productsSection = document.getElementById("products");

            if (productsSection) {

                productsSection.scrollIntoView({

                    behavior: "smooth"

                });

            }

            if (typeof closeSearchFn === "function") {

                closeSearchFn();

            }

        };

        box.appendChild(div);

    });

    box.style.display = "block";

}

console.log("✅ Luxury Search Module Loaded");