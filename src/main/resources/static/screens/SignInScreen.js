import { signin } from "../api.js";
import { getUserInfo, setUserInfo } from "../localStorage.js";
import { showLoading, hideLoading, showMessage, redirectUser } from "../utils.js";

const SigninScreen = {
  after_render: () => {
    document
      .getElementById("signin-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        showLoading();
        const data = await signin({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfo(data);
          document.location.hash = "/";
          // redirectUser();
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      redirectUser();
    }
    return `
    <div class="form-container">
      <form id="signin-form">
        <ul class="form-items shadow-2xl">
          <li>
            <h1>Sign-In</h1>
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
            <button type="submit" class="primary">Signin</button>
          </li>
          <li>
            <div>
              New User?
              <a class="font-bold" href="/#/register">Create your account </a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;
  },
};
export default SigninScreen;
