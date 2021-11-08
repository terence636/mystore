import { parseRequestUrl, reRender }  from "../utils.js";
import { getProduct } from '../api.js';
import { getCartItems, setCartItems } from "../localStorage.js";


const addToCart = async (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find(x => x.productId === item.productId);
  if(existItem) {
    if(forceUpdate) {
      cartItems = cartItems.map((cartItem) =>
        cartItem.productId === existItem.productId ? item : cartItem
      );
    }
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  if(forceUpdate)
    // eslint-disable-next-line no-use-before-define
    reRender(CartScreen);
  
}

const removeFromCart = (id) => {
  setCartItems(getCartItems().filter(x=>x.productId !== id))
  // for same id with URL will need to change URL to /cart or else the item will
  // be added in again after being remove from local storage.
  // And by changing the URL, it will auto invoke the router() function again
  if( id === parseRequestUrl().id)
    document.location.hash = `/cart`; 
  else
    // eslint-disable-next-line no-use-before-define
    reRender(CartScreen);
}


const CartScreen = {

  after_render: () => {
    const qtySelects = document.getElementsByClassName("qty-select");
    Array.from(qtySelects).forEach(qtySelect=>{
      qtySelect.addEventListener('change', (e)=>{
        const item = getCartItems().find(x=>x.productId === qtySelect.id)
        addToCart({...item, qty: Number(e.target.value)},true)
      })
    })
    const deleteButtons = document.getElementsByClassName("delete-button");
    // console.log(deleteButtons)
    Array.from(deleteButtons).forEach(deleteButton => {
      deleteButton.addEventListener('click', () => {
        removeFromCart(deleteButton.id);
      })
    })
    const checkoutButton = document.getElementById("checkout-button");  
    checkoutButton.addEventListener('click', () => {
      document.location.hash = '/signin';
    })
  },

  render: async () => {
    const request = parseRequestUrl();
    if(request.id) {
      const product = await getProduct(request.id);
      addToCart({
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty: 1,
      })
    }
    const cartItems = getCartItems();
    return `
    <div class="content cart">
      <div class="cart-list">
        <ul class="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          ${
            cartItems.length === 0
              ? '<div>Cart is empty. <a href="/#/">Go Shopping</a>'
              : cartItems
                  .map(
                    (item) => `
            <li>
              <div class="cart-image">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="cart-name">
                <div>
                  <a href="/#/product/${item.productId}">
                    ${item.name}
                  </a>
                </div>
                <div>
                  Qty: 
                  <select class="qty-select" id="${item.productId}">
                  ${[...Array(item.countInStock).keys()]
                    .map((x) =>
                      item.qty === x + 1
                        ? `<option selected value="${x + 1}">${x + 1}</option>`
                        : `<option  value="${x + 1}">${x + 1}</option>`
                    )
                    .join("\n")}  
                  </select>
                  <button type="button" class="delete-button" id="${
                    item.productId
                  }">
                    Delete
                  </button>
                </div>
              </div>
              <div class="cart-price">
                $${item.price}
              </div>
            </li>
            `
                  )
                  .join("\n")
          } 
        </ul>
      </div>
      <div class="cart-action">
          <h3>
            Subtotal (${cartItems.reduce((a, c) => a + c.qty, 0)} items)
            :
            $${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h3>
          <button class="primary fw" id="checkout-button" >
            Proceed to Checkout
          </button>
      </div>
    </div>
    `;
  },

}

export default CartScreen;