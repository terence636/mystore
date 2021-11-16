import { getUserInfo } from '../localStorage.js'

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return `
      <div class="brand">
        <a href="/#/">MyGenSGStore</a>
      </div>
      <div> 
        ${
          name
            ? `<a href="/#/profile">${name.toUpperCase()}</a>`
            : `<a href="/#/signin">Sign-in</a>`
        }
        <a href="/#/cart">Cart</a>
        ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ""}
      </div>
    `;
  },

  after_render: () => {

  }
}

export default Header;