import {
  getCartItemsWithoutCountInStock,
  getShipping,
  getPayment,
  cleanCart,
  getUserInfo,
} from "../localStorage.js";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { showLoading, hideLoading, showMessage } from "../utils.js";
// import { createOrder } from "../api.js";
import { createOrderSpring } from "../api_spring.js";

const convertCartToOrder = () => {
  // const orderItems = getCartItems();
  const orderItems = getCartItemsWithoutCountInStock();
  console.log(orderItems)
  if (orderItems.length === 0) {
    document.location.hash = "/cart";
  }
  const shippingTemp = getShipping();
  const shipping = `${shippingTemp.address} ${shippingTemp.postalCode} ${shippingTemp.city} ${shippingTemp.country}`;
  if (!shippingTemp.address) {
    document.location.hash = "/shipping";
  } 

  const paymentTemp = getPayment();
  const { paymentMethod } = paymentTemp;
  if (!paymentTemp.paymentMethod) {
    document.location.hash = "/payment";
  }
  const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  return {
    orderItems,
    shipping,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
};
const PlaceOrderScreen = {
  after_render: async () => {
    document
      .getElementById("placeorder-button")
      .addEventListener("click", async () => {
        const order = convertCartToOrder();
        const { _id } = getUserInfo();
        order.user = _id;
        // order.user = 1;
        showLoading();
        console.log(order);
        const data = await createOrderSpring(order);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          cleanCart();
          document.location.hash = `/order/${data.order._id}`;
        }
      });
  },
  render: () => {
    const {
      orderItems,
      shipping,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = convertCartToOrder();
      // ${shipping.address}, ${shipping.city}, ${shipping.postalCode}, 
      //        ${shipping.country}
    return `
    <div>
      ${CheckoutSteps.render({
        step1: true,
        step2: true,
        step3: true,
        step4: true,
      })}
      <div class="order">
        <div class="order-info">
          <div>
            <h2 class="font-bold">Shipping</h2>
            <div>
            ${shipping}
            </div>
          </div>
          <div>
            <h2 class="font-bold">Payment</h2>
            <div>
              Payment Method : ${paymentMethod}
            </div>
          </div>
          <div>
            <ul class="cart-list-container">
              <li>
                <h2 class="font-bold">Shopping Cart</h2>
                <div>Price</div>
              </li>
              ${orderItems
                .map(
                  (item) => `
                <li>
                  <div class="cart-image">
                    <img src="${item.image}" alt="${item.name}" />
                  </div>
                  <div class="cart-name">
                    <div>
                      <a href="/#/product/${item.productId}">${item.name} </a>
                    </div>
                    <div> Qty: ${item.qty} </div>
                  </div>
                  <div class="cart-price"> $${item.price.toFixed(2)}</div>
                </li>
                `
                )
                .join("\n")}
            </ul>
          </div>
        </div>
        <div class="order-action">
          <ul>
            <li><h2 class="font-bold">Order Summary</h2></li>
            <li><div>Items</div><div>$${itemsPrice?.toFixed(2)}</div></li>
            <li><div>Shipping</div><div>$${shippingPrice?.toFixed(2)}</div></li>
            <li><div>Tax</div><div>$${taxPrice?.toFixed(2)}</div></li>
            <li class="total"><div>Order Total</div><div>$${totalPrice?.toFixed(2)}</div></li> 
            <li>
            <button id="placeorder-button" class="primary fw">
              Place Order
            </button></li>
          </ul>
        </div>
      </div>
    </div>
    `;
  },
};
export default PlaceOrderScreen;
