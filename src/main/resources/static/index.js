/* eslint-disable import/no-named-as-default-member */
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";
import Header from "./components/Header.js"
import HomeScreen from "./screens/HomeScreen.js";
import ApparelScreen from "./screens/ApparelScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js"
import SignInScreen from "./screens/SignInScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import AboutUs from "./screens/AboutUs.js";
import CategoryJacketScreen from "./screens/CategoryJacketScreen.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import CategoryTshirtScreen from "./screens/CategoryTshirtScreen.js";
import CategoryJeanScreen from "./screens/CategoryJeanScreen.js";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import ProductCreateScreen from "./screens/ProductCreateScreen.js";
import OrderListScreen from "./screens/OrderListScreen.js";
// import Aside from "./components/Aside";
// import DashboardScreen from "./screens/DashboardScreen.js";


const routes = {
  "/": HomeScreen,
  "/apparel": ApparelScreen,
  "/storejackets": CategoryJacketScreen,
  "/storetshirts": CategoryTshirtScreen,
  "/storejeans": CategoryJeanScreen,
  "/product/:id": ProductScreen,
  "/product/:id/edit": ProductEditScreen,
  "/product/:id/create": ProductCreateScreen,
  "/productlist": ProductListScreen,
  "/cart/:id": CartScreen,
  "/order/:id": OrderScreen,
  "/cart": CartScreen,
  "/signin": SignInScreen,
  "/register": RegisterScreen,
  "/profile": ProfileScreen,
  "/shipping": ShippingScreen,
  "/payment": PaymentScreen,
  "/placeorder": PlaceOrderScreen,
  // "/dashboard": DashboardScreen,
  "/aboutus": AboutUs,
  "/orderlist": OrderListScreen,
};

const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? `/:id` : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const header = document.getElementById("header-container");
  header.innerHTML = Header.render();
  Header.after_render();
  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
  if (screen.after_render) screen.after_render();
  hideLoading();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);