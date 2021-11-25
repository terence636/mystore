import {
  parseRequestUrl,
  showLoading,
  hideLoading,
  showMessage,
  reRender,
} from '../utils.js';
// import { getPaypalClientId, payOrder, deliverOrder } from '../api.js';

import {
  getOrderSpring,
  // getPaypalClientIdSpring,
  // payOrderSpring,
  deliverOrderSpring,
} from "../api_spring.js";
import { getUserInfo } from '../localStorage.js';

// const handlePayment = (clientId, totalPrice) => {
//   window.paypal.Button.render(
//     {
//       env: "sandbox",
//       client: {
//         sandbox: clientId,
//         production: "",
//       },
//       locale: "en_US",
//       style: {
//         size: "responsive",
//         color: "gold",
//         shape: "pill",
//       },

//       commit: true,
//       payment(data, actions) {
//         return actions.payment.create({
//           transactions: [
//             {
//               amount: {
//                 total: totalPrice,
//                 currency: "USD",
//               },
//             },
//           ],
//         });
//       },
//       onAuthorize(data, actions) {
//         return actions.payment.execute().then(async () => {
//           showLoading();
//           await payOrderSpring(parseRequestUrl().id, {
//             orderID: data.orderID,
//             payerID: data.payerID,
//             paymentID: data.paymentID,
//           });
//           hideLoading();
//           showMessage("Payment was successfull.", () => {
//             // eslint-disable-next-line no-use-before-define
//             reRender(OrderScreen);
//           });
//         });
//       },
//     },
//     "#paypal-button"
//   ).then(() => {
//     hideLoading();
//   });
// };

// const addPaypalSdk = async (totalPrice) => {
//   const {clientId} = await getPaypalClientIdSpring();
//   console.log(clientId)
//   showLoading();
//   if (!window.paypal) {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = "https://www.paypalobjects.com/api/checkout.js";
//     script.async = true;
//     script.onload = () => handlePayment(clientId, totalPrice);
//     document.body.appendChild(script);
//   } else {
//     handlePayment(clientId, totalPrice);
//   }
// };

const OrderScreen = {
  after_render: async () => {
    const request = parseRequestUrl();
    if (document.getElementById('deliver-order-button')) {
      document.addEventListener('click', async () => {
        showLoading();
        await deliverOrderSpring(request.id);
        hideLoading();
        showMessage('Order Delivered.');
        reRender(OrderScreen);
      });
    }

    const payButton = document.getElementById('pay-button');
    payButton.addEventListener('click',async ()=>{
      showLoading();
      // await payOrderSpring(request.id);
      hideLoading();
      showMessage('Thanks for your payment. Order confirmed')
      reRender(OrderScreen);
    })
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
    } = await getOrderSpring(request.id);
    // if (!isPaid) {
    //   addPaypalSdk(totalPrice);
    // }
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
            <li class="total"><div>Order Total</div><div>$${totalPrice?.toFixed(2)}</div></li>                  
            <li><button class="primary fw" id="pay-button">PAY</button></li>
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
