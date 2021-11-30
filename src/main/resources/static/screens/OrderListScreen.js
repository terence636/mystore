/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import DashboardMenu from '../components/DashboardMenu.js';
import {
  getOrders,
  deleteOrder,
  getUsers,
} from "../api.js";
import {
  showLoading,
  hideLoading,
  reRender,
  showMessage,
  printDate,
  printTime,
} from "../utils.js";

const OrderListScreen = {
  after_render: () => {
 
    const detailsButtons = document.getElementsByClassName('details-button');
    Array.from(detailsButtons).forEach((detailsButton) => {
      detailsButton.addEventListener('click', () => {
        document.location.hash = `/order/${detailsButton.id}`;
      });
    });
    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', async () => {
        if (confirm('Are you sure to delete this order?')) {
          showLoading();
          const data = await deleteOrder(deleteButton.id);
          if (data.error) {
            showMessage(data.error);
          } else {
            showMessage(data.message)
            // console.log({data})
            reRender(OrderListScreen);
          }
          hideLoading();
        }
      });
    });
  },
  render: async () => {
    const orders = await getOrders();
    const users = await getUsers();
    if(orders.lenght !== 0) {
      orders.forEach(order => {
        const cust = users.filter(user=> user.id === order.user)
        order.custname = cust[0].name;
      })
    }
    console.log(orders)
    return `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "orders" })}
    <div class="dashboard-content">
      <h1>Orders</h1>
      <div class="profile-orders">
      <!--h2>Order History</h2-->
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUST ID</th>
              <th>CUST NAME</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${
              orders.length === 0
                ? `<tr><td colspan="6">No Order Found.</tr>`
                : orders
                    .map(
                      (order) => `
          <tr>
            <td>${order._id}</td>
            <td>${order.user}</td>
            <td>${order.custname}</td>
            <td>${printDate(order.createdAt)}</td>
            <td>${printTime(order.createdAt)}</td>
            <td>$${order.totalPrice}</td>
            <td>${order.isPaid ? 'YES' : 'NO'}</td>
            <td>${order.isDelivered ? 'YES' :'NO'}</td>
            <!--td><a href="/#/order/${order._id}">DETAILS</a> 
                <span id="delete-order-${
                  order._id
                }" class="px-6 cursor-pointer hover:text-yellow-500">DELETE</span>
            </td-->
            <td>
            <button id="${order._id}" class="details-button p-1">Details</button>
            <button id="${order._id}" class="delete-button p-1 ml-2">Delete</button>
            </td>
          </tr>
          `).join("\n")
          }
          </tbody>
        </table>
      </div>
    </div>
  </div>
    `;
  },
};
export default OrderListScreen;
