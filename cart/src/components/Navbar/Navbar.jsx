import React from 'react';
import FlipLogo from '../Other/FlipLogo';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
    <div>
      	<nav className='flex justify-between items-center h-20 px-6 ml-6 '>
	      	<div className='flex items-center'>
	        	{/* Logo */}
	          	<img src={logo} alt="Logo" className="hover:animate-spin h-20 ml-7 w-20 mr-4 object-contain"/>
	        	<p className=' text-orange-600 text-4xl font-semibold pr-40 '>
					<FlipLogo text="Sai Siddhi Tools" flipDuration={500} />
				</p>
	        </div>
			
			{/* Navbar elements */}
	        <ul className='list-none flex space-x-14 pr-16 '>
	        	<li><Link to="/" className="text-blue-600 h-32 text-xl font-bold hover:shadow-xl rounded-md hover:shadow-blue-500/50 transition-shadow">Home</Link></li>
	        	<li><Link to="/about" className="text-blue-600  text-xl font-bold  hover:shadow-xl rounded-md hover:shadow-blue-500/50 transition-shadow">About</Link></li>
	        	<li><Link to="/Products" className=" text-blue-600 text-xl font-bold  hover:shadow-xl rounded-md hover:shadow-blue-500/50 transition-shadow">Product</Link></li>
	        	<li><Link to="/Cart" className=" text-blue-600 text-xl font-bold  hover:shadow-xl rounded-md hover:shadow-blue-500/50 transition-shadow">Cart </Link></li>
	        	<li><Link to="/Contact" className=" text-blue-600 blue text-xl font-bold  hover:shadow-xl rounded-md hover:shadow-blue-500/50 transition-shadow">Contact Us</Link></li>
	        	<li><Link to="/Order" className=" text-blue-600 blue text-xl font-bold  hover:shadow-xl rounded-md hover:shadow-blue-500/50 transition-shadow">Orders</Link></li>
	        </ul>
      	</nav>
    </div>
  )
}

export default Navbar;
