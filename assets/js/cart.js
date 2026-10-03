/*=========================================
    VENTURO SHOPPING CART
=========================================*/

let cart = JSON.parse(localStorage.getItem("venturoCart")) || [];

const cartDrawer = document.getElementById("cartDrawer");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const products = {
    daydate: {
        id: "daydate",
        name: "Datejust",
        price: 850000,
        image: "assets/images/hero6.png"
    },

    datejust: {
        id: "datejust",
        name: "Datejust",
        price: 850000,
        image: "assets/images/hero6.png"
    },

    skydweller: {
        id: "skydweller",
        name: "Sky-Dweller",
        price: 920000,
        image: "assets/images/hero2.png"
    },

    seadweller: {
        id: "seadweller",
        name: "Sea-Dweller",
        price: 980000,
        image: "assets/images/hero3.png"
    }
};

/*=========================================
OPEN / CLOSE CART
=========================================*/

cartBtn.addEventListener("click", () => {
    cartDrawer.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
});

/*=========================================
ADD TO CART
=========================================*/

document.querySelectorAll(".add-cart-btn").forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;

        const product = products[id];

        cart.push(product);

        saveCart();

        renderCart();

    });

});

/*=========================================
SAVE CART
=========================================*/

function saveCart(){

    localStorage.setItem(
        "venturoCart",
        JSON.stringify(cart)
    );

}

/*=========================================
UPDATE COUNT
=========================================*/

function updateCount(){

    cartCount.textContent = cart.length;

}

/*=========================================
RENDER CART
=========================================*/

function renderCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>${item.name}</strong>

                    <p>₹${item.price.toLocaleString()}</p>

                </div>

                <button class="remove-item"

                    data-index="${index}">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;

    });

    cartTotal.textContent = total.toLocaleString();

    updateCount();

    attachRemoveEvents();

}

/*=========================================
REMOVE ITEM
=========================================*/

function attachRemoveEvents(){

    document.querySelectorAll(".remove-item").forEach(button=>{

        button.addEventListener("click",()=>{

            const index = button.dataset.index;

            cart.splice(index,1);

            saveCart();

            renderCart();

        });

    });

}

/*=========================================
CHECKOUT
=========================================*/

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click",()=>{

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    alert("Thank you for shopping with Venturo Chronométrie!");

    cart=[];

    saveCart();

    renderCart();

});

/*=========================================
INITIALIZE
=========================================*/

renderCart();

updateCount();