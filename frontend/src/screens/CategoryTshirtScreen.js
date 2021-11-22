/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import Rating from "../components/Rating.js";
import { getProductsSpring } from "../api_spring.js";
import { reRender } from "../utils.js";

// import data from '../data.js'

const CategoryTshirtScreen = {
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
            reRender(CategoryTshirtScreen);
        });
        sortTshirtDesPrice.addEventListener("click", () => {
            this.sortTshirt = "desPrice";
            reRender(CategoryTshirtScreen);
        });
        sortTshirtAscRating.addEventListener("click", () => {
            this.sortTshirt = "ascRating";
            reRender(CategoryTshirtScreen);
        });
        sortTshirtDesRating.addEventListener("click", () => {
            this.sortTshirt = "desRating";
            reRender(CategoryTshirtScreen);
        });

    },

    render: async function() {
      // const { value } = parseRequestUrl();
      // const products = await getProductsSpring({ searchKeyword: "all" });
      // if (products.error) {
      //     return `<div class="error">${products.error}</div>`;
      // }
    const productsTshirt = await getProductsSpring("tshirt");
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
<section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

    <div class="carousel relative container mx-auto" style="max-width:1600px;">
    <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');">

                <div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
                        <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                    </div>
                </div>

            </div>
        </div>
        <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height:50vh;">
            <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80');">

                <div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                        <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                    </div>
                </div>

            </div>
        </div>
        <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom" style="background-image: url('https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');">

                <div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">Brown and blue hardbound book</p>
                        <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                    </div>
                </div>

            </div>
        </div>
        <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
        
    </div>
    </div>



    <nav id="Category" class="w-full px-6 mt-20 border-t border-gray-400">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

        <span class="uppercase font-bold text-gray-800 text-4xl" >
        Chill Out Relaxed Fit T-Shirt
        </span>

        <div class="dropdown">
            <span class="inline-block">
                <svg class="fill-current hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
            </span>
            <div class="dropdown-content absolute z-10 right-8 bg-blue-100 shadow-2xl hidden">
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
export default CategoryTshirtScreen;
