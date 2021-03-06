import { register } from "../api.js";
import { getUserInfo, setUserInfo } from '../localStorage.js';
import { showLoading, hideLoading, showMessage, redirectUser } from '../utils.js';

const validateForm = () => {
  const password = document.getElementById('password').value;
  const repassword = document.getElementById('repassword').value;
  if(password !== repassword) {
    showMessage("Password and ReEnter Password not the same");
    return false;
  }
  return true;
}


const RegisterScreen = {
  after_render: () => {
    document
      .getElementById('register-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        showLoading();
        const data = await register({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
          isAdmin: false,
        });
        hideLoading();
        console.log(data)
        if (data.error) {
          showMessage(data.error);
        } else {
          if (data.message) showMessage(data.message);
          setUserInfo(data);
          redirectUser();
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }
    return `
    <div class="form-container">
      <form id="register-form">
        <ul class="form-items shadow-2xl">
          <li>
            <h1>Create Account</h1>
          </li>
          <li>
            <label for="name">Name</label>
            <input type="name" name="name" id="name" required/>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required/>
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required/>
          </li>
          <li>
            <label for="repassword">Re-Enter Password</label>
            <input type="password" name="repassword" id="repassword" required/>
          </li>
          <li>
            <button type="submit" class="primary">Register</button>
          </li>
          <li>
            <div>
              Already have an account?
              <a class="font-bold" href="/#/signin">Sign-In </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },
};
export default RegisterScreen;
