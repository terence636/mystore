// import Rating from "../components/Rating.js";
// import { getProductsSpring } from "../api_spring.js";
// import { parseRequestUrl } from "../utils.js";

// import data from '../data.js'

const HomeCategoryScreen = {
    after_render: () => {},

    render: async () => 
        // const { value } = parseRequestUrl();
        // const products = await getProductsSpring({ searchKeyword: value });
        // if (products.error) {
        //     return `<div class="error">${products.error}</div>`;
        // }


    // const { productsTest } = data;
    // console.log(products);
    `


    
    <ul class="products">

    <!--homescreen products sections-->
    <section class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

    <div class="carousel relative container mx-auto" style="max-width:1600px;">
    <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url('./images/Banners/CarouselBanner1.png');">

                <!--div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
                        <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#/store">view product</a>
                    </div>
                </div-->

            </div>
        </div>
        <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height:50vh;">
            <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-top" style="background-image: url('./images/Banners/CarouselBanner2.png');">

                <!--div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                        <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="/#/store">view product</a>
                    </div>
                </div-->

            </div>
        </div>
        <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style="background-image: url('./images/Banners/CarouselBanner3.jpeg');">

                <!--div class="container mx-auto">
                    <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                        <p class="text-black text-2xl my-4">Brown and blue hardbound book</p>
                        <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="/#/store">view product</a>
                    </div>
                </div-->

            </div>
        </div>
        <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
        
    </div>
    </div>

    <div class="prod_category">
        <!-- Jackets category-->
        <div class="bkgd_jackets"></div>
        <a href="/#/storejackets">
        <div class="img_jackets hover:grow hover:shadow-lg"></div>
            <span class="title_jacket">Jackets</span>
            <span class="copy_jacket">Impress at work by ordering these business style jackets that are smart, comfortable and convenient. 
            You can enjoy being warm-hearted in the light color jackets, you can take the men puff jackets when you are in need of wind protection, 
            you can take the jacket front vest when you have to walk in the cold place, the chunky men's sweaters are convenient to wear with any outfit.
            </span></a>

        <!-- Tshirts category-->
        <div class="bkgd_tshirts"></div>
        <a href="/#/storetshirts">
        <div class="img_tshirts hover:grow hover:shadow-lg"></div>
        <span class="title_tshirts">T-shirts</span>
            <span class="copy_tshirts"> Step up your style and impress your friends with this fashionable Casual Style Fashion Mens T-Shirt. 
            Comfortable and soft, this cotton t-shirt is bound to make you look like the king of the streets. Coming in a selection of colors, 
            it will be easy to match with anything in your wardrobe.
            </span></a>

        <!-- Jeans category -->
        <div class="bkgd_jeans"></div> 
        <a href="/#/storejeans">
        <div class="img_jeans hover:grow hover:shadow-lg"></div>
            <span class="title_jeans">Jeans</span>
            <span class="copy_jeans">Combine the comfort of your favorite everyday jeans with performance denim. Mens fashion jeans made with 
            breathable stretch denim come in premium treated denim to wash, light reflecting denim for nighttime visibility, and hidden security pocket. 
            Whether you're chilling at home or out on town, these stylish jeans are comfortable enough to wear all day long.
            </span></a>
    </div>

           <br> <div class="container mx-auto bg-white pt-8 border-t border-gray-400">
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
    </ul>`,
}

export default HomeCategoryScreen;
