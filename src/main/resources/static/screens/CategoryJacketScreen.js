/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import Rating from "../components/Rating.js";
import { getProducts } from "../api.js";
import { reRender } from "../utils.js";

const CategoryJacketScreen = {
    sortTshirt:"none",
    sortJean:"none",
    sortJacket:"none",

    after_render: async function() {
        const sortJacketAscPrice = document.getElementById("jacket-asc-price");
        const sortJacketDesPrice = document.getElementById("jacket-des-price");
        const sortJacketAscRating = document.getElementById("jacket-asc-rating");
        const sortJacketDesRating = document.getElementById("jacket-des-rating");
        sortJacketAscPrice.addEventListener("click", () => {
            this.sortJacket = "ascPrice";
            reRender(CategoryJacketScreen);
        });
        sortJacketDesPrice.addEventListener("click", () => {
            this.sortJacket = "desPrice";
            reRender(CategoryJacketScreen);
        });
        sortJacketAscRating.addEventListener("click", () => {
            this.sortJacket = "ascRating";
            reRender(CategoryJacketScreen);
        });
        sortJacketDesRating.addEventListener("click", () => {
            this.sortJacket = "desRating";
            reRender(CategoryJacketScreen);
        });

    },


    render: async function() {

    const productsJacket = await getProducts("jacket");
    if (productsJacket.error) {return `<div class="error">${productsJacket.error}</div>`;}
    if(this.sortJacket === "ascPrice")
        productsJacket.sort((a, b) => a.price - b.price);
    if (this.sortJacket === "desPrice")
        productsJacket.sort((a, b) => b.price - a.price);
    if (this.sortJacket === "ascRating")
        productsJacket.sort((a, b) => a.rating - b.rating);
    if (this.sortJacket === "desRating")
        productsJacket.sort((a, b) => b.rating - a.rating);  
    return `


<!--homescreen products sections-->
<section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

    <div class="carousel relative container mx-auto" style="max-width:1600px;">
    <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-top" style="background-image: url('./images/Banners/2f55d6870c14e02976728d9ff8bb43b8.jpeg');">

                <!--div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
                        <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                    </div>
                </div-->

            </div>
        </div>
      
       
    </div>
    </div>


    <nav id="Category" class="w-full top-0 px-6 mt-20 border-t border-gray-400">
    <div class="w-full container mx-auto flex items-center justify-between mt-0 px-2 py-3">

        <span class="uppercase tracking-wide font-bold text-gray-800 text-4xl ">
        Coolest jackets at unbeatable prices
        </span>

         <div class="dropdown">
            <span class="flex inline-block">
                Sort
                <svg class="fill-current hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
            </span>
            <div class="dropdown-content absolute z-10 right-8 lg:right-40 bg-blue-100 shadow-2xl hidden">
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="jacket-asc-rating">Asc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="jacket-des-rating">Desc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="jacket-asc-price">Asc Price</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200 cursor-pointer" id="jacket-des-price">Desc Price</span>
            </div>
        </div>
    </div>
    </nav>

     <div class="w-full">
    <ul class="products grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 sm:gap-x-24">
       ${productsJacket
         .map(
           (product) =>
             `
        <li class="">
        <div class="product">
    
            <a href="/#/product/${product.id}">
                <img class="hover:grow hover:shadow-lg" src="${
                  product.image
                }" alt="${product.name}" />
            </a>
            
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
export default CategoryJacketScreen;
