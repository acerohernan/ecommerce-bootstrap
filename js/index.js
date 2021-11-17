//Set quantity of Porducts
const quantitySpan = document.getElementById("quantity");
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");

//Cart
const addToCartButton = document.getElementById("addToCartButton");
const cartNumber = document.getElementById("cartNumber");
const cartButton = document.getElementById("cartButton");
const cartModal = document.getElementById("modal");
const trashButton = document.getElementById("trashButton");

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
  cartNumber.innerHTML = `
        <span class="bg-warning text-center text-light rounded-circle fw-bold" style="width: 15px; position: absolute; font-size: 0.8rem; margin-top: -30px;">${quantity}</span>
    `;
});

/* Trash button function */
function eliminateProduct() {
  console.log("trash");
}

cartButton.addEventListener("click", () => {
  cartIsOpen = !cartIsOpen;
  if (cartIsOpen) {
    cartModal.innerHTML = `
            <div class="container col-3 card border-gray" style="position: fixed; top: 80px; right: 110px;">
              <div class="card-body">
                
                    <h4 class="card-title border-bottom py-2">Cart</h4>
                    <div class="card-text py-3 style="max-width: 320px; overflow: scroll;">
                      
                    ${
                      quantity > 0
                        ? `
                      <div class="row">
                        <div class="col-4 d-flex align-items-center justify-content-center">
                          <img src="../images/image-product-1.jpg" class="col-12 rounded"/>
                        </div>
                        <div class="col">
                          <div class="row">
                            <span>Fall Limited Edition Sneakers</span>
                          </div>
                          <div class="row my-2">
                            <span class="price">$125.00 x ${quantity}</span>
                            <span class="fw-bold price">${
                              quantity * 125
                            }.00</span>
                          </div>
                        </div>
                        <div class="col-2 d-flex align-items-center">
                          <button class="btn btn-light bg-white border border-white" id="trashButton">
                            <img src="../images/icon-delete.svg" alt="delete-icon"/>
                          </button>
                        </div>
                      </div>
                      `
                        : ``
                    }
                    ${quantity === 0 ? "<h6>Cart is empty</h6>" : ""}
                      </div>
                    </div>
                   ${
                     quantity > 0
                       ? `
                    <button class="btn btn-warning rounded w-100 text-center text-light my-2">Checkout</button>
                   `
                       : ``
                   }     
                </div>
            </div>
        `;
  } else {
    cartModal.innerHTML = ``;
  }
});


