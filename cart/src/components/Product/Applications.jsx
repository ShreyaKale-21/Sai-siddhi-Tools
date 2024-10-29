import React from 'react'
import Railways from '../../images/Railways.png'
import Aerospace from '../../images/Aerospace.png'
import Automotive from '../../images/Automotive.png'
import Defence from '../../images/def.png'
import Typing from '../Other/Typing'

export default function Applications() {
  return (
    <div>
        <section class="applications bg-white pt-2 mt-14">
  <div id="gradient" class="bg-gray-900 bg-opacity-40">
    <h2 class="text-4xl text-blue-600 font-bold px-5 py-3 ml-20">
    <Typing text="APPLICATIONS" speed={200} />
    </h2>
    <p class=" text-lg mx-20 px-5 pb-7">Sai Siddhi Tools produces tools with a wide range of geometries to achieve excellent machining quality on all types of components such as aluminum, cast iron, SG iron, alloy steel, forged steel, stainless steel, titanium, non-ferrous & others.</p>
  </div>

  <div class="application-grid  flex-wrap gap-10 justify-center mx-20 my-7">
    <div class="category flex-1 min-w-[240px]">
      <h3 class="text-3xl font-semibold text-blue-600 ml-28">Railways</h3>
      <img src={Railways} alt="Railways Image 1" class="w-5/6 h-60 mb-3 mx-auto"/>
    </div>

    <div class="category flex-1 min-w-[240px]">
      <h3 class="text-3xl font-semibold text-blue-600 ml-28">Automotive</h3>
      <img src={Automotive} alt="Automotive Image 1" class="w-5/6 h-60 mb-3 mx-auto"/>
    </div>

    <div class="category flex-1 min-w-[240px]">
      <h3 class="text-3xl font-semibold text-blue-600 ml-28">Defence</h3>
      <img src={Defence} alt="Defence Image 1" class="w-5/6 h-60 mb-3 mx-auto "/>
    </div>

    <div class="category flex-1 min-w-[240px]">
      <h3 class="text-3xl font-semibold text-blue-600 ml-28">Aerospace</h3>
      <img src={Aerospace} alt="Aerospace Image 1" class="w-5/6 h-60 mb-3 mx-auto"/> </div>
  </div>
</section>

    </div>
  )
}
