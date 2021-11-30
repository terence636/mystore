import {
  parseRequestUrl,
  showLoading,
  hideLoading,
  showMessage,
  reRender,
} from '../utils.js';

import {
  getOrder,
  payOrder,
  deliverOrder,
} from "../api.js";
import { getUserInfo } from '../localStorage.js';

const OrderScreen = {
  after_render: async () => {
    const request = parseRequestUrl();
    if (document.getElementById('deliver-order-button')) {
      const deliverButton = document.getElementById("deliver-order-button");
      deliverButton.addEventListener("click", async () => {
        showLoading();
        await deliverOrder(request.id);
        hideLoading();
        showMessage("Order Delivered.");
        reRender(OrderScreen);
      });
    }
    if(document.getElementById('pay-button')) {
      const payButton = document.getElementById('pay-button');
      payButton.addEventListener('click',async ()=>{
      showLoading();
      await payOrder(request.id);
      hideLoading();
      showMessage('Thank you for your payment. Order confirmed')
      reRender(OrderScreen);
    })
  }
  },

  render: async () => {
    const { isAdmin } = getUserInfo();
    const request = parseRequestUrl();
    const {
      _id,
      shipping,
      paymentMethod,
      orderItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isDelivered,
      // deliveredAt,
      isPaid,
      // paidAt,
    } = await getOrder(request.id);
    return `
    <div>
      <div class="order">
        <div class="order-info">
          <div>
            <h2 class="font-bold">Order No</h2>
            <div>
            ${_id}
            </div>
          </div>
          <div>
            <h2 class="font-bold">Shipping</h2>
            <div>
            ${shipping}
            </div>
            ${
              isDelivered
                ? `<div class="success">[ Delivered ]</div>`
                : `<div class="error">[ Not Delivered ]</div>`
            }
          </div>
          <div>
            <h2 class="font-bold">Payment</h2>
            <div>
              Payment Method : ${paymentMethod}
            </div>
            ${
              isPaid
                ? `<div class="success">[ Paid ]</div>`
                : `<div class="error">[ Not Paid ]</div>`
            }
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
                  <div class="cart-price"> $${item.price?.toFixed(2)}</div>
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
            <li class="total"><div>Order Total</div><div>$${totalPrice?.toFixed(
              2
            )}</div></li>                  
            <li> ${
              !isPaid
                ? `<button class="primary fw" id="pay-button">Pay</button>`
                : ""
            }</li>
            <!--li><div class="primary fw" id="paypal-button"></div></li-->
            <li>
              ${
                isPaid && !isDelivered && isAdmin
                  ? `<button id="deliver-order-button" class="primary fw">Deliver Order</button>`
                  : ""
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
  },
};
export default OrderScreen;
