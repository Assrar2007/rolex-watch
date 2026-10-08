"use strict";

/*=========================================================
    VENTURO CHRONOMÉTRIE
    WISHLIST MODULE
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initWishlist();

});

/*=========================================================
    INITIALIZE
=========================================================*/

function initWishlist() {
    loadWishlist();
    document.addEventListener("click", event => {
        const button = event.target.closest(".wishlist-btn");
        if (!button) return;
        event.stopPropagation();
        toggleWishlist(button.dataset.id, button);
    });
}

/*=========================================================
    GET WISHLIST
=========================================================*/

function getWishlist() {

    return JSON.parse(

        localStorage.getItem("venturoWishlist")

    ) || [];

}

/*=========================================================
    SAVE WISHLIST
=========================================================*/

function saveWishlist(data) {

    localStorage.setItem(

        "venturoWishlist",

        JSON.stringify(data)

    );

}

/*=========================================================
    TOGGLE
=========================================================*/

function toggleWishlist(id, button) {

    let wishlist = getWishlist();

    const icon = button.querySelector("i");

    if (wishlist.includes(id)) {

        wishlist = wishlist.filter(item => item !== id);

        button.classList.remove("active");

        icon?.classList.remove("fa-solid");

        icon?.classList.add("fa-regular");

        showWishlistMessage("Removed from Wishlist");

    }

    else {

        wishlist.push(id);

        button.classList.add("active");

        icon?.classList.remove("fa-regular");

        icon?.classList.add("fa-solid");

        animateHeart(button);

        showWishlistMessage("Added to Wishlist");

    }

    saveWishlist(wishlist);

    updateWishlistCounter();

}

/*=========================================================
    LOAD SAVED DATA
=========================================================*/

function loadWishlist() {

    const wishlist = getWishlist();

    document.querySelectorAll(".wishlist-btn").forEach(button => {

        const id = button.dataset.id;

        const icon = button.querySelector("i");

        if (wishlist.includes(id)) {

            button.classList.add("active");

            icon?.classList.remove("fa-regular");

            icon?.classList.add("fa-solid");

        }

    });

    updateWishlistCounter();

}

/*=========================================================
    COUNTER
=========================================================*/

function updateWishlistCounter() {

    const counter = document.getElementById("wishlistCount");

    if (!counter) return;

    counter.innerText = getWishlist().length;

}

/*=========================================================
    HEART ANIMATION
=========================================================*/

function animateHeart(button) {

    button.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.4)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 350,

            easing: "ease"

        }

    );

}

/*=========================================================
    MESSAGE
=========================================================*/

function showWishlistMessage(message) {

    if (typeof showToast === "function") {

        showToast(message);

        return;

    }

    console.log(message);

}

/*=========================================================
    CLEAR
=========================================================*/

function clearWishlist() {

    localStorage.removeItem(

        "venturoWishlist"

    );

    loadWishlist();

}

/*=========================================================
    EXPORT
=========================================================*/

window.clearWishlist = clearWishlist;

/*=========================================================
    WISHLIST PAGE (Future)
=========================================================*/

function renderWishlistPage() {

    const container = document.getElementById("wishlistContainer");

    if (!container) return;

    container.innerHTML = "";

    const wishlist = getWishlist();

    wishlist.forEach(item => {

        const card = document.createElement("div");

        card.className = "wishlist-card";

        card.innerHTML = `

            <h3>${item}</h3>

            <button onclick="removeWishlistItem('${item}')">

                Remove

            </button>

        `;

        container.appendChild(card);

    });

}

/*=========================================================
    REMOVE ITEM
=========================================================*/

function removeWishlistItem(id) {

    let wishlist = getWishlist();

    wishlist = wishlist.filter(item => item !== id);

    saveWishlist(wishlist);

    loadWishlist();

    renderWishlistPage();

}

/*=========================================================
    STORAGE EVENT
=========================================================*/

window.addEventListener("storage", () => {

    loadWishlist();

});

/*=========================================================
    DEBUG
=========================================================*/

console.log("✅ Wishlist Loaded");