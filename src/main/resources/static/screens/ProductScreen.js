// import { getProduct } from "../api.js";
import { getProduct } from "../api.js";
import { hideLoading, parseRequestUrl, showLoading } from "../utils.js";
import Rating from "../components/Rating.js";

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById('add-button').addEventListener('click', ()=>{
      document.location.hash = (`/cart/${request.id}`);
    })
  },
  render: async () => {
    const request = parseRequestUrl();
    showLoading();
    const product = await getProduct(request.id);
    hideLoading();
    if(product.error){
      return `<div>${product.error}</div>`
    }
    return `
    <div class="content">
      <!--div class="back-to-result">
        <a href="/#/">Back to result</a>
      </div-->
      <div class="details">
        <div class="details-image">
          <img src="${product.image}" alt="product image" />
        </div>
        <div class="details-info">
          <ul>
            <li>
              <h1 class="font-bold">${product.name}</h1>
            </li>
            <li>
            ${Rating.render({
              value: product.rating,
              text: `${product.numReviews} reviews`,
            })}
            </li>
            <li>
              Price: <strong>$${product.price.toFixed(2)}</strong>
            </li>
            <li><br>
              <div>
                ${product.description}
              </div>
            </li>
          </ul>
        </div>
        <div class="details-action">
            <ul>
              <li>
                Price: $${product.price.toFixed(2)}
              </li>
              <li>
                Status : 
                  ${
                    product.countInStock > 0
                      ? `<span class="success">In Stock</span>`
                      : `<span class="error">Unavailable</span>`
                  }
              </li>
              <li>
                  <button id="add-button" class="fw primary">Add to Cart </div>
            </ul>
      </div>
      </div>
      
    </div>
    `;
  },
};

export default ProductScreen;
