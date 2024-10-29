import React, { useState } from "react";
import Typing from '../Other/Typing'

const Orders = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: 1,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to backend
    try {
      const response = await fetch("http://localhost:5000/Orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      alert(`Order placed successfully!`);

      if (response.ok) {
        // setSuccessMessage("Order placed successfully!");
        setFormData({
          name: "",
          email: "",
          product: "",
          quantity: 1,
        });
        // Optionally, reset the form or show a success message
      } else {
        setSuccessMessage("Failed to place order. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Error submitting the form. Please check your connection.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-xl mt-24 mx-auto my-12 bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-3xl font-bold text-blue-600 mb-4">
        <Typing text="ORDER NOW" speed={200} />
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="name" className="font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label htmlFor="email" className="font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <label htmlFor="product" className="font-medium text-gray-700">
          Product Name
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>
            Select a product
          </option>
          <option value="Counter Sinks">Counter Sinks</option>
          <option value="carbide-die-and-punch">Carbide die and Punch</option>
          <option value="Reamer">Reamer</option>
          <option value="Champer Tools">Champer Tools</option>
          <option value="Boring Bar">Boring Bar</option>
          <option value="dovetail-cutter">Dovetail cutter</option>
          <option value="t-slot-cutter">T-slot cutter</option>
          <option value="form-tools">Form Tools</option>
          <option value="side-face-cutter">
          <option value="Profile Cutter">Profile Cutter</option>
          <option value="Thread Mills">Thread Mills</option>
            Side face cutter Plain + Form
          </option>
        </select>

        <label htmlFor="quantity" className="font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <input
          type="submit"
          value="Place Order"
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 cursor-pointer mt-4"
        />
      </form>
    </div>
  );
};

export default Orders;
