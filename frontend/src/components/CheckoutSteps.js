const CheckoutSteps = {
  render: (props) => `
    <div class="checkout-steps">
      <div class="${props.step1 ? "active" : ""}">Signin</div>
      ${
        props.step2
          ? `<div class="active"><a href="/#/shipping">Shipping</a></div>`
          : `<div class="">Shipping</div>`
      }
      ${
        props.step3
          ? `<div class="active"><a href="/#/payment">Payment</a></div>`
          : `<div class="">Payment</div>`
      }
      <div class="${props.step4 ? "active" : ""}">Place Order</div>
    </div>
    `,
};
export default CheckoutSteps;
