/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import Rating from "../components/Rating.js";
import { getProductsSpring } from "../api_spring.js";
import { reRender } from "../utils.js";

// import data from '../data.js'

const HomeScreen = {
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
            reRender(HomeScreen);
        });
        sortTshirtDesPrice.addEventListener("click", () => {
            this.sortTshirt = "desPrice";
            reRender(HomeScreen);
        });
        sortTshirtAscRating.addEventListener("click", () => {
            this.sortTshirt = "ascRating";
            reRender(HomeScreen);
        });
        sortTshirtDesRating.addEventListener("click", () => {
            this.sortTshirt = "desRating";
            reRender(HomeScreen);
        });

        const sortJeanAscPrice = document.getElementById("jean-asc-price");
        const sortJeanDesPrice = document.getElementById("jean-des-price");
        const sortJeanAscRating = document.getElementById("jean-asc-rating");
        const sortJeanDesRating = document.getElementById("jean-des-rating");
        sortJeanAscPrice.addEventListener("click", () => {
            this.sortJean = "ascPrice";
            reRender(HomeScreen);
        });
        sortJeanDesPrice.addEventListener("click", () => {
            this.sortJean = "desPrice";
            reRender(HomeScreen);
        });
        sortJeanAscRating.addEventListener("click", () => {
            this.sortJean = "ascRating";
            reRender(HomeScreen);
        });
        sortJeanDesRating.addEventListener("click", () => {
            this.sortJean = "desRating";
            reRender(HomeScreen);
        });

        const sortJacketAscPrice = document.getElementById("jacket-asc-price");
        const sortJacketDesPrice = document.getElementById("jacket-des-price");
        const sortJacketAscRating = document.getElementById("jacket-asc-rating");
        const sortJacketDesRating = document.getElementById("jacket-des-rating");
        sortJacketAscPrice.addEventListener("click", () => {
            this.sortJacket = "ascPrice";
            reRender(HomeScreen);
        });
        sortJacketDesPrice.addEventListener("click", () => {
            this.sortJacket = "desPrice";
            reRender(HomeScreen);
        });
        sortJacketAscRating.addEventListener("click", () => {
            this.sortJacket = "ascRating";
            reRender(HomeScreen);
        });
        sortJacketDesRating.addEventListener("click", () => {
            this.sortJacket = "desRating";
            reRender(HomeScreen);
        });



    },

    render: async function() {
      // const { value } = parseRequestUrl();
      // const products = await getProductsSpring({ searchKeyword: "all" });
      // if (products.error) {
      //     return `<div class="error">${products.error}</div>`;
      // }
    const productsTshirt = await getProductsSpring({searchKeyword: "tshirt",});
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


    const productsJean = await getProductsSpring({ searchKeyword: "jean",});
    if (productsJean.error) { return `<div class="error">${productsJean.error}</div>`;}
    console.log({ productsJean });
    if(this.sortJean === "ascPrice")
        productsJean.sort((a, b) => a.price - b.price);
    if (this.sortJean === "desPrice")
        productsJean.sort((a, b) => b.price - a.price);
    if (this.sortJean === "ascRating")
        productsJean.sort((a, b) => a.rating - b.rating);
    if (this.sortJean === "desRating")
        productsJean.sort((a, b) => b.rating - a.rating);  

    const productsJacket = await getProductsSpring({searchKeyword: "jacket",});
    if (productsJacket.error) {return `<div class="error">${productsJacket.error}</div>`;}
    console.log({ productsJacket });
    if(this.sortJacket === "ascPrice")
        productsJacket.sort((a, b) => a.price - b.price);
    if (this.sortJacket === "desPrice")
        productsJacket.sort((a, b) => b.price - a.price);
    if (this.sortJacket === "ascRating")
        productsJacket.sort((a, b) => a.rating - b.rating);
    if (this.sortJacket === "desRating")
        productsJacket.sort((a, b) => b.rating - a.rating);  

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
    T-Shirts
        </span>

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

    <nav id="Category" class="w-full z-30 top-0 px-6 mt-20 border-t border-gray-400">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

        <span class="uppercase tracking-wide font-bold text-gray-800 text-4xl ">
    Jeans
        </span>

    <div class="dropdown">
            <span class="inline-block">
                <svg class="fill-current hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
            </span>
            <div class="dropdown-content absolute z-10 bg-blue-100 shadow-2xl hidden">
                <span class="block text-left px-4 py-4 hover:bg-blue-200" id="jean-asc-rating">Asc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200" id="jean-des-rating">Desc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200" id="jean-asc-price">Asc Price</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200" id="jean-des-price">Desc Price</span>
            </div>
        </div>
    </div>
    </nav>

     <ul class="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-x-8 sm:gap-x-24">
          ${productsJean
            .map(
              (product) =>
                `
        <li>
        <div class="product">
    
                <div class="flex justify-center items-center">
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

        <nav id="Category" class="w-full z-30 top-0 px-6 mt-20 border-t border-gray-400">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

        <span class="uppercase tracking-wide font-bold text-gray-800 text-4xl ">
    Jacket
        </span>

         <div class="dropdown">
            <span class="inline-block">
                <svg class="fill-current hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
            </span>
            <div class="dropdown-content absolute z-10 bg-blue-100 shadow-2xl hidden">
                <span class="block text-left px-4 py-4 hover:bg-blue-200 hover:cursor-pointer" id="jacket-asc-rating">Asc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200" id="jacket-des-rating">Desc Rating</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200" id="jacket-asc-price">Asc Price</span>
                <span class="block text-left px-4 py-4 hover:bg-blue-200" id="jacket-des-price">Desc Price</span>
            </div>
        </div>
    </div>
    </nav>

    <ul class="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-x-8 sm:gap-x-24">
       ${productsJacket
         .map(
           (product) =>
             `
        <li>
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

        <div class="bg-white pt-8" id="aboutus">
            <div class="container pt-8 px-6 mx-auto border-t border-gray-400">
                <h3 class="font-bold text-gray-900">About us</h3>
        
                <p class="mt-8 mb-8">GenSGStore is one of the leading one-stop e-commerce site that allows you to purchase all your
                    fashion clothes at the comfort of your home. Our products are of very good materials and is value for money. We offer 
                    free delivery for minimum purchases of $20. We also offer membership with 15% discount. We have been selling 
                    fashion clothes online for the past 20 years and have receive plenty of customers feedback for our product and services.
                    <br>
                        
                <p class="mb-8">As a team we view sustainability as an ongoing effort and evolution. We continuously ask
                    ‘How can we do better?’ so the comfort you find in the softness of our fabrics is equal to the satisfaction
                    you feel supporting a brand that takes care of its People. We sweat the small stuff so you don’t have to.
                    Our loyal long-time customers love the softness and comfort of our products, and feel good about the ways we
                    support and empower our employees and production partners.</p>

                <p class="mb-8">GenSGStore has worked closely with the same production team in China for over 15 years,
                    processing renewable and selectively-harvested organic bamboo into fabric in a closed-loop viscose process.
                    We use low-impact AZO- free dyes to create a finished product that is crazy soft, gentle on the earth, and
                    safe for everyone involved. From the production partners throughout our supply chain, to our crew here at
                    GenSGStore Headquarters, to the end consumer, YOU.</p>
        
                <p class="mb-8">GenSGStore was formed in 2001 by 3 entreprenuers. They ran a small business from their
                    home, selling T-shirts. The business grew faster than they could have ever imagined.
                    As the idea of a silk sleeping bag caught on, they began manufacturing “travel” clothing from the silk as
                    well. And so the first apparel line was launched, soon followed by silk bedding. The company continued to
                    grow.
                    Then, at a fabric trade show in 2005, they met a young man who had a vision of his own. A new technology was
                    emerging to convert wild-growing bamboo into incredibly soft, sumptuous fabric with a fraction of organic
                    cotton’s environmental footprint.
                    With the addition of bamboo clothing and bedding, the company experienced yet another surge in growth. 
                    Now in its 20th year, ownership has transitioned to a pair of longtime employees with a vision to lead 
                    GenSGStore into its fullest expression as a sustainable clothing, bedding, and nightwear brand with broad
                    multigenerational appeal. GenSGStore is committed to fair trade practices from source to shelf, and still 
                    thrilled each day by the adventure that lies ahead!</p>

                    <!--img src="https://www.volusion.com/blog/content/images/2017/04/Getting-Started-with-Volusion-How-to-Build-Your-About-Us-Page.jpg" height="70%"  width= "40%"-->
            </div>
        
            <div class="container mx-auto bg-white pt-8 border-t border-gray-400">
                <div class="container flex px-3 pt-8 ">
                    <div class="w-full mx-auto flex justify-between flex-wrap">
                        <div class="flex w-1/2">
                            <div class="px-3 md:px-0">
                                <h3 class="font-bold text-gray-900">Contact us</h3>
                                <p class="pt-4">
                                    GenSGStore Pte. Ltd.<br>
                                    46, Marina Bay Sands<br>
                                    #17-356<br>
                                    Singapore 321046<br>
                                    Tel: 6281 4579<br>
                                </p>
                                <p class="pt-8">
                                    <h3 class="pb-4 font-bold text-gray-900">Operating Hours</h3>
                                    Mondays to Fridays (exclude Public Holidays)<br>
                                    9am to 6pm<br>
                                </p>
                            </div>
                        </div>
                        <div class="min-w-sm pt-8 sm:pt-0 ">
                            <div class="px-3 md:px-0">
                                <h3 class="font-bold text-gray-900">Visit us @ FB</h3>
                                <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">GenSGStore@facebook.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


     </div>
     </section>
    `;
    },
};
export default HomeScreen;
