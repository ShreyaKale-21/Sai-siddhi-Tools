import React from "react";
import home2 from "../../images/home2.png";
import HomeSlider1 from "./HomeSlider1";
import m1 from '../../images/m1.png';
import m2 from '../../images/m2.png';
import m3 from '../../images/m3.png';
import m4 from '../../images/m4.png';
import m5 from '../../images/m5.png';
import m6 from '../../images/m6.png';
import Typing from "../Other/Typing";

const images1 = [
    m1, m2, m3, m1, m2, m3,m1, m2, m3,m1, m2, m3,
  ];

  const images2 = [
    m4, m5, m6, m4, m5, m6, m4, m5, m6,m4, m5, m6,
  ];

const Home = () => {
    return (
    <div>
    <content class ="">
        {/* <!-- Heading --> */}
        <div class="heading text-4xl text-blue-600 mt-24 ml-24 font-bold">
            <Typing text="WHAT WE DO" speed={200} />
        </div>
        {/* <!-- Paragraph Content --> */}
        <p class="text-lg mt-3 mb-1 ml-24 ">
            Sai Siddhi Tools brings extensive experience in advanced mechanical
            engineering spanning across industry services that facilitate:
        </p>
        {/* <!-- List of Services --> */}
        <ul class="text-lg ml-32 mb-3 list-none">
            <li class="mb-2 ">Complex designs and prototyping</li>
            <li class="mb-2 " >Product development</li>
            <li class="mb-2 ">Virtual and physical product validation</li>
            <li class="mb-2 ">Process digitization</li>
            <li class="font-normal">PLM and Manufacturing process automation</li>
        </ul>
        {/* <!-- Footer Image --> */}
        <div class="foot-img mb-9 mx-auto">
            <div class="flex justify-center">
            <HomeSlider1 images={images1} heightClass="h-60" widthClass="w-3/4" direction="left"/>
            </div>
            <div class="flex justify-center">
            <HomeSlider1 images={images2} heightClass="h-60" widthClass="w-3/4" direction="right"/>
            {/* <img src={home2} alt="" class="w-4/5 h-[500px] mb-3 mx-auto" /> */}
            </div>
        </div>
    </content>
    </div>
    );
};

export default Home;
