import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Product/Products';
import Product2 from './components/Product/Product2';
import Applications from './components/Product/Applications';
import Contact from './components/Contact/Contact';
import Footer from './components/Navbar/Footer';
import ImageSlider from './components/Other/ImageSlider';
import h1img from './images/home.png';
import a1img from './images/about1.png';
import p1img from './images/product1.png';
import p2img from './images/product2.png';
import c1img from './images/cont1.png';


import Order from './components/Orders/Order';
// import Orders from './components/Orders/Orders';
// import AddtoCart from './components/Orders/AddtoCart';
import Cart from "./components/Orders/Cart";
import { CartProvider } from "./components/Orders/CartContext";

// import Sam from './components/Sam';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

function App() {
	const images = [
		h1img, a1img, p1img, p2img, c1img,
	];

  	return (
    <>
	
	<CartProvider>
    <Router>
    	<Navbar/><div className="App">
      <ImageSlider images={images} interval={3000}/>
	  {/* <FlipImg img ={p1img} title="Cardibe" description={'5 mm'}/> */}
	  	{/* <Sam/> */}
    </div>
        	<Routes>
    	      	<Route path="/" element={<Home/>}/>    		
    	      	<Route path="/About" element={<About/>}/>    		
			    <Route path="/Products" element={<Products />} />
			    {/* <Route path="/Orders" element={<Orders />} /> */}
	          	<Route path="/Product2" element={<Product2/>}/>
	          	<Route path="/Applications" element={<Applications/>}/>
	          	<Route path="/Contact" element={<Contact/>}/>
	          	<Route path="/Cart" element={<Cart/>}/>
	          	<Route path="/Order" element={<Order/>}/>

				
        	</Routes>

      	{/* <Home/> */}
      	<Footer/>
      	{/* <Product2/> */}
    </Router>
	</CartProvider>
    </>
  );
}

export default App;
