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
            <div class="container col-3 card" style="border: 1px solid red; position: fixed; top: 0; left: 0; border: 1px solid gray">
              <div class="card-body py-4">
                
                    <h4 class="card-title border-bottom py-2">Cart</h4>
                    <div class="card-text py-3 style="max-width: 320px; overflow: scroll;">
                      
                    ${quantity > 0 &&     }
                        
                        <div class="col-2 d-flex align-items-center">
                          <button class="btn btn-light bg-white border border-white">
                            <img src="../images/icon-delete.svg" alt="delete-icon"/>
                          </button>
                        </div>

                      </div>
                    </div>
                    <button class="btn btn-warning rounded w-100 text-center text-light my-2">Checkout</button>
                </div>
            </div>
        `;
  } else {
    cartModal.innerHTML = ``;
  }
});
