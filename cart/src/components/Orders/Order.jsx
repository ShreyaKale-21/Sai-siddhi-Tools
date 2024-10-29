// src/components/Login.js
import React, { useState } from "react";
import Typing from "../Other/Typing";

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
  
    // Collect form data
    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);

        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
      } else {
        alert("Failed to place the order");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error placing the order");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
      <h3 class="text-3xl font-bold text-blue-600 mb-4">
                <Typing text="ORDERS" speed={200} />
      </h3>
        <form action="#" onSubmit={handleLoginSubmit} class="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 ">Name</label>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Email</label>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Phone no</label>
            <input type="text" placeholder="Enter Phone no" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 ">Password</label>
            <input type="text" placeholder="Enter password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div> */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
