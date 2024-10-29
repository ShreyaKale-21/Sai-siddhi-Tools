import React from "react";
import Typing from "../Other/Typing";
import FlipImg from "./FlipImg";
// import AddtoCart from "./AddtoCart";

import o1 from "../../images/o1.png";
import o2 from "../../images/o2.png";
import o3 from "../../images/o3.png";
import o4 from "../../images/o4.png";
import o5 from "../../images/o5.png";
import o6 from "../../images/o6.png";
import o7 from "../../images/o7.png";
import o8 from "../../images/o8.png";
import o9 from "../../images/o9.png";
import o10 from "../../images/o10.png";
import o11 from "../../images/o11.png";
import o12 from "../../images/o12.png";
import content from "../../images/Pro2.2.png";

const products = [
	{ name: "Counter Sinks", image: o1, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Carbide die & Punch", image: o2, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Reamer", image: o3, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Champer Tools", image: o4, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Boring Bar", image: o5, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Dovetail cutter", image: o6, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "T-Slot cutter", image: o7, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Form tools", image: o8, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Side face cutter Plain + Form", image: o9, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Profile Cutter", image: o10, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Thread Mills", image: o11, description: "Material : Steel , Size : 3mm, 5mm" },
	{ name: "Lugged Tools", image: o12, description: "Material : Steel , Size : 3mm, 5mm" },
  ];

const Product2 = () => {
	return (
    	<div>
      		{/* <div class="head-img">
        		<img src={hero} alt="" class="w-full h-[450px] object-cover" />
      		</div> */}

	      	<section class="content mt-24 mb-10">
        		<h2 class="text-4xl text-blue-600 font-bold text-center my-4"> 
					<Typing text="OUR PRODUCTS" speed={200} />	
				</h2>
        		
				<div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-y-10 w-3/5">
			        {products.map((product, index) => (
			        	<div key={index} className="flex flex-col items-center  pr-[-90px]">
			            <FlipImg 
		                img={product.image} 
        		        title={product.name} 
                		description={product.description} />
			            <p className="text-center text-lg font-body font-light">{product.name}</p>
			          	</div>
			        ))}
			    </div>
      		</section>
    	</div>
  	);
}

export default Product2;