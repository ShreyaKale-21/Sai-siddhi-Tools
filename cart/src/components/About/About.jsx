import React from "react";
import Slidein from './Slidein'
import Typing from '../Other/Typing'
// import about from "../images/about.png";

export default function About() {
    return (
    <div>
        {/* <!-- Hero Section -->
        <div class="head-img">
            <img src={about} alt="" class="w-full h-[450px] " />
        </div> */}

        {/* <!-- Who We Are Section --> */}
        <section class="bg-white py-12 mt-14 mx-24">
            <div class="container mx-auto ">
                <h3 class="text-blue-600 text-4xl font-bold mb-4 ">
                <Typing text="WHO WE ARE" speed={200} />
                </h3>
                <p class=" mx-auto mb-2 text-lg text-leht whitespace-pre-line">
                    Since 2012 <strong>SAI SIDDHI TOOLS</strong> is the leading manufacturer & supplier 
                    of carbide cutting tools, under the dynamic leadership of <strong>Mr. Milind Waghulade</strong> &{" "} 
                    <strong>Mr. Bhagchand Patil</strong>. Because of consumer acceptance of our quality, 
                    we keep adding solid carbide drills, solid carbide end mills, ball nose end mills, and carbide 
                    cutting tools to our carbide tools range.<br/>

                    We provide the right tool, at the right price, on time every time. Our precision cutting tools are 
                    manufactured with perfection, utilizing in-house production setup and tough checking processes.
                    
                    We are cutting tool manufacturer & supplier to manufacturing companies in all major sectors like 
                    Automobiles, Engineering, Power, Forging, Aerospace & Forming Industry. <br/>Sai Siddhi Tools line of 
                    products is developed based on close analysis of the cutting tool process and its environment. This 
                    helps our client both small and big manufacturer their products with minimum defects and maximum 
                    efficiency.

                </p>
                    
            </div>
        </section>

        {/* <!-- Vision & Mission Section --> */}
        <section class="bg-gray-50 py-8">
            <Slidein />
        </section>
    </div>
  );
}
