/* eslint-disable arrow-body-style */
import {
  parseRequestUrl,
  showLoading,
  showMessage,
  hideLoading,
} from "../utils.js";
import { createProduct } from "../api.js";

const ProductCreateScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document
      .getElementById("edit-product-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        if(e.target.id === 'back-button')
          return;
        showLoading();
        const data = await createProduct({
          id: request.id,
          name: document.getElementById("name").value,
          price: document.getElementById("price").value,
          image: document.getElementById("image").value,
          brand: document.getElementById("brand").value,
          category: document.getElementById("category").value,
          countInStock: document.getElementById("countInStock").value,
          description: document.getElementById("description").value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          document.location.hash = "/productlist";
        }
      });
    document
    .getElementById("back-button")
    .addEventListener("click", (e)=>{
      e.preventDefault();
      document.location.hash = `/productlist`;
    })
  },
  render: async () => {
    return `
    <div class="content">
      <div class="form-container">
        <form id="edit-product-form">
          <ul class="form-items shadow-2xl">
            <li>
              <h1>Create New Product</h1>
            </li>
            <li>
              <label for="name">Name</label>
              <input type="text" name="name" value="Sample Jeans" id="name" />
            </li>
            <li>
              <label for="price">Price</label>
              <input type="text" name="price" value="29.90" id="price" />
            </li>
            <li>
              <label for="image">Image URL</label>
              <input type="text" name="image" value="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/437161/sub/goods_437161_sub13.jpg?width=1600&impolicy=quality_75" id="image" />
              <!--input type="file" name="image-file" id="image-file" /-->
            </li>
            <li>
              <label for="brand">Brand</label>
              <input type="text" name="brand" value="Sample Brand" id="brand" />
            </li>
            <li>
              <label for="countInStock">Count In Stock</label>
              <input type="number" name="countInStock" value="10" id="countInStock" />
            </li>
            <li>
              <label for="category">Category</label>
              <input type="text" name="category" value="Jean" id="category" />
            </li>
            <li>
              <label for="description">Description</label>
              <input type="text" name="description" value="Sample Description" id="description" />
            </li>
            <li>
              <button type="submit" class="primary">Create</button>
            </li>
            <li>
              <button id="back-button" class="primary">Back</button>
            </li>
          </ul>
        </form>
      </div>

    </div>
    `;
  },
};
export default ProductCreateScreen;
