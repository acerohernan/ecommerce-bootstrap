const quantitySpan = document.getElementById("quantity");
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");
const cartButton = document.getElementById("cartButton");
const cartIconContainer = document.getElementById("cartIconContainer");


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

cartButton.addEventListener("click", () => {
    if(quantity === 0) {return true};
    console.log(`Cart Products : ${quantity}`);
    cartIconContainer.innerHTML = `
    <span class="rounded-circle bg-warning px-2 col">${quantity}</span>
    <img src="../images/icon-cart.svg" alt="" width="20">
    `;
});