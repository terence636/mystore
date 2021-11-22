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
    </ul>`,
}

export default HomeCategoryScreen;
