/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import Rating from "../components/Rating.js";
import { getProducts } from "../api.js";
import { reRender } from "../utils.js";

const ApparelScreen = {
    sort:"none",

    after_render: async function() {
        const sortAscPrice = document.getElementById("asc-price");
        const sortDesPrice = document.getElementById("des-price");
        const sortAscRating = document.getElementById("asc-rating");
        const sortDesRating = document.getElementById("des-rating");
        sortAscPrice.addEventListener("click", () => {
            this.sort = "ascPrice";
            reRender(ApparelScreen);
        });
        sortDesPrice.addEventListener("click", () => {
            this.sort = "desPrice";
            reRender(ApparelScreen);
        });
        sortAscRating.addEventListener("click", () => {
            this.sort = "ascRating";
            reRender(ApparelScreen);
        });
        sortDesRating.addEventListener("click", () => {
            this.sort = "desRating";
            reRender(ApparelScreen);
        });
    },

    render: async function() {
    const products = await getProducts("all");
    if (products.error) { return `<div class="error">${products.error}</div>`;}
    if(this.sort === "ascPrice")
        products.sort((a, b) => a.price - b.price);
    if (this.sort === "desPrice")
        products.sort((a, b) => b.price - a.price);
    if (this.sort === "ascRating")
        products.sort((a, b) => a.rating - b.rating);
    if (this.sort === "desRating")
        products.sort((a, b) => b.rating - a.rating);    

    return `


<!--homescreen products sections-->
<section>
<div class="carousel relative container mx-auto" style="max-width:1600px;">
    <nav id="Category" class="w-full px-6 mt-20 border-t border-gray-400">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">


        <span class="uppercase tracking-wide font-bold text-gray-800 text-4xl ">
        
        </span>

        <div class="dropdown">
            <span class="inline-block flex">
                Sort
                <svg class="fill-current hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
            </span>
            <div class="dropdown-content absolute z-10 right-8 lg:right-16 bg-blue-100 shadow-2xl hidden">
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="asc-rating">Asc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="des-rating">Desc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="asc-price">Asc Price</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="des-price">Desc Price</span>
            </div>
        </div>
    </div>
    </nav>

    
    <ul class="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-x-8 sm:gap-x-24">
        ${products
          .map(
            (product) =>
              `
        <li>
        <div class="product">
    
          <div class="flex justify-center">
            <a href="/#/product/${product.id}">
                <img class="hover:grow hover:shadow-lg" src="${
                  product.image
                }" alt="${product.name}" />
            </a>
            </div>
                <p class="pt-3 flex items-center justify-between">
                    <p class="product-name">
                    <a href="/#/product/${product.id}">${product.name}</a></p>
                </p>
                <P class="product-rating">${Rating.render({
                  value: product.rating,
                  text: `${product.numReviews} reviews`,
                })}</p>
                <p class="product-brand">${product.brand}</p>
                <p class="pt-1 text-gray-900">$${product.price.toFixed(2)}</p>
             
        </div>
        </li>
        `
          )
          .join("\n")}
    </ul>

        
    </div>
</div>
</section>
    `;
    },
};
export default ApparelScreen;
