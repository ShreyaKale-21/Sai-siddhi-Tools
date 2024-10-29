import React from 'react'
import ig from '../../images/ig-logo2.png'
import wp from '../../images/WhatsApp_icon.png'
import x from '../../images/x-logo2.png'

const Footer = () => {
  return (
    <div>
      <footer class="bg-black text-white py-5">
  <div class="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
    <p class="text-base">
      Copyright and terms | 
      <a href="#" class="hover:underline"> Privacy</a> | 
      <a href="#" class="hover:underline"> Site Map</a> | 
      <a href="saisiddhitools@gmail.com" class="hover:underline"> saisiddhitools@gmail.com</a>
    </p>
    <div class="social-media flex">
      <a href="#" class="mx-3">
        <img src={ig} alt="Instagram" class="w-9 h-9"/>
      </a>
      <a href="#" class="mx-3">
        <img src={wp} alt="WhatsApp" class="w-9 h-9"/>
      </a>
      <a href="#" class="mx-3">
        <img src={x} alt="Twitter" class="w-9 h-9"/>
      </a>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
