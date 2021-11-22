import { getUserInfo } from '../localStorage.js'

const Header = {
  after_render: () => {},
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return `
  <section class="relative">
  <nav class="flex justify-between  bg-green-1000 text-black fixed top-0 z-10 w-full">
    <div class="px-5 xl:px-12 py-6 flex w-full justify-between items-center">
      <a class="text-3xl font-bold font-heading" href="/#/">
        <img class="h-10" src="/images/makito.png" alt="logo">
      </a>
      <!-- Nav Links -->
      <ul class="hidden sm:flex mx-auto font-semibold font-heading space-x-12">
        <li><a class="hover:text-orange-200" href="/#/">Home</a></li>
        <li><a class="hover:text-orange-200" href="/#/storejeans">Jeans</a></li>
        <li><a class="hover:text-orange-200" href="/#/storetshirts">T-shirts</a></li>
        <li><a class="hover:text-orange-200" href="/#/storejackets">Jackets</a></li>
        <li><a class="hover:text-orange-200" href="/#/apparel">All Apparel</a></li>
        ${
          isAdmin
            ? `<li><a class="hover:text-orange-200" href="/#/dashboard">Dashboard</a></li>`
            : ""
        }  
        </li>
        <li><a class="category hover:text-orange-200" href="/#/aboutus">About Us</a></li>
      </ul>
      <!-- Header Icons -->
      <div class="flex items-center space-x-5">
        <!--a class="hover:text-orange-200" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </a-->
        <a class="flex items-center hover:text-orange-200" href="/#/cart">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          <!--span class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
              </span>
            </span-->
        </a>
        <!-- Sign In / Register      -->
        ${
          name
            ? `<a href="/#/profile">${name.toUpperCase()}</a>`
            : `<a class="flex items-center hover:text-orange-200" href="/#/signin">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 hover:text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </a>`
        }
        <div class="sm:hidden navbar-burger self-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 hover:text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </div>
      </div>
    </div>
  </nav>
  </section>
    `;
  },
}

export default Header;