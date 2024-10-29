import React, { useState } from 'react'
import Typing from '../Other/Typing'
import contact2 from '../../images/contact2.png'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = { name, email, query };
      console.log(formData);
  
      try {
        const response = await fetch('http://localhost:5000/Contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        setResponseMessage(data.message);
        alert(`Form submitted successfully!`);

        // Reset the form fields by clearing the state
      setName('');
      setEmail('');
      setQuery('');

      } catch (error) {
        console.error('Error submitting form:', error);
        setResponseMessage('Error submitting query.');
      }
    };

  return (
    <div>
        {/* <div class="head-img">
            <img src={contact1} alt="" class="w-full h-[450px] "/>
        </div> */}

        {/* <!-- Contact Form Section --> */}
        <section class="container mx-auto py-12 grid mt-16 grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <!-- Left Side - Image or Background --> */}
            <div class="flex items-center justify-center">
                <img src={contact2} alt="Contact Image" class="rounded-lg shadow-lg"/>
            </div>

            {/* <!-- Right Side - Form --> */}
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-3xl font-bold text-blue-600 mb-4">
                <Typing text="CONTACT US" speed={200} />
                </h3>
                <p class="text-lg mb-6">Get in Touch with Us</p>
                
                <form action="#" onSubmit={handleSubmit} class="space-y-4">
                    <div>
                        <label for="name" class="block text-gray-700">Enter Your Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    {/* <div>
                        <label for="name" class="block text-gray-700">Enter Company Name:</label>
                        <input type="text" id="name" value={Companyname} onChange={(e) => setName(e.target.value)} placeholder="Company Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div> */}
    
                    <div>
                        <label for="email" class="block text-gray-700">Enter Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
    
                    <div>
                        <label for="query" class="block text-gray-700">Enter Your Query:</label>
                        <textarea id="query" value={query} onChange={(e) => setQuery(e.target.value)} rows="5" placeholder="Enter Query in 250 Words" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
    
                    <button type="submit" class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-500">Submit</button>
            </form>

            {/* <!-- Contact Information --> */}
            <div class="mt-8">
                <h4 class="text-blue-600 font-bold text-xl">Contact Us:</h4>
                <ul class="text-gray-700 mt-4 space-y-2">
                    <li><strong>Office:</strong> Shop No. A1, Pavana Industrial Premises, MIDC Bhosari, Pune-411026</li>
                    <li><strong>Mobile:</strong> +91-9921593992</li>
                    <li><strong>Email:</strong> <a href="mailto:saisiddhitools@gmail.com" class="text-blue-600">saisiddhitools@gmail.com</a></li>
                </ul>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact;
