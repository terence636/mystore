/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import DashboardMenu from '../components/DashboardMenu.js';
import { getProductsSpring, deleteProductSpring } from '../api_spring.js';
import { showLoading, hideLoading, reRender, showMessage } from '../utils.js';

const ProductListScreen = {
  after_render: () => {
    document
      .getElementById('create-product-button')
      .addEventListener('click', async () => {
        // const data = await createProductSpring();
        document.location.hash = `/product/999/create`;
      });
    const editButtons = document.getElementsByClassName('edit-button');
    Array.from(editButtons).forEach((editButton) => {
      editButton.addEventListener('click', () => {
        document.location.hash = `/product/${editButton.id}/edit`;
      });
    });
    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', async () => {
        if (confirm('Are you sure to delete this product?')) {
          showLoading();
          const data = await deleteProductSpring(deleteButton.id);
          if (data.error) {
            showMessage(data.error);
          } else {
            showMessage(data.message)
            // console.log({data})
            reRender(ProductListScreen);
          }
          hideLoading();
        }
      });
    });
  },
  render: async () => {
    const products = await getProductsSpring();
    // console.log(products)
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: 'orders' })}
    <div class="dashboard-content">
      <h1>Orders</h1>
      <button id="create-product-button" class="primary px-4 mb-8">
        Create Product
      </button>
      <div class="product-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th class="tr-action">ACTION</th>
            <tr>
          </thead>
          <tbody>
            ${products
              .map(
                (product) => `
            <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>${product.category}</td>
              <td>${product.brand}</td>
              <td>
              <button id="${product.id}" class="edit-button">Edit</button>
              <button id="${product.id}" class="delete-button">Delete</button>
              </td>
            </tr>
            `
              )
              .join('\n')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    `;
  },
};
export default ProductListScreen;
