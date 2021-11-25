export const getCartItems = () =>{
  const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
  return cartItems;
}

export const getCartItemsWithoutCountInStock = () => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  
    if(cartItems.length !== 0) {
      // eslint-disable-next-line no-param-reassign
      cartItems.forEach(item => {delete item.countInStock})
    }

  return cartItems;
};

export const setCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const setUserInfo = ({
  _id = "",
  name = "",
  email = "",
  password = "",
  token = "",
  isAdmin = false,
}) => {
  localStorage.setItem(
    "userInfo",
    JSON.stringify({
      _id,
      name,
      email,
      password,
      token,
      isAdmin,
    })
  );
};
export const clearUser = () => {
  localStorage.removeItem("userInfo");
};
export const getUserInfo = () => localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : { name: "", email: "", password: "" };

export const getShipping = () => {
  const shipping = localStorage.getItem("shipping")
    ? JSON.parse(localStorage.getItem("shipping"))
    : {
        address: "",
        city: "",
        postalCode: "",
        country: "",
      };
  // const temp = JSON.parse(localStorage.getItem("shipping"));
  // const shipping = temp ? `${temp.address} ${temp.city} ${temp.postalCode} ${temp.country}`:'';
  return shipping;
};
export const setShipping = ({
  address = "",
  city = "",
  postalCode = "",
  country = "",
}) => {
  localStorage.setItem(
    "shipping",
    JSON.stringify({ address, city, postalCode, country })
  );
};

// export const setShipping = (address) => {
//   localStorage.setItem("shipping", address);
// }

export const getPayment = () => {
  const payment = localStorage.getItem("payment")
    ? JSON.parse(localStorage.getItem("payment"))
    : {
        paymentMethod: "paypal",
      };
  return payment;
};
export const setPayment = ({ paymentMethod = "paypal" }) => {
  localStorage.setItem("payment", JSON.stringify({ paymentMethod }));
};
export const cleanCart = () => {
  localStorage.removeItem("cartItems");
};

