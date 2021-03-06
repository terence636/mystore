import {
  parseRequestUrl,
  showLoading,
  showMessage,
  hideLoading,
} from "../utils.js";
import { getProduct, updateProduct } from "../api.js";

const ProductEditScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document
      .getElementById("edit-product-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await updateProduct({
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
    .addEventListener("click", ()=>{
      document.location.hash = `/productlist`;
    })
  },
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    return `
    <div class="content">
      <div class="form-container">
        <form id="edit-product-form">
          <ul class="form-items shadow-2xl">
            <li>
              <h1>Edit Product ${product.id}</h1>
            </li>
            <li>
              <label for="name">Name</label>
              <input type="text" name="name" value="${product.name}" id="name" />
            </li>
            <li>
              <label for="price">Price</label>
              <input type="text" name="price" value="${product.price}" id="price" />
            </li>
            <li>
              <label for="image">Image URL</label>
              <input type="text" name="image" value="${product.image}" id="image" />
              <!--input type="file" name="image-file" id="image-file" /-->
            </li>
            <li>
              <label for="brand">Brand</label>
              <input type="text" name="brand" value="${product.brand}" id="brand" />
            </li>
            <li>
              <label for="countInStock">Count In Stock</label>
              <input type="number" name="countInStock" value="${product.countInStock}" id="countInStock" />
            </li>
            <li>
              <label for="category">Category</label>
              <input type="text" name="category" value="${product.category}" id="category" />
            </li>
            <li>
              <label for="description">Description</label>
              <input type="text" name="description" value="${product.description}" id="description" />
            </li>
            <li>
              <button type="submit" class="primary">Update</button>
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
export default ProductEditScreen;
