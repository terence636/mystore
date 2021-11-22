/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import Rating from "../components/Rating.js";
import { getProductsSpring } from "../api_spring.js";
import { reRender } from "../utils.js";

// import data from '../data.js'

const ApparelScreen = {
    sortTshirt:"none",
    sortJean:"none",
    sortJacket:"none",

    after_render: async function() {
        const sortTshirtAscPrice = document.getElementById("tshirt-asc-price");
        const sortTshirtDesPrice = document.getElementById("tshirt-des-price");
        const sortTshirtAscRating = document.getElementById("tshirt-asc-rating");
        const sortTshirtDesRating = document.getElementById("tshirt-des-rating");
        sortTshirtAscPrice.addEventListener("click", () => {
            this.sortTshirt = "ascPrice";
            reRender(ApparelScreen);
        });
        sortTshirtDesPrice.addEventListener("click", () => {
            this.sortTshirt = "desPrice";
            reRender(ApparelScreen);
        });
        sortTshirtAscRating.addEventListener("click", () => {
            this.sortTshirt = "ascRating";
            reRender(ApparelScreen);
        });
        sortTshirtDesRating.addEventListener("click", () => {
            this.sortTshirt = "desRating";
            reRender(ApparelScreen);
        });

        const sortJeanAscPrice = document.getElementById("jean-asc-price");
        const sortJeanDesPrice = document.getElementById("jean-des-price");
        const sortJeanAscRating = document.getElementById("jean-asc-rating");
        const sortJeanDesRating = document.getElementById("jean-des-rating");
        sortJeanAscPrice.addEventListener("click", () => {
            this.sortJean = "ascPrice";
            reRender(ApparelScreen);
        });
        sortJeanDesPrice.addEventListener("click", () => {
            this.sortJean = "desPrice";
            reRender(ApparelScreen);
        });
        sortJeanAscRating.addEventListener("click", () => {
            this.sortJean = "ascRating";
            reRender(ApparelScreen);
        });
        sortJeanDesRating.addEventListener("click", () => {
            this.sortJean = "desRating";
            reRender(ApparelScreen);
        });

        const sortJacketAscPrice = document.getElementById("jacket-asc-price");
        const sortJacketDesPrice = document.getElementById("jacket-des-price");
        const sortJacketAscRating = document.getElementById("jacket-asc-rating");
        const sortJacketDesRating = document.getElementById("jacket-des-rating");
        sortJacketAscPrice.addEventListener("click", () => {
            this.sortJacket = "ascPrice";
            reRender(ApparelScreen);
        });
        sortJacketDesPrice.addEventListener("click", () => {
            this.sortJacket = "desPrice";
            reRender(ApparelScreen);
        });
        sortJacketAscRating.addEventListener("click", () => {
            this.sortJacket = "ascRating";
            reRender(ApparelScreen);
        });
        sortJacketDesRating.addEventListener("click", () => {
            this.sortJacket = "desRating";
            reRender(ApparelScreen);
        });



    },

    render: async function() {
      // const { value } = parseRequestUrl();
      // const products = await getProductsSpring({ searchKeyword: "all" });
      // if (products.error) {
      //     return `<div class="error">${products.error}</div>`;
      // }
    const productsTshirt = await getProductsSpring("all");
    if (productsTshirt.error) { return `<div class="error">${productsTshirt.error}</div>`;}
    console.log({ productsTshirt });
    if(this.sortTshirt === "ascPrice")
        productsTshirt.sort((a, b) => a.price - b.price);
    if (this.sortTshirt === "desPrice")
        productsTshirt.sort((a, b) => b.price - a.price);
    if (this.sortTshirt === "ascRating")
        productsTshirt.sort((a, b) => a.rating - b.rating);
    if (this.sortTshirt === "desRating")
        productsTshirt.sort((a, b) => b.rating - a.rating);    



      // const { products } = data;
      // console.log(products);
    return `


<!--homescreen products sections-->
<section>
   
    <nav id="Category" class="w-full px-6 mt-20 border-t border-gray-400">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

    
        <a class="uppercase font-bold text-gray-800 text-4xl" href="/#/storetshirts">
    T-Shirts
        </a>

        <div class="dropdown">
            <span class="inline-block">
                <svg class="fill-current hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
            </span>
            <div class="dropdown-content absolute z-10 bg-blue-100 shadow-2xl hidden">
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="tshirt-asc-rating">Asc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="tshirt-des-rating">Desc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="tshirt-asc-price">Asc Price</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="tshirt-des-price">Desc Price</span>
            </div>
        </div>
    </div>
    </nav>

    
    <ul class="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-x-8 sm:gap-x-24">
        ${productsTshirt
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
</section>
    `;
    },
};
export default ApparelScreen;
