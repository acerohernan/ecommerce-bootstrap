//Set quantity of Porducts
const quantitySpan = document.getElementById("quantity");
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");

//Cart 
const addToCartButton = document.getElementById("addToCartButton");
const cartIconContainer = document.getElementById("cartIconContainer");
const cartButton = document.getElementById("cartButton");
const cartModal = document.getElementById("modal");

let cartIsOpen = false; 
let quantity = 0;

minusButton.addEventListener("click", () => {
    if(quantity === 0) {
        return quantity
    };
    quantity = quantity - 1;
    quantitySpan.innerText = quantity.toString();
});

plusButton.addEventListener("click", () => {
    if(quantity === 4){
        return quantity;
    }
    quantity = quantity + 1;
    quantitySpan.innerText = quantity.toString();
});

addToCartButton.addEventListener("click", () => {
    if(quantity === 0) {return true};
    console.log(`Cart Products : ${quantity}`);
    cartIconContainer.innerHTML = `
    <span class="rounded-circle bg-warning px-2 col">${quantity}</span>
    <img src="../images/icon-cart.svg" alt="" width="20">
    `;
});

cartButton.addEventListener("click", () => {
    cartIsOpen = !cartIsOpen;
    console.log(cartIsOpen);
    if(cartIsOpen){
        cartModal.innerHTML = `
            <h1> Soy el modal </h1>
        `;
    } else{
        cartModal.innerHTML = ``;
    }
})

