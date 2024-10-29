import React from 'react'
import Typing from '../Other/Typing'
import pro2 from '../../images/pro2.jpg'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div>
        {/* <section class="hero">
    <img src={pro1} alt="" class="w-full h-[450px] object-cover"/>
</section> */}

<h2 class="text-4xl text-blue-600 font-bold text-center mt-24 mb-3">
    <Typing text="OUR PRODUCTS" speed={200} />
</h2>

<section class="products flex px-5 mx-20 text-lg ">
    <div class="product">
        <p class="mr-7">We are Manufacturer, Supplier, Exporter, Services of Brazed Carbide, and our setup is situated in Pune, Maharashtra, India.</p>
        <ul class="list-disc ml-16 mt-2">
            <li>Milling Cutter</li>
            <li>Counter Sinks</li>
            <li>Center Drill</li>
            <li>End Mill</li>
            <li>Reamer</li>
            <li>Drill</li>
            <li class="mb-3">Form Tools</li>
        </ul>
        <Link to='/Product2' class="text-blue-600 underline">more products...</Link>
    </div>
    <img src={pro2} alt="Tools" class="product-image w-full max-w-[450px] h-auto ml-20 "/>
</section>

<section class="applications bg-white p-5 mx-20  text-lg">
    <h2 class="text-blue-600 font-semibold text-4xl">Applications</h2>
    <p class=" my-4">Sai Siddhi Tools produced tools with a wide range of geometries to achieve excellent machining quality on all types of components such as aluminum, cast iron, SG iron, alloy steel, forged steel, stainless steel, titanium, non-ferrous & others.</p>
    <Link to="/Applications" class="text-blue-600 underline">more applications...</Link>
</section>

    </div>
  )
}
