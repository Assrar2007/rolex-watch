"use strict";

let cart = JSON.parse(localStorage.getItem("venturoCart") || "[]");

const cartDrawer = document.getElementById("cartDrawer");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

function getCartProduct(id) {
    return window.VenturoCatalog ? window.VenturoCatalog.get(id) : null;
}

function saveCart() {
    localStorage.setItem("venturoCart", JSON.stringify(cart));
}

function renderCart() {
    if (!cartItems || !cartTotal || !cartCount) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const product = getCartProduct(item.id);
        if (!product) return;
        total += product.price;
        cartItems.insertAdjacentHTML("beforeend", `
            <div class="cart-item">
                <div>
                    <strong>${product.variant}</strong>
                    <p>${window.VenturoCatalog.money(product)}</p>
                </div>
                <button class="remove-item" data-index="${index}" aria-label="Remove ${product.variant} from cart">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `);
    });

    cartTotal.textContent = total.toLocaleString("en-IN");
    cartCount.textContent = cart.length;
}

function addToCart(id) {
    const product = getCartProduct(id);
    if (!product) return;
    cart.push({ id: product.canonicalId });
    saveCart();
    renderCart();
}

document.addEventListener("click", event => {
    const addButton = event.target.closest(".add-cart-btn");
    if (addButton) addToCart(addButton.dataset.id);

    const removeButton = event.target.closest(".remove-item");
    if (removeButton) {
        cart.splice(Number(removeButton.dataset.index), 1);
        saveCart();
        renderCart();
    }
});

if (cartBtn && cartDrawer) {
    cartBtn.addEventListener("click", () => cartDrawer.classList.add("active"));
}

if (closeCart && cartDrawer) {
    closeCart.addEventListener("click", () => cartDrawer.classList.remove("active"));
}

const checkoutBtn = document.getElementById("checkoutBtn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (!cart.length) {
            alert("Your cart is empty.");
            return;
        }
        alert("Checkout is unavailable in this demo.");
    });
}

renderCart();
