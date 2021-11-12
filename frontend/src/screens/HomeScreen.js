import Rating from '../components/Rating.js';
// import { getProducts } from "../api.js";
import { getProductsSpring } from "../api_spring.js";
import { parseRequestUrl } from "../utils.js";

// import data from '../data.js'

const HomeScreen = {
  after_render: () => {},

  render: async () => {
    const { value } = parseRequestUrl();
    const products = await getProductsSpring({ searchKeyword: value });
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
  
    // const { products } = data;
    console.log(products);
    return `
    <ul class="products">
      ${products
        .map(
          (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product.id}">
            <img src="${product.image}" alt="${product.name}" />
          </a>
        <div class="product-name">
          <a href="/#/product/${product.id}">
            ${product.name}
          </a>
        </div>
        <div class="product-rating">
          ${Rating.render({ value: product.rating, text: `${product.numReviews} reviews`})}
        </div>
        <div class="product-brand">
          ${product.brand}
        </div>
        <div class="product-price">
          $${product.price}
        </div>
        </div>
      </li>
      `
        )
        .join("\n")}
    </ul>`;
  },
};
export default HomeScreen;
