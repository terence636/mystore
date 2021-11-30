/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import { update, getMyOrders, deleteOrder } from "../api.js";
import { clearUser, getUserInfo, setUserInfo } from '../localStorage.js';
import { showLoading, hideLoading, showMessage, redirectUser, reRender, printDate, printTime  } from '../utils.js';


const ProfileScreen = {

  orders:[],

  after_render: async function() {
    document
      .getElementById("signout-button")
      .addEventListener('click', ()=>{
          clearUser();
          document.location.hash = "/";
      })
    document
      .getElementById('profile-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading();
        const { isAdmin }  = getUserInfo(); 
        const data = await update({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
          isAdmin
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          const { token } = getUserInfo();
          setUserInfo( { ...data, token } );
          redirectUser();
        }
      });
      this.orders.forEach(order=>{
        const orderId = document.getElementById(`delete-order-${order._id}`)
        orderId.addEventListener('click', async ()=>{
          if (confirm('Are you sure to delete this order?')) {
          const { message } = await deleteOrder(order._id)
          // console.log(message)
          showMessage(message)
          reRender(ProfileScreen)
          }
        })
      })
      this.orders.forEach((order) => {
        const orderId = document.getElementById(`${order._id}`);
        orderId.addEventListener("click", async () => {
          document.location.hash = `/order/${order._id}`;
          }
        );
      });
      
  },

  render: async function() {
    const {name, email } = getUserInfo();
    if (!name) {
      document.location.hash = "/";
    }
    const orders = await getMyOrders();
    this.orders = orders;
    return `
    <div class="content profile">
      <div class="profile-info mb-16">
      <div class="form-container">
      <form id="profile-form">
        <ul class="form-items">
          <li>
            <h1>User Profile</h1>
          </li>
          <li>
            <label for="name">Name</label>
            <input type="name" name="name" id="name" value="${name}" />
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" value="${email}" />
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <button type="submit" class="primary">Update</button>
          </li>
          <li>
          <button type="button" id="signout-button" >Sign Out</button>
        </li>        
        </ul>
      </form>
      </div>
    </div>
    <div class="profile-orders">
      <!--h2>Order History</h2-->
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>TOTAL</th>
              <!--th>PAID</th-->
              <!--th>DELIVERED</th-->
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
            <td>${printDate(order.createdAt)}</td>
            <td>${printTime(order.createdAt)}</td>
            <td>$${order.totalPrice}</td>
            <!--td>${order.paidAt || "No"}</td-->
            <!--td>${order.deliveryAt || "No"}</td-->
            <!--td><a href="/#/order/${order._id}">DETAILS</a> 
                <span id="delete-order-${
                  order._id
                }" class="px-6 cursor-pointer hover:text-yellow-500">DELETE</span>
            </td-->
            <td>
            <button id="${order._id}" class="details-button">Details</button>
            <button id="delete-order-${order._id}" class="delete-button">Delete</button>
            </td>
          </tr>
          `).join("\n")
          }
          </tbody>
        </table>
      </div>
    </div>
    `;
  },
};
export default ProfileScreen;
