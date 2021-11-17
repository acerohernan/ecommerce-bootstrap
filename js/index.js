//Set quantity of Porducts
const quantitySpan = document.getElementById("quantity");
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");

//Cart
const addToCartButton = document.getElementById("addToCartButton");
const cartNumber = document.getElementById("cartNumber");
const cartButton = document.getElementById("cartButton");
const cartModal = document.getElementById("modal");

let cartIsOpen = false;
let quantity = 0;

minusButton.addEventListener("click", () => {
  if (quantity === 0) {
    return quantity;
  }
  quantity = quantity - 1;
  quantitySpan.innerText = quantity.toString();
});

plusButton.addEventListener("click", () => {
  if (quantity === 4) {
    return quantity;
  }
  quantity = quantity + 1;
  quantitySpan.innerText = quantity.toString();
});

addToCartButton.addEventListener("click", () => {
  if (quantity === 0) {
    return true;
  }
  console.log(`Cart Products : ${quantity}`);
  cartNumber.innerHTML = `
        <span class="bg-warning text-center text-light rounded-circle fw-bold" style="width: 15px; position: absolute; font-size: 0.8rem; margin-top: -30px;">${quantity}</span>
    `;
});

cartButton.addEventListener("click", () => {
  cartIsOpen = !cartIsOpen;
  console.log(cartIsOpen);
  if (cartIsOpen) {
    cartModal.innerHTML = `
            <div class="container col-2" style="border: 1px solid red; position: fixed; top: 0; left: 0; background-color: gray;">
                <h1>Soy el modal</h1>
            </div>
        `;
  } else {
    cartModal.innerHTML = ``;
  }
});
