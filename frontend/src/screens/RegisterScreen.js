// import { register } from '../api.js';
import { registerSpring } from "../api_spring.js";
import { register } from "../api.js"
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
        // await register({
        //   name: document.getElementById("name").value,
        //   email: document.getElementById("email").value,
        //   password: document.getElementById("password").value,
        // });
        const data = await registerSpring({
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
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
        <ul class="form-items">
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
              <a href="/#/signin">Sign-In </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },
};
export default RegisterScreen;
